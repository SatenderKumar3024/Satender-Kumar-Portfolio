"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string | ReactNode
  className?: string
  align?: "left" | "center" | "right"
  decorative?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
  decorative = true,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const decorationVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div className={cn("mb-12 max-w-3xl", alignmentClasses[align], className)}>
      <motion.h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E0E1DD] mb-3" variants={titleVariants}>
        {title}
      </motion.h2>

      {subtitle && (
        <motion.div className="text-lg text-[#E0E1DD]/80 max-w-2xl mx-auto" variants={subtitleVariants}>
          {subtitle}
        </motion.div>
      )}

      {decorative && (
        <div
          className={`flex items-center gap-2 mt-4 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : ""}`}
        >
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-[#00BFA6] to-transparent rounded-full"
            variants={decorationVariants}
          ></motion.div>
          <motion.div className="h-1 w-4 bg-[#00BFA6] rounded-full" variants={dotVariants}></motion.div>
        </div>
      )}
    </div>
  )
}
