"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Certification data
const certificationData = [
  {
    name: "Microsoft",
    count: 4,
    color: "#00A4EF",
    certs: [
      "Azure Security Engineer (AZ-500)",
      "Identity & Access Administrator (SC-300)",
      "Security Operations Analyst (SC-200)",
      "Security Fundamentals (SC-900)",
    ],
  },
  {
    name: "CompTIA",
    count: 4,
    color: "#FF0000",
    certs: ["Security+", "Network+", "CySA+", "PenTest+"],
  },
  {
    name: "Other",
    count: 6,
    color: "#F59E0B",
    certs: [
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
    count: 2,
    color: "#10B981",
    certs: ["CISSP (70%)", "CISM (50%)"],
  },
]

export default function CertificationChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedData, setAnimatedData] = useState(() =>
    certificationData.map((item) => ({ ...item, animatedCount: 0, animatedWidth: 0 })),
  )

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null
      const duration = 1500 // 1.5 seconds for the animation

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const elapsed = timestamp - startTimestamp
        const progress = Math.min(elapsed / duration, 1)

        setAnimatedData(
          certificationData.map((item) => ({
            ...item,
            animatedCount: Math.floor(progress * item.count),
            animatedWidth: progress,
          })),
        )

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          // Ensure we set the final values exactly
          setAnimatedData(
            certificationData.map((item) => ({
              ...item,
              animatedCount: item.count,
              animatedWidth: 1,
            })),
          )
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [inView])

  // Calculate max count for scaling
  const maxCount = Math.max(...certificationData.map((item) => item.count))

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold text-center mb-4 text-white">Certifications by Category</h3>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full h-[300px] flex flex-col justify-start overflow-y-auto custom-scrollbar pr-2"
      >
        <div className="space-y-6">
          {animatedData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: cert.color }} />
                  <span className="text-sm font-medium text-white">{cert.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{cert.animatedCount}</span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-5 overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${(cert.count / maxCount) * 100 * cert.animatedWidth}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: cert.color }}
                >
                  {/* 3D effect with gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20"></div>
                </motion.div>
              </div>

              {/* Certification list with improved visibility */}
              <div className="mt-3 mb-4">
                {cert.certs.map((certName, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 + i * 0.1, duration: 0.3 }}
                    className="flex items-start mb-1.5"
                  >
                    <span className="text-xs text-gray-400 mr-2 mt-0.5">•</span>
                    <span className="text-xs text-gray-300" title={certName}>
                      {certName}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-4 text-center text-xs text-gray-400 bg-gray-800/30 py-2 px-4 rounded-md"
      >
        <p>Total certifications: {certificationData.reduce((sum, item) => sum + item.count, 0)}</p>
      </motion.div>
    </div>
  )
}
