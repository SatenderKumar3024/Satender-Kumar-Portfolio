"use client"

import { motion } from "framer-motion"
import { Timeline } from "@/components/ui/timeline"

export default function CareerTimeline() {
  const timelineItems = [
    {
      date: "Oct 2023 - Present",
      title: "Information Security Analyst",
      company: "Paladin Security Group Ltd",
      description: "Leading SOC operations and implementing security frameworks to protect cloud infrastructure.",
      impact: "Led 24x7 SOC operations, reducing MTTD by 30%",
      skills: ["AWS", "Azure", "Splunk", "SIEM", "Compliance"],
      color: "bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/40",
      milestone: "Promotion",
      milestoneType: "promotion",
    },
    {
      date: "Feb 2022 - Aug 2023",
      title: "Identity and Access Management (IAM) Analyst",
      company: "GardaWorld",
      description: "Automated IAM workflows and implemented access controls for 5,000+ users.",
      impact: "Built automated IAM workflows, improving efficiency by 20%",
      skills: ["Okta", "Azure AD", "RBAC/ABAC", "MFA", "Zero Trust"],
      color: "bg-gradient-to-br from-purple-600/20 to-purple-500/10 border border-purple-500/40",
      milestone: "5000+ Users Secured",
      milestoneType: "impact",
    },
    {
      date: "Apr 2019 - Aug 2021",
      title: "IT Support Specialist",
      company: "IEIMT",
      description: "Provided technical support and administered Microsoft 365 environments.",
      impact: "Achieved 95% resolution rate within SLA",
      skills: ["Microsoft 365", "IT Security", "Technical Support"],
      color: "bg-gradient-to-br from-green-600/20 to-green-500/10 border border-green-500/40",
      milestone: "Security Tools Expert",
      milestoneType: "achievement",
    },
    {
      date: "Jan 2017 - Feb 2019",
      title: "Technical Support Specialist",
      company: "Lenovo India",
      description: "Delivered remote support to clients and created documentation for support processes.",
      impact: "Created documentation for 10+ support processes",
      skills: ["Technical Support", "Documentation", "Troubleshooting"],
      color: "bg-gradient-to-br from-amber-600/20 to-amber-500/10 border border-amber-500/40",
    },
  ]

  return (
    <section id="career-timeline" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Career Journey</h2>
          <Timeline items={timelineItems} />
        </motion.div>
      </div>
    </section>
  )
}
