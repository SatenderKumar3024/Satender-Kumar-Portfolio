"use client"

import { useState } from "react"
import { jsPDF } from "jspdf"
import { Button } from "@/components/ui/button"
import { FileDown, Loader2 } from "lucide-react"

export function GeneratePortfolioPdf() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePdf = async () => {
    setIsGenerating(true)

    try {
      // Create a new PDF document
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Add title
      doc.setFontSize(24)
      doc.setTextColor(13, 27, 42) // Dark blue
      doc.text("Satender Kumar - Cybersecurity Portfolio", 105, 20, { align: "center" })

      // Add subtitle
      doc.setFontSize(14)
      doc.setTextColor(27, 38, 59) // Medium blue
      doc.text("Comprehensive Portfolio Document", 105, 30, { align: "center" })

      // Add about section
      doc.setFontSize(16)
      doc.setTextColor(13, 27, 42)
      doc.text("About Me", 20, 50)

      doc.setFontSize(12)
      doc.setTextColor(60, 60, 60)
      const aboutText =
        "Cybersecurity professional with expertise in cloud security, SIEM implementation, and vulnerability management. Passionate about creating secure digital environments and protecting critical infrastructure."
      doc.text(aboutText, 20, 60, { maxWidth: 170 })

      // Add skills section
      doc.setFontSize(16)
      doc.setTextColor(13, 27, 42)
      doc.text("Technical Skills", 20, 90)

      doc.setFontSize(12)
      doc.setTextColor(60, 60, 60)
      const skills = [
        "SIEM & Monitoring: Splunk, Microsoft Sentinel, Wireshark",
        "Cloud Security: AWS, Azure, GCP, Multi-Cloud Monitoring",
        "Vulnerability Management: Qualys, Nessus, CVE Analysis",
        "Automation: Python, PowerShell, Bash, API Security",
        "Compliance: NIST 800-53, ISO 27001, SOC2, PCI DSS, GDPR",
        "Incident Response: Threat Detection, Containment, Remediation",
      ]

      let yPos = 100
      skills.forEach((skill) => {
        doc.text("• " + skill, 20, yPos, { maxWidth: 170 })
        yPos += 10
      })

      // Add education section
      doc.setFontSize(16)
      doc.setTextColor(13, 27, 42)
      doc.text("Education", 20, 170)

      doc.setFontSize(12)
      doc.setTextColor(60, 60, 60)
      doc.text("Digital Business Management", 20, 180)
      doc.text("Fanshawe College, London, ON (2021-2023)", 20, 185)

      doc.text("Bachelor of Computer Applications", 20, 195)
      doc.text("MATS University (WES ECA Approved) (2019-2022)", 20, 200)

      // Add certifications section
      doc.setFontSize(16)
      doc.setTextColor(13, 27, 42)
      doc.text("Certifications", 20, 220)

      doc.setFontSize(12)
      doc.setTextColor(60, 60, 60)
      const certifications = [
        "CompTIA Security+",
        "Microsoft Certified: Azure Security Engineer Associate",
        "AWS Certified Security - Specialty",
        "Certified Information Systems Security Professional (CISSP)",
      ]

      yPos = 230
      certifications.forEach((cert) => {
        doc.text("• " + cert, 20, yPos)
        yPos += 10
      })

      // Add footer
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text("Generated for authorized review only | Contact: satenderkumar.analyst@gmail.com", 105, 285, {
        align: "center",
      })

      // Add watermark
      doc.setFontSize(12)
      doc.setTextColor(150, 150, 150)
      doc.setFont("helvetica", "italic")
      doc.text("For Preview Use Only - Requested by " + "Authorized Viewer", 105, 270, {
        align: "center",
      })

      // Save the PDF
      doc.save("public/assets/Satender_Kumar_Portfolio.pdf")

      return "/assets/Satender_Kumar_Portfolio.pdf"
    } catch (error) {
      console.error("Error generating PDF:", error)
      throw error
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button onClick={generatePdf} disabled={isGenerating} className="hidden">
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <FileDown className="mr-2 h-4 w-4" />
          Generate Portfolio PDF
        </>
      )}
    </Button>
  )
}
