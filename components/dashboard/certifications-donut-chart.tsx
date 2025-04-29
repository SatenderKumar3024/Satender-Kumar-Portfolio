"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Info } from "lucide-react"

// Certification data
const certificationData = [
  {
    name: "Microsoft",
    value: 4,
    color: "#00A4EF",
    certifications: [
      "Azure Security Engineer (AZ-500)",
      "Identity & Access Administrator (SC-300)",
      "Security Operations Analyst (SC-200)",
      "Security Fundamentals (SC-900)",
    ],
  },
  {
    name: "CompTIA",
    value: 4,
    color: "#FF0000",
    certifications: ["Security+", "Network+", "CySA+", "PenTest+"],
  },
  {
    name: "Other",
    value: 6,
    color: "#10B981",
    certifications: [
      "AWS Security Specialist",
      "Splunk Core Certified User",
      "SSCP",
      "GRC Professional",
      "Cloud Certified",
      "Certified Ethical Hacker",
    ],
  },
  {
    name: "In Progress",
    value: 2,
    color: "#F59E0B",
    certifications: ["CISSP (70%)", "CISM (50%)"],
  },
]

// Custom tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg max-w-xs">
        <p className="font-medium text-white text-base mb-1">{data.name}</p>
        <p className="text-sm text-gray-300 mb-2">{`${data.value} certifications`}</p>
        <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
          {data.certifications.map((cert: string, index: number) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    )
  }
  return null
}

export default function CertificationsDonutChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [startAngle, setStartAngle] = useState(-90)
  const [endAngle, setEndAngle] = useState(-90)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [scale, setScale] = useState(0.8)
  const chartRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (inView) {
      // Animate the donut chart
      const timer1 = setTimeout(() => {
        setEndAngle(270)
      }, 300)

      // Animate the scale
      const timer2 = setTimeout(() => {
        setScale(1)
      }, 300)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [inView])

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  const onItemHover = (index: number) => {
    setActiveIndex(index)
  }

  const onItemLeave = () => {
    setActiveIndex(null)
  }

  // Calculate total certifications
  const totalCertifications = certificationData.reduce((acc, curr) => acc + curr.value, 0)

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-lg font-semibold text-white">Certifications by Category</h3>
        <div className="relative ml-2 group">
          <Info size={16} className="text-gray-400 cursor-help" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hidden group-hover:block z-10 text-xs text-gray-300">
            Distribution of certifications across different providers
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="w-full md:w-3/5 h-[250px] relative"
          style={{ transformOrigin: "center" }}
        >
          <div ref={chartRef} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={certificationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={isMobile ? "45%" : "55%"}
                  outerRadius={isMobile ? "70%" : "75%"}
                  startAngle={startAngle}
                  endAngle={endAngle}
                  paddingAngle={2}
                  dataKey="value"
                  animationDuration={2000}
                  animationBegin={0}
                  animationEasing="ease-out"
                  isAnimationActive={true}
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                >
                  {certificationData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="rgba(0, 0, 0, 0.2)"
                      className={`hover:opacity-90 transition-opacity duration-300 cursor-pointer ${
                        activeIndex === index ? "filter drop-shadow-lg" : ""
                      }`}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center bg-gray-900/70 backdrop-blur-sm rounded-full p-4 w-24 h-24 flex flex-col items-center justify-center">
              <p className="text-xs text-gray-400">Total</p>
              <p className="text-2xl font-bold text-white">{totalCertifications}</p>
              <p className="text-xs text-gray-400">Certs</p>
            </div>
          </div>

          {/* 3D glow effect */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 z-0 pointer-events-none"
            style={{
              filter: "blur(20px)",
              transform: "translateZ(-20px)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-2/5 mt-4 md:mt-0 md:pl-4"
        >
          <div className="bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Certification Details</h4>
            <ul className="space-y-4 max-h-[250px] overflow-y-auto pr-1 custom-scrollbar">
              {certificationData.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  className={`rounded-md transition-all duration-300 ${
                    activeIndex === index ? "bg-gray-700/50" : "hover:bg-gray-700/30"
                  }`}
                  onMouseEnter={() => onItemHover(index)}
                  onMouseLeave={onItemLeave}
                >
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center">
                      <span
                        className={`inline-block w-3 h-3 mr-2 rounded-full ${
                          activeIndex === index ? "ring-2 ring-white ring-opacity-50" : ""
                        }`}
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs font-medium text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-xs font-medium text-white">{item.value}</span>
                  </div>

                  {/* Certification list */}
                  <div className="pl-5 pb-2">
                    <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                      {item.certifications.map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-700/50 text-center">
              <p className="text-xs text-gray-400">Total certifications: {totalCertifications}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
