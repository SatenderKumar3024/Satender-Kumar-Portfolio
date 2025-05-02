"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  interactive?: boolean
  variant?: "default" | "dark" | "light" | "teal"
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  interactive = true,
  variant = "default",
}: GlassCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "dark":
        return {
          background: "rgba(9, 19, 30, 0.7)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }
      case "light":
        return {
          background: "rgba(224, 225, 221, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }
      case "teal":
        return {
          background: "rgba(0, 191, 166, 0.08)",
          border: "1px solid rgba(0, 191, 166, 0.2)",
        }
      default:
        return {
          background: "rgba(13, 27, 42, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }
    }
  }

  const cardStyles = getVariantStyles()

  return (
    <motion.div
      className={cn("rounded-xl overflow-hidden backdrop-blur-[6px] shadow-lg", className)}
      style={cardStyles}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              borderColor: "rgba(0, 191, 166, 0.3)",
            }
          : {}
      }
      whileTap={interactive ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
