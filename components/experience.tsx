"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      company: "Paladin Security Group Ltd",
      logo: "/DNA-Double-Helix.png",
      position: "Information Security Analyst",
      location: "London, ON",
      period: "Oct 2023 - Present",
      description: [
        "Led SOC operations, overseeing threat monitoring across hybrid cloud and on-premises environments using Splunk and Microsoft Sentinel, reducing mean time to detect (MTTD) by 30%, through proactive threat mitigation.",
        "Implemented and enforced NIST and ISO 27001 compliance frameworks, reducing audit findings by 25% and improving cloud infrastructure security posture.",
        "Conducted vulnerability assessments using Qualys and Wireshark, identifying and mitigating 50+ vulnerabilities, resulting in a 25% reduction in security gaps.",
        "Enhanced incident response by integrating ServiceNow managing risk registers, streamlining ticket management for cloud security incidents and reducing resolution time by 20%.",
        "Collaborated with cross-functional teams to enforce access control policies, ensuring regulatory compliance and data security across cloud and hybrid systems.",
        "Implemented security policies using Microsoft Defender for endpoint protection, monitoring and responding to alerts, reducing incidents by 25% through proactive threat mitigation.",
      ],
      technologies: ["AWS Security", "Azure Defender", "Splunk", "MITRE ATT&CK", "Python", "ServiceNow"],
      color: "from-blue-500/10 to-background border-blue-500/20",
    },
    {
      company: "GardaWorld",
      logo: "/stylized-snt.png",
      position: "Identity and Access Management (IAM) Analyst",
      location: "London, ON",
      period: "Feb 2022 - Aug 2023",
      description: [
        "Automated IAM workflows using Okta and Active Directory, reducing access provisioning time by 30% for 500+ users and improving operational efficiency by 20%.",
        "Implemented RBAC/ABAC access controls and integrated Microsoft Intune, SSO solutions (Okta, Azure AD), enhancing security for 5,000+ users, reducing unauthorized access by 30%.",
        "Conducted bi-annual access reviews, ensuring compliance with NIST 800-53 and ISO 27001 standards, and reducing orphaned accounts by 25%.",
        "Ensured compliance with GDPR and PCI DSS by enforcing strict access control policies and monitoring cloud resource access logs.",
        "Migrated 50+ applications to Okta SSO with MFA, achieving 99.9% uptime and reducing helpdesk tickets by 25%.",
        "Administered security awareness training for 200+ employees, reducing user-related risks by 20%.",
      ],
      technologies: ["Okta", "Azure AD", "RBAC/ABAC", "NIST 800-53", "ISO 27001", "MFA"],
      color: "from-purple-500/10 to-background border-purple-500/20",
    },
    {
      company: "IEIMT",
      logo: "/abstract-dgi.png",
      position: "IT Support Specialist",
      location: "Remote",
      period: "Apr 2019 - Aug 2021",
      description: [
        "Provided deskside and remote support, resolving 95% of incidents within SLA, reducing downtime by 25%, and ensuring 99.9% system uptime across hybrid environments.",
        "Administered Microsoft 365 environments, including Exchange Online, Teams, and SharePoint, ensuring seamless collaboration and communication.",
        "Trained 50+ end-users on IT security best practices, reducing user-related risks and improving cybersecurity awareness.",
        "Conducted comprehensive post-migration testing of peripherals and applications and communicated effectively with end-users through multiple channels.",
      ],
      technologies: ["Microsoft 365", "Exchange Online", "Teams", "SharePoint", "IT Security"],
      color: "from-green-500/10 to-background border-green-500/20",
    },
    {
      company: "Lenovo India",
      logo: "/lenovo-logo-display.png",
      position: "Technical Support Specialist",
      location: "India",
      period: "Jan 2017 - Feb 2019",
      description: [
        "Delivered remote support to 100+ clients weekly, achieving a 95% satisfaction rate and reducing resolution time by 25% through network troubleshooting (TCP/IP, DNS, VPNs).",
        "Resolved 80% of support cases within 24 hours, ensuring minimal downtime and effective customer service.",
        "Created documentation for 10+ support processes, streamlining workflows and enhancing team efficiency by 20%.",
      ],
      technologies: ["TCP/IP", "DNS", "VPNs", "Technical Support", "Documentation"],
      color: "from-amber-500/10 to-background border-amber-500/20",
    },
  ]

  const updatedExperiences = experiences.map((exp) => ({
    ...exp,
    description: exp.description.map((desc) => desc.replace("4+ years", "4 years")),
    period: exp.period.replace("4+ years", "4 years"),
  }))

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>

          <div className="space-y-8">
            {updatedExperiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card
                  className={`overflow-hidden bg-gradient-to-br ${exp.color} transition-all duration-300 group-hover:shadow-lg`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/4 bg-background/40 p-6 flex flex-col justify-center items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-background flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <motion.img
                            src={exp.logo || "/placeholder.svg"}
                            alt={`${exp.company} logo`}
                            className="w-14 h-14 object-contain"
                            animate={{ rotate: [0, 0, 10, -10, 0] }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              duration: 5,
                              repeatDelay: 2,
                            }}
                          />
                        </div>
                        <h4 className="text-lg font-medium text-center text-primary">{exp.company}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                          <CalendarDays className="h-3.5 w-3.5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="w-full md:w-3/4 p-6">
                        <h3 className="text-xl font-bold mb-3">{exp.position}</h3>
                        <ul className="mb-4 text-muted-foreground space-y-2 list-disc pl-5">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm md:text-base">
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-background/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
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

export default Experience
