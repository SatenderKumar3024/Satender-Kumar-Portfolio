"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedCounter from "@/components/animated-counter"
import { TrendingUp, Users, Zap, Clock, FileText, Bell, CheckCircle, Shield } from "lucide-react"

const KeyAchievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const achievements = [
    {
      value: 40,
      suffix: "%",
      title: "Risk Reduction",
      description: "Reduced organizational risk exposure through robust security controls",
      icon: <TrendingUp className="h-6 w-6 text-[#00BFA6]" />,
      detail: "Achieved via IAM Hardening (AWS/Azure)",
      color: "from-blue-500/20 to-blue-600/10",
      shadowColor: "rgba(30, 144, 255, 0.4)",
      accentColor: "#1E90FF",
    },
    {
      value: 5000,
      suffix: "+",
      title: "Users Protected",
      description: "Secured user accounts across enterprise environments",
      icon: <Users className="h-6 w-6 text-[#00BFA6]" />,
      detail: "Implemented Zero Trust access controls",
      color: "from-green-500/20 to-green-600/10",
      shadowColor: "rgba(0, 191, 166, 0.4)",
      accentColor: "#00BFA6",
    },
    {
      value: 25,
      suffix: "%",
      title: "SOC Efficiency",
      description: "Enhanced detection strategies and automated workflows",
      icon: <Zap className="h-6 w-6 text-[#00BFA6]" />,
      detail: "Enabled through automated KQL/SPL detections",
      color: "from-purple-500/20 to-purple-600/10",
      shadowColor: "rgba(138, 43, 226, 0.4)",
      accentColor: "#8A2BE2",
    },
    {
      value: 30,
      suffix: "%",
      title: "MTTD Reduction",
      description: "Faster threat detection through optimized SIEM configurations",
      icon: <Clock className="h-6 w-6 text-[#00BFA6]" />,
      detail: "Reduced from 45 to 32 minutes on average",
      color: "from-amber-500/20 to-amber-600/10",
      shadowColor: "rgba(255, 193, 7, 0.4)",
      accentColor: "#FFC107",
    },
    {
      value: 15,
      suffix: "+",
      title: "Detection Rules",
      description: "MITRE ATT&CK-aligned use cases created in Sentinel & Splunk",
      icon: <FileText className="h-6 w-6 text-[#00BFA6]" />,
      detail: "Covering 8 MITRE tactics and 12 techniques",
      color: "from-cyan-500/20 to-cyan-600/10",
      shadowColor: "rgba(0, 188, 212, 0.4)",
      accentColor: "#00BCD4",
    },
    {
      value: 70,
      suffix: "%",
      title: "Alert Noise Reduction",
      description: "Reduced false positives via rule tuning and automation",
      icon: <Bell className="h-6 w-6 text-[#00BFA6]" />,
      detail: "Improved signal-to-noise ratio by 3.5x",
      color: "from-rose-500/20 to-rose-600/10",
      shadowColor: "rgba(244, 67, 54, 0.4)",
      accentColor: "#F44336",
    },
  ]

  // Generate random particles for each card
  const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }))
  }

  return (
    <section id="achievements" className="py-16 relative overflow-hidden" style={{ backgroundColor: "#0D1B2A" }}>
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#00BFA6]/30 to-transparent"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1E90FF]/30 to-transparent"
        ></motion.div>

        {/* Animated security shield icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={
            isInView
              ? {
                  opacity: [0.03, 0.05, 0.03],
                  scale: [0.8, 0.85, 0.8],
                  rotate: [-10, 0, -10],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Shield className="w-64 h-64 text-[#00BFA6]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 relative"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "120px" } : { width: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-1 bg-[#00BFA6] mx-auto rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2"
            ></motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#E0E1DD] mb-4 inline-flex items-center">
              <Shield className="mr-3 h-8 w-8 text-[#00BFA6]" />
              Key Achievements
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#E0E1DD]/70 max-w-2xl mx-auto text-sm"
            >
              Measurable impact and quantifiable results across security operations, detection engineering, and risk
              management
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const particles = generateParticles(8)
              const isHovered = hoveredIndex === index

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`bg-gradient-to-br ${achievement.color} p-6 rounded-xl border border-[#00BFA6]/20 shadow-lg relative overflow-hidden group`}
                  style={{
                    boxShadow: isHovered
                      ? `0 20px 30px ${achievement.shadowColor}, 0 0 15px ${achievement.shadowColor}`
                      : `0 10px 20px rgba(0,0,0,0.1)`,
                  }}
                >
                  {/* Animated particles */}
                  {particles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      initial={{
                        x: `${particle.x}%`,
                        y: `${particle.y}%`,
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={
                        isHovered
                          ? {
                              opacity: [0, 0.7, 0],
                              scale: [0, 1, 0],
                              x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
                              y: [`${particle.y}%`, `${particle.y - 20}%`],
                            }
                          : {}
                      }
                      transition={{
                        duration: particle.duration / 3,
                        delay: particle.delay / 5,
                        repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                        repeatDelay: 1,
                      }}
                      className="absolute rounded-full"
                      style={{
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: achievement.accentColor,
                      }}
                    />
                  ))}

                  {/* Background glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent"
                    animate={
                      isHovered
                        ? {
                            background: [
                              `linear-gradient(to bottom right, ${achievement.accentColor}00, ${achievement.accentColor}10)`,
                              `linear-gradient(to bottom right, ${achievement.accentColor}05, ${achievement.accentColor}20)`,
                              `linear-gradient(to bottom right, ${achievement.accentColor}00, ${achievement.accentColor}10)`,
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  {/* Icon with animated background */}
                  <div className="relative z-10 flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#E0E1DD]">{achievement.title}</h3>
                    <motion.div
                      className="bg-[#0D1B2A]/60 p-2 rounded-full"
                      animate={
                        isHovered
                          ? {
                              rotate: [0, 15, 0],
                              scale: [1, 1.2, 1],
                              backgroundColor: [
                                "rgba(13, 27, 42, 0.6)",
                                `rgba(${Number.parseInt(achievement.accentColor.slice(1, 3), 16)}, ${Number.parseInt(achievement.accentColor.slice(3, 5), 16)}, ${Number.parseInt(achievement.accentColor.slice(5, 7), 16)}, 0.3)`,
                                "rgba(13, 27, 42, 0.6)",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                    >
                      {achievement.icon}
                    </motion.div>
                  </div>

                  {/* Counter with animated underline */}
                  <div className="relative z-10 mb-4">
                    <motion.div
                      className="text-5xl font-bold mb-1 flex items-baseline"
                      animate={
                        isHovered
                          ? {
                              color: ["#00BFA6", achievement.accentColor, "#00BFA6"],
                              scale: [1, 1.05, 1],
                            }
                          : {}
                      }
                      transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                    >
                      <AnimatedCounter
                        from={0}
                        to={achievement.value}
                        suffix={achievement.suffix}
                        duration={2.5}
                        className="tracking-tight"
                      />
                    </motion.div>
                    <motion.div
                      className="h-1 bg-[#00BFA6]/30 rounded-full"
                      initial={{ width: 0 }}
                      animate={isHovered ? { width: "60px" } : { width: "0px" }}
                      transition={{ duration: 0.4 }}
                    ></motion.div>
                  </div>

                  {/* Description with fade-in effect */}
                  <motion.p
                    className="text-[#E0E1DD]/90 mb-4 relative z-10 text-sm md:text-base"
                    animate={isHovered ? { opacity: [0.9, 1], y: [0, -2, 0] } : {}}
                    transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    {achievement.description}
                  </motion.p>

                  {/* Detail with slide-up effect */}
                  <motion.div
                    className="relative z-10 bg-[#0D1B2A]/50 p-3 rounded-lg border border-[#00BFA6]/20"
                    initial={{ y: 5, opacity: 0.8 }}
                    animate={
                      isHovered
                        ? { y: 0, opacity: 1, borderColor: `${achievement.accentColor}40` }
                        : { y: 5, opacity: 0.8, borderColor: "rgba(0, 191, 166, 0.2)" }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <motion.div
                        animate={
                          isHovered
                            ? {
                                rotate: [0, 360],
                                color: achievement.accentColor,
                              }
                            : {}
                        }
                        transition={{ duration: 0.7, delay: 0.1 }}
                      >
                        <CheckCircle className="h-4 w-4 text-[#00BFA6] mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <motion.span
                        className="text-xs text-[#E0E1DD]/90"
                        animate={isHovered ? { opacity: [0.9, 1] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {achievement.detail}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16"
                    initial={{ opacity: 0 }}
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
                      style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    >
                      <div
                        className="absolute top-0 right-0 w-16 h-16"
                        style={{
                          background: `linear-gradient(135deg, ${achievement.accentColor}80 0%, ${achievement.accentColor}20 100%)`,
                          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                        }}
                      ></div>
                    </div>
                  </motion.div>

                  {/* Decorative elements that animate on hover */}
                  <motion.div
                    className="absolute top-0 right-0 h-20 w-20 bg-[#00BFA6]/5 rounded-full -mr-10 -mt-10"
                    animate={
                      isHovered
                        ? {
                            scale: [1, 1.5, 1],
                            backgroundColor: [
                              "rgba(0, 191, 166, 0.05)",
                              `rgba(${Number.parseInt(achievement.accentColor.slice(1, 3), 16)}, ${Number.parseInt(achievement.accentColor.slice(3, 5), 16)}, ${Number.parseInt(achievement.accentColor.slice(5, 7), 16)}, 0.1)`,
                              "rgba(0, 191, 166, 0.05)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 3, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-16 w-16 bg-[#00BFA6]/5 rounded-full -ml-8 -mb-8"
                    animate={
                      isHovered
                        ? {
                            scale: [1, 1.3, 1],
                            backgroundColor: [
                              "rgba(0, 191, 166, 0.05)",
                              `rgba(${Number.parseInt(achievement.accentColor.slice(1, 3), 16)}, ${Number.parseInt(achievement.accentColor.slice(3, 5), 16)}, ${Number.parseInt(achievement.accentColor.slice(5, 7), 16)}, 0.1)`,
                              "rgba(0, 191, 166, 0.05)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0, delay: 0.3 }}
                  ></motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Animated bottom accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "180px" } : { width: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="h-1 bg-gradient-to-r from-[#00BFA6] to-[#1E90FF] mx-auto rounded-full mt-12"
          ></motion.div>
        </div>
      </div>
    </section>
  )
}

export default KeyAchievements
