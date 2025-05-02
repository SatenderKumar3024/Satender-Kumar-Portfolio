"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Calendar, ExternalLink, Shield } from "lucide-react"
import { motion } from "framer-motion"
import CookieSettingsButton from "./cookie-settings-button"
import { SecurePortfolioDownload } from "./secure-portfolio-download"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  const connectLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/satender-singh2430/",
      icon: <Linkedin className="h-4 w-4" />,
      color: "text-[#0A66C2] hover:text-[#0A66C2]/80",
    },
    {
      name: "Twitter/X",
      href: "https://x.com/SatendeK2430",
      icon: <Twitter className="h-4 w-4" />,
      color: "text-[#06AED5] hover:text-[#06AED5]/80",
    },
    {
      name: "Calendly",
      href: "https://calendly.com/satenderkumar-analyst",
      icon: <Calendar className="h-4 w-4" />,
      color: "text-[#38BDF8] hover:text-[#38BDF8]/80",
    },
    {
      name: "Linktree",
      href: "https://linktr.ee/satendersingh",
      icon: <ExternalLink className="h-4 w-4" />,
      color: "text-[#06AED5] hover:text-[#06AED5]/80",
    },
    {
      name: "GitHub",
      href: "https://github.com/SatenderKumar3024",
      icon: <Github className="h-4 w-4" />,
      color: "text-[#6B7280] hover:text-[#6B7280]/80",
    },
  ]

  const resourceLinks = [
    { name: "Request Resume", href: "#contact" },
    { name: "Credentials", href: "#expertise" },
    { name: "Certifications", href: "#certifications" },
  ]

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t bg-[#0F172A]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#93C5FD] uppercase tracking-wider">Satender Kumar</h3>
            <p className="text-sm text-cyber-light-gray mb-4">
              Information Security Analyst specializing in cloud security, SIEM, and threat detection.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#93C5FD] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#93C5FD] uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-2 group`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.span
                      className={link.color}
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {link.icon}
                    </motion.span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#93C5FD] uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-4 text-[#93C5FD] uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]/50"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]/50"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security-policy"
                    className="text-sm text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]/50"></span>
                    Security Policy
                  </Link>
                </li>
                <li>
                  <CookieSettingsButton />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add the SecurePortfolioDownload component here */}
        <div className="mb-8">
          <SecurePortfolioDownload />
        </div>

        <div className="pt-8 border-t border-cyber-gray/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cyber-light-gray">
            &copy; {currentYear} Satender Kumar. All rights reserved. Use of this website constitutes acceptance of the{" "}
            <Link href="/terms-of-service" className="text-[#00BFA6] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-[#00BFA6] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-1 text-sm"
            >
              <Shield className="h-4 w-4" />
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-1 text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
