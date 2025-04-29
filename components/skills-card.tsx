"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Cloud, Code, FileCheck, AlertTriangle, BookOpen } from "lucide-react"

export default function SkillsCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      name: "Cloud Security",
      icon: <Cloud className="h-5 w-5" />,
      color: "#000ffd", // Strong blue
      textColor: "text-white",
    },
    {
      name: "SIEM & Threat Detection",
      icon: <Shield className="h-5 w-5" />,
      color: "#08082d", // Dark blue
      textColor: "text-white",
    },
    {
      name: "Incident Response",
      icon: <AlertTriangle className="h-5 w-5" />,
      color: "#ad2d00", // Red/orange
      textColor: "text-white",
    },
    {
      name: "Risk Management",
      icon: <FileCheck className="h-5 w-5" />,
      color: "#07515d", // Teal green
      textColor: "text-white",
    },
    {
      name: "Security Automation",
      icon: <Code className="h-5 w-5" />,
      color: "#074d77", // Steel blue
      textColor: "text-white",
    },
    {
      name: "Compliance",
      icon: <BookOpen className="h-5 w-5" />,
      color: "#6b0029", // Dark red
      textColor: "text-white",
    },
  ]

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4" ref={ref}>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="skill-button"
          style={{
            backgroundColor: skill.color,
            borderRadius: "8px",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
            className={skill.textColor}
          >
            {skill.icon}
          </motion.div>
          <span className={`font-medium ${skill.textColor}`}>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
