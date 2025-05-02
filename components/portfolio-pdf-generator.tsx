"use client"

import { jsPDF } from "jspdf"

// Define skill categories and their associated colors
const SKILL_CATEGORIES = [
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
]

// Projects data
const PROJECTS = [
  {
    title: "Cloud Security Framework Implementation",
    description: "Designed and implemented a comprehensive cloud security framework for AWS and Azure environments",
    skills: ["AWS", "Azure", "Security Controls", "Compliance"],
  },
  {
    title: "SIEM Optimization Project",
    description: "Enhanced threat detection capabilities by optimizing Microsoft Sentinel and Splunk deployments",
    skills: ["Microsoft Sentinel", "Splunk", "Log Analytics", "Threat Detection"],
  },
  {
    title: "Incident Response Automation",
    description: "Developed automated incident response workflows using Python and SOAR platforms",
    skills: ["Python", "SOAR", "Incident Response", "Automation"],
  },
]

// Experience data
const EXPERIENCE = [
  {
    position: "Senior Cybersecurity Analyst",
    company: "Secure Solutions Inc.",
    period: "2020-Present",
    responsibilities: [
      "Lead security monitoring and incident response team",
      "Implement and optimize SIEM solutions",
      "Develop security automation workflows",
    ],
  },
  {
    position: "Cybersecurity Specialist",
    company: "Tech Defenders LLC",
    period: "2018-2020",
    responsibilities: [
      "Conducted vulnerability assessments and penetration testing",
      "Implemented security controls for cloud environments",
      "Developed security policies and procedures",
    ],
  },
]

// Education data
const EDUCATION = [
  {
    degree: "Digital Business Management",
    institution: "Fanshawe College, London, ON",
    period: "2021–2023",
    gpa: "GPA: 3.5",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "MATS University (WES ECA Approved)",
    period: "2019–2022",
    gpa: "Grade: A+",
  },
]

// Certifications data
const CERTIFICATIONS = [
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    date: "2022",
  },
  {
    name: "Microsoft Certified: Azure Security Engineer Associate (AZ-500)",
    issuer: "Microsoft",
    date: "2021",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2020",
  },
]

export function generatePortfolioPdf(userName = "Valued Reviewer"): Blob {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  // Set document properties
  doc.setProperties({
    title: "Satender Kumar - Cybersecurity Portfolio",
    subject: "Professional Cybersecurity Portfolio",
    author: "Satender Kumar",
    keywords: "cybersecurity, portfolio, security analyst, cloud security",
    creator: "Portfolio PDF Generator",
  })

  // Define colors
  const primaryColor = [0, 191, 166] // RGB for #00BFA6
  const secondaryColor = [13, 27, 42] // RGB for #0D1B2A
  const textColor = [51, 51, 51] // RGB for #333333
  const lightTextColor = [102, 102, 102] // RGB for #666666

  // Add header
  doc.setFillColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
  doc.rect(0, 0, 210, 40, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("Satender Kumar", 105, 20, { align: "center" })

  doc.setFontSize(14)
  doc.setFont("helvetica", "normal")
  doc.text("Cybersecurity Professional", 105, 30, { align: "center" })

  // Add watermark
  doc.setTextColor(200, 200, 200, 0.3) // Light gray with transparency
  doc.setFontSize(60)
  doc.setFont("helvetica", "bold")
  doc.text("CONFIDENTIAL", 105, 150, {
    align: "center",
    angle: 45,
  })

  // Add personalized note
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.setFontSize(12)
  doc.setFont("helvetica", "italic")
  doc.text(`Prepared for: ${userName}`, 105, 45, { align: "center" })
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 52, { align: "center" })

  // Add about section
  let yPos = 65
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(10, yPos, 190, 8, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("About Me", 15, yPos + 5.5)

  yPos += 15
  doc.setTextColor(textColor[0], textColor[1], textColor[2])
  doc.setFontSize(11)
  doc.setFont("helvetica", "normal")
  const aboutText =
    "Experienced cybersecurity professional with expertise in cloud security, SIEM implementation, and incident response. Skilled in implementing security controls, optimizing threat detection capabilities, and ensuring compliance with regulatory requirements. Passionate about leveraging automation to enhance security operations and incident response processes."

  const splitAbout = doc.splitTextToSize(aboutText, 180)
  doc.text(splitAbout, 15, yPos)
  yPos += splitAbout.length * 6 + 5

  // Add skills section
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(10, yPos, 190, 8, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Technical Skills", 15, yPos + 5.5)

  yPos += 15
  doc.setTextColor(textColor[0], textColor[1], textColor[2])
  doc.setFontSize(11)

  for (const category of SKILL_CATEGORIES) {
    doc.setFont("helvetica", "bold")
    doc.text(category.name, 15, yPos)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2])
    const descSplit = doc.splitTextToSize(category.description, 180)
    doc.text(descSplit, 15, yPos + 5)

    yPos += descSplit.length * 5 + 7

    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.text("• " + category.skills.join("  • "), 20, yPos)

    yPos += 10
  }

  // Check if we need a new page
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }

  // Add projects section
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(10, yPos, 190, 8, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Key Projects", 15, yPos + 5.5)

  yPos += 15
  doc.setTextColor(textColor[0], textColor[1], textColor[2])

  for (const project of PROJECTS) {
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text(project.title, 15, yPos)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    const projDescSplit = doc.splitTextToSize(project.description, 180)
    doc.text(projDescSplit, 15, yPos + 5)

    yPos += projDescSplit.length * 5 + 7

    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.setFontSize(9)
    doc.text("Skills: " + project.skills.join(", "), 15, yPos)

    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    yPos += 12
  }

  // Check if we need a new page
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }

  // Add experience section
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(10, yPos, 190, 8, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Professional Experience", 15, yPos + 5.5)

  yPos += 15
  doc.setTextColor(textColor[0], textColor[1], textColor[2])

  for (const exp of EXPERIENCE) {
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text(exp.position, 15, yPos)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.text(`${exp.company} | ${exp.period}`, 15, yPos + 5)

    yPos += 10

    for (const resp of exp.responsibilities) {
      doc.text(`• ${resp}`, 20, yPos)
      yPos += 5
    }

    yPos += 7
  }

  // Check if we need a new page
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }

  // Add education section
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(10, yPos, 190, 8, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Education", 15, yPos + 5.5)

  yPos += 15
  doc.setTextColor(textColor[0], textColor[1], textColor[2])

  for (const edu of EDUCATION) {
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text(edu.degree, 15, yPos)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.text(`${edu.institution} | ${edu.period}`, 15, yPos + 5)
    doc.text(edu.gpa, 15, yPos + 10)

    yPos += 17
  }

  // Add certifications section
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
  doc.rect(10, yPos, 190, 8, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("Certifications", 15, yPos + 5.5)

  yPos += 15
  doc.setTextColor(textColor[0], textColor[1], textColor[2])

  for (const cert of CERTIFICATIONS) {
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text(cert.name, 15, yPos)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.text(`${cert.issuer} | ${cert.date}`, 15, yPos + 5)

    yPos += 12
  }

  // Add footer
  doc.setDrawColor(200, 200, 200)
  doc.line(10, 280, 200, 280)

  doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2])
  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.text("Contact: satenderkumar.analyst@gmail.com | www.satenderkumar.com", 105, 287, { align: "center" })
  doc.text("This document is confidential and intended only for the named recipient.", 105, 292, { align: "center" })

  // Convert the PDF to a blob
  const pdfBlob = doc.output("blob")
  return pdfBlob
}
