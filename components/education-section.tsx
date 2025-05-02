"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  Briefcase,
  Code,
  Shield,
  Server,
  Database,
  BarChartIcon as ChartBar,
  Users,
  LineChart,
  Lightbulb,
  FileText,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const education = [
    {
      institution: "Fanshawe College, London, ON",
      degree: "Digital Business Management",
      period: "2021–2023",
      gpa: "GPA: 3.5",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-[#102a43] to-[#1b3b5f] border-blue-500/30",
      iconColor: "text-[#4dd0e1]", // Cyan
      calendarColor: "text-[#90caf9]", // Soft blue
      awardColor: "text-[#90caf9]", // Soft blue
      activities: [
        {
          name: "Business Strategy Simulation",
          icon: <ChartBar className="h-4 w-4" />,
        },
        {
          name: "Leadership & Team Training",
          icon: <Users className="h-4 w-4" />,
        },
        {
          name: "Entrepreneurship Workshops",
          icon: <Lightbulb className="h-4 w-4" />,
        },
        {
          name: "Digital Marketing Projects",
          icon: <LineChart className="h-4 w-4" />,
        },
        {
          name: "Case Studies on Risk & Compliance",
          icon: <FileText className="h-4 w-4" />,
        },
      ],
      activitiesColor: "bg-[#2c3e50] text-[#a78bfa]", // Brighter purple tag tone
      highlights: [
        {
          text: "Learned how online businesses work and stay compliant with rules",
          icon: <Briefcase className="h-4 w-4" />,
        },
        {
          text: "Raised awareness about phishing risks, keeping operations safe",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          text: "Mastered safeguarding brand prominence and customer information",
          icon: <Database className="h-4 w-4" />,
        },
        {
          text: "Secured key assets, supporting company goals and growth",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          text: "Developed skills in explaining complex ideas simply",
          icon: <Briefcase className="h-4 w-4" />,
        },
      ],
      skills: [
        {
          name: "Digital Security",
          description: "Implementation of security measures for digital assets and information",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          name: "Risk Management",
          description: "Identification, assessment, and prioritization of business risks to minimize impact",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          name: "Business Operations",
          description: "Managing day-to-day business activities for optimal efficiency and security",
          icon: <Briefcase className="h-4 w-4" />,
        },
        {
          name: "Leadership Development",
          description: "Building skills to guide teams and projects effectively",
          icon: <Users className="h-4 w-4" />,
        },
        {
          name: "Data Visualization",
          description: "Presenting business data in graphical format to identify patterns and insights",
          icon: <ChartBar className="h-4 w-4" />,
        },
        {
          name: "Team Training",
          description: "Led and participated in business-oriented technical problem-solving sessions",
          icon: <Users className="h-4 w-4" />,
        },
      ],
      skillsColor: "bg-[#00c4cc]/10 text-[#00c4cc]", // Brighter teal for Digital
    },
    {
      institution: "MATS University (WES ECA Approved)",
      degree: "Bachelor of Computer Applications",
      period: "2019–2022",
      gpa: "Grade: A+",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-[#2b1a3c] to-[#3a2f4d] border-purple-500/30",
      iconColor: "text-[#9575cd]", // Purple
      calendarColor: "text-[#90caf9]", // Soft blue
      awardColor: "text-[#90caf9]", // Soft blue
      activities: [
        {
          name: "Core IT Labs",
          icon: <Server className="h-4 w-4" />,
        },
        {
          name: "Cloud Computing Research",
          icon: <Server className="h-4 w-4" />,
        },
        {
          name: "Python/Java Coding",
          icon: <Code className="h-4 w-4" />,
        },
        {
          name: "Secure System Projects",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          name: "Tech Workshops",
          icon: <Briefcase className="h-4 w-4" />,
        },
      ],
      activitiesColor: "bg-[#2c3e50] text-[#a78bfa]", // Brighter purple tag tone
      highlights: [
        {
          text: "Built core skills in IT systems to maintain and secure business technology",
          icon: <Server className="h-4 w-4" />,
        },
        {
          text: "Learned programming to create security tools solving real company problems",
          icon: <Code className="h-4 w-4" />,
        },
        {
          text: "Mastered database management to organize and protect sensitive business data",
          icon: <Database className="h-4 w-4" />,
        },
        {
          text: "Explored cloud systems for secure, scalable online operations and threat detection",
          icon: <Server className="h-4 w-4" />,
        },
        {
          text: "Sharpened cybersecurity expertise to identify risks and enhance organizational safety",
          icon: <Shield className="h-4 w-4" />,
        },
      ],
      skills: [
        {
          name: "Programming",
          description: "Development of software applications using various programming languages",
          icon: <Code className="h-4 w-4" />,
        },
        {
          name: "Database Management",
          description: "Design, implementation and management of database systems",
          icon: <Database className="h-4 w-4" />,
        },
        {
          name: "IT Infrastructure",
          description: "Design and maintenance of hardware, software, and network resources",
          icon: <Server className="h-4 w-4" />,
        },
        {
          name: "Cybersecurity",
          description: "Protection of systems, networks, and programs from digital attacks",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          name: "Cloud Systems",
          description: "Implementation and management of cloud-based infrastructure",
          icon: <Server className="h-4 w-4" />,
        },
        {
          name: "Software Engineering",
          description: "Application of engineering principles to software development",
          icon: <Code className="h-4 w-4" />,
        },
      ],
      skillsColor: "bg-[#7c3aed]/10 text-[#7c3aed]", // Brighter indigo for IT
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-[#E0E1DD]">Education</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-16 bg-gradient-to-r from-[#00BFA6] to-transparent rounded-full"></div>
              <div className="h-1 w-4 bg-[#00BFA6] rounded-full"></div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                variants={cardVariants}
                className="h-full"
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${
                    index === 0 ? "rgba(0, 196, 204, 0.3)" : "rgba(124, 58, 237, 0.3)"
                  }`,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Card
                  className={`h-full bg-gradient-to-br ${edu.color} transition-all duration-300 backdrop-blur-md bg-opacity-80 border border-white/10`}
                  style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <CardHeader className="pb-2 relative">
                    <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#00BFA6] to-transparent"></div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-background/80 p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                        <motion.div
                          className={edu.iconColor}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                        >
                          {edu.icon}
                        </motion.div>
                      </div>
                      <div>
                        <div className="text-sm text-[#00BFA6]">🎓 Program</div>
                        <CardTitle>{edu.degree}</CardTitle>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[#00BFA6]">🏫 Institution</div>
                      <div className="text-lg font-medium text-primary">{edu.institution}</div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                      <div>
                        <div className="text-sm text-[#00BFA6]">📅 Duration</div>
                        <div className="flex items-center gap-1">
                          <Calendar className={`h-4 w-4 ${edu.calendarColor}`} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-[#00BFA6]">🏆 Achievement</div>
                        <div className="flex items-center gap-1">
                          <Award className={`h-4 w-4 ${edu.awardColor}`} />
                          <span>{edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.activities && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-3 text-[#00BFA6]">📘 Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity, i) => (
                            <motion.div
                              key={activity.name}
                              variants={badgeVariants}
                              custom={i}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ y: -3, scale: 1.05 }}
                            >
                              <Badge
                                variant="outline"
                                className={`${edu.activitiesColor} px-3 py-1 rounded-full flex items-center gap-1 shadow-md`}
                              >
                                {activity.icon}
                                {activity.name}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3 text-[#00BFA6]">🧠 Key Learnings:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {edu.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            variants={itemVariants}
                            custom={i}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="mt-1 text-[#00BFA6]">{highlight.icon}</div>
                            <span>{highlight.text}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-3 text-[#00BFA6]">🔧 Skills Gained:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, i) => (
                          <TooltipProvider key={skill.name}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <motion.div
                                  variants={badgeVariants}
                                  custom={i}
                                  initial="hidden"
                                  animate={isInView ? "visible" : "hidden"}
                                  transition={{ delay: i * 0.1 }}
                                  whileHover={{
                                    y: -5,
                                    scale: 1.1,
                                    boxShadow: `0 10px 25px ${
                                      index === 0 ? "rgba(0, 196, 204, 0.4)" : "rgba(124, 58, 237, 0.4)"
                                    }`,
                                  }}
                                >
                                  <Badge
                                    className={`${edu.skillsColor} px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-help`}
                                  >
                                    {skill.icon}
                                    {skill.name}
                                  </Badge>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent side="bottom" className="max-w-[250px] p-3">
                                <p>{skill.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
