"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let start = from
    const end = to
    const totalDuration = duration * 1000
    const step = Math.abs(end - start) / (totalDuration / 16) // 60fps

    let animationFrame: number
    const timestamp = Date.now()

    const updateCount = () => {
      const now = Date.now()
      const elapsed = now - timestamp

      if (elapsed > delay * 1000) {
        if (start < end) {
          start = Math.min(start + step, end)
        } else if (start > end) {
          start = Math.max(start - step, end)
        }

        setCount(Math.round(start))

        if ((start < end && start < end) || (start > end && start > end)) {
          animationFrame = requestAnimationFrame(updateCount)
        }
      } else {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, delay, isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.div>
  )
}
