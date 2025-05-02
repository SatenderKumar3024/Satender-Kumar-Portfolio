import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { Toaster } from "@/components/ui/toaster"
import CookieConsentBanner from "@/components/cookie-consent-banner"
import SmoothScroll from "@/components/smooth-scroll"
import ScrollProgressIndicator from "@/components/scroll-progress-indicator"
import Script from "next/script"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
})

export const metadata = {
  title: "Satender Kumar | Information Security Portfolio",
  description:
    "Cybersecurity portfolio showcasing Cloud Security, SIEM, Threat Detection, IAM, and Compliance expertise with real-world impact.",
  metadataBase: new URL("https://www.satenderkumar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Satender Kumar | Information Security Portfolio",
    description:
      "Explore a hands-on portfolio of real-world security implementations, risk reduction, and threat detection strategies.",
    url: "https://www.satenderkumar.com",
    siteName: "Satender Kumar",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Satender Kumar - Cybersecurity Professional",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satender Kumar | Information Security Portfolio",
    description: "Cloud Security, SIEM, IAM, and Risk & Compliance expertise.",
    images: ["/images/og-image.png"],
    creator: "@SatendeK2430",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_code", // Replace with your actual verification code
  },
  applicationName: "Satender Kumar Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/secure-cloud-network.png" as="image" />
        <link rel="preload" href="/interconnected-security-mesh.png" as="image" />
        <link rel="preload" href="/cyber-shield-analysis.png" as="image" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://formspree.io" />

        {/* Delayed loading of non-critical scripts */}
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
            <ScrollProgressIndicator />
            <Toaster />
            <CookieConsentBanner />
            <SmoothScroll />
          </div>
        </ThemeProvider>

        {/* EmailJS script */}
        <Script
          id="emailjs-sdk"
          strategy="lazyOnload"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />

        {/* Analytics script - load after page content */}
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          data-cookie-consent="analytics"
        />
        <Script id="google-analytics-config" strategy="lazyOnload" data-cookie-consent="analytics">
          {`
            // Only initialize analytics if user has consented
            const hasConsent = localStorage.getItem("cookiePreferences") ? 
              JSON.parse(localStorage.getItem("cookiePreferences")).analytics : false;
            
            if (hasConsent) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLACEHOLDER', {
                page_path: window.location.pathname,
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
