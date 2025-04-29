"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, FileText, Shield } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import AnimatedCounter from "@/components/animated-counter"

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContactWithResume = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
      // Set the resume tab active
      const event = new CustomEvent("requestResume")
      document.dispatchEvent(event)
    }
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      <ParticleBackground />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 text-center">
        <div className="flex items-center justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mr-4"
          >
            <Shield className="h-12 w-12 md:h-16 md:w-16 text-[#00BFA6]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#E0E1DD] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            style={{
              backgroundImage: "linear-gradient(135deg, #E0E1DD 30%, #00BFA6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Satender Kumar
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 space-y-6" // Increased spacing between blocks
        >
          <div className="text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto">
            <div className="mb-4">
              <span className="font-semibold text-[#E0E1DD]">Information Security Analyst</span> |{" "}
              <span className="text-[#3399ff]">🔒 Cloud Security (AWS, Azure)</span>
            </div>
            <div className="mb-4">
              <span className="text-[#00BFA6]">SIEM (Splunk, Sentinel)</span> |{" "}
              <span className="text-[#00BFA6]">Threat Hunting & Incident Response</span> |{" "}
              <span className="text-[#00BFA6]">Zero Trust Architecture</span>
            </div>
            <div className="mb-4">
              <span className="text-[#d9d9d9]">IAM (Okta, Azure AD)</span> |{" "}
              <span className="text-[#d9d9d9]">Compliance (NIST 800-53, ISO 27001)</span> |{" "}
              <span className="text-[#ff4d4d]">
                🚀 <AnimatedCounter from={0} to={4} suffix="+" /> Years Securing Cloud & Enterprise Environments
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pill-badge"
              style={{
                backgroundColor: "rgba(0, 191, 166, 0.2)",
                color: "#E0E1DD",
                border: "1px solid rgba(0, 191, 166, 0.3)",
              }}
            >
              <AnimatedCounter from={0} to={4} suffix="+" /> Years Experience
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pill-badge"
              style={{
                backgroundColor: "rgba(0, 191, 166, 0.2)",
                color: "#E0E1DD",
                border: "1px solid rgba(0, 191, 166, 0.3)",
              }}
            >
              <AnimatedCounter from={0} to={5000} suffix="+" /> Users Protected
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pill-badge"
              style={{
                backgroundColor: "rgba(0, 191, 166, 0.2)",
                color: "#E0E1DD",
                border: "1px solid rgba(0, 191, 166, 0.3)",
              }}
            >
              <AnimatedCounter from={0} to={30} suffix="%" /> Risk Reduction
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group bg-[#00BFA6] hover:bg-[#00BFA6]/90 text-[#0D1B2A] border-none transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,191,166,0.5)]"
          >
            Get in Touch
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContactWithResume}
            className="group border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6]/10 hover:text-[#E0E1DD] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,191,166,0.3)]"
          >
            Request Resume
            <FileText className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ArrowDown className="h-6 w-6 text-[#00BFA6]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
