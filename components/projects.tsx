"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Shield, Clock, Target, Zap, CheckCircle, Settings, Lock } from "lucide-react"

// Tag color mapping based on categories
const tagColorMap: Record<string, string> = {
  AWS: "bg-sky-500/20 text-sky-500 border-sky-500/30",
  Azure: "bg-sky-500/20 text-sky-500 border-sky-500/30",
  IAM: "bg-blue-600/20 text-blue-600 border-blue-600/30",
  "NIST 800-53": "bg-yellow-600/20 text-yellow-600 border-yellow-600/30",
  "Zero Trust": "bg-blue-600/20 text-blue-600 border-blue-600/30",
  AWS: "bg-sky-500/20 text-sky-500 border-sky-500/30",
  "Identity Management": "bg-blue-600/20 text-blue-600 border-blue-600/30",
  "Threat Intelligence": "bg-pink-600/20 text-pink-600 border-pink-600/30",
  "MITRE ATT&CK": "bg-pink-600/20 text-pink-600 border-pink-600/30",
  "Cloud Security": "bg-sky-500/20 text-sky-500 border-sky-500/30",
  "API Integration": "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
  Splunk: "bg-purple-600/20 text-purple-600 border-purple-600/30",
  "Microsoft Sentinel": "bg-purple-600/20 text-purple-600 border-purple-600/30",
  KQL: "bg-purple-600/20 text-purple-600 border-purple-600/30",
  SPL: "bg-purple-600/20 text-purple-600 border-purple-600/30",
  SIEM: "bg-purple-600/20 text-purple-600 border-purple-600/30",
  "Threat Detection": "bg-pink-600/20 text-pink-600 border-pink-600/30",
  "Incident Response": "bg-red-500/20 text-red-500 border-red-500/30",
  SOAR: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
  Playbooks: "bg-red-500/20 text-red-500 border-red-500/30",
  Documentation: "bg-yellow-600/20 text-yellow-600 border-yellow-600/30",
}

// Get tag color based on technology name
const getTagColor = (tech: string) => {
  return tagColorMap[tech] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
}

// Impact icon mapping
const getImpactIcon = (category: string) => {
  switch (category) {
    case "IAM & Zero Trust":
      return <Lock className="h-4 w-4" />
    case "Threat Intelligence & MITRE":
      return <Target className="h-4 w-4" />
    case "SIEM & Detection":
      return <Zap className="h-4 w-4" />
    case "Cloud Projects":
      return <Shield className="h-4 w-4" />
    case "Incident Response/IR":
      return <Clock className="h-4 w-4" />
    default:
      return <Shield className="h-4 w-4" />
  }
}

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null)

  const projects = [
    {
      title: "Cloud Security Implementation: IAM Hardening in AWS & Azure",
      description:
        "Configured IAM policies for 50+ AWS S3 buckets and Azure VMs, reducing vulnerabilities by 30% through least privilege enforcement and NIST 800-53 aligned controls.",
      technologies: ["AWS", "Azure", "IAM", "NIST 800-53"],
      link: "https://github.com/SatenderKumar3024/Cloud-Security-Implementation-IAM-Hardening-in-AWS-Azure",
      github: "https://github.com/SatenderKumar3024/Cloud-Security-Implementation-IAM-Hardening-in-AWS-Azure",
      color: "from-[#0d1b2a] to-[#2c4875]",
      icon: "/secure-cloud-network.png",
      preview: "/project-previews/cloud-security.gif",
      category: "IAM & Zero Trust",
      impact: "30% Risk Reduction",
      impactIcon: <Shield className="h-4 w-4" />,
      impactColor: "bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/30",
      tagColor: "bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/30",
      keyPoints: [
        {
          icon: <CheckCircle className="h-4 w-4 text-green-400" />,
          text: "Reduced IAM exposure by 30% across S3 and Azure VM",
        },
        { icon: <Settings className="h-4 w-4 text-cyan-300" />, text: "Implemented NIST 800-53 aligned controls" },
        { icon: <Lock className="h-4 w-4 text-blue-400" />, text: "Hardened identity via Zero Trust architecture" },
      ],
    },
    {
      title: "CyberGuard Pro: Enterprise IAM Hardening & Zero Trust",
      description:
        "Deployed Zero Trust architecture across AWS/Azure environments, reducing unauthorized access by 20% for 1,000+ users through advanced identity verification.",
      technologies: ["Zero Trust", "AWS", "Azure", "Identity Management"],
      link: "https://github.com/SatenderKumar3024/CyberGuard-Pro-Enterprise-IAM-Hardening-Zero-Trust-Enforcement",
      github: "https://github.com/SatenderKumar3024/CyberGuard-Pro-Enterprise-IAM-Hardening-Zero-Trust-Enforcement",
      color: "from-[#0d1b2a] to-[#2c4875]",
      icon: "/interconnected-security-mesh.png",
      preview: "/project-previews/cyberguard.gif",
      category: "IAM & Zero Trust",
      impact: "20% Unauthorized Access Blocked",
      impactIcon: <Shield className="h-4 w-4" />,
      impactColor: "bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/30",
      tagColor: "bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/30",
      keyPoints: [
        {
          icon: <Lock className="h-4 w-4 text-blue-400" />,
          text: "Implemented Zero Trust architecture for 1,000+ users",
        },
        { icon: <Shield className="h-4 w-4 text-green-400" />, text: "Reduced unauthorized access attempts by 20%" },
        { icon: <Settings className="h-4 w-4 text-cyan-300" />, text: "Integrated with existing cloud infrastructure" },
      ],
    },
    {
      title: "Securing Digital Infrastructure with Advanced Threat Intelligence",
      description:
        "Implemented threat intelligence platform integrating MITRE ATT&CK framework with cloud security controls, enhancing detection capabilities by 40%.",
      technologies: ["Threat Intelligence", "MITRE ATT&CK", "Cloud Security", "API Integration"],
      link: "https://github.com/SatenderKumar3024/Securing-Digital-Infrastructure-with-Advanced-Threat-Intelligence",
      github: "https://github.com/SatenderKumar3024/Securing-Digital-Infrastructure-with-Advanced-Threat-Intelligence",
      color: "from-[#070d12] to-[#1e293b]",
      icon: "/cyber-shield-analysis.png",
      preview: "/project-previews/threat-intelligence.gif",
      category: "Threat Intelligence & MITRE",
      impact: "40% Detection Boost",
      impactIcon: <Target className="h-4 w-4" />,
      impactColor: "bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/30",
      tagColor: "bg-[#38bdf8]/20 text-[#38bdf8]/30",
      keyPoints: [
        { icon: <Target className="h-4 w-4 text-pink-400" />, text: "Enhanced detection capabilities by 40%" },
        { icon: <Settings className="h-4 w-4 text-cyan-300" />, text: "Integrated MITRE ATT&CK framework" },
        { icon: <Shield className="h-4 w-4 text-green-400" />, text: "Automated threat intelligence feeds" },
      ],
    },
    {
      title: "SIEM Optimization with Splunk and Sentinel",
      description:
        "Developed custom dashboards and detection rules for Splunk and Microsoft Sentinel, reducing MTTD by 40% through advanced correlation and visualization.",
      technologies: ["Splunk", "Microsoft Sentinel", "KQL", "SPL", "SIEM"],
      link: "https://github.com/SatenderKumar3024/SIEM-Optimization-with-Splunk-and-Sentinel-Portfolio-Project",
      github: "https://github.com/SatenderKumar3024/SIEM-Optimization-with-Splunk-and-Sentinel-Portfolio-Project",
      color: "from-[#1e1b4b] to-[#312e81]",
      icon: "/abstract-siem-icon.png",
      preview: "/project-previews/siem-optimization.gif",
      category: "SIEM & Detection",
      impact: "40% MTTD Reduction",
      impactIcon: <Zap className="h-4 w-4" />,
      impactColor: "bg-[#818cf8]/20 text-[#818cf8] border-[#818cf8]/30",
      tagColor: "bg-[#818cf8]/20 text-[#818cf8]/30",
      keyPoints: [
        { icon: <Zap className="h-4 w-4 text-purple-400" />, text: "Reduced Mean Time to Detect (MTTD) by 40%" },
        { icon: <Settings className="h-4 w-4 text-cyan-300" />, text: "Created custom detection rules in KQL and SPL" },
        { icon: <Shield className="h-4 w-4 text-green-400" />, text: "Developed interactive security dashboards" },
      ],
    },
    {
      title: "Empowering Organizations with Cloud Security",
      description:
        "Created comprehensive cloud security framework integrating SIEM, IAM, and threat detection capabilities, improving overall security posture by 35%.",
      technologies: ["Cloud Security", "SIEM", "IAM", "Threat Detection"],
      link: "https://github.com/SatenderKumar3024/Empowering-Organizations-with-Cloud-Security-SIEM-IAM-and-Threat-Detection",
      github:
        "https://github.com/SatenderKumar3024/Empowering-Organizations-with-Cloud-Security-SIEM-IAM-and-Threat-Detection",
      color: "from-[#0f172a] to-[#1e3a8a]",
      icon: "/cloud-security-framework-abstract.png",
      preview: "/project-previews/cloud-framework.gif",
      category: "Cloud Projects",
      impact: "35% Security Posture Improvement",
      impactIcon: <Shield className="h-4 w-4" />,
      impactColor: "bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/30",
      tagColor: "bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/30",
      keyPoints: [
        { icon: <Shield className="h-4 w-4 text-blue-400" />, text: "Improved overall security posture by 35%" },
        { icon: <Settings className="h-4 w-4 text-cyan-300" />, text: "Integrated SIEM, IAM, and threat detection" },
        { icon: <Lock className="h-4 w-4 text-green-400" />, text: "Implemented cloud-native security controls" },
      ],
    },
    {
      title: "Incident Response Playbooks",
      description:
        "Developed and implemented IR playbooks that reduced MTTR from 4 hours to 45 minutes for critical incidents through standardized response procedures.",
      technologies: ["Incident Response", "SOAR", "Playbooks", "Documentation"],
      link: "#",
      github: "#",
      color: "from-[#a83242] to-[#49151a]", // Harmonized gradient instead of flat red
      icon: "/digital-shield-alert.png",
      preview: "/project-previews/incident-response.gif",
      category: "Incident Response/IR",
      impact: "MTTR: 4h → 45min",
      impactIcon: <Clock className="h-4 w-4" />,
      impactColor: "bg-[#f87171]/20 text-[#f87171] border-[#f87171]/30",
      tagColor: "bg-[#f87171]/20 text-[#f87171] border-[#f87171]/30",
      keyPoints: [
        { icon: <Clock className="h-4 w-4 text-red-400" />, text: "Reduced MTTR from 4 hours to 45 minutes" },
        { icon: <Settings className="h-4 w-4 text-cyan-300" />, text: "Standardized response procedures" },
        { icon: <Shield className="h-4 w-4 text-green-400" />, text: "Integrated with SOAR platform" },
      ],
    },
  ]

  const categories = [...new Set(projects.map((project) => project.category))]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-16" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#E0E1DD]">Key Projects</h2>
          <p className="text-center text-[#E0E1DD]/80 mb-8 max-w-2xl mx-auto">
            Showcasing my expertise in cloud security, threat detection, and incident response through real-world
            implementations.
          </p>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === null
                  ? "bg-[#00BFA6] text-[#0D1B2A]"
                  : "bg-[#0D1B2A] text-[#E0E1DD] border border-[#E0E1DD]/30"
              }`}
            >
              All Projects
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-[#00BFA6] text-[#0D1B2A]"
                    : "bg-[#0D1B2A] text-[#E0E1DD] border border-[#E0E1DD]/30"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    link: string
    github: string
    color: string
    icon: string
    preview?: string
    category: string
    impact: string
    impactIcon: React.ReactNode
    impactColor: string
    tagColor: string
    keyPoints: { icon: React.ReactNode; text: string }[]
  }
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  // Mouse position for 3D effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform values for tilt effect
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  function handleMouseEnter() {
    setIsHovered(true)
  }

  // Animation variants for staggered children
  const tagContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { opacity: 1, scale: 1, y: 0 },
  }

  const keyPointsVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const keyPointVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
      whileHover={{ scale: 1.02 }}
      variants={tagVariants}
    >
      <motion.div
        className="h-full perspective"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <Card
          className={`h-full rounded-xl overflow-hidden bg-gradient-to-br ${project.color} relative border border-opacity-30`}
          style={{
            backgroundColor: "#0D1B2A",
            transformStyle: "preserve-3d",
            boxShadow: isHovered
              ? `0 10px 25px -5px ${project.tagColor.split(" ")[1].replace("text-", "rgba(").replace("]", ", 0.3)")}`
              : "none",
            transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          {project.preview && (
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 z-0 ${
                isHovered ? "opacity-20" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${project.preview})`,
                transform: "translateZ(0px)",
              }}
            />
          )}

          {/* Impact Badge - Improved positioning and styling */}
          <div className="absolute top-2 right-2 z-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(13, 27, 42, 0.95)",
                border: `1px solid ${project.impactColor.split(" ")[2]}`,
                color: project.impactColor.split(" ")[1].replace("text-", ""),
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              <span className="flex-shrink-0">{project.impactIcon}</span>
              <span className="truncate max-w-[100px]">{project.impact}</span>
            </motion.div>
          </div>

          <motion.div style={{ transformStyle: "preserve-3d" }}>
            <CardHeader className="project-card-header relative z-10 pt-8 pb-2">
              <div className="flex items-center justify-between" style={{ transform: "translateZ(20px)" }}>
                <CardTitle className="text-lg font-semibold text-[#E0E1DD] pr-12 mt-2" style={{ lineHeight: 1.4 }}>
                  {project.title}
                </CardTitle>
                <motion.img
                  src={project.icon || "/placeholder.svg"}
                  alt={project.title}
                  className="w-9 h-9 object-contain"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                />
              </div>
            </CardHeader>

            <CardContent
              className="project-card-body relative z-10 pt-2 pb-4"
              style={{
                transform: "translateZ(20px)",
              }}
            >
              {/* Description with backdrop blur for better readability */}
              <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg mb-3">
                <p className="text-[#E0E1DD]/90 text-sm">{project.description}</p>
              </div>

              {/* Key Points with staggered animation */}
              <motion.ul
                className="space-y-2 mb-4"
                variants={keyPointsVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {project.keyPoints.map((point, idx) => (
                  <motion.li key={idx} className="flex items-start gap-2 text-xs" variants={keyPointVariants}>
                    <span className="mt-0.5 flex-shrink-0">{point.icon}</span>
                    <span className="text-[#E0E1DD]/80">{point.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Technologies with staggered animation */}
              <motion.div
                className="flex flex-wrap gap-1.5 mt-3"
                style={{ rowGap: "0.375rem" }}
                variants={tagContainerVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {project.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={tagVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Badge
                      variant="secondary"
                      className={`${getTagColor(tech)} hover:bg-opacity-30 transition-colors text-xs py-0.5 px-2 rounded-full`}
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>

            <CardFooter className="project-card-footer relative z-10 pt-2" style={{ transform: "translateZ(20px)" }}>
              <motion.div
                className="flex justify-between w-full"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                variants={keyPointsVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-[#0D1B2A] border border-[#00BFA6]/30 text-[#00BFA6] hover:bg-[#00BFA6]/10 hover:shadow-[0_0_10px_rgba(0,191,166,0.3)] transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6]/10 hover:shadow-[0_0_10px_rgba(0,191,166,0.3)] transition-all duration-300"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </CardFooter>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Projects
