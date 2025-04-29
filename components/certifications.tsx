"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle, Clock, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("microsoft")

  const certifications = {
    microsoft: [
      {
        title: "Microsoft AZ-500",
        fullTitle: "Azure Security Engineer Associate",
        summary:
          "Validates expertise in implementing security controls, maintaining security posture, managing identity and access, and protecting data, applications, and networks in cloud and hybrid environments.",
        keySkills: ["Azure Security Center", "Key Vault", "Network Security", "Identity Management"],
        issueDate: "January 2025",
        expiryDate: "January 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-blue-600/20 to-blue-400/5 border-blue-500/30",
        tagColor: "bg-[#0078d4]/20 text-[#0078d4] border-[#0078d4]/30", // Microsoft blue
        isHighlighted: true,
        icon: "🔐",
      },
      {
        title: "Microsoft SC-300",
        fullTitle: "Identity and Access Administrator",
        summary:
          "Demonstrates ability to implement identity solutions, manage authentication and access, implement access management for apps, and plan and implement identity governance.",
        keySkills: ["Azure AD", "Conditional Access", "Privileged Identity Management", "Entitlement Management"],
        issueDate: "December 2024",
        expiryDate: "December 2027",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-purple-600/20 to-purple-400/5 border-purple-500/30",
        tagColor: "bg-[#0078d4]/20 text-[#0078d4] border-[#0078d4]/30", // Microsoft blue
        icon: "🔑",
      },
      {
        title: "Microsoft SC-200",
        fullTitle: "Security Operations Analyst",
        summary:
          "Validates skills in threat mitigation using Microsoft security, compliance, and identity solutions, including Microsoft Sentinel, Microsoft 365 Defender, and Microsoft Defender for Cloud.",
        keySkills: ["Microsoft Sentinel", "KQL Queries", "SIEM/SOAR", "Threat Hunting"],
        issueDate: "November 2024",
        expiryDate: "November 2027",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-green-600/20 to-green-400/5 border-green-500/30",
        tagColor: "bg-[#0078d4]/20 text-[#0078d4] border-[#0078d4]/30", // Microsoft blue
        isHighlighted: true,
        icon: "🛡️",
      },
      {
        title: "Microsoft SC-900",
        fullTitle: "Security, Compliance, and Identity Fundamentals",
        summary:
          "Demonstrates foundational knowledge of security, compliance, and identity across cloud-based and related Microsoft services.",
        keySkills: ["Security Concepts", "Microsoft Security Solutions", "Compliance", "Identity Basics"],
        issueDate: "October 2024",
        expiryDate: "No Expiration",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-amber-600/20 to-amber-400/5 border-amber-500/30",
        tagColor: "bg-[#0078d4]/20 text-[#0078d4] border-[#0078d4]/30", // Microsoft blue
        icon: "📚",
      },
    ],
    comptia: [
      {
        title: "CompTIA Security+",
        fullTitle: "Security Certification",
        summary:
          "Validates the baseline skills necessary to perform core security functions and pursue an IT security career. Covers network security, compliance, operational security, threats and vulnerabilities.",
        keySkills: ["Network Security", "Cryptography", "Risk Management", "Identity Management"],
        issueDate: "January 2025",
        expiryDate: "January 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-red-600/20 to-red-400/5 border-red-500/30",
        tagColor: "bg-[#ff4b36]/20 text-[#ff4b36] border-[#ff4b36]/30", // Brighter CompTIA red
        isHighlighted: true,
        icon: "🔒",
      },
      {
        title: "CompTIA CySA+",
        fullTitle: "Cybersecurity Analyst",
        summary:
          "Focuses on security analytics, intrusion detection, and response. Demonstrates proficiency in threat and vulnerability management, software and systems security, security operations and monitoring.",
        keySkills: ["Threat Detection", "Vulnerability Management", "Security Monitoring", "Incident Response"],
        issueDate: "January 2025",
        expiryDate: "January 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-cyan-600/20 to-cyan-400/5 border-cyan-500/30",
        tagColor: "bg-[#ff4b36]/20 text-[#ff4b36] border-[#ff4b36]/30", // Updated CompTIA red
        isHighlighted: true,
        icon: "🔍",
      },
      {
        title: "CompTIA Cloud+",
        fullTitle: "Cloud Certification",
        summary:
          "Validates the skills needed to maintain and optimize cloud infrastructure services. Covers cloud architecture, security, deployment, operations, and troubleshooting.",
        keySkills: ["Cloud Security", "Deployment Models", "Virtualization", "Resource Management"],
        issueDate: "January 2025",
        expiryDate: "January 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-indigo-600/20 to-indigo-400/5 border-indigo-500/30",
        tagColor: "bg-[#ff4b36]/20 text-[#ff4b36] border-[#ff4b36]/30", // Updated CompTIA red
        isHighlighted: true,
        icon: "☁️",
      },
      {
        title: "CompTIA Network+",
        fullTitle: "Network Certification",
        summary:
          "Validates the essential knowledge and skills needed to confidently design, configure, manage and troubleshoot wired and wireless networks.",
        keySkills: ["Network Architecture", "Network Operations", "Network Security", "Troubleshooting"],
        issueDate: "January 2024",
        expiryDate: "January 2027",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-emerald-600/20 to-emerald-400/5 border-emerald-500/30",
        tagColor: "bg-[#ff4b36]/20 text-[#ff4b36] border-[#ff4b36]/30", // Updated CompTIA red
        icon: "🌐",
      },
    ],
    other: [
      {
        title: "AWS Certified Security",
        fullTitle: "Specialty",
        summary:
          "Validates expertise in AWS security, including data protection mechanisms, security operations, and incident response.",
        keySkills: ["AWS Security Services", "Encryption", "Access Management", "Logging & Monitoring"],
        issueDate: "March 2025",
        expiryDate: "March 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-orange-600/20 to-orange-400/5 border-orange-500/30",
        tagColor: "bg-[#ff9900]/20 text-[#ff9900] border-[#ff9900]/30", // AWS orange
        isHighlighted: true,
        icon: "☁️",
      },
      {
        title: "AWS Cloud Practitioner",
        fullTitle: "Foundational",
        summary: "Validates overall understanding of the AWS Cloud, independent of specific technical roles.",
        keySkills: ["AWS Core Services", "Security", "Architecture", "Pricing & Support"],
        issueDate: "February 2025",
        expiryDate: "February 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-yellow-600/20 to-yellow-400/5 border-yellow-500/30",
        tagColor: "bg-[#ff9900]/20 text-[#ff9900] border-[#ff9900]/30", // AWS orange
        icon: "☁️",
      },
      {
        title: "Splunk Certified Cybersecurity Defense Analyst",
        fullTitle: "SCDA",
        summary: "Validates ability to use Splunk for security monitoring, threat detection, and incident response.",
        keySkills: ["SPL", "Security Monitoring", "Threat Detection", "Incident Response"],
        issueDate: "April 2025",
        expiryDate: "April 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-lime-600/20 to-lime-400/5 border-lime-500/30",
        tagColor: "bg-[#65a637]/20 text-[#65a637] border-[#65a637]/30", // Splunk green
        icon: "📊",
      },
      {
        title: "ServiceNow Certified GRC",
        fullTitle: "Governance, Risk, and Compliance",
        summary:
          "Validates expertise in implementing and managing ServiceNow GRC applications for risk management and compliance.",
        keySkills: ["Risk Management", "Compliance", "Policy Management", "Audit Management"],
        issueDate: "May 2025",
        expiryDate: "May 2028",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-teal-600/20 to-teal-400/5 border-teal-500/30",
        tagColor: "bg-[#81b5a1]/20 text-[#81b5a1] border-[#81b5a1]/30", // ServiceNow teal
        icon: "📋",
      },
      {
        title: "SSCP",
        fullTitle: "Systems Security Certified Practitioner",
        summary: "Validates technical skills and practical security knowledge in hands-on operational IT roles.",
        keySkills: ["Access Controls", "Security Operations", "Risk Management", "Incident Response"],
        issueDate: "September 2024",
        expiryDate: "September 2027",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-violet-600/20 to-violet-400/5 border-violet-500/30",
        tagColor: "bg-[#8850ba]/20 text-[#8850ba] border-[#8850ba]/30", // ISC2 purple
        icon: "🔐",
      },
      {
        title: "CC",
        fullTitle: "Certified in Cybersecurity",
        summary: "Entry-level certification that demonstrates a foundation in cybersecurity principles and practices.",
        keySkills: ["Security Principles", "Business Continuity", "Network Security", "Security Controls"],
        issueDate: "July 2024",
        expiryDate: "July 2027",
        verifyLink: "https://www.credly.com/users/satender-kumar.2430",
        color: "from-fuchsia-600/20 to-fuchsia-400/5 border-fuchsia-500/30",
        tagColor: "bg-[#8850ba]/20 text-[#8850ba] border-[#8850ba]/30", // ISC2 purple
        icon: "🔰",
      },
    ],
    inprogress: [
      {
        title: "CISSP",
        fullTitle: "Certified Information Systems Security Professional",
        summary:
          "Gold standard certification that validates expertise across a broad range of security domains and principles.",
        keySkills: ["Security & Risk Management", "Asset Security", "Security Architecture", "Security Operations"],
        progress: 70,
        targetDate: "June 2025",
        color: "from-amber-600/20 to-amber-400/5 border-amber-500/30",
        tagColor: "bg-[#8850ba]/20 text-[#8850ba] border-[#8850ba]/30", // ISC2 purple
        isHighlighted: true,
        icon: "🏆",
      },
      {
        title: "CISM",
        fullTitle: "Certified Information Security Manager",
        summary:
          "Management-focused certification that validates ability to develop and manage enterprise information security programs.",
        keySkills: ["Information Security Governance", "Risk Management", "Program Development", "Incident Management"],
        progress: 60,
        targetDate: "June 2025",
        color: "from-sky-600/20 to-sky-400/5 border-sky-500/30",
        tagColor: "bg-[#4d7996]/20 text-[#4d7996] border-[#4d7996]/30", // ISACA blue
        icon: "📊",
      },
    ],
  }

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Certifications</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional certifications validating my expertise in cybersecurity, cloud security, and identity
            management.
          </p>

          <Tabs defaultValue="microsoft" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="microsoft" className={activeTab === "microsoft" ? "bg-[#0078d4] text-white" : ""}>
                Microsoft
              </TabsTrigger>
              <TabsTrigger value="comptia" className={activeTab === "comptia" ? "bg-[#ff4b36] text-white" : ""}>
                CompTIA
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className={activeTab === "other" ? "bg-gradient-to-r from-[#ff9900] to-[#8850ba] text-white" : ""}
              >
                Other
              </TabsTrigger>
              <TabsTrigger value="inprogress" className={activeTab === "inprogress" ? "bg-[#00BFA6] text-white" : ""}>
                In Progress
              </TabsTrigger>
            </TabsList>

            <TooltipProvider>
              {Object.entries(certifications).map(([category, certs]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certs.map((cert, index) => (
                      <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={activeTab === category ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="h-full"
                      >
                        <Card
                          className={`h-full flex flex-col bg-gradient-to-br ${cert.color} relative overflow-hidden ${
                            cert.isHighlighted ? "ring-2 ring-offset-2 ring-offset-background" : ""
                          }`}
                          style={{
                            boxShadow: cert.isHighlighted ? "0 0 15px rgba(0, 191, 166, 0.3)" : "none",
                          }}
                        >
                          {cert.isHighlighted && (
                            <div className="absolute top-0 right-0">
                              <div className="bg-[#00BFA6] text-[#0D1B2A] text-xs font-bold py-1 px-3 rotate-45 translate-x-2 -translate-y-1 shadow-md">
                                TOP CERT
                              </div>
                            </div>
                          )}
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                  <span className="text-lg">{cert.icon}</span>
                                  {cert.title}
                                </CardTitle>
                                <CardDescription className="mt-1 text-base">{cert.fullTitle}</CardDescription>
                              </div>
                              {category === "inprogress" && (
                                <div className="bg-background/80 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {cert.targetDate}
                                </div>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-muted-foreground mb-4 text-sm">{cert.summary}</p>

                            <div className="mb-4">
                              <h4 className="text-sm font-medium mb-2">Key Skills:</h4>
                              <div className="flex flex-wrap gap-2">
                                {cert.keySkills.map((skill) => (
                                  <Tooltip key={skill}>
                                    <TooltipTrigger asChild>
                                      <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cert.tagColor} transition-all duration-300 hover:scale-105`}
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          padding: "0.25rem 0.75rem",
                                          borderRadius: "9999px",
                                          fontSize: "0.75rem",
                                          fontWeight: "500",
                                        }}
                                      >
                                        <CheckCircle className="mr-1 h-3 w-3" />
                                        {skill}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{getSkillDescription(skill)}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>

                            {category === "inprogress" ? (
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs">
                                  <span>Progress</span>
                                  <span>{cert.progress}%</span>
                                </div>
                                <div className="relative">
                                  <Progress value={cert.progress} className="h-2" />
                                  <motion.div
                                    className="absolute top-0 left-0 h-2 bg-[#00BFA6]/50 rounded-full"
                                    style={{ width: `${cert.progress}%` }}
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="font-medium">Issued:</span> {cert.issueDate}
                                </div>
                                <div>
                                  <span className="font-medium">Expires:</span> {cert.expiryDate}
                                </div>
                              </div>
                            )}
                          </CardContent>
                          <CardFooter>
                            {category !== "inprogress" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full group hover:bg-[#00BFA6]/10 transition-all duration-300"
                                asChild
                              >
                                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                                  <Shield className="mr-2 h-4 w-4 text-[#00BFA6] group-hover:scale-110 transition-transform duration-300" />
                                  Verify on Credly{" "}
                                  <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                              </Button>
                            )}
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </TooltipProvider>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to provide descriptions for skills
function getSkillDescription(skill: string): string {
  const descriptions: Record<string, string> = {
    "Azure Security Center":
      "Cloud security management and advanced threat protection service for Azure and hybrid workloads",
    "Key Vault": "Azure service for securely storing and accessing secrets, keys, and certificates",
    "Network Security": "Protection of network infrastructure and connections from unauthorized access and attacks",
    "Identity Management": "Administration of individual identities, authentication, authorization, and privileges",
    "SIEM/SOAR": "Security Information and Event Management / Security Orchestration, Automation and Response",
    "KQL Queries": "Kusto Query Language used in Microsoft Sentinel for log analytics",
    SPL: "Search Processing Language used in Splunk for data analysis and visualization",
    "AWS Security Services": "Suite of security tools for protecting AWS cloud resources and workloads",
    "Zero Trust": "Security model that requires strict identity verification for every person and device",
    "RBAC/ABAC": "Role-Based Access Control / Attribute-Based Access Control models",
    "Risk Management":
      "Process of identifying, assessing, and controlling threats to an organization's capital and earnings",
  }

  return descriptions[skill] || skill
}

export default Certifications
