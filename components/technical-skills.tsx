"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  Cloud,
  Shield,
  Code,
  FileCheck,
  AlertTriangle,
  Network,
  BarChart,
  Lock,
  Search,
  FileWarning,
  PieChart,
  Info,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function TechnicalSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      name: "SIEM & Monitoring",
      icon: <Activity className="h-5 w-5" />,
      color: "#5b4baf", // Indigo / Violet
      skills: ["Splunk", "Microsoft Sentinel", "Wireshark", "Qualys", "Nessus", "ServiceNow"],
    },
    {
      name: "Cloud Security",
      icon: <Cloud className="h-5 w-5" />,
      color: "#1e90ff", // Azure Blue
      skills: ["AWS (IAM, EC2, S3)", "Azure (AZ-500)", "GCP", "Multi-Cloud Monitoring"],
    },
    {
      name: "Vulnerability Mgmt",
      icon: <FileWarning className="h-5 w-5" />,
      color: "#e76f51", // Red-Orange - Lightened for better contrast
      skills: ["Qualys", "Nessus", "CVE Analysis", "Container Security"],
    },
    {
      name: "Automation",
      icon: <Code className="h-5 w-5" />,
      color: "#1c6e54", // Dark Green
      skills: ["Python", "PowerShell", "Bash", "API Security", "SOAR Workflows"],
    },
    {
      name: "Compliance",
      icon: <FileCheck className="h-5 w-5" />,
      color: "#e4b343", // Golden
      skills: ["NIST 800-53", "ISO 27001", "SOC2", "PCI DSS", "GDPR"],
    },
    {
      name: "Incident Response",
      icon: <AlertTriangle className="h-5 w-5" />,
      color: "#e11d48", // Lightened red for better contrast
      skills: ["Threat Detection", "Containment", "Remediation", "IR Playbooks"],
    },
    {
      name: "IAM & Access Control",
      icon: <Lock className="h-5 w-5" />,
      color: "#0078b6", // Steel Blue
      skills: ["Azure AD / Entra ID", "Okta", "SSO", "RBAC", "ABAC"],
    },
    {
      name: "Network Security",
      icon: <Network className="h-5 w-5" />,
      color: "#07515d", // Deep Teal
      skills: ["Firewalls", "IDS/IPS", "DDoS Protection", "DNS", "Zero Trust Architecture"],
    },
    {
      name: "Data & Reporting Tools",
      icon: <PieChart className="h-5 w-5" />,
      color: "#00e6e6", // Aqua/Neon Cyan
      skills: ["Power BI", "Tableau", "Excel", "Dataiku", "Alteryx"],
    },
  ]

  // Highlighted skills that should be more prominent
  const highlightedSkills = [
    {
      name: "Microsoft Sentinel",
      color: "#5b4baf",
      icon: <Shield className="h-4 w-4 mr-2" />,
      tooltip: "SIEM platform for threat detection and response",
    },
    {
      name: "Splunk",
      color: "#5b4baf",
      icon: <Search className="h-4 w-4 mr-2" />,
      tooltip: "Data analytics platform for security monitoring",
    },
    {
      name: "AWS",
      color: "#1e90ff",
      icon: <Cloud className="h-4 w-4 mr-2" />,
      tooltip: "Amazon Web Services cloud security expertise",
    },
    {
      name: "Azure",
      color: "#1e90ff",
      icon: <Cloud className="h-4 w-4 mr-2" />,
      tooltip: "Microsoft Azure cloud security expertise",
    },
    {
      name: "Python",
      color: "#1c6e54",
      icon: <Code className="h-4 w-4 mr-2" />,
      tooltip: "Security automation and scripting",
    },
    {
      name: "NIST 800-53",
      color: "#e4b343",
      icon: <FileCheck className="h-4 w-4 mr-2" />,
      tooltip: "Security controls framework for federal information systems",
    },
    {
      name: "ISO 27001",
      color: "#e4b343",
      icon: <FileCheck className="h-4 w-4 mr-2" />,
      tooltip: "International standard for information security management",
    },
    {
      name: "Threat Detection",
      color: "#dc3545",
      icon: <AlertTriangle className="h-4 w-4 mr-2" />,
      tooltip: "Identifying potential security threats in real-time",
    },
    {
      name: "Power BI",
      color: "#00e6e6",
      icon: <BarChart className="h-4 w-4 mr-2" />,
      tooltip: "Data visualization for security metrics and reporting",
    },
    {
      name: "Okta",
      color: "#0078b6",
      icon: <Lock className="h-4 w-4 mr-2" />,
      tooltip: "Identity and access management platform",
    },
  ]

  return (
    <section id="skills" className="py-16" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#E0E1DD]">Technical Skills</h2>
          <p className="text-center text-[#E0E1DD]/80 mb-8 max-w-2xl mx-auto">
            Specialized expertise across cybersecurity domains, with a focus on cloud security, threat detection, and
            compliance.
          </p>

          {/* Highlighted Skills with improved visual hierarchy */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-[#E0E1DD] flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-[#00BFA6]" />
              Core Competencies
            </h3>
            <motion.div
              className="p-6 rounded-xl bg-[rgba(255,255,255,0.05)] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-4">
                <TooltipProvider>
                  {highlightedSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: `0 0 15px ${skill.color}80`,
                        y: -5,
                      }}
                      className="rounded-full px-5 py-3 flex items-center text-white font-medium"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        border: `2px solid ${skill.color}40`,
                      }}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span style={{ color: skill.color }} className="flex items-center">
                            {skill.icon}
                            <span>{skill.name}</span>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </TooltipProvider>
              </div>
            </motion.div>
          </div>

          {/* Skill Categories with equal padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TooltipProvider>
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 10px 25px ${category.color}40`,
                  }}
                  className="h-full"
                >
                  <Card
                    className="h-full bg-[#0D1B2A]/80 border-2 rounded-xl overflow-hidden p-6"
                    style={{ borderColor: `${category.color}40` }}
                  >
                    <CardHeader className="pb-2 p-0">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-md"
                          style={{ backgroundColor: `${category.color}20`, color: category.color }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                          >
                            {category.icon}
                          </motion.div>
                        </div>
                        <CardTitle className="text-[#E0E1DD] flex items-center gap-2">
                          {category.name}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-[#00BFA6]/70 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Expertise in {category.name.toLowerCase()} technologies and methodologies</p>
                            </TooltipContent>
                          </Tooltip>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 p-0">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Tooltip key={skill}>
                            <TooltipTrigger asChild>
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                whileHover={{
                                  scale: 1.1,
                                  y: -2,
                                  boxShadow: `0 5px 15px ${category.color}40`,
                                }}
                                className={`rounded-full px-3 py-1 text-sm font-medium cursor-help
                                  ${category.name === "Incident Response" ? "skill-tag-incident" : ""}
                                  ${category.name === "Cloud Security" ? "skill-tag-cloud" : ""}
                                  ${category.name === "Compliance" ? "skill-tag-compliance" : ""}
                                  ${category.name === "Automation" ? "skill-tag-auto" : ""}
                                `}
                                style={{
                                  backgroundColor: `${category.color}20`,
                                  color: category.color,
                                  border: `1px solid ${category.color}40`,
                                }}
                              >
                                {skill}
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{getSkillDescription(skill)}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TooltipProvider>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to provide descriptions for skills
function getSkillDescription(skill: string): string {
  const descriptions: Record<string, string> = {
    "AWS (IAM, EC2, S3)":
      "Amazon Web Services security including Identity Access Management, Elastic Compute Cloud, and Simple Storage Service",
    "Azure (AZ-500)": "Microsoft Azure security with AZ-500 certification expertise",
    GCP: "Google Cloud Platform security implementation and management",
    "Multi-Cloud Monitoring": "Cross-platform cloud security monitoring and management",
    Splunk: "Advanced SIEM platform for log analysis and security monitoring",
    "Microsoft Sentinel": "Cloud-native SIEM and SOAR solution from Microsoft",
    Wireshark: "Network protocol analyzer for security monitoring and troubleshooting",
    Qualys: "Vulnerability management and assessment platform",
    Nessus: "Vulnerability scanner for security assessment",
    ServiceNow: "IT service management platform with security operations capabilities",
    Python: "Programming language for security automation and tool development",
    PowerShell: "Scripting language for Windows security automation",
    Bash: "Unix shell scripting for security automation",
    "API Security": "Securing application programming interfaces from attacks",
    "SOAR Workflows": "Security Orchestration, Automation and Response process automation",
    "NIST 800-53": "Security controls framework for federal information systems",
    "ISO 27001": "International standard for information security management",
    SOC2: "Service Organization Control 2 compliance framework",
    "PCI DSS": "Payment Card Industry Data Security Standard",
    GDPR: "General Data Protection Regulation for data privacy",
    "Threat Detection": "Identifying potential security threats in real-time",
    Containment: "Isolating security incidents to prevent spread",
    Remediation: "Fixing security vulnerabilities and addressing incidents",
    "IR Playbooks": "Documented incident response procedures",
    "Azure AD / Entra ID": "Microsoft's cloud identity and access management service",
    Okta: "Identity and access management platform",
    SSO: "Single Sign-On authentication",
    RBAC: "Role-Based Access Control",
    ABAC: "Attribute-Based Access Control",
    Firewalls: "Network security devices that monitor and filter traffic",
    "IDS/IPS": "Intrusion Detection/Prevention Systems",
    "DDoS Protection": "Distributed Denial of Service attack mitigation",
    DNS: "Domain Name System security",
    "Zero Trust Architecture": "Security model requiring strict verification for all users and devices",
    "Power BI": "Business analytics and data visualization tool",
    Tableau: "Data visualization and business intelligence platform",
    Excel: "Spreadsheet software for data analysis",
    Dataiku: "Collaborative data science platform",
    Alteryx: "Data analytics and process automation platform",
    "CVE Analysis": "Common Vulnerabilities and Exposures assessment",
    "Container Security": "Securing containerized applications and infrastructure",
  }

  return descriptions[skill] || `Expertise in ${skill}`
}
