"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Users, TrendingDown, Activity, Timer } from "lucide-react"

// KPI data
const kpiData = [
  {
    title: "Years Experience",
    value: 4,
    suffix: "",
    icon: Clock,
    color: "from-blue-500 to-blue-700",
    textColor: "text-blue-400",
    description: "Years in cybersecurity",
  },
  {
    title: "Users Protected",
    value: 5000,
    suffix: "+",
    icon: Users,
    color: "from-green-500 to-green-700",
    textColor: "text-green-400",
    description: "Across enterprise environments",
  },
  {
    title: "Risk Reduction",
    value: 40,
    suffix: "%",
    icon: TrendingDown,
    color: "from-orange-500 to-orange-700",
    textColor: "text-orange-400",
    description: "Average security posture improvement",
  },
  {
    title: "SOC Efficiency",
    value: 25,
    suffix: "%",
    icon: Activity,
    color: "from-purple-500 to-purple-700",
    textColor: "text-purple-400",
    description: "Increased operational efficiency",
  },
  {
    title: "MTTD Reduction",
    value: 30,
    suffix: "%",
    icon: Timer,
    color: "from-red-500 to-red-700",
    textColor: "text-red-400",
    description: "Mean time to detect threats",
  },
]

// Counter animation component
const Counter = ({ value, suffix = "", inView }: { value: number; suffix?: string; inView: boolean }) => {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!inView || !nodeRef.current) return

    const start = 0
    const end = Number.parseInt(value.toString(), 10)
    const duration = 2000
    const startTimestamp = performance.now()

    const step = (timestamp: number) => {
      if (!nodeRef.current) return

      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentValue = Math.floor(progress * (end - start) + start)

      nodeRef.current.textContent = currentValue + suffix

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        nodeRef.current.textContent = end + suffix
      }
    }

    window.requestAnimationFrame(step)
  }, [value, suffix, inView])

  return <span ref={nodeRef}>0{suffix}</span>
}

export default function KPIMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {kpiData.map((kpi, index) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300 -z-10"
            style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
          />

          <div
            className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${kpi.color} bg-opacity-20 mb-4`}
          >
            <kpi.icon className={`h-6 w-6 ${kpi.textColor}`} aria-hidden="true" />
          </div>

          <h3 className="text-lg font-medium text-gray-300">{kpi.title}</h3>

          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold tracking-tight text-white">
              <Counter value={kpi.value} suffix={kpi.suffix} inView={inView} />
            </p>
          </div>

          <p className="mt-1 text-sm text-gray-400">{kpi.description}</p>

          <div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-30 group-hover:opacity-60 transition-opacity duration-300"
            style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
          />
        </motion.div>
      ))}
    </div>
  )
}
