"use client"

import { useState } from "react"
import { ResponsiveContainer, Tooltip, XAxis, YAxis, ScatterChart, Scatter, ZAxis, Cell } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

export function ProjectSkillHeatmap() {
  const [activePoint, setActivePoint] = useState<number | null>(null)

  // Data structure: [x, y, z] where:
  // x: skill index (0-6)
  // y: project index (0-5)
  // z: usage intensity (1-10)
  const data = [
    // Cloud Security
    { x: 0, y: 0, z: 10, skill: "Cloud Security", project: "IAM Hardening", intensity: "High" },
    { x: 0, y: 1, z: 9, skill: "Cloud Security", project: "CyberGuard Pro", intensity: "High" },
    { x: 0, y: 2, z: 7, skill: "Cloud Security", project: "Threat Intelligence", intensity: "Medium" },
    { x: 0, y: 4, z: 10, skill: "Cloud Security", project: "Cloud Security Framework", intensity: "High" },

    // SIEM
    { x: 1, y: 2, z: 6, skill: "SIEM", project: "Threat Intelligence", intensity: "Medium" },
    { x: 1, y: 3, z: 10, skill: "SIEM", project: "SIEM Optimization", intensity: "High" },
    { x: 1, y: 4, z: 8, skill: "SIEM", project: "Cloud Security Framework", intensity: "High" },
    { x: 1, y: 5, z: 7, skill: "SIEM", project: "Incident Response", intensity: "Medium" },

    // IAM
    { x: 2, y: 0, z: 10, skill: "IAM", project: "IAM Hardening", intensity: "High" },
    { x: 2, y: 1, z: 10, skill: "IAM", project: "CyberGuard Pro", intensity: "High" },
    { x: 2, y: 4, z: 7, skill: "IAM", project: "Cloud Security Framework", intensity: "Medium" },

    // Threat Detection
    { x: 3, y: 2, z: 10, skill: "Threat Detection", project: "Threat Intelligence", intensity: "High" },
    { x: 3, y: 3, z: 9, skill: "Threat Detection", project: "SIEM Optimization", intensity: "High" },
    { x: 3, y: 4, z: 8, skill: "Threat Detection", project: "Cloud Security Framework", intensity: "High" },
    { x: 3, y: 5, z: 8, skill: "Threat Detection", project: "Incident Response", intensity: "High" },

    // Compliance
    { x: 4, y: 0, z: 8, skill: "Compliance", project: "IAM Hardening", intensity: "High" },
    { x: 4, y: 4, z: 6, skill: "Compliance", project: "Cloud Security Framework", intensity: "Medium" },

    // Automation
    { x: 5, y: 1, z: 7, skill: "Automation", project: "CyberGuard Pro", intensity: "Medium" },
    { x: 5, y: 3, z: 8, skill: "Automation", project: "SIEM Optimization", intensity: "High" },
    { x: 5, y: 5, z: 9, skill: "Automation", project: "Incident Response", intensity: "High" },

    // Incident Response
    { x: 6, y: 2, z: 6, skill: "Incident Response", project: "Threat Intelligence", intensity: "Medium" },
    { x: 6, y: 3, z: 7, skill: "Incident Response", project: "SIEM Optimization", intensity: "Medium" },
    { x: 6, y: 5, z: 10, skill: "Incident Response", project: "Incident Response", intensity: "High" },
  ]

  const skills = ["Cloud Security", "SIEM", "IAM", "Threat Detection", "Compliance", "Automation", "Incident Response"]

  const projects = [
    "IAM Hardening",
    "CyberGuard Pro",
    "Threat Intelligence",
    "SIEM Optimization",
    "Cloud Security Framework",
    "Incident Response",
  ]

  const colors = [
    "#0ea5e9", // Blue - Cloud Security
    "#8b5cf6", // Purple - SIEM
    "#06b6d4", // Teal - IAM
    "#ef4444", // Red - Threat Detection
    "#f59e0b", // Gold - Compliance
    "#10b981", // Green - Automation
    "#6366f1", // Indigo - Incident Response
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { skill, project, intensity, z } = payload[0].payload
      return (
        <div className="bg-[#0D1B2A] p-3 border border-[#00BFA6]/30 rounded-md shadow-lg">
          <p className="font-medium text-[#E0E1DD]">
            {skill} in {project}
          </p>
          <p className="text-[#E0E1DD]/80 text-sm">
            Usage: {intensity} ({z}/10)
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-[350px] w-full">
      <ChartContainer
        config={{
          usage: {
            label: "Usage Intensity",
            color: "#00BFA6",
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            onMouseMove={(e) => {
              if (e.activeTooltipIndex !== undefined) {
                setActivePoint(e.activeTooltipIndex)
              }
            }}
            onMouseLeave={() => setActivePoint(null)}
          >
            <XAxis
              type="number"
              dataKey="x"
              name="Skill"
              domain={[-0.5, 6.5]}
              tickCount={7}
              tick={{ fill: "#E0E1DD" }}
              tickFormatter={(value) => skills[value] || ""}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Project"
              domain={[-0.5, 5.5]}
              tickCount={6}
              tick={{ fill: "#E0E1DD" }}
              tickFormatter={(value) => projects[value] || ""}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              reversed
            />
            <ZAxis type="number" dataKey="z" range={[200, 800]} />
            <Tooltip content={<CustomTooltip />} />
            <Scatter name="Usage" data={data} fill="#00BFA6">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[entry.x]}
                  fillOpacity={activePoint === index ? 0.9 : 0.6}
                  style={{
                    transition: "fill-opacity 0.3s ease",
                  }}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

export default ProjectSkillHeatmap
