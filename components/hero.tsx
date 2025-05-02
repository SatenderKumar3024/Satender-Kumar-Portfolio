"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowDown,
  FileText,
  Shield,
  Lock,
  Cloud,
  BarChart,
  Clock,
  Award,
  Users,
  TrendingDown,
  Zap,
} from "lucide-react"
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

  // Rotating sub-tags
  const specialties = ["Cloud Defender", "Threat Hunter", "Compliance Architect", "Zero Trust Specialist"]
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialtyIndex((prevIndex) => (prevIndex + 1) % specialties.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
      style={{
        background: "linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #0D1B2A 100%)",
      }}
    >
      <ParticleBackground />

      {/* Floating security icons */}
      <motion.div
        className="absolute w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="absolute text-[#00BFA6]/20"
          style={{ top: "15%", left: "10%" }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          <Lock size={48} />
        </motion.div>

        <motion.div
          className="absolute text-[#3399ff]/20"
          style={{ top: "25%", right: "15%" }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 7,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Cloud size={56} />
        </motion.div>

        <motion.div
          className="absolute text-[#ff4d4d]/20"
          style={{ bottom: "20%", left: "20%" }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <BarChart size={52} />
        </motion.div>
      </motion.div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 text-center">
        {/* Name and Title Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Shield className="h-16 w-16 md:h-20 md:w-20 text-[#00BFA6] drop-shadow-[0_0_8px_rgba(0,191,166,0.5)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-[#E0E1DD] mb-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
              style={{
                backgroundImage: "linear-gradient(135deg, #E0E1DD 30%, #00BFA6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Satender Kumar
            </h1>

            <div className="bg-[#1B263B]/80 backdrop-blur-sm py-2 px-4 rounded-full inline-block mb-4">
              <h2
                className="text-xl md:text-2xl font-semibold text-[#E0E1DD]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Information Security Analyst | <span className="text-[#3399ff]">Cloud Security</span> |{" "}
                <span className="text-[#00BFA6]">Threat Detection</span> | <span className="text-[#a855f7]">IAM</span>
              </h2>
            </div>

            {/* Rotating specialty tags - Update to be more consistent */}
            <div className="h-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpecialtyIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 right-0"
                >
                  <span className="bg-gradient-to-r from-[#00BFA6] to-[#3399ff] text-transparent bg-clip-text font-semibold text-xl">
                    {specialties[currentSpecialtyIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          {/* Enhanced metrics section with 5 items */}
          <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto mb-8">
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(0, 191, 166, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center px-5 py-3 rounded-full text-[#E0E1DD] bg-[#1B263B] shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-[1px] border-[#00BFA6]/30"
            >
              <Award className="h-5 w-5 text-[#00BFA6] mr-2" />
              <AnimatedCounter from={0} to={4} suffix="" className="font-bold text-xl text-[#00BFA6] mr-1" />
              <span>Years Experience</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(51, 153, 255, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center px-5 py-3 rounded-full text-[#E0E1DD] bg-[#1B263B] shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-[1px] border-[#3399ff]/30"
            >
              <Users className="h-5 w-5 text-[#3399ff] mr-2" />
              <AnimatedCounter from={0} to={5000} suffix="+" className="font-bold text-xl text-[#3399ff] mr-1" />
              <span>Users Protected</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(0, 191, 166, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center px-5 py-3 rounded-full text-[#E0E1DD] bg-[#1B263B] shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-[1px] border-[#00BFA6]/30"
            >
              <TrendingDown className="h-5 w-5 text-[#00BFA6] mr-2" />
              <AnimatedCounter from={0} to={30} suffix="%" className="font-bold text-xl text-[#00BFA6] mr-1" />
              <span>Risk Reduction</span>
            </motion.div>

            {/* New metrics */}
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center px-5 py-3 rounded-full text-[#E0E1DD] bg-[#1B263B] shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-[1px] border-[#a855f7]/30"
            >
              <Zap className="h-5 w-5 text-[#a855f7] mr-2" />
              <AnimatedCounter from={0} to={25} suffix="%" className="font-bold text-xl text-[#a855f7] mr-1" />
              <span>SOC Efficiency</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255, 77, 77, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center px-5 py-3 rounded-full text-[#E0E1DD] bg-[#1B263B] shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-[1px] border-[#ff4d4d]/30"
            >
              <Clock className="h-5 w-5 text-[#ff4d4d] mr-2" />
              <AnimatedCounter from={0} to={40} suffix="%" className="font-bold text-xl text-[#ff4d4d] mr-1" />
              <span>Faster MTTD</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons with better hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-[#3399ff] to-[#00BFA6] hover:from-[#00BFA6] hover:to-[#3399ff] text-white border-none transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,191,166,0.6)] text-lg px-6 py-6 font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get in Touch
            <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContactWithResume}
            className="group border-[#3399ff] text-[#3399ff] hover:bg-gradient-to-r hover:from-[#3399ff]/10 hover:to-[#00BFA6]/10 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(51,153,255,0.4)] text-lg px-6 py-6 font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Request Resume
            <FileText className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="p-2 rounded-full bg-[#1B263B]/50 backdrop-blur-sm"
        >
          <ArrowDown className="h-6 w-6 text-[#00BFA6]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
