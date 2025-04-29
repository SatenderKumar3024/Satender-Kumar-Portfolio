"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
      highlights: [
        "Learned how online businesses work and stay compliant with rules",
        "Raised awareness about phishing risks, keeping operations safe",
        "Mastered safeguarding brand prominence and customer information",
        "Secured key assets, supporting company goals and growth",
        "Developed skills in explaining complex ideas simply",
        "Trained teams on IT security best practices, strengthening protection",
        "Transformed complex data into readable charts and visuals",
        "Helped teams identify risks quickly, improving decision-making",
        "Understood how digital tools drive company plans and results",
        "Streamlined tasks to save time, maintaining business efficiency",
      ],
      skills: ["Digital Security", "Risk Management", "Data Visualization", "Business Operations", "Team Training"],
      skillsColor: "bg-[#00c4cc]/10 text-[#00c4cc]", // Brighter teal for Digital
      activities: [
        "Cybersecurity Club",
        "Cloud Security Project",
        "Hackathons (University & Online)",
        "Tech Workshops",
        "Student IT Crew",
      ],
      activitiesColor: "bg-[#2c3e50] text-[#a78bfa]", // Brighter purple tag tone
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
        "Cybersecurity Club",
        "Cloud Security Project",
        "Hackathons (University & Online)",
        "Tech Workshops",
        "Student IT Crew",
      ],
      activitiesColor: "bg-[#2c3e50] text-[#a78bfa]", // Brighter purple tag tone
      highlights: [
        "Built core skills in IT systems to maintain business technology",
        "Learned programming to create tools solving real company problems",
        "Mastered database management to organize and protect business data",
        "Explored cloud systems for secure, scalable online operations",
        "Sharpened cybersecurity expertise to identify risks and enhance safety",
      ],
      skills: ["Programming", "Database Management", "Cloud Systems", "IT Infrastructure", "Cybersecurity"],
      skillsColor: "bg-[#7c3aed]/10 text-[#7c3aed]", // Brighter indigo for IT
    },
  ]

  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px rgba(0, 191, 166, 0.3)" }}
                className="h-full"
              >
                <Card className={`h-full bg-gradient-to-br ${edu.color} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-background/80 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                        <motion.div
                          className={edu.iconColor}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                        >
                          {edu.icon}
                        </motion.div>
                      </div>
                      <CardTitle>{edu.degree}</CardTitle>
                    </div>
                    <div className="text-lg font-medium text-primary">{edu.institution}</div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className={`h-4 w-4 ${edu.calendarColor}`} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className={`h-4 w-4 ${edu.awardColor}`} />
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.activities && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity) => (
                            <Badge
                              key={activity}
                              variant="outline"
                              className={`${edu.activitiesColor} px-3 py-1 rounded-full`}
                            >
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Key Learnings:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                        {edu.highlights.slice(0, 5).map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Skills Gained:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className={edu.skillsColor}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              padding: "0.25rem 0.75rem",
                              borderRadius: "9999px",
                              fontWeight: "500",
                              transition: "all 0.2s ease",
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
