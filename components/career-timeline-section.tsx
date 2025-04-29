"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedTimeline } from "@/components/animated-timeline"
import { Shield, Laptop, HelpCircle, Lock } from "lucide-react"

export default function CareerTimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const timelineItems = [
    {
      date: "Oct 2023 - Present",
      title: "Information Security Analyst",
      company: "Paladin Security Group Ltd",
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
    },
    {
      date: "Feb 2022 - Aug 2023",
      title: "Identity and Access Management (IAM) Analyst",
      company: "GardaWorld",
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
    },
    {
      date: "Apr 2019 - Aug 2021",
      title: "IT Support Specialist",
      company: "IEIMT",
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
    },
    {
      date: "Jan 2017 - Feb 2019",
      title: "Technical Support Specialist",
      company: "Lenovo India",
      description: "Delivered remote support to clients and created documentation for support processes.",
      skills: ["Technical Support", "Documentation", "Troubleshooting"],
      color: "bg-gradient-to-br from-amber-500/10 to-amber-400/5 border border-amber-500/30",
      iconColor: "text-[#074d77]",
      impact: "Created documentation for 10+ support processes",
      animation: {
        icon: <HelpCircle className="h-6 w-6 text-[#074d77]" />,
        animationType: "float",
      },
    },
  ]

  return (
    <section id="experience" className="py-16" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#E0E1DD]">Career Journey</h2>
          <p className="text-center text-[#E0E1DD]/80 mb-12 max-w-2xl mx-auto">
            My professional growth from technical support to specialized cybersecurity roles, demonstrating progressive
            expertise in securing digital environments.
          </p>

          <div className="progress-steps">
            <AnimatedTimeline items={timelineItems} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
