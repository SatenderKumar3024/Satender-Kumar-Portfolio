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
} from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    },
    {
      name: "Threat Detection",
      skills: [
        { name: "SIEM", icon: <Shield className="h-4 w-4 mr-2" /> },
        { name: "Threat Hunting", icon: <AlertTriangle className="h-4 w-4 mr-2" /> },
        { name: "Splunk", icon: <Database className="h-4 w-4 mr-2" /> },
        { name: "Sentinel", icon: <Shield className="h-4 w-4 mr-2" /> },
      ],
      color: "bg-purple-500/20",
      borderColor: "border-purple-500/40",
      hoverColor: "hover:bg-purple-500/40",
      textColor: "text-purple-400",
    },
    {
      name: "Automation",
      skills: [
        { name: "Python", icon: <Code className="h-4 w-4 mr-2" /> },
        { name: "PowerShell", icon: <FileCode className="h-4 w-4 mr-2" /> },
        { name: "Security Automation", icon: <Code className="h-4 w-4 mr-2" /> },
      ],
      color: "bg-green-500/20",
      borderColor: "border-green-500/40",
      hoverColor: "hover:bg-green-500/40",
      textColor: "text-green-400",
    },
    {
      name: "Compliance",
      skills: [
        { name: "NIST", icon: <FileCheck className="h-4 w-4 mr-2" /> },
        { name: "ISO 27001", icon: <BookOpen className="h-4 w-4 mr-2" /> },
        { name: "GDPR", icon: <FileCheck className="h-4 w-4 mr-2" /> },
        { name: "SOC2", icon: <BookOpen className="h-4 w-4 mr-2" /> },
      ],
      color: "bg-yellow-500/20",
      borderColor: "border-yellow-500/40",
      hoverColor: "hover:bg-yellow-500/40",
      textColor: "text-yellow-400",
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
          <h2 className="text-3xl font-bold mb-8 text-center text-[#E0E1DD]">About Me</h2>

          <Card className="bg-[#0D1B2A]/50 shadow-lg border-[#00BFA6]/20 rounded-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4 text-lg text-[#E0E1DD]">
                <p className="leading-relaxed">
                  I am a <span className="font-bold text-[#00BFA6]">Results-Driven Information Security Analyst</span>{" "}
                  with <AnimatedCounter from={0} to={4} suffix="+" className="text-[#00BFA6]" /> years of experience
                  protecting cloud environments (AWS, Azure) and optimizing security operations with advanced SIEM
                  platforms such as Splunk and Microsoft Sentinel.
                </p>
                <p className="leading-relaxed">
                  I specialize in{" "}
                  <span className="bg-[#00BFA6] text-[#0D1B2A] px-1 py-0.5 rounded">Threat Detection</span>,{" "}
                  <span className="bg-[#00BFA6] text-[#0D1B2A] px-1 py-0.5 rounded">Incident Response</span>, and{" "}
                  <span className="bg-[#00BFA6] text-[#0D1B2A] px-1 py-0.5 rounded">Security Automation</span> using
                  Python and PowerShell, driving operational excellence and risk reduction across enterprise
                  environments.
                </p>
                <p className="leading-relaxed">
                  Throughout my career, I have achieved a{" "}
                  <span className="font-bold text-[#00BFA6]">
                    <AnimatedCounter from={0} to={40} suffix="%" className="text-[#00BFA6]" /> reduction in
                    organizational risk exposure
                  </span>{" "}
                  by implementing robust security controls and automated incident response processes, while improving
                  SOC efficiency by{" "}
                  <span className="font-bold text-[#00BFA6]">
                    <AnimatedCounter from={0} to={25} suffix="%" className="text-[#00BFA6]" />
                  </span>{" "}
                  through enhanced detection strategies.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-center text-[#E0E1DD]">Key Skills</h3>

                <div className="space-y-6">
                  {skillCategories.map((category, categoryIndex) => (
                    <div key={category.name} className="space-y-2">
                      <h4 className={`text-sm font-medium ${category.textColor}`}>{category.name}</h4>
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
                              boxShadow: "0 0 15px rgba(0, 191, 166, 0.5)",
                            }}
                            className={`flex items-center px-3 py-2 rounded-full text-sm ${category.color} ${category.borderColor} ${category.hoverColor} border transition-all duration-300 text-[#E0E1DD]`}
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
