"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/animated-counter"
import {
  Shield,
  Cloud,
  Code,
  FileCheck,
  AlertTriangle,
  BookOpen,
  Database,
  Lock,
  Server,
  Key,
  FileCode,
  Award,
  Search,
  GitBranch,
  Layers,
  CheckSquare,
  BadgeCheck,
} from "lucide-react"
import VerifiedBadge from "@/components/verified-badge"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const coreSpecializations = [
    {
      title: "Threat Intelligence & Detection",
      description: "Advanced threat hunting and SIEM optimization",
      icon: <Search className="h-6 w-6 text-[#00BFA6]" />,
      color: "from-blue-500/10 to-blue-600/5",
      shadowColor: "rgba(30, 144, 255, 0.3)",
    },
    {
      title: "Incident Handling & Playbooks",
      description: "Structured response and containment strategies",
      icon: <AlertTriangle className="h-6 w-6 text-[#00BFA6]" />,
      color: "from-purple-500/10 to-purple-600/5",
      shadowColor: "rgba(138, 43, 226, 0.3)",
    },
    {
      title: "Workflow Automation (Python & SOAR)",
      description: "Security process automation and orchestration",
      icon: <Code className="h-6 w-6 text-[#00BFA6]" />,
      color: "from-green-500/10 to-green-600/5",
      shadowColor: "rgba(50, 205, 50, 0.3)",
    },
  ]

  const skillCategories = [
    {
      name: "Cloud Security",
      skills: [
        { name: "AWS", icon: <Cloud className="h-4 w-4 mr-2" /> },
        { name: "Azure", icon: <Server className="h-4 w-4 mr-2" /> },
        { name: "IAM", icon: <Key className="h-4 w-4 mr-2" /> },
        { name: "Zero Trust", icon: <Lock className="h-4 w-4 mr-2" /> },
      ],
      color: "bg-blue-500/20",
      borderColor: "border-blue-500/40",
      hoverColor: "hover:bg-blue-500/40",
      textColor: "text-blue-400",
      bgColor: "#1E90FF",
    },
    {
      name: "SIEM & Detection",
      skills: [
        { name: "SIEM", icon: <Shield className="h-4 w-4 mr-2" /> },
        { name: "Threat Hunting", icon: <Search className="h-4 w-4 mr-2" /> },
        { name: "Splunk", icon: <Database className="h-4 w-4 mr-2" /> },
        { name: "Sentinel", icon: <Shield className="h-4 w-4 mr-2" /> },
      ],
      color: "bg-purple-500/20",
      borderColor: "border-purple-500/40",
      hoverColor: "hover:bg-purple-500/40",
      textColor: "text-purple-400",
      bgColor: "#8A2BE2",
    },
    {
      name: "Automation",
      skills: [
        { name: "Python", icon: <Code className="h-4 w-4 mr-2" /> },
        { name: "PowerShell", icon: <FileCode className="h-4 w-4 mr-2" /> },
        { name: "SOAR", icon: <GitBranch className="h-4 w-4 mr-2" /> },
        { name: "API Security", icon: <Layers className="h-4 w-4 mr-2" /> },
      ],
      color: "bg-green-500/20",
      borderColor: "border-green-500/40",
      hoverColor: "hover:bg-green-500/40",
      textColor: "text-green-400",
      bgColor: "#32CD32",
    },
    {
      name: "Compliance & GRC",
      skills: [
        { name: "NIST", icon: <FileCheck className="h-4 w-4 mr-2" /> },
        { name: "ISO 27001", icon: <BookOpen className="h-4 w-4 mr-2" /> },
        { name: "GDPR", icon: <CheckSquare className="h-4 w-4 mr-2" /> },
        { name: "SOC2", icon: <BookOpen className="h-4 w-4 mr-2" /> },
      ],
      color: "bg-yellow-500/20",
      borderColor: "border-yellow-500/40",
      hoverColor: "hover:bg-yellow-500/40",
      textColor: "text-yellow-400",
      bgColor: "#FFD700",
    },
  ]

  return (
    <section id="about" className="py-16" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#E0E1DD]">
            About <VerifiedBadge name="Satender Kumar" className="text-3xl md:text-4xl" />
          </h2>

          <Card className="bg-[#0D1B2A]/50 shadow-lg border-[#00BFA6]/20 rounded-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              {/* Professional Summary */}
              <div className="space-y-6 text-lg text-[#E0E1DD]">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-gradient-to-br from-[#0F2942] to-[#1A374D] p-5 rounded-lg md:w-1/3 flex flex-col items-center justify-center text-center shadow-lg border border-[#00BFA6]/20">
                    <div className="relative mb-3">
                      <Shield className="h-12 w-12 text-[#00BFA6]" />
                      <BadgeCheck className="h-5 w-5 text-[#00BFA6] absolute -bottom-1 -right-1 bg-[#0D1B2A] rounded-full p-0.5" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Information Security Analyst</h3>
                    <p className="text-[#E0E1DD]/80 text-sm mb-3">Securing Enterprise Cloud Environments</p>
                    <div className="flex items-center justify-center gap-2 bg-[#00BFA6]/10 px-3 py-1.5 rounded-full">
                      <Shield className="h-4 w-4 text-[#00BFA6]" />
                      <p className="text-[#00BFA6] font-bold text-sm">
                        <AnimatedCounter from={0} to={4} suffix="" /> Years Experience
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="bg-[#0F2942]/70 p-5 rounded-lg border-l-4 border-[#00BFA6] shadow-md">
                      <p className="leading-relaxed mb-4">
                        I'm a certified Information Security Analyst with{" "}
                        <span className="font-bold text-[#00BFA6]">4 years of experience</span> safeguarding cloud
                        infrastructures, optimizing SIEM operations, and driving threat detection strategies across AWS
                        and Azure ecosystems.
                      </p>
                      <p className="leading-relaxed">
                        I specialize in transforming enterprise security postures through{" "}
                        <span className="font-semibold text-[#00BFA6]">automation</span>,{" "}
                        <span className="font-semibold text-[#00BFA6]">Zero Trust architecture</span>, and compliance
                        with frameworks like <span className="font-semibold text-[#00BFA6]">NIST 800-53</span> and{" "}
                        <span className="font-semibold text-[#00BFA6]">ISO 27001</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Specializations with Enhanced Animations */}
                <div className="bg-gradient-to-br from-[#0F2942]/90 to-[#1A374D]/80 p-5 rounded-lg border border-[#00BFA6]/20 shadow-lg">
                  <h3 className="text-xl font-semibold mb-5 text-[#E0E1DD] flex items-center">
                    <Award className="h-5 w-5 text-[#00BFA6] mr-2" />
                    Core Specializations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {coreSpecializations.map((specialization, index) => (
                      <motion.div
                        key={specialization.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                        whileHover={{
                          scale: 1.05,
                          y: -8,
                          boxShadow: `0 15px 30px ${specialization.shadowColor}`,
                          transition: { duration: 0.3 },
                        }}
                        className={`flex flex-col items-center bg-gradient-to-br ${specialization.color} p-5 rounded-lg border border-[#00BFA6]/20 transition-all duration-300 relative overflow-hidden group`}
                      >
                        {/* Animated background elements */}
                        <div className="absolute top-0 right-0 h-24 w-24 bg-[#00BFA6]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 h-20 w-20 bg-[#00BFA6]/5 rounded-full -ml-10 -mb-10 group-hover:scale-150 transition-all duration-700"></div>

                        {/* Icon with animated background */}
                        <div className="bg-[#00BFA6]/20 p-3 rounded-full mb-4 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          {specialization.icon}
                        </div>

                        {/* Title with animated underline */}
                        <h4 className="font-semibold text-[#E0E1DD] mb-2 text-center relative z-10">
                          {specialization.title}
                          <div className="h-0.5 w-0 bg-[#00BFA6]/40 mx-auto mt-1 group-hover:w-full transition-all duration-500 ease-out"></div>
                        </h4>

                        {/* Description with fade-in effect */}
                        <p className="text-[#E0E1DD]/70 text-sm text-center relative z-10 transform opacity-80 group-hover:opacity-100 transition-all duration-300">
                          {specialization.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-5 text-center text-[#E0E1DD] flex items-center justify-center">
                  <Key className="h-5 w-5 text-[#00BFA6] mr-2" />
                  Key Skills
                </h3>

                <div className="space-y-6">
                  {skillCategories.map((category, categoryIndex) => (
                    <div key={category.name} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: category.bgColor }}></div>
                        <h4 className={`text-sm font-medium ${category.textColor}`}>{category.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            whileHover={{
                              scale: 1.1,
                              y: -5,
                              boxShadow: `0 8px 20px rgba(${
                                category.name === "Cloud Security"
                                  ? "30, 144, 255"
                                  : category.name === "SIEM & Detection"
                                    ? "138, 43, 226"
                                    : category.name === "Automation"
                                      ? "50, 205, 50"
                                      : "255, 215, 0"
                              }, 0.3)`,
                            }}
                            className={`flex items-center px-3 py-2 rounded-lg text-sm ${category.color} ${category.borderColor} ${category.hoverColor} border transition-all duration-300 text-[#E0E1DD] shadow-sm`}
                            style={{
                              backgroundColor: `${category.bgColor}20`,
                            }}
                          >
                            {skill.icon}
                            {skill.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About
