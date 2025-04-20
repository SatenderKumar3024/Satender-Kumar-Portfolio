import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Satender Kumar - Cybersecurity Analyst Portfolio",
  description:
    "Portfolio of Satender Kumar, a Cybersecurity Analyst specializing in cloud security, SIEM, IAM, and incident response.",
  keywords: "cybersecurity, cloud security, IAM, SIEM, Splunk, Microsoft Sentinel, AWS, Azure, Zero Trust",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval' https://cdn.jsdelivr.net https://api.emailjs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com; connect-src 'self' https://api.emailjs.com;"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
