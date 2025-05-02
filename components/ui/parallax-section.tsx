"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  backgroundImage?: string
  overlayOpacity?: number
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({
  children,
  className,
  backgroundImage,
  overlayOpacity = 0.7,
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform based on direction
  const getTransformValues = () => {
    switch (direction) {
      case "up":
        return ["0%", `${-speed * 100}%`]
      case "down":
        return ["0%", `${speed * 100}%`]
      case "left":
        return ["0%", `${-speed * 100}%`]
      case "right":
        return ["0%", `${speed * 100}%`]
      default:
        return ["0%", `${-speed * 100}%`]
    }
  }

  const transformValues = getTransformValues()
  const transform = useTransform(scrollYProgress, [0, 1], transformValues)
  const isHorizontal = direction === "left" || direction === "right"

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            [isHorizontal ? "x" : "y"]: transform,
          }}
        />
      )}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: `rgba(13, 27, 42, ${overlayOpacity})`,
          backdropFilter: "blur(2px)",
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  )
}
