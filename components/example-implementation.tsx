"use client"

import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { TechBadge } from "@/components/ui/tech-badge"
import { SkillCard } from "@/components/ui/skill-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { TypographyH3, TypographyP, TypographyLead } from "@/components/ui/typography"
import { motion } from "framer-motion"
import { Shield, Cloud, Code, FileCheck, AlertTriangle, Database } from "lucide-react"

export default function ExampleImplementation() {
  // Example tech badges with icons
  const techBadges = [
    {
      name: "AWS",
      icon: <Cloud className="h-4 w-4" />,
      color: "#FF9900",
      description: "Amazon Web Services cloud security expertise including IAM, S3, and EC2",
    },
    {
      name: "Azure",
      icon: <Cloud className="h-4 w-4" />,
      color: "#0078D4",
      description: "Microsoft Azure security with AZ-500 certification expertise",
    },
    {
      name: "Splunk",
      icon: <Database className="h-4 w-4" />,
      color: "#9933CC",
      description: "Advanced SIEM platform for log analysis and security monitoring",
    },
    {
      name: "Python",
      icon: <Code className="h-4 w-4" />,
      color: "#3776AB",
      description: "Security automation and tool development using Python",
    },
    {
      name: "NIST",
      icon: <FileCheck className="h-4 w-4" />,
      color: "#E4B343",
      description: "NIST 800-53 security controls framework implementation",
    },
    {
      name: "Incident Response",
      icon: <AlertTriangle className="h-4 w-4" />,
      color: "#E11D48",
      description: "Threat detection and incident response procedures",
    },
  ]

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      {/* Example section with modern design */}
      <SectionContainer id="example" variant="gradient">
        <SectionHeading
          title="Enhanced Design Components"
          subtitle="Modern UI elements with consistent spacing, animations, and visual hierarchy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <GlassCard className="p-6">
            <TypographyH3>Glassmorphism Cards</TypographyH3>
            <TypographyP>
              Modern UI cards with backdrop blur, subtle borders, and hover animations to create depth and visual
              separation between content.
            </TypographyP>
            <div className="mt-4">
              <AnimatedButton>Interactive Button</AnimatedButton>
            </div>
          </GlassCard>

          <GlassCard className="p-6" variant="teal">
            <TypographyH3>Consistent Typography</TypographyH3>
            <TypographyP>
              Improved typography hierarchy with consistent sizing, spacing, and styling for better readability across
              all sections.
            </TypographyP>
            <TypographyLead className="mt-2">This is a lead paragraph with larger text.</TypographyLead>
          </GlassCard>
        </div>

        <TypographyH3 className="mb-6 text-center">Tech Skill Badges</TypographyH3>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techBadges.map((badge) => (
            <motion.div key={badge.name} variants={itemVariants}>
              <TechBadge name={badge.name} icon={badge.icon} color={badge.color} description={badge.description} />
            </motion.div>
          ))}
        </motion.div>

        <TypographyH3 className="mb-6 text-center">Skill Category Cards</TypographyH3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            title="Cloud Security"
            icon={<Cloud />}
            color="#1e90ff"
            description="Expertise in securing cloud environments and infrastructure"
          >
            <div className="flex flex-wrap gap-2 mt-4">
              <TechBadge name="AWS" icon={<Cloud className="h-3.5 w-3.5" />} color="#FF9900" />
              <TechBadge name="Azure" icon={<Cloud className="h-3.5 w-3.5" />} color="#0078D4" />
              <TechBadge name="IAM" icon={<Shield className="h-3.5 w-3.5" />} color="#0078D4" />
            </div>
          </SkillCard>

          <SkillCard
            title="SIEM & Monitoring"
            icon={<Database />}
            color="#9933CC"
            description="Security information and event management expertise"
          >
            <div className="flex flex-wrap gap-2 mt-4">
              <TechBadge name="Splunk" icon={<Database className="h-3.5 w-3.5" />} color="#9933CC" />
              <TechBadge name="Sentinel" icon={<Shield className="h-3.5 w-3.5" />} color="#0078D4" />
            </div>
          </SkillCard>

          <SkillCard
            title="Incident Response"
            icon={<AlertTriangle />}
            color="#E11D48"
            description="Procedures for handling security incidents and breaches"
          >
            <div className="flex flex-wrap gap-2 mt-4">
              <TechBadge name="IR Playbooks" icon={<FileCheck className="h-3.5 w-3.5" />} color="#E11D48" />
              <TechBadge name="Threat Detection" icon={<AlertTriangle className="h-3.5 w-3.5" />} color="#E11D48" />
            </div>
          </SkillCard>
        </div>
      </SectionContainer>
    </>
  )
}
