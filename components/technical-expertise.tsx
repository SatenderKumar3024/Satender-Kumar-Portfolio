"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Shield, Code, FileCheck, Network, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const TechnicalExpertise = () => {
  const expertiseAreas = [
    {
      title: "Cloud Security",
      description: "AWS (IAM, EC2, S3, CloudTrail), Azure (Entra ID, Defender, AZ-500), Zero Trust Architecture",
      icon: <Cloud className="h-8 w-8" />,
      color: "from-[#1e90ff]/20 to-[#0D1B2A]/80 border-[#1e90ff]/30",
      textColor: "text-[#1e90ff]",
      items: ["AWS", "Azure", "IAM", "CloudTrail", "Entra ID", "Zero Trust"],
      tagColor: "bg-[#1e90ff]/20 text-[#1e90ff] border-[#1e90ff]/30",
    },
    {
      title: "SIEM & Threat Detection",
      description: "Microsoft Sentinel (KQL), Splunk (SPL, Enterprise Security), MITRE ATT&CK Framework",
      icon: <Shield className="h-8 w-8" />,
      color: "from-[#5b4baf]/20 to-[#0D1B2A]/80 border-[#5b4baf]/30",
      textColor: "text-[#5b4baf]",
      items: ["Microsoft Sentinel", "KQL", "Splunk", "SPL", "MITRE ATT&CK"],
      tagColor: "bg-[#5b4baf]/20 text-[#5b4baf] border-[#5b4baf]/30",
    },
    {
      title: "Security Automation",
      description: "Python (Security Scripts), PowerShell (Azure/AD Automation), API Security Integrations",
      icon: <Code className="h-8 w-8" />,
      color: "from-[#1c6e54]/20 to-[#0D1B2A]/80 border-[#1c6e54]/30",
      textColor: "text-[#1c6e54]",
      items: ["Python", "PowerShell", "API Security", "Automation", "Scripting"],
      tagColor: "bg-[#1c6e54]/20 text-[#1c6e54] border-[#1c6e54]/30",
    },
    {
      title: "Risk & Compliance",
      description: "NIST 800-53, ISO 27001, GDPR, PCI DSS, Risk Assessment & Management",
      icon: <FileCheck className="h-8 w-8" />,
      color: "from-[#e4b343]/20 to-[#0D1B2A]/80 border-[#e4b343]/30",
      textColor: "text-[#e4b343]",
      items: ["NIST 800-53", "ISO 27001", "GDPR", "PCI DSS", "Risk Assessment"],
      tagColor: "bg-[#e4b343]/20 text-[#e4b343] border-[#e4b343]/30",
    },
    {
      title: "IAM & Access Control",
      description: "Azure AD, Entra ID, Okta, RBAC/ABAC, SSO, Privileged Access Management",
      icon: <Lock className="h-8 w-8" />,
      color: "from-[#0078b6]/20 to-[#0D1B2A]/80 border-[#0078b6]/30",
      textColor: "text-[#0078b6]",
      items: ["Azure AD", "Entra ID", "Okta", "RBAC/ABAC", "SSO", "PAM"],
      tagColor: "bg-[#0078b6]/20 text-[#0078b6] border-[#0078b6]/30",
    },
    {
      title: "Network Security",
      description: "Firewalls, IDS/IPS, DNS Security, DDoS Mitigation, Zero Trust Architecture",
      icon: <Network className="h-8 w-8" />,
      color: "from-[#07515d]/20 to-[#0D1B2A]/80 border-[#07515d]/30",
      textColor: "text-[#07515d]",
      items: ["Firewalls", "IDS/IPS", "DNS Security", "DDoS Mitigation", "Zero Trust"],
      tagColor: "bg-[#07515d]/20 text-[#07515d] border-[#07515d]/30",
    },
  ]

  return (
    <section id="expertise" className="py-16 bg-cyber-dark-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-cyber-soft-white">Technical Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 10px 25px rgba(0, 191, 166, 0.3)" }}
                className="h-full"
              >
                <Card
                  className={`h-full bg-gradient-to-br ${area.color} bg-cyber-dark-blue/50 card-3d hover:shadow-xl hover:border-cyan-400 transition-all duration-300`}
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className={`bg-cyber-near-black/80 p-2 rounded-md ${area.textColor}`}>
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                      >
                        {area.icon}
                      </motion.div>
                    </div>
                    <CardTitle className="text-cyber-soft-white">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="card-3d-content">
                    <p className="text-cyber-light-gray mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.items.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`${area.tagColor} border hover:scale-105 transition-all duration-300`}
                            title={getTagTooltip(item)} // Add tooltips
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
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

// Helper function to provide tooltips for common abbreviations
function getTagTooltip(tag: string): string {
  const tooltips: Record<string, string> = {
    "RBAC/ABAC": "Role-Based Access Control / Attribute-Based Access Control",
    IAM: "Identity and Access Management",
    SSO: "Single Sign-On",
    PAM: "Privileged Access Management",
    KQL: "Kusto Query Language (used in Microsoft Sentinel)",
    SPL: "Search Processing Language (used in Splunk)",
    "MITRE ATT&CK": "MITRE Adversarial Tactics, Techniques & Common Knowledge Framework",
    "NIST 800-53": "National Institute of Standards and Technology Special Publication 800-53",
    GDPR: "General Data Protection Regulation",
    "PCI DSS": "Payment Card Industry Data Security Standard",
    "IDS/IPS": "Intrusion Detection System / Intrusion Prevention System",
    DDoS: "Distributed Denial of Service",
  }

  return tooltips[tag] || tag
}

export default TechnicalExpertise
