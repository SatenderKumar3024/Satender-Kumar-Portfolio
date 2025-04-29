"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp, Zap } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements = [
    {
      icon: <Shield className="h-8 w-8" />,
      value: 40,
      suffix: "%",
      title: "Risk Reduction",
      description: "Reduced organizational risk exposure through robust security controls",
      color: "from-[#00BFA6]/20 to-[#0D1B2A]/80 border-[#00BFA6]/30",
      textColor: "text-[#00BFA6]",
      delay: 0.1,
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: 5000,
      suffix: "+",
      title: "Users Protected",
      description: "Secured user accounts across enterprise environments",
      color: "from-[#3da9fc]/20 to-[#0D1B2A]/80 border-[#3da9fc]/30",
      textColor: "text-[#3da9fc]",
      delay: 0.2,
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: 25,
      suffix: "%",
      title: "SOC Efficiency Improved",
      description: "Enhanced detection strategies and automated workflows",
      color: "from-[#00BFA6]/30 to-[#0D1B2A]/80 border-[#00BFA6]/40", // Increased saturation
      textColor: "text-[#00BFA6]",
      delay: 0.3,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: 30,
      suffix: "%",
      title: "MTTD Reduction",
      description: "Faster threat detection through optimized SIEM configurations",
      color: "from-[#1e90ff]/20 to-[#0D1B2A]/80 border-[#1e90ff]/30", // Brighter blue
      textColor: "text-[#1e90ff]", // Brighter blue
      delay: 0.4,
    },
  ]

  // Micro-dot grid pattern for background
  const MicroDotGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="absolute">
          {Array.from({ length: 10 }).map((_, j) => (
            <div
              key={j}
              className="absolute rounded-full bg-[#00BFA6]"
              style={{
                width: "2px",
                height: "2px",
                top: `${i * 20 + Math.random() * 10}%`,
                left: `${j * 10 + Math.random() * 10}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-16 relative" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#E0E1DD]">Key Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: achievement.delay }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                  boxShadow: "0 10px 25px rgba(0, 191, 166, 0.3)",
                }}
                className="h-full perspective"
              >
                <motion.div
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.2 },
                    boxShadow: "0 10px 25px rgba(0, 191, 166, 0.3), 0 10px 10px -5px rgba(0, 191, 166, 0.2)",
                  }}
                  className="h-full"
                >
                  <Card
                    className={`h-full bg-gradient-to-br ${achievement.color} shadow-md hover:shadow-lg transition-all duration-300 border-2 rounded-xl overflow-hidden relative hover:border-cyan-400`}
                    style={{ backgroundColor: "rgba(13, 27, 42, 0.8)" }}
                  >
                    <MicroDotGrid />
                    <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                      <motion.div
                        className={achievement.textColor}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                      >
                        {achievement.icon}
                      </motion.div>
                      <div className={`text-4xl font-bold mb-2 mt-4 ${achievement.textColor}`}>
                        <AnimatedCounter
                          from={0}
                          to={achievement.value}
                          suffix={achievement.suffix}
                          delay={achievement.delay}
                          duration={2.5}
                          easing="easeOut" // Added ease-out effect
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-[#E0E1DD]">{achievement.title}</h3>
                      <p className="text-sm text-[#E0E1DD]/80 md:px-2 leading-relaxed">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
