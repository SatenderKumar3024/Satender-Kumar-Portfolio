"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { jsPDF } from "jspdf"
import { useToast } from "@/hooks/use-toast"

export function SkillsPdfGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  // Define skill categories and their associated colors
  const CATEGORY_COLORS = {
    "SIEM & Monitoring": "#5b4baf", // Violet
    "Cloud Security": "#1e90ff", // Azure Blue
    "Vulnerability Mgmt": "#e76f51", // Red-Orange
    Automation: "#1c6e54", // Dark Green
    Compliance: "#e4b343", // Golden
    "Incident Response": "#e11d48", // Red
    "IAM & Access Control": "#0078b6", // Steel Blue
    "Network Security": "#07515d", // Deep Teal
    "Data & Reporting Tools": "#00e6e6", // Aqua/Cyan
  }

  const skillCategories = [
    {
      name: "SIEM & Monitoring",
      skills: ["Splunk", "Microsoft Sentinel", "Wireshark", "Qualys", "Nessus", "ServiceNow"],
      description: "Advanced security monitoring and event management platforms for threat detection and analysis",
    },
    {
      name: "Cloud Security",
      skills: ["AWS (IAM, EC2, S3)", "Azure (AZ-500)", "GCP", "Multi-Cloud Monitoring"],
      description: "Securing cloud infrastructure and services across major platforms with compliance frameworks",
    },
    {
      name: "Vulnerability Mgmt",
      skills: ["Qualys", "Nessus", "CVE Analysis", "Container Security"],
      description: "Comprehensive vulnerability assessment, prioritization, and remediation across environments",
    },
    {
      name: "Automation",
      skills: ["Python", "PowerShell", "Bash", "API Security", "SOAR Workflows"],
      description: "Security automation and orchestration to streamline operations and incident response",
    },
    {
      name: "Compliance",
      skills: ["NIST 800-53", "ISO 27001", "SOC2", "PCI DSS", "GDPR"],
      description: "Implementation and assessment of security controls to meet regulatory requirements",
    },
    {
      name: "Incident Response",
      skills: ["Threat Detection", "Containment", "Remediation", "IR Playbooks"],
      description: "Structured approach to handling security incidents from detection to resolution",
    },
    {
      name: "IAM & Access Control",
      skills: ["Azure AD / Entra ID", "Okta", "SSO", "RBAC", "ABAC"],
      description: "Identity and access management solutions to secure user authentication and authorization",
    },
    {
      name: "Network Security",
      skills: ["Firewalls", "IDS/IPS", "DDoS Protection", "DNS", "Zero Trust Architecture"],
      description: "Protection of network infrastructure and traffic with advanced security controls",
    },
    {
      name: "Data & Reporting Tools",
      skills: ["Power BI", "Tableau", "Excel", "Dataiku", "Alteryx"],
      description: "Data visualization and analytics tools for security metrics and executive reporting",
    },
  ]

  // Highlighted skills with proficiency levels
  const highlightedSkills = [
    {
      name: "Microsoft Sentinel",
      category: "SIEM & Monitoring",
      proficiency: 95,
      verified: true,
    },
    {
      name: "Splunk",
      category: "SIEM & Monitoring",
      proficiency: 90,
      verified: true,
    },
    {
      name: "AWS",
      category: "Cloud Security",
      proficiency: 85,
      verified: true,
    },
    {
      name: "Azure",
      category: "Cloud Security",
      proficiency: 90,
      verified: true,
    },
    {
      name: "Python",
      category: "Automation",
      proficiency: 85,
      verified: false,
    },
    {
      name: "NIST 800-53",
      category: "Compliance",
      proficiency: 90,
      verified: true,
    },
    {
      name: "ISO 27001",
      category: "Compliance",
      proficiency: 85,
      verified: false,
    },
    {
      name: "Threat Detection",
      category: "Incident Response",
      proficiency: 95,
      verified: true,
    },
    {
      name: "Power BI",
      category: "Data & Reporting Tools",
      proficiency: 80,
      verified: false,
    },
    {
      name: "Okta",
      category: "IAM & Access Control",
      proficiency: 85,
      verified: true,
    },
  ]

  const generatePDF = async () => {
    setIsGenerating(true)
    try {
      // Create a new PDF document
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Set document properties
      doc.setProperties({
        title: "Cybersecurity Skills Matrix",
        subject: "Professional Cybersecurity Skills Overview",
        author: "Your Name",
        keywords: "cybersecurity, skills, resume, portfolio",
        creator: "Cybersecurity Portfolio",
      })

      // Define colors and styles
      const primaryColor = "#00BFA6"
      const secondaryColor = "#0D1B2A"
      const textColor = "#333333"
      const lightTextColor = "#666666"

      // Add header with title and date
      doc.setFillColor(secondaryColor)
      doc.rect(0, 0, 210, 30, "F")

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(22)
      doc.setFont("helvetica", "bold")
      doc.text("Cybersecurity Skills Matrix", 105, 15, { align: "center" })

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      doc.text(`Generated: ${today}`, 105, 22, { align: "center" })

      // Add contact information
      doc.setTextColor(textColor)
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text("Your Name | your.email@example.com | (123) 456-7890 | yourportfolio.com", 105, 35, { align: "center" })

      // Add introduction
      doc.setFontSize(11)
      doc.setTextColor(textColor)
      doc.text(
        "Cybersecurity professional with expertise across multiple domains including cloud security, SIEM implementation, and incident response. Proficient in industry-leading tools and frameworks with a focus on proactive defense strategies.",
        15,
        45,
        {
          maxWidth: 180,
          align: "justify",
        },
      )

      // Add core competencies section
      doc.setFillColor(primaryColor)
      doc.rect(15, 60, 180, 8, "F")

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.text("Core Competencies", 20, 66)

      // Draw proficiency bars for highlighted skills
      let yPos = 75
      doc.setFontSize(10)

      // Create two columns for highlighted skills
      const leftColX = 20
      const rightColX = 115
      let currentX = leftColX
      let skillCount = 0

      for (const skill of highlightedSkills) {
        // Switch to right column after 5 skills
        if (skillCount === 5) {
          currentX = rightColX
          yPos = 75 // Reset y position for right column
        }

        // Skill name and category
        doc.setTextColor(textColor)
        doc.setFont("helvetica", "bold")
        doc.text(`${skill.name}${skill.verified ? " ✓" : ""}`, currentX, yPos)

        doc.setFont("helvetica", "normal")
        doc.setTextColor(lightTextColor)
        doc.text(skill.category, currentX, yPos + 5, { align: "left" })

        // Draw proficiency bar background
        doc.setFillColor(230, 230, 230)
        doc.rect(currentX, yPos + 7, 70, 3, "F")

        // Draw proficiency bar fill
        const categoryColor = CATEGORY_COLORS[skill.category] || primaryColor
        doc.setFillColor(hexToRgb(categoryColor).r, hexToRgb(categoryColor).g, hexToRgb(categoryColor).b)
        doc.rect(currentX, yPos + 7, (skill.proficiency / 100) * 70, 3, "F")

        // Add proficiency percentage
        doc.setTextColor(textColor)
        doc.setFontSize(8)
        doc.text(`${skill.proficiency}%`, currentX + 72, yPos + 9)

        yPos += 18 // Move to next skill position
        skillCount++
      }

      // Add skill categories section
      yPos = 170 // Start position for skill categories
      doc.setFillColor(primaryColor)
      doc.rect(15, yPos, 180, 8, "F")

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.text("Skill Categories", 20, yPos + 6)

      yPos += 15

      // Create three columns for skill categories
      const colWidth = 60
      const col1X = 15
      const col2X = 75
      const col3X = 135

      const colYPos = [yPos, yPos, yPos]
      let currentCol = 0

      for (const category of skillCategories) {
        const currentColX = currentCol === 0 ? col1X : currentCol === 1 ? col2X : col3X

        // Category name
        doc.setTextColor(textColor)
        doc.setFontSize(11)
        doc.setFont("helvetica", "bold")
        doc.text(category.name, currentColX, colYPos[currentCol])

        colYPos[currentCol] += 6

        // Category skills
        doc.setTextColor(lightTextColor)
        doc.setFontSize(9)
        doc.setFont("helvetica", "normal")

        for (const skill of category.skills) {
          doc.text(`• ${skill}`, currentColX, colYPos[currentCol])
          colYPos[currentCol] += 5
        }

        colYPos[currentCol] += 5 // Add space after category

        // Move to next column
        currentCol = (currentCol + 1) % 3
      }

      // Add footer
      const footerY = 285
      doc.setDrawColor(200, 200, 200)
      doc.line(15, footerY, 195, footerY)

      doc.setTextColor(lightTextColor)
      doc.setFontSize(8)
      doc.setFont("helvetica", "italic")
      doc.text(
        "For a complete and interactive view of my skills and experience, please visit my portfolio website.",
        105,
        footerY + 5,
        { align: "center" },
      )
      doc.text("yourportfolio.com", 105, footerY + 10, { align: "center" })

      // Save the PDF
      doc.save("Cybersecurity_Skills_Matrix.pdf")

      // Show success toast
      toast({
        title: "PDF Generated Successfully",
        description: "Your skills matrix has been downloaded.",
        variant: "default",
      })
    } catch (error) {
      console.error("Error generating PDF:", error)

      // Show error toast
      toast({
        title: "Error Generating PDF",
        description: "There was a problem creating your skills matrix. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  // Helper function to convert hex color to RGB
  function hexToRgb(hex: string) {
    // Remove # if present
    hex = hex.replace(/^#/, "")

    // Parse hex values
    const bigint = Number.parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return { r, g, b }
  }

  return (
    <motion.button
      onClick={generatePDF}
      disabled={isGenerating}
      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#00BFA6] to-[#00A896] text-[#0D1B2A] font-medium shadow-lg transition-all duration-300"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(0, 191, 166, 0.5)",
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isGenerating ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0D1B2A]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="h-5 w-5" />
          Download Skills Matrix PDF
        </>
      )}
    </motion.button>
  )
}
