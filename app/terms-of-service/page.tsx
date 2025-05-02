import Link from "next/link"
import { ArrowLeft, FileText, AlertTriangle, Globe } from "lucide-react"

export default function TermsOfService() {
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
            <FileText className="h-6 w-6 text-[#00BFA6] mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#E0E1DD]">Terms of Service</h1>
          </div>
          <p className="text-[#E0E1DD]/80">
            <strong>Last Updated:</strong> May 1, 2025 | <strong>Effective Date:</strong> May 1, 2025
          </p>
          <div className="mt-4 flex items-start p-4 bg-[#0D1B2A] rounded border border-[#00BFA6]/20">
            <AlertTriangle className="h-5 w-5 text-[#FFD700] mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-[#E0E1DD]/90 text-sm">
              Please read these Terms of Service carefully before using www.satenderkumar.com. By accessing or using the
              Website, you agree to be bound by these Terms.
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
              <p className="mb-4">
                These Terms of Service ("Terms") govern your access to and use of www.satenderkumar.com (the "Website")
                operated by Satender Kumar ("I", "me", or "my").
              </p>
              <p className="mb-4">
                By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part
                of the Terms, you may not access the Website.
              </p>
              <div className="bg-gray-800 border-l-4 border-cyan-500 p-4 mb-4">
                <h3 className="font-bold text-cyan-400 mb-2">Global Use Disclaimer</h3>
                <p className="text-gray-300">
                  This Website is intended for informational purposes only and is accessible globally. While I strive to
                  comply with data protection laws applicable in jurisdictions such as Canada, the United States, and
                  the European Union, you are solely responsible for ensuring that your use of this Website complies
                  with the laws of your local jurisdiction.
                </p>
                <p className="text-gray-300 mt-2">
                  By accessing this Website, you represent that you are not violating any applicable law or regulation
                  in your country of access.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                2
              </span>
              Global Use Disclaimer
            </h2>
            <div className="pl-11">
              <div className="flex items-start mb-4">
                <Globe className="h-5 w-5 text-[#00BFA6] mr-3 mt-1 flex-shrink-0" />
                <p>
                  This Website is intended for informational purposes only and is accessible globally. While I strive to
                  comply with data protection laws applicable in jurisdictions such as Canada, the United States, India,
                  and the European Union, you are solely responsible for ensuring that your use of this Website complies
                  with the laws of your local jurisdiction.
                </p>
              </div>
              <p>
                By accessing this Website, you represent that you are not violating any applicable law or regulation in
                your country of access.
              </p>
              <div className="p-4 bg-[#1B263B] rounded-lg my-4 border-l-4 border-[#FFD700]">
                <p className="text-[#E0E1DD] text-sm">
                  <strong>Important:</strong> This Website is operated from Canada. Your use of the Website from other
                  jurisdictions is entirely at your own risk and discretion.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                3
              </span>
              Intellectual Property Rights
            </h2>
            <div className="pl-11">
              <p>
                Unless otherwise stated, I own the intellectual property rights for all material on the Website. All
                intellectual property rights are reserved.
              </p>
              <div className="p-4 bg-[#1B263B] rounded-lg my-4">
                <p className="text-[#E0E1DD] text-sm">
                  You may view and/or print pages from the Website for your own personal use subject to restrictions set
                  in these Terms.
                </p>
              </div>
              <p>You must not:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Republish material from this Website without attribution</li>
                <li>Sell, rent, or sub-license material from the Website</li>
                <li>Reproduce, duplicate, or copy material from the Website for commercial purposes</li>
                <li>Redistribute content from this Website (unless content is specifically made for redistribution)</li>
                <li>Use content from this Website to train artificial intelligence or machine learning models</li>
                <li>Scrape, mine, or extract data from this Website using automated tools</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                4
              </span>
              User Content
            </h2>
            <div className="pl-11">
              <p>
                In these Terms, "User Content" means material (including without limitation text, images, audio
                material, video material, and audio-visual material) that you submit to the Website, for whatever
                purpose.
              </p>
              <p className="mt-4">
                You grant me a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt,
                publish, translate, and distribute your User Content in any existing or future media. You also grant me
                the right to sub-license these rights and the right to bring an action for infringement of these rights.
              </p>
              <p className="mt-4">
                Your User Content must not be illegal or unlawful, must not infringe any third party's legal rights, and
                must not be capable of giving rise to legal action whether against you or me or a third party.
              </p>
              <p className="mt-4">
                I reserve the right to edit or remove any material submitted to the Website, or stored on my servers, or
                hosted or published upon the Website.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                5
              </span>
              No Professional or Legal Relationship
            </h2>
            <div className="pl-11">
              <p>
                The content on this Website is provided for general information purposes only. It does not constitute
                professional advice, and should not be relied upon as such.
              </p>
              <div className="p-4 bg-[#1B263B] rounded-lg my-4 border-l-4 border-[#00BFA6]">
                <p className="text-[#E0E1DD] text-sm">
                  <strong>Important:</strong> Submitting a form, visiting the Website, or viewing its content does not
                  establish a business, professional, or legal relationship between you and me. The Website content is
                  for informational and showcase purposes only.
                </p>
              </div>
              <p>
                No action should be taken based solely on the contents of this Website. Always seek appropriate
                professional advice specific to your situation.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                6
              </span>
              No Warranties
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                This Website is provided on an "as-is" and "as-available" basis without any warranties, express or
                implied. I make no guarantees regarding the accuracy, completeness, or reliability of the Website or any
                content published herein.
              </p>
              <p className="mb-4">
                Nothing on this Website constitutes legal, financial, or cybersecurity advice. You agree that you use
                this Website entirely at your own risk.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                7
              </span>
              Limitations of Liability
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                To the maximum extent permitted by applicable law, I shall not be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-8 mb-4 space-y-2">
                <li>Loss of profits, revenue, or data</li>
                <li>Business interruption</li>
                <li>Any unauthorized access or misuse of your data</li>
                <li>Use or inability to use the Website</li>
              </ul>
              <p className="mb-4">
                This limitation applies regardless of whether the alleged liability arises from contract, negligence,
                tort, or any other legal theory—even if I have been advised of the possibility of such damages.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                8
              </span>
              Indemnification
            </h2>
            <div className="pl-11">
              <p>
                You hereby indemnify me and undertake to keep me indemnified against any losses, damages, costs,
                liabilities, and expenses (including without limitation legal expenses and any amounts paid by me to a
                third party in settlement of a claim or dispute on the advice of my legal advisers) incurred or suffered
                by me arising out of any breach by you of any provision of these Terms.
              </p>
              <p className="mt-4">This indemnification includes, but is not limited to, liability arising from:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your use of the Website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of a third party</li>
                <li>Your User Content</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                9
              </span>
              Breaches of These Terms
            </h2>
            <div className="pl-11">
              <p>
                Without prejudice to my other rights under these Terms, if you breach these Terms in any way, I may take
                such action as I deem appropriate to deal with the breach, including suspending your access to the
                Website, prohibiting you from accessing the Website, blocking computers using your IP address from
                accessing the Website, contacting your internet service provider to request that they block your access
                to the Website, and/or bringing court proceedings against you.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                10
              </span>
              Variation
            </h2>
            <div className="pl-11">
              <p>
                I may revise these Terms from time to time. Revised Terms will apply to the use of the Website from the
                date of the publication of the revised Terms on the Website. Please check this page regularly to ensure
                you are familiar with the current version.
              </p>
              <p className="mt-4">
                Your continued use of the Website after changes to these Terms constitutes your acceptance of the
                revised Terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                11
              </span>
              Assignment
            </h2>
            <div className="pl-11">
              <p>
                I may transfer, sub-contract, or otherwise deal with my rights and/or obligations under these Terms
                without notifying you or obtaining your consent.
              </p>
              <p className="mt-4">
                You may not transfer, sub-contract, or otherwise deal with your rights and/or obligations under these
                Terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                12
              </span>
              Severability
            </h2>
            <div className="pl-11">
              <p>
                If a provision of these Terms is determined by any court or other competent authority to be unlawful
                and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable
                provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be
                deleted, and the rest of the provision will continue in effect.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                13
              </span>
              Entire Agreement
            </h2>
            <div className="pl-11">
              <p>
                These Terms constitute the entire agreement between you and me in relation to your use of the Website
                and supersede all previous agreements in respect of your use of the Website.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                14
              </span>
              Governing Law and Jurisdiction
            </h2>
            <div className="pl-11">
              <p className="mb-4">
                These Terms and your use of the Website are governed by the laws of the Province of Ontario and the
                federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
              <p className="mb-4">
                You agree that any disputes relating to the Website shall be resolved exclusively in the courts of
                Ontario, Canada.
              </p>
              <p className="mb-4">
                If you access the Website from outside Canada, you do so on your own initiative and are responsible for
                compliance with your local laws. You waive any right to bring claims under the laws of any other
                jurisdiction.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#E0E1DD] flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-[#00BFA6]/20 text-[#00BFA6] flex items-center justify-center mr-3">
                15
              </span>
              Contact Information
            </h2>
            <div className="pl-11">
              <p>If you have any questions about these Terms, please contact me at:</p>
              <div className="mt-4 p-5 bg-[#1B263B] rounded-lg inline-block">
                <p className="text-[#E0E1DD]">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:satenderkumar.analyst@gmail.com" className="text-[#00BFA6] hover:underline">
                    satenderkumar.analyst@gmail.com
                  </a>
                </p>
              </div>
            </div>
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
