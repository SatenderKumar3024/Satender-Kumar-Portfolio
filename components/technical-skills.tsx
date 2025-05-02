"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  Cloud,
  Shield,
  Code,
  FileCheck,
  AlertTriangle,
  Network,
  BarChart,
  Lock,
  Search,
  FileWarning,
  PieChart,
  Info,
  CheckCircle,
  Award,
  Star,
  ChevronDown,
  Check,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define skill categories and their associated colors
const CATEGORY_COLORS = {
  "SIEM & Monitoring": "#5b4baf", // Violet
  "Cloud Security": "#1e90ff", // Azure Blue
  "Vulnerability Mgmt": "#e76f51", // Red-Orange
  Automation: "#1c6e54", // Dark Green
  Compliance: "#e4b343", // Golden
  "Incident Response": "#e11d48", // Red
  "IAM & Access Control": "#0078b6", // Steel Blue
  "Network Security": "#07515d", // Deep Teal
  "Data & Reporting Tools": "#00e6e6", // Aqua/Cyan
  All: "#00BFA6", // Default teal
}

export default function TechnicalSkills() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [summaryExpanded, setSummaryExpanded] = useState(true)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Enhanced animation variants with glow effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.1, 0.3, 0.5, 0.1])

  const skillCategories = [
    {
      name: "SIEM & Monitoring",
      icon: <Activity className="h-5 w-5" />,
      color: CATEGORY_COLORS["SIEM & Monitoring"],
      skills: ["Splunk", "Microsoft Sentinel", "Wireshark", "Qualys", "Nessus", "ServiceNow"],
      description: "Advanced security monitoring and event management platforms for threat detection and analysis",
    },
    {
      name: "Cloud Security",
      icon: <Cloud className="h-5 w-5" />,
      color: CATEGORY_COLORS["Cloud Security"],
      skills: ["AWS (IAM, EC2, S3)", "Azure (AZ-500)", "GCP", "Multi-Cloud Monitoring"],
      description: "Securing cloud infrastructure and services across major platforms with compliance frameworks",
    },
    {
      name: "Vulnerability Mgmt",
      icon: <FileWarning className="h-5 w-5" />,
      color: CATEGORY_COLORS["Vulnerability Mgmt"],
      skills: ["Qualys", "Nessus", "CVE Analysis", "Container Security"],
      description: "Comprehensive vulnerability assessment, prioritization, and remediation across environments",
    },
    {
      name: "Automation",
      icon: <Code className="h-5 w-5" />,
      color: CATEGORY_COLORS["Automation"],
      skills: ["Python", "PowerShell", "Bash", "API Security", "SOAR Workflows"],
      description: "Security automation and orchestration to streamline operations and incident response",
    },
    {
      name: "Compliance",
      icon: <FileCheck className="h-5 w-5" />,
      color: CATEGORY_COLORS["Compliance"],
      skills: ["NIST 800-53", "ISO 27001", "SOC2", "PCI DSS", "GDPR"],
      description: "Implementation and assessment of security controls to meet regulatory requirements",
    },
    {
      name: "Incident Response",
      icon: <AlertTriangle className="h-5 w-5" />,
      color: CATEGORY_COLORS["Incident Response"],
      skills: ["Threat Detection", "Containment", "Remediation", "IR Playbooks"],
      description: "Structured approach to handling security incidents from detection to resolution",
    },
    {
      name: "IAM & Access Control",
      icon: <Lock className="h-5 w-5" />,
      color: CATEGORY_COLORS["IAM & Access Control"],
      skills: ["Azure AD / Entra ID", "Okta", "SSO", "RBAC", "ABAC"],
      description: "Identity and access management solutions to secure user authentication and authorization",
    },
    {
      name: "Network Security",
      icon: <Network className="h-5 w-5" />,
      color: CATEGORY_COLORS["Network Security"],
      skills: ["Firewalls", "IDS/IPS", "DDoS Protection", "DNS", "Zero Trust Architecture"],
      description: "Protection of network infrastructure and traffic with advanced security controls",
    },
    {
      name: "Data & Reporting Tools",
      icon: <PieChart className="h-5 w-5" />,
      color: CATEGORY_COLORS["Data & Reporting Tools"],
      skills: ["Power BI", "Tableau", "Excel", "Dataiku", "Alteryx"],
      description: "Data visualization and analytics tools for security metrics and executive reporting",
    },
  ]

  // Highlighted skills that should be more prominent
  const highlightedSkills = [
    {
      name: "Microsoft Sentinel",
      color: CATEGORY_COLORS["SIEM & Monitoring"],
      icon: <Shield className="h-4 w-4 mr-2" />,
      tooltip: "SIEM platform for threat detection and response",
      category: "SIEM & Monitoring",
      proficiency: 95,
      verified: true,
    },
    {
      name: "Splunk",
      color: CATEGORY_COLORS["SIEM & Monitoring"],
      icon: <Search className="h-4 w-4 mr-2" />,
      tooltip: "Data analytics platform for security monitoring",
      category: "SIEM & Monitoring",
      proficiency: 90,
      verified: true,
    },
    {
      name: "AWS",
      color: CATEGORY_COLORS["Cloud Security"],
      icon: <Cloud className="h-4 w-4 mr-2" />,
      tooltip: "Amazon Web Services cloud security expertise",
      category: "Cloud Security",
      proficiency: 85,
      verified: true,
    },
    {
      name: "Azure",
      color: CATEGORY_COLORS["Cloud Security"],
      icon: <Cloud className="h-4 w-4 mr-2" />,
      tooltip: "Microsoft Azure cloud security expertise",
      category: "Cloud Security",
      proficiency: 90,
      verified: true,
    },
    {
      name: "Python",
      color: CATEGORY_COLORS["Automation"],
      icon: <Code className="h-4 w-4 mr-2" />,
      tooltip: "Security automation and scripting",
      category: "Automation",
      proficiency: 85,
      verified: false,
    },
    {
      name: "NIST 800-53",
      color: CATEGORY_COLORS["Compliance"],
      icon: <FileCheck className="h-4 w-4 mr-2" />,
      tooltip: "Security controls framework for federal information systems",
      category: "Compliance",
      proficiency: 90,
      verified: true,
    },
    {
      name: "ISO 27001",
      color: CATEGORY_COLORS["Compliance"],
      icon: <FileCheck className="h-4 w-4 mr-2" />,
      tooltip: "International standard for information security management",
      category: "Compliance",
      proficiency: 85,
      verified: false,
    },
    {
      name: "Threat Detection",
      color: CATEGORY_COLORS["Incident Response"],
      icon: <AlertTriangle className="h-4 w-4 mr-2" />,
      tooltip: "Identifying potential security threats in real-time",
      category: "Incident Response",
      proficiency: 95,
      verified: true,
    },
    {
      name: "Power BI",
      color: CATEGORY_COLORS["Data & Reporting Tools"],
      icon: <BarChart className="h-4 w-4 mr-2" />,
      tooltip: "Data visualization for security metrics and reporting",
      category: "Data & Reporting Tools",
      proficiency: 80,
      verified: false,
    },
    {
      name: "Okta",
      color: CATEGORY_COLORS["IAM & Access Control"],
      icon: <Lock className="h-4 w-4 mr-2" />,
      tooltip: "Identity and access management platform",
      category: "IAM & Access Control",
      proficiency: 85,
      verified: true,
    },
  ]

  // Animated counter hook with improved animation
  const AnimatedCounter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const isCountInView = useInView(countRef, { once: true, amount: 0.5 })

    useEffect(() => {
      if (isCountInView) {
        let start = 0
        const end = Number.parseInt(value)
        // Ensure we have at least 20 steps for smooth animation
        const steps = Math.max(20, end)
        const incrementTime = (duration * 1000) / steps
        const increment = end / steps

        const timer = setInterval(() => {
          start = Math.min(end, start + increment)
          setCount(Math.round(start))
          if (start >= end) clearInterval(timer)
        }, incrementTime)

        return () => clearInterval(timer)
      }
    }, [value, duration, isCountInView])

    return <span ref={countRef}>{count}</span>
  }

  // Always show all categories and skills since we removed the filters
  const filteredCategories = skillCategories
  const filteredHighlightedSkills = highlightedSkills

  return (
    <section
      id="skills"
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "#0D1B2A" }}
      ref={sectionRef}
    >
      {/* Enhanced animated background with parallax effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(0, 191, 166, 0.2) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 191, 166, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 191, 166, 0.1) 50%, rgba(0, 191, 166, 0.1) 75%, transparent 75%, transparent)`,
            backgroundSize: "60px 60px",
            opacity: 0.05,
          }}
        ></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              backgroundColor: `rgba(0, 191, 166, ${Math.random() * 0.5 + 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center mb-12">
            <motion.div
              className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#1A374D] to-[#406882] rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(0, 191, 166, 0)",
                  "0 0 20px rgba(0, 191, 166, 0.5)",
                  "0 0 0 rgba(0, 191, 166, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Shield className="h-6 w-6 text-[#00BFA6]" />
            </motion.div>
            <motion.h2
              className="text-4xl font-bold mb-3 text-center text-[#E0E1DD] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Technical Skills & Expertise
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#00BFA6] to-[#1e90ff] rounded-full mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-center text-[#E0E1DD]/80 mb-8 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Specialized expertise across cybersecurity domains, with a focus on cloud security, SIEM implementation,
              threat detection, and compliance frameworks. Proven experience with enterprise security tools and
              architectures.
            </motion.p>

            {/* PDF Download Button with enhanced animation */}
            {/* Category Filter Tabs with enhanced animations */}
          </div>

          {/* Highlighted Skills with improved visual hierarchy and animations */}
          <AnimatePresence mode="wait">
            {filteredHighlightedSkills.length > 0 && (
              <motion.div
                key={`highlighted-skills-${selectedCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                className="mb-16"
              >
                <div className="flex items-center justify-center gap-2 mb-8">
                  <motion.div
                    className="h-10 w-10 rounded-lg bg-[rgba(0,191,166,0.1)] flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(0, 191, 166, 0)",
                        "0 0 15px rgba(0, 191, 166, 0.5)",
                        "0 0 0 rgba(0, 191, 166, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Star className="h-5 w-5 text-[#00BFA6]" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-[#E0E1DD]">Core Competencies</h3>
                </div>

                <motion.div
                  className="p-8 rounded-xl bg-gradient-to-br from-[rgba(26,55,77,0.7)] to-[rgba(13,27,42,0.7)] border border-[rgba(255,255,255,0.1)] shadow-xl mb-12 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ boxShadow: "0 8px 32px rgba(0, 191, 166, 0.25)" }}
                >
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <TooltipProvider>
                      {filteredHighlightedSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          custom={index}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: `0 10px 25px ${skill.color}80`,
                            y: -5,
                          }}
                          className="rounded-xl overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm"
                          style={{
                            boxShadow: `0 5px 15px ${skill.color}30`,
                          }}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex flex-col h-full">
                                <div
                                  className="p-3 flex items-center justify-between border-b border-[rgba(255,255,255,0.1)]"
                                  style={{ backgroundColor: `${skill.color}20` }}
                                >
                                  <div className="flex items-center">
                                    <motion.div
                                      className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                                      style={{
                                        backgroundColor: `${skill.color}30`,
                                        boxShadow: `0 0 10px ${skill.color}50`,
                                      }}
                                      animate={{ rotate: [0, 5, -5, 0] }}
                                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                                    >
                                      {skill.icon}
                                    </motion.div>
                                    <span
                                      className="font-semibold flex items-center gap-1"
                                      style={{ color: skill.color }}
                                    >
                                      {skill.name}
                                      {skill.verified && (
                                        <motion.div
                                          whileHover={{ scale: 1.2 }}
                                          animate={{ y: [0, -2, 0] }}
                                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                                        >
                                          <Check className="h-3.5 w-3.5 text-[#00BFA6] bg-[#00BFA6]/10 rounded-full p-0.5" />
                                        </motion.div>
                                      )}
                                    </span>
                                  </div>
                                  <span className="text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,0.1)] text-white">
                                    {skill.category}
                                  </span>
                                </div>
                                <div className="p-3 flex-grow">
                                  <div className="mb-2 flex justify-between items-center">
                                    <span className="text-xs text-[#E0E1DD]/70">Proficiency</span>
                                    <span className="text-xs font-medium text-[#00BFA6]">
                                      <AnimatedCounter value={skill.proficiency} />%
                                    </span>
                                  </div>
                                  <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-1.5 overflow-hidden">
                                    <motion.div
                                      className="h-1.5 rounded-full"
                                      style={{
                                        backgroundColor: skill.color,
                                        boxShadow: `0 0 8px ${skill.color}80`,
                                      }}
                                      initial={{ width: 0 }}
                                      animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                    ></motion.div>
                                  </div>
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </motion.div>
                      ))}
                    </TooltipProvider>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skill Categories with enhanced design and animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`categories-${selectedCategory}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <TooltipProvider>
                {filteredCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: categoryIndex * 0.1 }}
                    whileHover={{
                      y: -10,
                      boxShadow: `0 15px 30px ${category.color}50`,
                    }}
                    className="h-full"
                  >
                    <Card
                      className="h-full bg-gradient-to-br from-[#1A374D]/90 to-[#0D1B2A]/90 border-2 rounded-xl overflow-hidden backdrop-blur-sm"
                      style={{
                        borderColor: `${category.color}40`,
                        boxShadow: `0 5px 15px ${category.color}30`,
                      }}
                    >
                      <CardHeader className="pb-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <motion.div
                            className="p-3 rounded-lg"
                            style={{
                              backgroundColor: `${category.color}20`,
                              color: category.color,
                              boxShadow: `0 0 15px ${category.color}40`,
                            }}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            animate={{
                              boxShadow: [
                                `0 0 5px ${category.color}30`,
                                `0 0 15px ${category.color}60`,
                                `0 0 5px ${category.color}30`,
                              ],
                            }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                            >
                              {category.icon}
                            </motion.div>
                          </motion.div>
                          <div>
                            <CardTitle className="text-[#E0E1DD] flex items-center gap-2 text-xl">
                              {category.name}
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-[#00BFA6]/70 cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{category.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </CardTitle>
                            <p className="text-sm text-[#E0E1DD]/60 mt-1">{category.description}</p>
                          </div>
                        </div>
                        <motion.div
                          className="h-0.5 w-full rounded-full"
                          style={{
                            backgroundColor: `${category.color}30`,
                            boxShadow: `0 0 
                            backgroundColor: \`${category.color}30`,
                            boxShadow: `0 0 10px ${category.color}40`,
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : { width: 0 }}
                          transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                        ></motion.div>
                      </CardHeader>
                      <CardContent className="pt-4 p-6">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <Tooltip key={skill}>
                              <TooltipTrigger asChild>
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                  whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    boxShadow: `0 5px 15px ${category.color}60`,
                                  }}
                                  className="rounded-full px-4 py-2 text-sm font-medium cursor-help flex items-center"
                                  style={{
                                    backgroundColor: `${category.color}20`,
                                    color: category.color,
                                    border: `1px solid ${category.color}40`,
                                    boxShadow: `0 2px 8px ${category.color}30`,
                                  }}
                                >
                                  <CheckCircle className="h-3 w-3 mr-1.5 opacity-80" />
                                  {skill}
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{getSkillDescription(skill)}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TooltipProvider>
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] overflow-hidden backdrop-blur-sm"
            whileHover={{ boxShadow: "0 8px 32px rgba(0, 191, 166, 0.25)" }}
          >
            <div
              className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.1)] cursor-pointer"
              onClick={() => setSummaryExpanded(!summaryExpanded)}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="h-10 w-10 rounded-lg bg-[rgba(0,191,166,0.1)] flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 191, 166, 0)",
                      "0 0 15px rgba(0, 191, 166, 0.5)",
                      "0 0 0 rgba(0, 191, 166, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Award className="h-5 w-5 text-[#00BFA6]" />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#E0E1DD]">Skills Summary</h3>
              </div>
              <motion.div animate={{ rotate: summaryExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="h-5 w-5 text-[#E0E1DD]/70" />
              </motion.div>
            </div>

            <AnimatePresence>
              {summaryExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
                >
                  <div className="p-6">
                    <p className="text-[#E0E1DD]/80">
                      My technical expertise spans across multiple cybersecurity domains with particular strength in
                      cloud security, SIEM implementation, and incident response. I maintain proficiency in
                      industry-leading tools and frameworks while continuously expanding my knowledge in emerging
                      security technologies and methodologies.
                    </p>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <motion.div
                        className="p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 25px rgba(0, 191, 166, 0.3)",
                          backgroundColor: "rgba(255,255,255,0.08)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-[#00BFA6]" />
                          <h4 className="font-medium text-[#E0E1DD]">Security Focus</h4>
                        </div>
                        <p className="text-sm text-[#E0E1DD]/70">
                          Specialized in threat detection, cloud security architecture, and compliance frameworks with a
                          focus on proactive defense strategies.
                        </p>
                      </motion.div>

                      <motion.div
                        className="p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 25px rgba(0, 191, 166, 0.3)",
                          backgroundColor: "rgba(255,255,255,0.08)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="h-4 w-4 text-[#00BFA6]" />
                          <h4 className="font-medium text-[#E0E1DD]">Technical Depth</h4>
                        </div>
                        <p className="text-sm text-[#E0E1DD]/70">
                          Deep technical knowledge in SIEM platforms, automation tools, and security orchestration with
                          hands-on implementation experience.
                        </p>
                      </motion.div>

                      <motion.div
                        className="p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 25px rgba(0, 191, 166, 0.3)",
                          backgroundColor: "rgba(255,255,255,0.08)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className="h-4 w-4 text-[#00BFA6]" />
                          <h4 className="font-medium text-[#E0E1DD]">Continuous Growth</h4>
                        </div>
                        <p className="text-sm text-[#E0E1DD]/70">
                          Committed to ongoing professional development through certifications, research, and staying
                          current with emerging security threats.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to provide descriptions for skills
function getSkillDescription(skill: string): string {
  const descriptions: Record<string, string> = {
    "AWS (IAM, EC2, S3)":
      "Amazon Web Services security including Identity Access Management, Elastic Compute Cloud, and Simple Storage Service",
    "Azure (AZ-500)": "Microsoft Azure security with AZ-500 certification expertise",
    GCP: "Google Cloud Platform security implementation and management",
    "Multi-Cloud Monitoring": "Cross-platform cloud security monitoring and management",
    Splunk: "Advanced SIEM platform for log analysis and security monitoring",
    "Microsoft Sentinel": "Cloud-native SIEM and SOAR solution from Microsoft",
    Wireshark: "Network protocol analyzer for security monitoring and troubleshooting",
    Qualys: "Vulnerability management and assessment platform",
    Nessus: "Vulnerability scanner for security assessment",
    ServiceNow: "IT service management platform with security operations capabilities",
    Python: "Programming language for security automation and tool development",
    PowerShell: "Scripting language for Windows security automation",
    Bash: "Unix shell scripting for security automation",
    "API Security": "Securing application programming interfaces from attacks",
    "SOAR Workflows": "Security Orchestration, Automation and Response process automation",
    "NIST 800-53": "Security controls framework for federal information systems",
    "ISO 27001": "International standard for information security management",
    SOC2: "Service Organization Control 2 compliance framework",
    "PCI DSS": "Payment Card Industry Data Security Standard",
    GDPR: "General Data Protection Regulation for data privacy",
    "Threat Detection": "Identifying potential security threats in real-time",
    Containment: "Isolating security incidents to prevent spread",
    Remediation: "Fixing security vulnerabilities and addressing incidents",
    "IR Playbooks": "Documented incident response procedures",
    "Azure AD / Entra ID": "Microsoft's cloud identity and access management service",
    Okta: "Identity and access management platform",
    SSO: "Single Sign-On authentication",
    RBAC: "Role-Based Access Control",
    ABAC: "Attribute-Based Access Control",
    Firewalls: "Network security devices that monitor and filter traffic",
    "IDS/IPS": "Intrusion Detection/Prevention Systems",
    "DDoS Protection": "Distributed Denial of Service attack mitigation",
    DNS: "Domain Name System security",
    "Zero Trust Architecture": "Security model requiring strict verification for all users and devices",
    "Power BI": "Business analytics and data visualization tool",
    Tableau: "Data visualization and business intelligence platform",
    Excel: "Spreadsheet software for data analysis",
    Dataiku: "Collaborative data science platform",
    Alteryx: "Data analytics and process automation platform",
    "CVE Analysis": "Common Vulnerabilities and Exposures assessment",
    "Container Security": "Securing containerized applications and infrastructure",
  }

  return descriptions[skill] || `Expertise in ${skill}`
}
