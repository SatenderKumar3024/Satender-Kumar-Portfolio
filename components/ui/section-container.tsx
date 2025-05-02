"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  id?: string
  className?: string
  variant?: "default" | "dark" | "light" | "teal" | "gradient"
  fullHeight?: boolean
}

export function SectionContainer({
  children,
  id,
  className,
  variant = "default",
  fullHeight = false,
}: SectionContainerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "dark":
        return "bg-[#08121e]"
      case "light":
        return "bg-[#0D1B2A]/80"
      case "teal":
        return "bg-[#00BFA6]/5"
      case "gradient":
        return "bg-gradient-to-b from-[#0D1B2A] to-[#08121e]"
      default:
        return "bg-[#0D1B2A]"
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id={id}
      className={cn(
        getVariantStyles(),
        "py-16 md:py-24",
        fullHeight && "min-h-screen flex flex-col justify-center",
        className,
      )}
    >
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        {children}
      </motion.div>
    </section>
  )
}
