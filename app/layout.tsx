import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Satender Kumar | Information Security Portfolio",
  description:
    "Cybersecurity portfolio showcasing Cloud Security, SIEM, Threat Detection, IAM, and Compliance expertise with real-world impact.",
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
  },
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
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
