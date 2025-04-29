"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
  easing?: "linear" | "easeIn" | "easeOut" | "easeInOut"
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
  easing = "linear",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const start = from
      const end = to
      const totalDuration = duration * 1000
      const increment = (end - start) / (totalDuration / 16) // 60fps

      // Apply easing function
      const applyEasing = (t: number): number => {
        switch (easing) {
          case "easeIn":
            return t * t
          case "easeOut":
            return t * (2 - t)
          case "easeInOut":
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          default:
            return t
        }
      }

      let startTime: number | null = null

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / totalDuration, 1)
        const easedProgress = applyEasing(progress)
        const currentValue = start + (end - start) * easedProgress

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animateCount)
        } else {
          setCount(end)
        }
      }

      const animationId = requestAnimationFrame(animateCount)

      return () => cancelAnimationFrame(animationId)
    }
  }, [isInView, from, to, duration, delay, easing])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
      className={`font-mono font-bold tabular-nums ${className}`}
    >
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </motion.span>
  )
}
