"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Project names
const projects = [
  { id: "cloud", name: "Cloud Framework" },
  { id: "siem", name: "SIEM Opt" },
  { id: "threat", name: "Threat Intel" },
  { id: "cyber", name: "CyberGuard" },
  { id: "ir", name: "IR Auto" },
  { id: "sec", name: "Sec Mesh" },
]

// Skill categories
const skillCategories = [
  { id: "cloud", name: "Cloud Security", color: "#3B82F6" }, // Blue
  { id: "siem", name: "SIEM & Detection", color: "#8B5CF6" }, // Purple
  { id: "iam", name: "IAM & Access", color: "#06B6D4" }, // Teal
  { id: "incident", name: "Incident Response", color: "#EF4444" }, // Red
  { id: "compliance", name: "Compliance & Risk", color: "#F59E0B" }, // Gold
  { id: "automation", name: "Automation & SOAR", color: "#10B981" }, // Green
  { id: "threat", name: "Threat Intel", color: "#F97316" }, // Orange
]

// Predefined data to match the screenshot
const heatmapData = [
  // Cloud Security row
  [85, 55, 62, 39, 61, 73],
  // SIEM & Detection row
  [64, 66, 36, 44, 54, 39],
  // IAM & Access row
  [42, 45, 66, 64, 34, 47],
  // Incident Response row
  [43, 43, 36, 44, 83, 64],
  // Compliance & Risk row
  [30, 43, 32, 63, 53, 46],
  // Automation & SOAR row
  [52, 55, 42, 52, 88, 32],
  // Threat Intel row
  [50, 56, 66, 61, 51, 63],
]

export default function SkillProjectMatrix() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const [hoveredCol, setHoveredCol] = useState<number | null>(null)
  const [animationProgress, setAnimationProgress] = useState(0)

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null
      const duration = 1500 // 1.5 seconds for the animation

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const elapsed = timestamp - startTimestamp
        const progress = Math.min(elapsed / duration, 1)

        setAnimationProgress(progress)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [inView])

  // Get cell background color based on value and animation progress
  const getCellBackground = (value: number, rowIndex: number, colIndex: number) => {
    const baseColor = skillCategories[rowIndex].color
    const opacity = (value / 100) * animationProgress

    // Convert hex to rgba
    const r = Number.parseInt(baseColor.slice(1, 3), 16)
    const g = Number.parseInt(baseColor.slice(3, 5), 16)
    const b = Number.parseInt(baseColor.slice(5, 7), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  // Get cell class based on hover state
  const getCellClass = (rowIndex: number, colIndex: number) => {
    const isRowHovered = hoveredRow === rowIndex
    const isColHovered = hoveredCol === colIndex
    const isHovered = isRowHovered || isColHovered

    return `relative transition-all duration-200 ${isHovered ? "z-10 scale-105 shadow-lg" : ""}`
  }

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold text-center mb-4 text-white">Skills Usage Across Projects</h3>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full overflow-x-auto custom-scrollbar pb-2"
      >
        <div className="min-w-[600px]">
          {/* Header row with project names */}
          <div className="flex mb-2">
            <div className="w-[180px] flex-shrink-0"></div>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex-1 text-center px-1 py-2 text-xs font-medium ${
                  hoveredCol === index ? "text-white" : "text-gray-400"
                }`}
                onMouseEnter={() => setHoveredCol(index)}
                onMouseLeave={() => setHoveredCol(null)}
              >
                {project.name}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {skillCategories.map((skill, rowIndex) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + rowIndex * 0.1, duration: 0.4 }}
              className="flex items-center mb-2"
              onMouseEnter={() => setHoveredRow(rowIndex)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {/* Skill name */}
              <div
                className={`w-[180px] flex-shrink-0 pr-2 text-xs font-medium ${
                  hoveredRow === rowIndex ? "text-white" : "text-gray-400"
                }`}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: skill.color }} />
                  <span>{skill.name}</span>
                </div>
              </div>

              {/* Data cells */}
              {heatmapData[rowIndex].map((value, colIndex) => (
                <motion.div
                  key={colIndex}
                  className={getCellClass(rowIndex, colIndex)}
                  onMouseEnter={() => {
                    setHoveredRow(rowIndex)
                    setHoveredCol(colIndex)
                  }}
                  onMouseLeave={() => {
                    setHoveredRow(null)
                    setHoveredCol(null)
                  }}
                  style={{
                    flex: 1,
                    position: "relative",
                  }}
                >
                  <motion.div
                    className="h-10 rounded-md flex items-center justify-center text-xs font-medium"
                    style={{
                      backgroundColor: getCellBackground(value, rowIndex, colIndex),
                      color: value > 50 ? "white" : "rgba(255,255,255,0.8)",
                      boxShadow:
                        hoveredRow === rowIndex && hoveredCol === colIndex ? `0 0 12px ${skill.color}` : "none",
                    }}
                  >
                    {Math.round(value * animationProgress)}%{/* 3D effect overlay */}
                    <div
                      className="absolute inset-0 rounded-md pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%)",
                      }}
                    />
                  </motion.div>

                  {/* Tooltip */}
                  {hoveredRow === rowIndex && hoveredCol === colIndex && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-2 rounded shadow-lg z-20 whitespace-nowrap"
                    >
                      <div className="font-medium">{skill.name}</div>
                      <div>Project: {projects[colIndex].name}</div>
                      <div>Usage: {value}%</div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {skillCategories.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
            className="flex items-center px-2 py-1 rounded-md text-xs bg-opacity-20"
            style={{ backgroundColor: `${skill.color}30` }}
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: skill.color }} />
            <span className="text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-2 text-center text-xs text-gray-400"
      >
        <p>Cell color intensity and percentage value indicate skill usage in each project</p>
      </motion.div>
    </div>
  )
}
