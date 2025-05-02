import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export default function SecurityPolicy() {
  return (
    <div className="bg-[#0D1B2A] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-[#00BFA6] hover:text-[#00BFA6]/80 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex items-center mb-8">
          <Shield className="h-8 w-8 text-[#00BFA6] mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-[#E0E1DD]">Security Policy</h1>
        </div>

        <div className="prose prose-invert max-w-none text-[#E0E1DD]/90">
          <p className="text-lg mb-6">Last Updated: May 1, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD]">Security Commitment</h2>
            <p>
              As a cybersecurity professional, I take the security of my website and your data seriously. This security
              policy outlines the measures I've implemented to protect my website and your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD]">Security Measures</h2>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li>
                <strong>HTTPS Encryption:</strong> All communications between your browser and this website are
                encrypted using TLS 1.3. I enforce HTTPS across the entire site and use HTTP Strict Transport Security
                (HSTS) to prevent downgrade attacks.
              </li>
              <li>
                <strong>Content Security Policy (CSP):</strong> I implement a strict Content Security Policy to mitigate
                Cross-Site Scripting (XSS) attacks by controlling which resources can be loaded.
              </li>
              <li>
                <strong>Security Headers:</strong> I use modern security headers including X-Content-Type-Options,
                X-Frame-Options, Referrer-Policy, and Permissions-Policy to protect against various web vulnerabilities.
              </li>
              <li>
                <strong>Form Protection:</strong> All forms on this website are protected with reCAPTCHA to prevent spam
                and abuse. Additionally, all user inputs are sanitized and validated.
              </li>
              <li>
                <strong>Rate Limiting:</strong> I implement rate limiting on form submissions and API endpoints to
                prevent abuse and denial-of-service attacks.
              </li>
              <li>
                <strong>Regular Updates:</strong> I keep all software dependencies up-to-date to address known
                vulnerabilities.
              </li>
              <li>
                <strong>Error Handling:</strong> Custom error pages are implemented to prevent exposure of sensitive
                information in error messages.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD]">Vulnerability Disclosure</h2>
            <p>
              I appreciate the work of security researchers in improving the security of websites. If you discover a
              security vulnerability on my website, I encourage you to disclose it responsibly.
            </p>
            <p className="mt-3">
              To report a security vulnerability, please email me at <strong>satenderkumar.analyst@gmail.com</strong>{" "}
              with the subject "Security Vulnerability Report". Please include:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-3 space-y-2">
              <li>A description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Potential impact of the vulnerability</li>
              <li>Any suggestions for mitigation</li>
            </ul>
            <p>I commit to:</p>
            <ul className="list-disc pl-6 mb-4 mt-3 space-y-2">
              <li>Acknowledging receipt of your vulnerability report within 48 hours</li>
              <li>Providing an estimated timeframe for addressing the vulnerability</li>
              <li>Notifying you when the vulnerability has been fixed</li>
              <li>Giving proper credit to you for the discovery (unless you prefer to remain anonymous)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD]">Data Protection</h2>
            <p>
              I take the protection of your personal data seriously. For more information about how I collect, use, and
              protect your personal data, please refer to my{" "}
              <Link href="/privacy-policy" className="text-[#00BFA6] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD]">Contact</h2>
            <p>If you have any questions about this Security Policy, please contact me at:</p>
            <p className="mt-2">
              <strong>Email:</strong> satenderkumar.analyst@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
