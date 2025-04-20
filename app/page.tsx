"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Shield,
  Server,
  Lock,
  Code,
  Mail,
  Linkedin,
  Calendar,
  Link2,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Globe,
  ArrowUp,
  Sun,
  Moon,
  Phone,
} from "lucide-react"
import emailjs from "@emailjs/browser"
import DOMPurify from "dompurify"

// Initialize EmailJS
emailjs.init("Fmdnid8QZJellkvhZ")

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showGDPR, setShowGDPR] = useState(false)
  const [activeTab, setActiveTab] = useState("general")

  // Form states
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [contactStatus, setContactStatus] = useState("")
  const [resumeForm, setResumeForm] = useState({ name: "", email: "", reason: "" })
  const [resumeStatus, setResumeStatus] = useState("")

  const contactFormRef = useRef<HTMLFormElement>(null)
  const resumeFormRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // GDPR consent
    const consent = localStorage.getItem("gdprConsent")
    if (!consent) setShowGDPR(true)

    // Theme persistence
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) setIsDarkMode(savedTheme === "dark")

    // Scroll handler
    const handleScroll = () => setShowBackToTop(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const acceptGDPR = () => {
    localStorage.setItem("gdprConsent", "true")
    setShowGDPR(false)
  }

  // Handle input changes
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm({ ...contactForm, [name]: DOMPurify.sanitize(value) })
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setResumeForm({ ...resumeForm, [name]: DOMPurify.sanitize(value) })
  }

  // Send general contact
  const sendContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, message } = contactForm

    if (!name || !email || !message) {
      setContactStatus("Please complete all contact fields.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setContactStatus("Please enter a valid email address.")
      return
    }

    emailjs
      .send("service_pryu3cu", "template_contact", {
        from_name: name,
        from_email: email,
        message,
      })
      .then(
        () => {
          setContactStatus("Your message has been sent successfully!")
          setContactForm({ name: "", email: "", message: "" })
          setTimeout(() => setContactStatus(""), 5000)
        },
        () => {
          setContactStatus("Failed to send your message. Please try again later.")
        },
      )
  }

  // Send resume request
  const sendResumeRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, reason } = resumeForm

    if (!name || !email || !reason) {
      setResumeStatus("Please complete all resume request fields.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setResumeStatus("Please enter a valid email address.")
      return
    }

    emailjs
      .send("service_pryu3cu", "template_resume", {
        requester_name: name,
        requester_email: email,
        request_reason: reason,
      })
      .then(
        () => {
          setResumeStatus("Resume request sent! I will email you shortly.")
          setResumeForm({ name: "", email: "", reason: "" })
          setTimeout(() => setResumeStatus(""), 5000)
        },
        () => {
          setResumeStatus("Failed to submit request. Please try again later.")
        },
      )
  }

  // Parallax effect for hero
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5])

  return (
    <div
      className={isDarkMode ? "min-h-screen bg-gray-950 text-white" : "min-h-screen bg-white text-gray-900"}
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)" }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 text-white z-50"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.button>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60"
      >
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-500" />
              <span>Satender Kumar</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            {["about", "experience", "projects", "certifications", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="text-sm font-medium hover:text-blue-400 transition-colors focus-visible:outline focus-visible:outline-blue-400 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-400 after:bottom-[-2px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                aria-label={`Go to ${section} section`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2" aria-label="LinkedIn">
              <Link href="https://www.linkedin.com/in/satender-singh2430/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2" aria-label="Calendly">
              <Link href="https://calendly.com/satenderkumar-analyst" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5" />
              </Link>
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2" aria-label="Linktree">
              <Link href="https://linktr.ee/satendersingh" target="_blank" rel="noopener noreferrer">
                <Link2 className="h-5 w-5" />
              </Link>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section with Parallax */}
        <motion.section
          style={{ y: heroY, opacity }}
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 relative"
        >
          <div className="text-center px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Satender Kumar
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              Cybersecurity Analyst | Cloud Security | IAM Specialist
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold"
              >
                <Link href="#contact">Get in Touch</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-600 px-6 py-3 rounded-lg text-lg font-semibold"
              >
                <Link href="#resume-request">Request Resume</Link>
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-gray-950"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About Me</h2>
                <div className="space-y-4 text-lg">
                  <p className="text-gray-300">
                    I'm a results-driven <span className="text-blue-400 font-semibold">Cybersecurity Analyst</span> with
                    over 4 years of experience securing multi-cloud environments (AWS, Azure, GCP) using advanced SIEM
                    tools like Splunk and Microsoft Sentinel. My expertise lies in Identity and Access Management (IAM),
                    Zero Trust Architecture, and automating security workflows with Python and PowerShell.
                  </p>
                  <p className="text-gray-300">
                    I've reduced organizational risks by up to <span className="text-blue-400 font-semibold">40%</span>{" "}
                    and improved SOC efficiency by <span className="text-blue-400 font-semibold">25%</span> through
                    automation and threat detection strategies. Certified in AWS Security, Microsoft AZ-500, and CompTIA
                    Security+, I align security practices with NIST 800-53, ISO 27001, GDPR, and PCI DSS.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Cloud Security", "SIEM", "IAM", "Zero Trust", "Incident Response", "Compliance", "Automation"].map(
                    (skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-950/30 text-blue-300 border border-blue-800 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ),
                  )}
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 px-6 py-3 rounded-lg flex items-center gap-2"
                  >
                    <Link
                      href="https://www.credly.com/users/satender-kumar.2430"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Credentials <ChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-xl p-6 shadow-xl border border-gray-700 bg-gray-900/50">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" /> Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-blue-400 font-medium mb-2">Cloud Security</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>AWS (IAM, EC2, S3)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>Azure (SC-300, AZ-500)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>GCP, Zero Trust
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-medium mb-2">SIEM & Monitoring</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>Microsoft Sentinel
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>Splunk, Wireshark
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>Qualys, Nessus
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-medium mb-2">IAM & Access</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>Azure AD, Okta
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>RBAC/ABAC, SSO, MFA
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>LDAP, SAML, OAuth
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-medium mb-2">Automation</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>Python, PowerShell
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>API Integrations
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>CI/CD Security
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" /> Education
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Fanshawe College, London, ON</h4>
                      <p className="text-sm text-gray-400">Digital Business Management | 2021 – 2023 | GPA: 3.5</p>
                    </div>
                    <div>
                      <h4 className="font-medium">MATS University</h4>
                      <p className="text-sm text-gray-400">
                        Bachelor of Computer Applications | 2019 – 2022 | Grade: A+
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Professional Experience
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Building expertise across cybersecurity domains with industry-leading organizations
            </motion.p>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  role: "Information Security Analyst",
                  company: "Paladin Security Group Ltd",
                  period: "Oct 2023 – Present",
                  desc: "Monitor AWS/Azure environments with Splunk and Microsoft Sentinel, reducing Mean Time to Detect (MTTD) by 30%. Automated incident response with Python and PowerShell, cutting response time by 25%. Implemented Zero Trust and SSO/MFA for 10+ applications.",
                  color: "from-blue-600 to-blue-900",
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  role: "IAM Analyst",
                  company: "GardaWorld",
                  period: "Feb 2022 – Aug 2023",
                  desc: "Designed IAM policies with RBAC/ABAC, reducing unauthorized access by 40% across 10+ cloud applications. Automated user lifecycle for 5,000+ users, cutting provisioning time by 40%. Migrated 50+ apps to Okta SSO with 99.9% uptime.",
                  color: "from-purple-600 to-purple-900",
                  icon: <Lock className="h-6 w-6" />,
                },
                {
                  role: "Security Analyst Intern",
                  company: "ANZ",
                  period: "Sep 2021 – Dec 2021",
                  desc: "Monitored cloud environments using Splunk/Sentinel, resolving 50+ incident tickets. Enhanced IAM detection rules, reducing suspicious logins by 15%. Developed Splunk dashboards for audit reporting.",
                  color: "from-green-600 to-green-900",
                  icon: <Server className="h-6 w-6" />,
                },
                {
                  role: "IT Support Specialist",
                  company: "Lenovo",
                  period: "Jan 2017 – Aug 2021",
                  desc: "Managed Microsoft 365 and Entra ID for 100+ clients, laying the foundation for IAM expertise. Resolved network issues (TCP/IP, VPN), reducing troubleshooting time by 25%.",
                  color: "from-red-600 to-red-900",
                  icon: <Code className="h-6 w-6" />,
                },
              ].map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/50 p-6 rounded-xl shadow-lg border border-gray-800 overflow-hidden relative"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`}></div>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0`}>{exp.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-blue-400 mb-1">{exp.company}</p>
                      <p className="text-gray-400 mb-2 text-sm">{exp.period}</p>
                      <p className="text-gray-300">{exp.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-gray-950"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Key Projects
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Implementing cutting-edge security solutions across cloud environments and enterprise systems
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Cloud Security Implementation",
                  desc: "Configured IAM policies with least-privilege access for 50+ AWS S3 buckets and Azure VMs, reducing vulnerabilities by 30% (Qualys scans). Aligned with NIST 800-53.",
                  icon: <Server className="h-6 w-6 text-blue-500" />,
                  tags: ["AWS", "Azure", "IAM", "NIST 800-53"],
                  color: "border-blue-600",
                },
                {
                  title: "Zero Trust Architecture",
                  desc: "Deployed Zero Trust for AWS/Azure, reducing unauthorized access by 20% for 1,000+ users. Enhanced GDPR compliance and audit readiness.",
                  icon: <Lock className="h-6 w-6 text-purple-500" />,
                  tags: ["Zero Trust", "GDPR", "Access Control"],
                  color: "border-purple-600",
                },
                {
                  title: "SIEM Optimization",
                  desc: "Crafted KQL/SPL queries for Splunk and Microsoft Sentinel, improving APT detection by 15% using MITRE ATT&CK framework.",
                  icon: <Shield className="h-6 w-6 text-green-500" />,
                  tags: ["Splunk", "Sentinel", "MITRE ATT&CK"],
                  color: "border-green-600",
                },
                {
                  title: "Security Automation",
                  desc: "Automated monitoring with Python and Prisma Cloud, integrating 10+ applications for real-time threat detection, boosting efficiency by 25%.",
                  icon: <Code className="h-6 w-6 text-yellow-500" />,
                  tags: ["Python", "Automation", "Prisma Cloud"],
                  color: "border-yellow-600",
                },
                {
                  title: "IAM Policy Framework",
                  desc: "Designed and implemented RBAC/ABAC models for multi-cloud environments, reducing unauthorized access by 40% across 10+ applications.",
                  icon: <Lock className="h-6 w-6 text-red-500" />,
                  tags: ["IAM", "RBAC", "ABAC", "Multi-Cloud"],
                  color: "border-red-600",
                },
                {
                  title: "Compliance Automation",
                  desc: "Developed automated compliance reporting for NIST 800-53, ISO 27001, and GDPR, reducing audit preparation time by 35%.",
                  icon: <CheckCircle2 className="h-6 w-6 text-teal-500" />,
                  tags: ["Compliance", "Automation", "Reporting"],
                  color: "border-teal-600",
                },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gray-900/50 p-6 rounded-xl shadow-lg border-l-4 ${project.color} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-md bg-gray-800">{project.icon}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Certifications
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Industry-recognized credentials validating expertise in cybersecurity, cloud security, and compliance
            </motion.p>

            <div className="max-w-5xl mx-auto">
              {/* Certification Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {["Microsoft", "CompTIA", "AWS", "Other"].map((category, idx) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Microsoft Certifications */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <div className="p-1 bg-blue-600 rounded">
                    <Shield className="h-5 w-5" />
                  </div>
                  Microsoft Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Microsoft AZ-500",
                      subtitle: "Azure Security Engineer Associate",
                      issueDate: "January 2025",
                      expiryDate: "January 2028",
                      verifyUrl: "https://learn.microsoft.com/en-us/certifications/azure-security-engineer/",
                      color: "border-blue-600",
                      bgColor: "bg-blue-600/10",
                    },
                    {
                      title: "Microsoft SC-300",
                      subtitle: "Identity and Access Administrator",
                      issueDate: "December 2024",
                      expiryDate: "December 2027",
                      verifyUrl: "https://learn.microsoft.com/en-us/certifications/identity-and-access-administrator/",
                      color: "border-blue-600",
                      bgColor: "bg-blue-600/10",
                    },
                    {
                      title: "Microsoft SC-200",
                      subtitle: "Security Operations Analyst",
                      issueDate: "November 2024",
                      expiryDate: "November 2027",
                      verifyUrl: "https://learn.microsoft.com/en-us/certifications/security-operations-analyst/",
                      color: "border-blue-600",
                      bgColor: "bg-blue-600/10",
                    },
                    {
                      title: "Microsoft SC-900",
                      subtitle: "Security, Compliance, and Identity Fundamentals",
                      issueDate: "October 2024",
                      expiryDate: "N/A",
                      verifyUrl:
                        "https://learn.microsoft.com/en-us/certifications/security-compliance-and-identity-fundamentals/",
                      color: "border-blue-600",
                      bgColor: "bg-blue-600/10",
                    },
                  ].map((cert, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className={`p-5 rounded-xl shadow-lg border ${cert.color} ${cert.bgColor} hover:shadow-xl transition-all duration-300`}
                    >
                      <h4 className="text-xl font-semibold">{cert.title}</h4>
                      <p className="text-gray-400 mb-3 text-sm">{cert.subtitle}</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Issued: {cert.issueDate}</span>
                        <span>Expires: {cert.expiryDate}</span>
                      </div>
                      <a
                        href={cert.verifyUrl}
                        className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1 mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify Credential <ChevronRight className="h-3 w-3" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CompTIA Certifications */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <div className="p-1 bg-green-600 rounded">
                    <Shield className="h-5 w-5" />
                  </div>
                  CompTIA Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {[
                    {
                      title: "CompTIA Security+",
                      subtitle: "Security Certification",
                      issueDate: "January 2025",
                      expiryDate: "January 2028",
                      verifyUrl: "http://verify.CompTIA.org",
                      color: "border-green-600",
                      bgColor: "bg-green-600/10",
                    },
                    {
                      title: "CompTIA CySA+",
                      subtitle: "Cybersecurity Analyst",
                      issueDate: "January 2025",
                      expiryDate: "January 2028",
                      verifyUrl: "http://verify.CompTIA.org",
                      color: "border-green-600",
                      bgColor: "bg-green-600/10",
                    },
                    {
                      title: "CompTIA Cloud+",
                      subtitle: "Cloud Certification",
                      issueDate: "January 2025",
                      expiryDate: "January 2028",
                      verifyUrl: "http://verify.CompTIA.org",
                      color: "border-green-600",
                      bgColor: "bg-green-600/10",
                    },
                  ].map((cert, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className={`p-5 rounded-xl shadow-lg border ${cert.color} ${cert.bgColor} hover:shadow-xl transition-all duration-300`}
                    >
                      <h4 className="text-xl font-semibold">{cert.title}</h4>
                      <p className="text-gray-400 mb-3 text-sm">{cert.subtitle}</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Issued: {cert.issueDate}</span>
                        <span>Expires: {cert.expiryDate}</span>
                      </div>
                      <a
                        href={cert.verifyUrl}
                        className="text-green-400 hover:text-green-300 text-sm inline-flex items-center gap-1 mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify Credential <ChevronRight className="h-3 w-3" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Certifications Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-8 text-center"
              >
                <p className="text-gray-300">
                  Additional certifications include Google Cybersecurity Certificate, Google IT Support Professional,
                  and more
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 px-6 py-3 rounded-lg inline-flex items-center gap-2"
                >
                  <Link
                    href="https://www.credly.com/users/satender-kumar.2430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View All Certifications <ChevronRight className="h-4 w-4" />
                  </Link>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Blog & Articles Section */}
        <motion.section
          id="blog"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-gray-950"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Blog & Articles
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Insights and expertise on cybersecurity trends, best practices, and emerging threats
            </motion.p>

            <div className="max-w-6xl mx-auto overflow-hidden">
              <div className="flex flex-nowrap gap-6 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                {[
                  {
                    title: "Implementing Zero Trust in Multi-Cloud Environments",
                    excerpt:
                      "A comprehensive guide to deploying Zero Trust architecture across AWS, Azure, and GCP environments...",
                    date: "March 15, 2025",
                    readTime: "8 min read",
                    tags: ["Zero Trust", "Multi-Cloud", "Security Architecture"],
                    color: "border-blue-600",
                    bgGradient: "from-blue-900/20 to-blue-600/5",
                  },
                  {
                    title: "SIEM Optimization: Advanced KQL Queries for Threat Detection",
                    excerpt:
                      "Learn how to craft effective KQL queries in Microsoft Sentinel to detect sophisticated threats...",
                    date: "February 28, 2025",
                    readTime: "12 min read",
                    tags: ["SIEM", "KQL", "Threat Detection"],
                    color: "border-purple-600",
                    bgGradient: "from-purple-900/20 to-purple-600/5",
                  },
                  {
                    title: "IAM Best Practices for Cloud Security",
                    excerpt:
                      "Explore the latest best practices for managing identity and access in cloud environments...",
                    date: "January 20, 2025",
                    readTime: "10 min read",
                    tags: ["IAM", "Cloud Security", "Best Practices"],
                    color: "border-green-600",
                    bgGradient: "from-green-900/20 to-green-600/5",
                  },
                  {
                    title: "Securing Kubernetes Clusters: A Practical Guide",
                    excerpt:
                      "Step-by-step approaches to hardening Kubernetes deployments against common attack vectors...",
                    date: "December 15, 2024",
                    readTime: "15 min read",
                    tags: ["Kubernetes", "Container Security", "DevSecOps"],
                    color: "border-yellow-600",
                    bgGradient: "from-yellow-900/20 to-yellow-600/5",
                  },
                ].map((article, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    whileHover={{ scale: 1.03 }}
                    className={`min-w-[300px] md:min-w-[350px] max-w-[350px] p-6 rounded-xl shadow-lg border-l-4 ${article.color} bg-gradient-to-br ${article.bgGradient} snap-start flex-shrink-0`}
                  >
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1"
                    >
                      Read More <ChevronRight className="h-3 w-3" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(96, 165, 250, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 px-6 py-3 rounded-lg inline-flex items-center gap-2"
                >
                  <Link
                    href="https://linktr.ee/satendersingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View All Articles <ChevronRight className="h-4 w-4" />
                  </Link>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-gray-950"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Contact Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, cybersecurity challenges, or opportunities
            </motion.p>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg text-white ${activeTab === "general" ? "bg-blue-600" : "bg-gray-700"}`}
                  onClick={() => setActiveTab("general")}
                >
                  General Inquiry
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg text-white ${activeTab === "resume" ? "bg-blue-600" : "bg-gray-700"}`}
                  onClick={() => setActiveTab("resume")}
                  id="resume-request"
                >
                  Request Resume
                </motion.button>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold">Get In Touch</h3>
                  <p className="text-gray-300">Feel free to reach out or schedule a call.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 rounded-md">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>satenderkumar.analyst@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 rounded-md">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span>+1 (226) 637-6900</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 rounded-md">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <Link
                        href="https://www.linkedin.com/in/satender-singh2430/"
                        className="hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/satender-singh2430
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 rounded-md">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <Link
                        href="https://calendly.com/satenderkumar-analyst"
                        className="hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        calendly.com/satenderkumar-analyst
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 rounded-md">
                        <Link2 className="h-5 w-5" />
                      </div>
                      <Link
                        href="https://linktr.ee/satendersingh"
                        className="hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linktr.ee/satendersingh
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-yellow-400">Security Notice</h4>
                        <p className="text-sm text-gray-300">
                          Forms are protected by DOMPurify sanitization for secure communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Contact Form */}
                  {activeTab === "general" && (
                    <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg border border-gray-800">
                      <h3 className="text-xl font-semibold mb-4">General Inquiry</h3>
                      <form onSubmit={sendContact}>
                        <div className="mb-4">
                          <label htmlFor="contact-name" className="block mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleContactChange}
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="contact-email" className="block mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="contact-email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleContactChange}
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="contact-message" className="block mb-2">
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            value={contactForm.message}
                            onChange={handleContactChange}
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={5}
                            required
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)" }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          className="w-full bg-blue-600 px-6 py-3 rounded-lg mt-4"
                        >
                          Send Message
                        </motion.button>
                        <AnimatePresence>
                          {contactStatus && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="mt-4 text-center"
                              aria-live="polite"
                            >
                              {contactStatus}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </form>
                    </div>
                  )}

                  {/* Resume Request Form */}
                  {activeTab === "resume" && (
                    <div className="bg-gray-900/50 p-6 rounded-xl shadow-lg border border-gray-800">
                      <h3 className="text-xl font-semibold mb-4">Request Resume</h3>
                      <form onSubmit={sendResumeRequest}>
                        <div className="mb-4">
                          <label htmlFor="resume-name" className="block mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="resume-name"
                            name="name"
                            value={resumeForm.name}
                            onChange={handleResumeChange}
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="resume-email" className="block mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="resume-email"
                            name="email"
                            value={resumeForm.email}
                            onChange={handleResumeChange}
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="resume-reason" className="block mb-2">
                            Reason for Request
                          </label>
                          <textarea
                            id="resume-reason"
                            name="reason"
                            value={resumeForm.reason}
                            onChange={handleResumeChange}
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={5}
                            required
                            placeholder="Please briefly explain why you're requesting my resume"
                          ></textarea>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)" }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          className="w-full bg-blue-600 px-6 py-3 rounded-lg mt-4"
                        >
                          Request Resume
                        </motion.button>
                        <AnimatePresence>
                          {resumeStatus && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="mt-4 text-center"
                              aria-live="polite"
                            >
                              {resumeStatus}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </form>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-gray-950 border-t border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" /> Satender Kumar
              </h3>
              <p className="text-sm text-gray-400">
                Cybersecurity Analyst specializing in cloud security, SIEM, and IAM solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {["about", "experience", "projects", "certifications", "contact"].map((section) => (
                  <li key={section}>
                    <Link href={`#${section}`} className="text-gray-400 hover:text-blue-400">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/satender-singh2430/"
                    className="text-gray-400 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendly.com/satenderkumar-analyst"
                    className="text-gray-400 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calendly
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linktr.ee/satendersingh"
                    className="text-gray-400 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linktree
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://public.tableau.com/app/profile/satender.kumar3531/vizzes"
                    className="text-gray-400 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tableau
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#resume-request" className="text-gray-400 hover:text-blue-400">
                    Request Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.credly.com/users/satender-kumar.2430"
                    className="text-gray-400 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Credentials
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-center text-sm text-gray-400"
          >
            © {new Date().getFullYear()} Satender Kumar. All rights reserved.
          </motion.div>
        </div>
      </motion.footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-4 right-4 p-3 bg-blue-600 rounded-full"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* GDPR Consent */}
      <AnimatePresence>
        {showGDPR && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 border-t border-gray-700 z-50"
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-300">
                This website uses cookies to enhance your experience. By continuing, you agree to our privacy policy.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={acceptGDPR}
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                Accept
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
