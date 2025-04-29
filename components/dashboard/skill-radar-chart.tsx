"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Skill proficiency data
const skillProficiencyData = [
  { subject: "Cloud Security", value: 4.8, fullMark: 5, percentage: 96, platforms: 6 },
  { subject: "SIEM", value: 4.9, fullMark: 5, percentage: 98, platforms: 5 },
  { subject: "IAM", value: 4.7, fullMark: 5, percentage: 94, platforms: 4 },
  { subject: "Threat Detection", value: 4.6, fullMark: 5, percentage: 92, platforms: 5 },
  { subject: "Compliance", value: 4.5, fullMark: 5, percentage: 90, platforms: 3 },
  { subject: "Automation", value: 4.7, fullMark: 5, percentage: 94, platforms: 4 },
  { subject: "Data Analytics", value: 4.4, fullMark: 5, percentage: 88, platforms: 3 },
]

export default function SkillRadarChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimationComplete(true)
      }, 2000) // After all animations complete

      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold text-center mb-4 text-white">Technical Proficiency</h3>

      <div className="flex flex-col md:flex-row items-start">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:px-4"
        >
          <div className="bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Skill Levels</h4>
            <div className="space-y-4">
              {skillProficiencyData.map((skill, index) => {
                const isHovered = hoveredSkill === skill.subject

                return (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.subject)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">{skill.subject}</span>
                      <span className="text-sm font-medium text-white">{skill.percentage}%</span>
                    </div>

                    {/* Progress bar container with 3D effect */}
                    <div className="w-full h-6 bg-gray-900/80 rounded-lg overflow-hidden relative">
                      {/* Shadow effect for 3D appearance */}
                      <div className="absolute inset-0 shadow-inner pointer-events-none"></div>

                      {/* Animated progress bar */}
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: inView ? `${skill.percentage}%` : "0%" }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-lg relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${getColorForSkill(skill.subject)} 0%, ${getLighterColor(getColorForSkill(skill.subject))} 100%)`,
                        }}
                      >
                        {/* 3D lighting effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20"></div>

                        {/* Animated glow effect on hover */}
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                            style={{
                              boxShadow: `0 0 10px 2px ${getColorForSkill(skill.subject)}`,
                              filter: "blur(2px)",
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Tooltip */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-1 bg-gray-800 text-white text-xs p-2 rounded shadow-lg z-10"
                      >
                        {skill.subject} – {skill.percentage}% proficiency across {skill.platforms} platforms
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Helper functions for colors
function getColorForSkill(skill: string): string {
  switch (skill) {
    case "Cloud Security":
      return "#3B82F6" // Blue
    case "SIEM":
      return "#8B5CF6" // Purple
    case "IAM":
      return "#06B6D4" // Teal
    case "Threat Detection":
      return "#EF4444" // Red
    case "Compliance":
      return "#F59E0B" // Gold
    case "Automation":
      return "#10B981" // Green
    case "Data Analytics":
      return "#F97316" // Orange
    default:
      return "#3B82F6" // Default blue
  }
}

function getLighterColor(color: string): string {
  // Simple function to get a lighter version of the color
  switch (color) {
    case "#3B82F6":
      return "#60A5FA" // Lighter blue
    case "#8B5CF6":
      return "#A78BFA" // Lighter purple
    case "#06B6D4":
      return "#22D3EE" // Lighter teal
    case "#EF4444":
      return "#F87171" // Lighter red
    case "#F59E0B":
      return "#FBBF24" // Lighter gold
    case "#10B981":
      return "#34D399" // Lighter green
    case "#F97316":
      return "#FB923C" // Lighter orange
    default:
      return "#60A5FA" // Default lighter blue
  }
}
