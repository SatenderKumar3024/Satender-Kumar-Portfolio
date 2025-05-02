"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedTimeline } from "@/components/animated-timeline"
import { Shield, Laptop, HelpCircle, Lock, Zap, Award, TrendingUp, ChevronRight } from "lucide-react"
import { TooltipProvider } from "@/components/ui/tooltip"
import SectionWrapper from "@/components/section-wrapper"
import { AnimatedTimelineButton } from "@/components/ui/animated-timeline-button"

export default function CareerTimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const timelineItems = [
    {
      date: "Oct 2023 - Present",
      title: "Information Security Analyst",
      company: "Paladin Security Group Ltd",
      companyDescription: "Leading Canadian Security Provider specializing in integrated security solutions",
      description: "Leading SOC operations and implementing security frameworks to protect cloud infrastructure.",
      skills: ["AWS", "Azure", "Splunk", "SIEM", "Compliance"],
      color: "bg-gradient-to-br from-blue-500/10 to-blue-400/5 border border-blue-500/30",
      iconColor: "text-[#00BFA6]",
      milestone: "Promotion",
      milestoneType: "promotion",
      impact: "Led 24x7 SOC operations, reducing MTTD by 30%",
      animation: {
        icon: <Shield className="h-6 w-6 text-[#00BFA6]" />,
        animationType: "pulse",
      },
      category: "security",
      achievements: [
        {
          metric: "30%",
          description: "Reduction in mean time to detect (MTTD)",
          icon: <Zap className="h-4 w-4 text-amber-400" />,
        },
        {
          metric: "25%",
          description: "Reduction in security gaps",
          icon: <TrendingUp className="h-4 w-4 text-green-400" />,
        },
      ],
    },
    {
      date: "Feb 2022 - Aug 2023",
      title: "Identity and Access Management (IAM) Analyst",
      company: "GardaWorld",
      companyDescription:
        "Global security services company providing physical security, cash services, and risk management",
      description: "Automated IAM workflows and implemented access controls for 5,000+ users.",
      skills: ["Okta", "Azure AD", "RBAC/ABAC", "MFA", "Zero Trust"],
      color: "bg-gradient-to-br from-purple-500/10 to-purple-400/5 border border-purple-500/30",
      iconColor: "text-[#074d77]",
      milestone: "5000+ Users Secured",
      milestoneType: "impact",
      impact: "Built automated IAM workflows, improving efficiency by 20%",
      animation: {
        icon: <Lock className="h-6 w-6 text-[#074d77]" />,
        animationType: "rotate",
      },
      category: "iam",
      achievements: [
        {
          metric: "20%",
          description: "Improvement in operational efficiency",
          icon: <TrendingUp className="h-4 w-4 text-green-400" />,
        },
        {
          metric: "30%",
          description: "Reduction in unauthorized access",
          icon: <Shield className="h-4 w-4 text-blue-400" />,
        },
      ],
    },
    {
      date: "Apr 2019 - Aug 2021",
      title: "IT Support Specialist",
      company: "IEIMT",
      companyDescription: "IT services and solutions provider focused on enterprise infrastructure management",
      description: "Provided technical support and administered Microsoft 365 environments.",
      skills: ["Microsoft 365", "IT Security", "Technical Support"],
      color: "bg-gradient-to-br from-green-500/10 to-green-400/5 border border-green-500/30",
      iconColor: "text-[#00BFA6]",
      milestone: "Security Tools Expert",
      milestoneType: "achievement",
      impact: "Achieved 95% resolution rate within SLA",
      animation: {
        icon: <Laptop className="h-6 w-6 text-[#00BFA6]" />,
        animationType: "bounce",
      },
      category: "support",
      achievements: [
        {
          metric: "95%",
          description: "Incident resolution within SLA",
          icon: <Award className="h-4 w-4 text-amber-400" />,
        },
        {
          metric: "99.9%",
          description: "System uptime across environments",
          icon: <Zap className="h-4 w-4 text-blue-400" />,
        },
      ],
    },
    {
      date: "Jan 2017 - Feb 2019",
      title: "Technical Support Specialist",
      company: "Lenovo India",
      companyDescription: "Global technology company specializing in PCs, servers, and smart devices",
      description: "Delivered remote support to clients and created documentation for support processes.",
      skills: ["Technical Support", "Documentation", "Troubleshooting"],
      color: "bg-gradient-to-br from-amber-500/10 to-amber-400/5 border border-amber-500/30",
      iconColor: "text-[#074d77]",
      impact: "Created documentation for 10+ support processes",
      animation: {
        icon: <HelpCircle className="h-6 w-6 text-[#074d77]" />,
        animationType: "float",
      },
      category: "support",
      achievements: [
        {
          metric: "95%",
          description: "Customer satisfaction rate",
          icon: <Award className="h-4 w-4 text-amber-400" />,
        },
        {
          metric: "20%",
          description: "Improvement in team efficiency",
          icon: <TrendingUp className="h-4 w-4 text-green-400" />,
        },
      ],
    },
  ]

  return (
    <SectionWrapper id="experience" className="py-16" animation="fade-up">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#E0E1DD]">Professional Journey</h2>
          <p className="text-center text-[#E0E1DD]/80 mb-12 max-w-2xl mx-auto">
            My evolution from technical support to specialized cybersecurity roles, showcasing progressive expertise in
            securing digital environments and leading security operations.
          </p>

          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#0D1B2A]/80 to-[#1B263B]/80 rounded-lg border border-[#00BFA6]/30 shadow-lg">
              <motion.div
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse" }}
                className="h-3 w-3 rounded-full bg-amber-400"
              />
              <span className="text-sm text-[#E0E1DD]/90">Technical Support</span>
              <ChevronRight className="h-4 w-4 text-[#E0E1DD]/50" />
              <motion.div
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse", delay: 0.5 }}
                className="h-3 w-3 rounded-full bg-green-400"
              />
              <span className="text-sm text-[#E0E1DD]/90">IT Security</span>
              <ChevronRight className="h-4 w-4 text-[#E0E1DD]/50" />
              <motion.div
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse", delay: 1 }}
                className="h-3 w-3 rounded-full bg-purple-400"
              />
              <span className="text-sm text-[#E0E1DD]/90">IAM Specialist</span>
              <ChevronRight className="h-4 w-4 text-[#E0E1DD]/50" />
              <motion.div
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse", delay: 1.5 }}
                className="h-3 w-3 rounded-full bg-blue-400"
              />
              <span className="text-sm text-[#E0E1DD]/90">Security Analyst</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <AnimatedTimelineButton text="Looking Forward to Future Cybersecurity Challenges in Cloud Security & SOC Leadership" />

              {/* Connector from button to timeline */}
              <motion.div
                className="absolute left-1/2 bottom-0 w-0.5 h-8 bg-gradient-to-b from-[#00BFA6] to-[#074d77] -translate-x-1/2 translate-y-full"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />

              {/* Pulse dot at the end of connector */}
              <motion.div
                className="absolute left-1/2 bottom-0 w-3 h-3 bg-[#00BFA6] rounded-full -translate-x-1/2 translate-y-[calc(100%+32px)]"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(0, 191, 166, 0.7)",
                    "0 0 0 10px rgba(0, 191, 166, 0)",
                    "0 0 0 0 rgba(0, 191, 166, 0.7)",
                  ],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              />
            </div>
          </motion.div>

          <TooltipProvider>
            <div className="progress-steps">
              <AnimatedTimeline items={timelineItems} />
            </div>
          </TooltipProvider>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
