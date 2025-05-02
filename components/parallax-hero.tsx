"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxHeroProps {
  children: React.ReactNode
  backgroundImage?: string
  overlayOpacity?: number
}

export default function ParallaxHero({
  children,
  backgroundImage = "/interconnected-security-mesh.png",
  overlayOpacity = 0.7,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: `rgba(13, 27, 42, ${overlayOpacity})`,
          backdropFilter: "blur(2px)",
        }}
      />
      <motion.div className="relative z-20 container mx-auto px-4" style={{ opacity }}>
        {children}
      </motion.div>
    </div>
  )
}
