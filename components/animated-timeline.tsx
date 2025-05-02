"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useScroll } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import {
  FlameIcon as Fire,
  Trophy,
  Target,
  Cloud,
  Shield,
  Lock,
  Database,
  Server,
  FileText,
  Cpu,
  Fingerprint,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  FileCode2,
  Building2,
  ExternalLink,
  TrendingUp,
} from "lucide-react"

interface Achievement {
  metric: string
  description: string
  icon: React.ReactNode
}

interface TimelineItem {
  date: string
  title: string
  company: string
  companyDescription?: string
  description: string
  skills: string[]
  color?: string
  iconColor?: string
  logo?: string
  milestone?: string
  milestoneType?: "promotion" | "achievement" | "impact"
  impact?: string
  animation?: {
    icon: React.ReactNode
    animationType: "pulse" | "rotate" | "bounce" | "float"
  }
  category?: "security" | "iam" | "support" | "development"
  achievements?: Achievement[]
}

interface AnimatedTimelineProps {
  items: TimelineItem[]
}

export function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Add these helper functions before the return statement
  // Helper function to calculate time span
  function getTimeSpan(dateRange: string): string {
    const dates = dateRange.split(" - ")
    if (dates.length !== 2) return "N/A"

    const startDate = parseDate(dates[0])
    const endDate = dates[1].toLowerCase() === "present" ? new Date() : parseDate(dates[1])

    if (!startDate || !endDate) return "N/A"

    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())

    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`
    } else {
      return `${years}y ${remainingMonths}m`
    }
  }

  // Helper function to parse date strings
  function parseDate(dateStr: string): Date | null {
    const months: Record<string, number> = {
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11,
    }

    const parts = dateStr.toLowerCase().split(" ")
    if (parts.length !== 2) return null

    const month = months[parts[0].substring(0, 3)]
    if (month === undefined) return null

    const year = Number.parseInt(parts[1])
    if (isNaN(year)) return null

    return new Date(year, month)
  }

  // Helper function to calculate width percentage based on time span
  function getTimeSpanWidth(dateRange: string): string {
    const dates = dateRange.split(" - ")
    if (dates.length !== 2) return "50%"

    const startDate = parseDate(dates[0])
    const endDate = dates[1].toLowerCase() === "present" ? new Date() : parseDate(dates[1])

    if (!startDate || !endDate) return "50%"

    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())

    // Scale: 0-12 months: 25-50%, 12-24 months: 50-75%, 24+ months: 75-100%
    const percentage = 25 + (Math.min(months, 36) / 36) * 75
    return `${percentage}%`
  }

  // Add this helper function before the return statement
  function getResponsibilities(title: string): string[] {
    switch (title) {
      case "Information Security Analyst":
        return [
          "Led 24x7 SOC operations monitoring and responding to security incidents",
          "Implemented security frameworks to protect cloud infrastructure",
          "Conducted threat hunting and vulnerability assessments",
          "Developed and maintained security documentation and procedures",
          "Collaborated with IT teams to implement security controls",
        ]
      case "Identity and Access Management (IAM) Analyst":
        return [
          "Designed and implemented IAM policies and procedures",
          "Automated user provisioning and deprovisioning workflows",
          "Managed access controls for 5,000+ users across multiple systems",
          "Conducted regular access reviews and implemented least privilege principles",
          "Deployed and managed MFA solutions",
        ]
      case "IT Support Specialist":
        return [
          "Provided technical support for Microsoft 365 environments",
          "Implemented basic security controls and best practices",
          "Managed user accounts and permissions",
          "Created documentation for support processes",
          "Resolved technical issues within SLA timeframes",
        ]
      case "Technical Support Specialist":
        return [
          "Delivered remote technical support to clients",
          "Created documentation for support processes",
          "Troubleshot hardware and software issues",
          "Maintained knowledge base of common issues and resolutions",
          "Achieved high customer satisfaction ratings",
        ]
      default:
        return [
          "Managed day-to-day operations and responsibilities",
          "Collaborated with team members on key initiatives",
          "Implemented best practices and process improvements",
          "Maintained documentation and knowledge sharing",
        ]
    }
  }

  // Add this in a useEffect
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        // Reduce animation complexity on mobile
        setReducedMotion(true)
      } else {
        setReducedMotion(false)
      }
    }

    window.addEventListener("resize", checkMobile)
    checkMobile()

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Function to get tag color based on skill domain
  const getTagColor = (skill: string) => {
    if (skill.includes("AWS") || skill.includes("Azure") || skill.includes("Cloud")) {
      return "bg-[#0ea5e9]/30 text-[#38bdf8] border-[#0ea5e9]/50 font-semibold" // Brighter blue for Cloud
    } else if (
      skill.includes("SIEM") ||
      skill.includes("Splunk") ||
      skill.includes("Sentinel") ||
      skill.includes("Threat")
    ) {
      return "bg-[#9333ea]/30 text-[#c084fc] border-[#9333ea]/50 font-semibold" // Brighter purple for SIEM/Threat
    } else if (
      skill.includes("IAM") ||
      skill.includes("Okta") ||
      skill.includes("AD") ||
      skill.includes("RBAC") ||
      skill.includes("ABAC") ||
      skill.includes("MFA") ||
      skill.includes("Zero Trust")
    ) {
      return "bg-[#06b6d4]/30 text-[#22d3ee] border-[#06b6d4]/50 font-semibold" // Brighter teal for IAM/Access
    } else if (
      skill.includes("Compliance") ||
      skill.includes("NIST") ||
      skill.includes("ISO") ||
      skill.includes("GDPR") ||
      skill.includes("PCI")
    ) {
      return "bg-[#eab308]/30 text-[#facc15] border-[#eab308]/50 font-semibold" // Brighter yellow for Compliance
    } else if (
      skill.includes("Python") ||
      skill.includes("PowerShell") ||
      skill.includes("Automation") ||
      skill.includes("Scripting")
    ) {
      return "bg-[#10b981]/30 text-[#34d399] border-[#10b981]/50 font-semibold" // Brighter green for Automation
    } else {
      return "bg-[#6b7280]/30 text-[#9ca3af] border-[#6b7280]/50 font-semibold" // Brighter gray for Support/IT Ops
    }
  }

  // Function to get milestone icon
  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case "promotion":
        return <Fire className="h-4 w-4 text-orange-400" />
      case "achievement":
        return <Trophy className="h-4 w-4 text-yellow-400" />
      case "impact":
        return <Target className="h-4 w-4 text-green-400" />
      default:
        return null
    }
  }

  // Function to get animation for role icon
  const getAnimationProps = (animationType: string) => {
    switch (animationType) {
      case "pulse":
        return {
          animate: { scale: [1, 1.2, 1] },
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
        }
      case "rotate":
        return {
          animate: { rotate: [0, 10, -10, 0] },
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 3 },
        }
      case "bounce":
        return {
          animate: { y: [0, -5, 0] },
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
        }
      case "float":
        return {
          animate: { y: [0, -3, 0], opacity: [1, 0.8, 1] },
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 2.5 },
        }
      default:
        return {
          animate: {},
          transition: {},
        }
    }
  }

  // Function to get gradient based on career level and category
  const getGradient = (index: number, category?: string) => {
    // Reverse the index to show progression (newest jobs have stronger colors)
    const reversedIndex = items.length - 1 - index

    // First prioritize by category if available
    if (category) {
      switch (category) {
        case "security":
          return "from-[#0f4c81]/80 to-[#1a6bac]/60"
        case "iam":
          return "from-[#4a2882]/80 to-[#6a3cb5]/60"
        case "support":
          return "from-[#0a7d8c]/80 to-[#0fb8c9]/60"
        case "development":
          return "from-[#0f766e]/80 to-[#14b8a6]/60"
        default:
          break
      }
    }

    // Fallback to progression-based gradients
    switch (reversedIndex) {
      case 0: // Entry level - more vibrant blue
        return "from-[#0f4c81]/80 to-[#1a6bac]/60"
      case 1: // Mid level - more vibrant teal
        return "from-[#0a7d8c]/80 to-[#0fb8c9]/60"
      case 2: // Senior level - more vibrant purple
        return "from-[#4a2882]/80 to-[#6a3cb5]/60"
      case 3: // Lead level - more vibrant deep blue
        return "from-[#001e5f]/80 to-[#0046c0]/60"
      default:
        return "from-[#0f4c81]/80 to-[#1a6bac]/60"
    }
  }

  // Function to get card shadow based on category
  const getCardShadow = (category?: string) => {
    switch (category) {
      case "security":
        return "shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3),0_8px_10px_-6px_rgba(14,165,233,0.2)]"
      case "iam":
        return "shadow-[0_10px_25px_-5px_rgba(147,51,234,0.3),0_8px_10px_-6px_rgba(147,51,234,0.2)]"
      case "support":
        return "shadow-[0_10px_25px_-5px_rgba(6,182,212,0.3),0_8px_10px_-6px_rgba(6,182,212,0.2)]"
      case "development":
        return "shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3),0_8px_10px_-6px_rgba(16,185,129,0.2)]"
      default:
        return "shadow-[0_10px_25px_-5px_rgba(0,191,166,0.3),0_8px_10px_-6px_rgba(0,191,166,0.2)]"
    }
  }

  return (
    <TooltipProvider>
      <div
        ref={containerRef}
        className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#074d77] before:to-transparent"
      >
        {/* Scroll progress tracker */}
        <motion.div
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#00BFA6] origin-top z-0"
          style={{
            scaleY: scrollYProgress,
            translateX: "-50%",
          }}
        />

        {items.map((item, index) => {
          const isEven = index % 2 === 0
          const gradient = getGradient(index, item.category)
          const cardShadow = getCardShadow(item.category)
          const animationProps = item.animation
            ? getAnimationProps(item.animation.animationType)
            : { animate: {}, transition: {} }

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: isEven ? -50 : 50,
                y: 50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      x: isEven ? -50 : 50,
                      y: 50,
                    }
              }
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1], // Improved easing function
                staggerChildren: 0.1,
                delayChildren: 0.1,
              }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group timeline-item"
            >
              {/* Timeline node with animated icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#074d77] bg-[#0D1B2A] shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {item.animation ? (
                  <motion.div {...animationProps} className={item.iconColor || "text-[#00BFA6]"}>
                    {item.animation.icon}
                  </motion.div>
                ) : (
                  <motion.span
                    className={`w-3 h-3 ${item.iconColor || "bg-[#00BFA6]"} rounded-full`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.2 }}
                  />
                )}
              </div>

              {/* Timeline card with content */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 191, 166, 0.4), 0 10px 10px -5px rgba(0, 191, 166, 0.3)",
                }}
                transition={{ duration: 0.2 }}
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${expandedItem === index ? "z-20" : "z-10"}`}
              >
                <Card
                  className={`p-4 rounded-xl ${cardShadow} bg-gradient-to-br ${gradient} border-[#00BFA6]/40 border-2 timeline-card backdrop-blur-sm hover:shadow-[0_15px_30px_-5px_rgba(0,191,166,0.5),0_10px_15px_-5px_rgba(0,191,166,0.4)] transition-all duration-300`}
                  onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExpandedItem(expandedItem === index ? null : index)
                    }
                  }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col space-y-1">
                      {/* Date and milestone badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#22d3ee]">{item.date}</span>

                        {/* Milestone badge if present */}
                        {item.milestone && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0D1B2A]/70 text-xs font-medium border border-[#00BFA6]/40">
                            {getMilestoneIcon(item.milestoneType || "achievement")}
                            <span className="text-white">{item.milestone}</span>
                          </div>
                        )}
                      </div>

                      {/* Add after the date span in the card content */}
                      <div className="mt-1 mb-2">
                        <div className="h-1.5 w-full bg-[#0D1B2A]/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#00BFA6] to-[#074d77]"
                            style={{
                              width: getTimeSpanWidth(item.date),
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: getTimeSpanWidth(item.date) }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-[#E0E1DD]/60 mt-0.5">
                          <span>Start</span>
                          <span>{getTimeSpan(item.date)}</span>
                        </div>
                      </div>

                      {/* Job title with gradient */}
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-[#E0E1DD] bg-clip-text text-transparent">
                        {item.title}
                      </h3>

                      {/* Company name with tooltip */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-1.5 mt-1 bg-[#ffffff]/10 px-2 py-1 rounded-md border border-[#ffffff]/20 shadow-sm cursor-help">
                            <Building2 className="h-4 w-4 text-white" />
                            <p className="text-sm text-white font-semibold">{item.company}</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="max-w-xs bg-[#0D1B2A] border border-[#00BFA6]/40 text-white"
                        >
                          <p>{item.companyDescription || item.company}</p>
                        </TooltipContent>
                      </Tooltip>

                      {/* Job description */}
                      <p className="text-sm text-[#E0E1DD]/90 mt-1">{item.description}</p>

                      {/* Impact highlight with animated count */}
                      {item.impact && (
                        <div className="mt-2 text-sm">
                          <span className="text-[#22d3ee] font-medium">→ {item.impact}</span>
                        </div>
                      )}

                      {/* Achievements section */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="mt-3 space-y-2">
                          <h4 className="text-xs uppercase tracking-wider text-[#E0E1DD]/70">Key Achievements</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-center gap-2 bg-[#ffffff]/5 rounded-md p-2"
                              >
                                <div className="shrink-0">{achievement.icon}</div>
                                <div>
                                  <span className="text-[#22d3ee] font-bold">{achievement.metric}</span>
                                  <span className="text-xs text-[#E0E1DD]/80 ml-1">{achievement.description}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Skills section with animated badges */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {item.skills.map((skill, i) => (
                          <motion.div
                            key={skill}
                            whileHover={{ scale: 1.1, y: -2 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 + index * 0.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className={`${getTagColor(skill)} shadow-md flex items-center gap-1.5 pl-1.5 pr-2`}
                              title={getSkillTooltip(skill)}
                            >
                              <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: Math.random() * 2 }}
                              >
                                {getSkillIcon(skill)}
                              </motion.div>
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {/* Add this after the skills section but before the expand indicator */}
                      {expandedItem === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-3 border-t border-[#00BFA6]/20"
                        >
                          <h4 className="text-sm font-semibold text-[#22d3ee] mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1.5 text-sm text-[#E0E1DD]/80 pl-5 list-disc">
                            {getResponsibilities(item.title).map((resp, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                              >
                                {resp}
                              </motion.li>
                            ))}
                          </ul>

                          {item.impact && (
                            <div className="mt-3 p-2 bg-[#0D1B2A]/50 rounded-md border border-[#00BFA6]/20">
                              <div className="flex items-center gap-1.5 mb-1">
                                <TrendingUp className="h-4 w-4 text-[#00BFA6]" />
                                <span className="text-sm font-semibold text-[#22d3ee]">Impact:</span>
                              </div>
                              <p className="text-sm text-[#E0E1DD]/90">{item.impact}</p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* Expand indicator */}
                      <motion.div
                        className="mt-2 text-center text-xs text-[#E0E1DD]/50"
                        animate={{ y: [0, 3, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <ExternalLink className="h-3 w-3 inline-block mr-1" />
                        {expandedItem === index ? "Click to collapse" : "Click to expand"}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </TooltipProvider>
  )
}

// Helper function to provide tooltips for skills
function getSkillTooltip(skill: string): string {
  const tooltips: Record<string, string> = {
    "RBAC/ABAC": "Role-Based Access Control / Attribute-Based Access Control",
    MFA: "Multi-Factor Authentication",
    SIEM: "Security Information and Event Management",
    AWS: "Amazon Web Services",
    "Azure AD": "Microsoft Azure Active Directory",
    "Zero Trust": "Security model that requires strict identity verification for every person and device",
    Splunk: "Data analytics platform for security monitoring",
    Compliance: "Adherence to regulatory standards and requirements",
  }

  return tooltips[skill] || skill
}

// Helper function to get icon for each skill
function getSkillIcon(skill: string) {
  // Cloud & Infrastructure
  if (skill.includes("AWS")) return <Cloud className="h-3.5 w-3.5" />
  if (skill.includes("Azure")) return <Cloud className="h-3.5 w-3.5" />
  if (skill.includes("Cloud")) return <Cloud className="h-3.5 w-3.5" />

  // Security & Monitoring
  if (skill.includes("SIEM")) return <AlertCircle className="h-3.5 w-3.5" />
  if (skill.includes("Splunk")) return <Database className="h-3.5 w-3.5" />
  if (skill.includes("Compliance")) return <CheckCircle2 className="h-3.5 w-3.5" />
  if (skill.includes("Security")) return <Shield className="h-3.5 w-3.5" />

  // IAM & Access
  if (skill.includes("IAM")) return <Fingerprint className="h-3.5 w-3.5" />
  if (skill.includes("Okta")) return <Lock className="h-3.5 w-3.5" />
  if (skill.includes("AD")) return <Lock className="h-3.5 w-3.5" />
  if (skill.includes("RBAC")) return <Lock className="h-3.5 w-3.5" />
  if (skill.includes("ABAC")) return <Lock className="h-3.5 w-3.5" />
  if (skill.includes("MFA")) return <Shield className="h-3.5 w-3.5" />
  if (skill.includes("Zero Trust")) return <Shield className="h-3.5 w-3.5" />

  // IT & Support
  if (skill.includes("Microsoft 365")) return <FileCode2 className="h-3.5 w-3.5" />
  if (skill.includes("Technical Support")) return <HelpCircle className="h-3.5 w-3.5" />
  if (skill.includes("Documentation")) return <FileText className="h-3.5 w-3.5" />
  if (skill.includes("Troubleshooting")) return <Cpu className="h-3.5 w-3.5" />

  // Default
  return <Server className="h-3.5 w-3.5" />
}
