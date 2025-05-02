import { type NextRequest, NextResponse } from "next/server"

// Define a rate limit window of 60 seconds
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds
// Maximum number of requests per window
const MAX_REQUESTS_PER_WINDOW = 20 // Increased from 5 to allow for testing tools

// Store IP addresses and their request timestamps
const ipRequestMap = new Map<string, number[]>()

// Bot and tool detection helper
function isBot(userAgent: string): boolean {
  const botPattern =
    /bot|crawler|spider|pagespeed|lighthouse|headless|prerender|screenshot|python|curl|wget|jsdom|axios|got|superagent|googlebot|bingbot|yandex|baidu|GTmetrix|pingdom|chrome-lighthouse/i
  return botPattern.test(userAgent)
}

export function middleware(request: NextRequest) {
  // Check if the request is for the protected PDF
  if (request.nextUrl.pathname.startsWith("/assets/Satender_Kumar_Portfolio.pdf")) {
    // Get the referer header
    const referer = request.headers.get("referer")

    // Check if there's a valid session in cookies
    const hasValidSession = request.cookies.has("portfolio_access")

    // If no referer or no valid session, redirect to the homepage
    if (!referer || !referer.includes(request.nextUrl.origin) || !hasValidSession) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  // Get the pathname and user agent
  const pathname = request.nextUrl.pathname
  const userAgent = request.headers.get("user-agent") || ""
  const isTestingBot = isBot(userAgent)

  // Clone the request headers
  const requestHeaders = new Headers(request.headers)

  // Add security headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Add security headers
  response.headers.set("X-DNS-Prefetch-Control", "on")
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()")
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin")

  // Add Content-Security-Policy header
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://formspree.io https://www.google-analytics.com https://vitals.vercel-insights.com; frame-src 'self' https://www.google.com; object-src 'none';",
  )

  // Add cache control for static assets
  if (
    pathname.includes(".webp") ||
    pathname.includes(".avif") ||
    pathname.includes(".jpg") ||
    pathname.includes(".jpeg") ||
    pathname.includes(".png") ||
    pathname.includes(".gif") ||
    pathname.includes(".svg") ||
    pathname.includes(".css") ||
    pathname.includes(".js")
  ) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }
  // Set cache policy for HTML and other non-static assets
  else {
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400")
  }

  // Skip rate limiting for bots and testing tools
  if (!isTestingBot && (request.method === "POST" || request.nextUrl.pathname.startsWith("/api/"))) {
    const ip = request.ip || "unknown"
    const now = Date.now()

    // Get existing requests for this IP
    const requestTimestamps = ipRequestMap.get(ip) || []

    // Filter out requests outside the current window
    const recentRequests = requestTimestamps.filter((timestamp) => timestamp > now - RATE_LIMIT_WINDOW)

    // Check if the IP has exceeded the rate limit
    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Too many requests, please try again later.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
          },
        },
      )
    }

    // Add current request timestamp and update the map
    recentRequests.push(now)
    ipRequestMap.set(ip, recentRequests)
  }

  return response
}

export const config = {
  matcher: [
    "/assets/Satender_Kumar_Portfolio.pdf",
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * But include API routes
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/api/:path*",
  ],
}
