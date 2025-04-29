"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"

interface AchievementCounterProps {
  value: number
  suffix?: string
  prefix?: string
  title: string
  icon: React.ReactNode
  duration?: number
  delay?: number
  color?: string
}

export function AchievementCounter({
  value,
  suffix = "",
  prefix = "",
  title,
  icon,
  duration = 2,
  delay = 0,
  color = "from-blue-500/20 to-blue-400/5 border-blue-500/30",
}: AchievementCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const totalDuration = duration * 1000
      const incrementTime = totalDuration / end
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          start += 1
          setCount(start)
          if (start === end) clearInterval(counter)
        }, incrementTime)

        return () => clearInterval(counter)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, duration, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      className="h-full"
    >
      <Card className={`h-full bg-gradient-to-br ${color} p-6 flex flex-col items-center justify-center text-center`}>
        <div className="mb-3 text-primary">{icon}</div>
        <div className="text-3xl font-bold mb-1">
          {prefix}
          {count}
          {suffix}
        </div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </Card>
    </motion.div>
  )
}
