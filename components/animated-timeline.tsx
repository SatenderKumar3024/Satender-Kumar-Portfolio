"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView, useScroll } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

interface TimelineItem {
  date: string
  title: string
  company: string
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

  // Function to get gradient based on career level
  const getGradient = (index: number) => {
    // Reverse the index to show progression (newest jobs have stronger colors)
    const reversedIndex = items.length - 1 - index

    switch (reversedIndex) {
      case 0: // Entry level - more vibrant blue
        return "from-[#0f4c81] to-[#1a6bac]"
      case 1: // Mid level - more vibrant teal
        return "from-[#0a7d8c] to-[#0fb8c9]"
      case 2: // Senior level - more vibrant purple
        return "from-[#4a2882] to-[#6a3cb5]"
      case 3: // Lead level - more vibrant deep blue
        return "from-[#001e5f] to-[#0046c0]"
      default:
        return "from-[#0f4c81] to-[#1a6bac]"
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#074d77] before:to-transparent"
    >
      {/* Scroll progress tracker */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#00BFA6] origin-top"
        style={{
          scaleY: scrollYProgress,
          translateX: "-50%",
        }}
      />

      {items.map((item, index) => {
        const isEven = index % 2 === 0
        const gradient = getGradient(index)
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
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group timeline-item"
          >
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

            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 191, 166, 0.4), 0 10px 10px -5px rgba(0, 191, 166, 0.3)",
              }}
              transition={{ duration: 0.2 }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"
            >
              <Card
                className={`p-4 rounded-xl shadow-md bg-gradient-to-br ${gradient} border-[#00BFA6]/40 border-2 timeline-card`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-[#22d3ee]">{item.date}</span>

                      {/* Milestone badge if present - make more vibrant */}
                      {item.milestone && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0D1B2A]/70 text-xs font-medium border border-[#00BFA6]/40">
                          {getMilestoneIcon(item.milestoneType || "achievement")}
                          <span className="text-white">{item.milestone}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#E0E1DD]">{item.title}</h3>
                    </div>

                    {/* Enhanced company name with icon and better visibility */}
                    <div className="flex items-center gap-1.5 mt-1 bg-[#ffffff]/10 px-2 py-1 rounded-md border border-[#ffffff]/20 shadow-sm">
                      <Building2 className="h-4 w-4 text-white" />
                      <p className="text-sm text-white font-semibold">{item.company}</p>
                    </div>

                    <p className="text-sm text-[#E0E1DD]/90 mt-1">{item.description}</p>

                    {/* Impact highlight if present - make more vibrant */}
                    {item.impact && (
                      <div className="mt-2 text-sm">
                        <span className="text-[#22d3ee] font-medium">→ {item.impact}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.skills.map((skill) => (
                        <motion.div key={skill} whileHover={{ scale: 1.1, y: -2 }}>
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
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
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
