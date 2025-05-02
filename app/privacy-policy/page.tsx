import Link from "next/link"
import { ArrowLeft, ExternalLink, Shield, CheckCircle, AlertTriangle, Globe } from "lucide-react"

export default function PrivacyPolicy() {
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

        <div className="mb-8 p-6 bg-[#1B263B] rounded-lg border border-[#00BFA6]/30">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-[#00BFA6] mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#E0E1DD]">Privacy Policy</h1>
          </div>
          <p className="text-[#E0E1DD]/80">
            <strong>Last Updated:</strong> May 1, 2025 | <strong>Effective Date:</strong> May 1, 2025
          </p>
          <div className="mt-4 flex items-start p-4 bg-[#0D1B2A] rounded border border-[#00BFA6]/20">
            <AlertTriangle className="h-5 w-5 text-[#FFD700] mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-[#E0E1DD]/90 text-sm">
              This document explains how your personal information is collected, used, and shared when you visit
              www.satenderkumar.com. Please read it carefully to understand your rights and my obligations.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-[#E0E1DD]/90">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                1
              </span>
              Introduction
            </h2>
            <div className="pl-11">
              <p>
                This Privacy Policy explains how <span className="text-[#00BFA6] font-semibold">Satender Kumar</span>
                <span className="inline-flex items-center ml-1">
                  <CheckCircle className="h-4 w-4 text-[#00BFA6]" title="Verified Identity" />
                </span>
                ("I", "me", or "my") collects, uses, and discloses your information when you visit www.satenderkumar.com
                (the "Website"), whether you are located in Canada or elsewhere.
              </p>
              <div className="flex items-start mt-4">
                <Globe className="h-5 w-5 text-[#00BFA6] mr-3 mt-1 flex-shrink-0" />
                <p>
                  This Website complies with applicable privacy regulations including the Personal Information
                  Protection and Electronic Documents Act (PIPEDA) of Canada, and the General Data Protection Regulation
                  (GDPR) for visitors from the European Economic Area (EEA).
                </p>
              </div>
              <p className="mt-4">
                By using the Website, you agree to the practices outlined in this Policy, which are designed to ensure
                data is collected, stored, and processed securely and transparently.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                2
              </span>
              Why Privacy Matters
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                In today's digital world, your privacy is more important than ever. As a cybersecurity professional, I
                understand that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your personal data is valuable and deserves protection</li>
                <li>You have the right to know how your information is being used</li>
                <li>Transparency builds trust between us</li>
                <li>Security and privacy go hand-in-hand</li>
              </ul>
              <div className="p-4 bg-[#1B263B] rounded-lg mb-4">
                <p className="text-[#E0E1DD] font-medium">
                  I implement the same security principles I advocate for professionally to ensure your data is handled
                  with care.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                3
              </span>
              Information I Collect
            </h2>
            <div className="pl-11">
              <p>I may collect the following types of information:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#1B263B] p-4 rounded-lg border-l-4 border-[#00BFA6]">
                  <h3 className="font-semibold text-[#E0E1DD] mb-2">Personal Information</h3>
                  <p className="text-sm">
                    When you submit a contact form or request my resume, I collect your name, email address, and any
                    other information you provide in your message.
                  </p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg border-l-4 border-[#FFD700]">
                  <h3 className="font-semibold text-[#E0E1DD] mb-2">Usage Data</h3>
                  <p className="text-sm">
                    I collect information about how you interact with my Website, including pages visited, time spent on
                    pages, and other analytical data.
                  </p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg border-l-4 border-[#06B6D4]">
                  <h3 className="font-semibold text-[#E0E1DD] mb-2">Technical Data</h3>
                  <p className="text-sm">
                    I collect your IP address, browser type and version, time zone setting, browser plug-in types and
                    versions, operating system, and platform.
                  </p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg border-l-4 border-[#10B981]">
                  <h3 className="font-semibold text-[#E0E1DD] mb-2">Cookies & Similar Technologies</h3>
                  <p className="text-sm">
                    I use cookies to enhance your browsing experience, analyze site traffic, and understand where
                    visitors are coming from.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                4
              </span>
              How I Use Your Information
            </h2>
            <div className="pl-11">
              <p>I use the information I collect for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To respond to your inquiries and provide the information you request</li>
                <li>To improve my Website and user experience</li>
                <li>To analyze usage patterns and trends</li>
                <li>To protect the security and integrity of my Website</li>
                <li>To comply with legal obligations</li>
              </ul>
              <div className="p-4 bg-[#1B263B] rounded-lg border border-[#00BFA6]/20 mb-4">
                <p className="text-sm text-[#E0E1DD]/90">
                  <strong className="text-[#00BFA6]">Important:</strong> I will never sell your personal information to
                  third parties or use it for purposes other than those listed above without your explicit consent.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                5
              </span>
              Legal Basis for Processing
            </h2>
            <div className="pl-11">
              <p>
                Under the General Data Protection Regulation (GDPR) and Canadian privacy laws, I process your personal
                data under the following legal bases:
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-[#00BFA6]/20 text-[#00BFA6] rounded-full text-xs font-medium">
                      Consent
                    </span>
                  </div>
                  <p className="text-sm">
                    When you submit the contact form or explicitly agree to certain processing activities.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-[#00BFA6]/20 text-[#00BFA6] rounded-full text-xs font-medium">
                      Legitimate
                    </span>
                  </div>
                  <p className="text-sm">
                    To improve and secure the Website, analyze usage patterns, and enhance user experience.
                  </p>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-[#00BFA6]/20 text-[#00BFA6] rounded-full text-xs font-medium">
                      Legal
                    </span>
                  </div>
                  <p className="text-sm">When I need to comply with a legal or regulatory obligation.</p>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-[#00BFA6]/20 text-[#00BFA6] rounded-full text-xs font-medium">
                      Contract
                    </span>
                  </div>
                  <p className="text-sm">
                    When processing is necessary to fulfill my obligations to you, such as responding to your inquiries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                6
              </span>
              Cookies and Similar Technologies
            </h2>
            <div className="pl-11">
              <p>
                I use cookies and similar tracking technologies to track activity on my Website and hold certain
                information. Cookies are files with a small amount of data which may include an anonymous unique
                identifier.
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-[#1B263B] rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#E0E1DD] uppercase tracking-wider border-b border-[#415A77]">
                        Cookie Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#E0E1DD] uppercase tracking-wider border-b border-[#415A77]">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#E0E1DD] uppercase tracking-wider border-b border-[#415A77]">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#415A77]">
                    <tr>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]">Essential</td>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]/80">
                        Necessary for the Website to function properly
                      </td>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]/80">Session to 1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]">Analytical</td>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]/80">
                        Allow me to recognize visitors and analyze website usage
                      </td>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]/80">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]">Functionality</td>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]/80">Remember your preferences and settings</td>
                      <td className="px-4 py-3 text-sm text-[#E0E1DD]/80">Up to 1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                You may see a cookie consent banner when visiting the Website. This allows you to opt in or out of
                non-essential cookies, in line with GDPR, PIPEDA, and ePrivacy rules.
              </p>
              <p className="mt-2">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of my Website.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                7
              </span>
              Third-Party Services
            </h2>
            <div className="pl-11">
              <p>I use the following third-party services that may collect information about you:</p>
              <div className="space-y-4 mt-4">
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[#E0E1DD]">Formspree</h3>
                    <Link
                      href="https://formspree.io/legal/privacy-policy/"
                      className="text-[#00BFA6] hover:text-[#00BFA6]/80 inline-flex items-center text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                  <p className="text-sm text-[#E0E1DD]/80 mt-1">For processing contact form submissions</p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[#E0E1DD]">Google reCAPTCHA</h3>
                    <Link
                      href="https://policies.google.com/privacy"
                      className="text-[#00BFA6] hover:text-[#00BFA6]/80 inline-flex items-center text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                  <p className="text-sm text-[#E0E1DD]/80 mt-1">To protect forms from spam and abuse</p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[#E0E1DD]">Vercel</h3>
                    <Link
                      href="https://vercel.com/legal/privacy-policy"
                      className="text-[#00BFA6] hover:text-[#00BFA6]/80 inline-flex items-center text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                  <p className="text-sm text-[#E0E1DD]/80 mt-1">For hosting and analytics</p>
                </div>
              </div>
              <p className="mt-4">
                These third parties have their own privacy policies addressing how they use such information.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                8
              </span>
              Data Retention
            </h2>
            <div className="pl-11">
              <p>
                I retain your personal data only as long as necessary to fulfill the purposes outlined in this policy,
                or as required by applicable laws. Specifically:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 mt-4">
                <li>Contact form submissions are retained for up to 1 year after our last communication.</li>
                <li>Analytics data is retained in an anonymized format for up to 26 months.</li>
                <li>Server logs containing IP addresses are automatically deleted after 30 days.</li>
              </ul>
              <p>
                When your personal data is no longer needed for the purposes for which it was collected, it will be
                securely deleted or anonymized.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                9
              </span>
              Data Security
            </h2>
            <div className="pl-11">
              <p>
                I implement appropriate security measures to protect your personal information. However, no method of
                transmission over the Internet or electronic storage is 100% secure, and I cannot guarantee absolute
                security.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#E0E1DD] text-sm mb-2">HTTPS Encryption</h3>
                  <p className="text-xs text-[#E0E1DD]/80">All data transmitted to and from the website is encrypted</p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#E0E1DD] text-sm mb-2">Regular Security Assessments</h3>
                  <p className="text-xs text-[#E0E1DD]/80">
                    The website undergoes regular security testing and updates
                  </p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#E0E1DD] text-sm mb-2">Limited Data Access</h3>
                  <p className="text-xs text-[#E0E1DD]/80">
                    Access to personal data is restricted on a need-to-know basis
                  </p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#E0E1DD] text-sm mb-2">Secure Cloud Providers</h3>
                  <p className="text-xs text-[#E0E1DD]/80">
                    All data is stored with providers that maintain robust security practices
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[#1B263B] rounded-lg border-l-4 border-[#00BFA6]">
                <p className="text-sm">
                  <strong>Additional Security Measures:</strong> This website implements Content Security Policy (CSP),
                  input validation, and data sanitization to protect against common web vulnerabilities.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">9A. No Professional or Legal Relationship</h2>
            <p className="mb-4">
              Submitting a form, visiting the Website, or viewing its content does not establish a business,
              professional, or legal relationship between you and me. The Website content is for informational and
              showcase purposes only.
            </p>
            <p className="mb-4">
              No information provided on this Website constitutes professional advice, and you should not rely on any
              information on this Website as an alternative to professional advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">10. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than the one in which you reside,
              including Canada, where the Website is primarily operated.
            </p>
            <p className="mb-4">
              I take reasonable steps to ensure that appropriate safeguards are in place to protect your personal data
              during such transfers, including Standard Contractual Clauses (SCCs) or equivalent mechanisms where
              required by law (e.g., GDPR-compliant regions).
            </p>
            <p className="mb-4">
              By continuing to use this Website, you consent to such international data transfers in accordance with
              this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                11
              </span>
              Your Rights
            </h2>
            <div className="pl-11">
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to access your personal data</p>
                </div>
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to rectify inaccurate personal data</p>
                </div>
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to request deletion of your personal data</p>
                </div>
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to restrict processing of your personal data</p>
                </div>
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to data portability</p>
                </div>
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to object to processing of your personal data</p>
                </div>
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to withdraw consent at any time</p>
                </div>
                <div className="bg-[#1B263B] p-3 rounded-lg">
                  <p className="text-sm text-[#E0E1DD]">The right to lodge a complaint with a supervisory authority</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[#1B263B] rounded-lg border border-[#00BFA6]/30">
                <p className="text-sm">
                  To exercise any of these rights, please contact me using the information provided in the "Contact Me"
                  section. I will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                12
              </span>
              Children's Privacy
            </h2>
            <div className="pl-11">
              <p>
                My Website is not intended for children under the age of 16. I do not knowingly collect personal
                information from children under 16. If you are a parent or guardian and believe that your child has
                provided me with personal information, please contact me so that I can take necessary actions.
              </p>
              <div className="mt-4 p-4 bg-[#1B263B] rounded-lg border-l-4 border-[#FFD700]">
                <p className="text-sm">
                  <strong>Note:</strong> The age threshold of 16 applies as per GDPR requirements. For visitors from
                  countries with different age thresholds (such as 13 under COPPA in the US), the applicable local age
                  threshold will apply.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                13
              </span>
              Changes to This Privacy Policy
            </h2>
            <div className="pl-11">
              <p>
                I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="mt-4">You are advised to review this Privacy Policy periodically for any changes.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">14. Contact Me</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact me at:</p>
            <p className="mb-4">Email: satenderkumar.analyst@gmail.com</p>
            <p className="mb-4 text-gray-300">
              Please note: I am not responsible for any third-party misuse of data you may share publicly or through
              your own browser/device settings. Always use secure and updated systems when submitting forms online.
            </p>
          </section>

          <div className="mt-12 p-4 bg-[#1B263B] rounded-lg border border-[#00BFA6]/30 text-center">
            <p className="text-sm text-[#E0E1DD]/80">
              © {new Date().getFullYear()} Satender Kumar. All rights reserved. Use of this website constitutes
              acceptance of the Terms of Service and Privacy Policy. You access this site at your own risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
