"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp, Zap } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

export function KpiCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const kpis = [
    {
      title: "Years Experience",
      value: 4,
      suffix: "+",
      icon: <Shield className="h-6 w-6" />,
      color: "from-[#0ea5e9]/20 to-[#0D1B2A]/80",
      borderColor: "border-[#0ea5e9]/30",
      textColor: "text-[#0ea5e9]",
      delay: 0.1,
    },
    {
      title: "Users Protected",
      value: 5000,
      suffix: "+",
      icon: <Users className="h-6 w-6" />,
      color: "from-[#22c55e]/20 to-[#0D1B2A]/80",
      borderColor: "border-[#22c55e]/30",
      textColor: "text-[#22c55e]",
      delay: 0.2,
    },
    {
      title: "Risk Reduction",
      value: 40,
      suffix: "%",
      icon: <Shield className="h-6 w-6" />,
      color: "from-[#f59e0b]/20 to-[#0D1B2A]/80",
      borderColor: "border-[#f59e0b]/30",
      textColor: "text-[#f59e0b]",
      delay: 0.3,
    },
    {
      title: "SOC Efficiency",
      value: 25,
      suffix: "%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-[#8b5cf6]/20 to-[#0D1B2A]/80",
      borderColor: "border-[#8b5cf6]/30",
      textColor: "text-[#8b5cf6]",
      delay: 0.4,
    },
    {
      title: "MTTD Reduction",
      value: 30,
      suffix: "%",
      icon: <Zap className="h-6 w-6" />,
      color: "from-[#ec4899]/20 to-[#0D1B2A]/80",
      borderColor: "border-[#ec4899]/30",
      textColor: "text-[#ec4899]",
      delay: 0.5,
    },
  ]

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: kpi.delay }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card
            className={`bg-gradient-to-br ${kpi.color} border ${kpi.borderColor} hover:shadow-lg transition-all duration-300`}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className={`${kpi.textColor} mb-2`}>{kpi.icon}</div>
              <div className={`text-3xl font-bold ${kpi.textColor}`}>
                <AnimatedCounter
                  from={0}
                  to={kpi.value}
                  suffix={kpi.suffix}
                  delay={kpi.delay}
                  duration={2}
                  easing="easeOut"
                />
              </div>
              <div className="text-sm text-[#E0E1DD]/80 mt-1">{kpi.title}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
