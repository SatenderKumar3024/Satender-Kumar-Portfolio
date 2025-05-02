"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  glassOpacity?: number
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  glassOpacity = 0.1,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn("relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10", className)}
      style={{
        backgroundColor: `rgba(13, 27, 42, ${glassOpacity})`,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
      }}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow: "0 15px 30px 0 rgba(0, 0, 0, 0.25)",
              borderColor: "rgba(0, 191, 166, 0.3)",
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
