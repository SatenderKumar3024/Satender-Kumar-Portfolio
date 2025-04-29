"use client"

import { motion } from "framer-motion"
import { CertificationBadge } from "@/components/certification-badge"

export default function CertificationBadges() {
  const certifications = [
    { name: "Security+", issuer: "CompTIA", color: "bg-red-500", icon: "/icons/comptia.png" },
    { name: "CySA+", issuer: "CompTIA", color: "bg-red-500", icon: "/icons/comptia.png" },
    { name: "AZ-500", issuer: "Microsoft", color: "bg-blue-500", icon: "/icons/microsoft.png" },
    { name: "SC-200", issuer: "Microsoft", color: "bg-blue-500", icon: "/icons/microsoft.png" },
    { name: "SSCP", issuer: "(ISC)²", color: "bg-yellow-500", icon: "/icons/isc2.png" },
    { name: "AWS Security", issuer: "Amazon", color: "bg-orange-500", icon: "/icons/aws.png" },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Certification Badges</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <CertificationBadge
                key={cert.name}
                name={cert.name}
                issuer={cert.issuer}
                color={cert.color}
                icon={cert.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
