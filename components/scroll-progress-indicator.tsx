"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollProgressIndicator() {
  const [isVisible, setIsVisible] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    let idleTimer: NodeJS.Timeout

    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const percentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)
      setScrollPercentage(percentage)

      setIsVisible(scrollTop > 100)

      setIsIdle(false)
      clearTimeout(idleTimer)

      idleTimer = setTimeout(() => {
        setIsIdle(true)
      }, 5000)
    }

    updateScrollPercentage()

    window.addEventListener("scroll", updateScrollPercentage)

    return () => {
      window.removeEventListener("scroll", updateScrollPercentage)
      clearTimeout(idleTimer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      className="fixed z-50 flex items-center justify-center"
      style={{
        bottom: "2rem",
        right: "2rem",
        opacity: isVisible ? (isIdle ? 0.5 : 1) : 0,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0.8,
        opacity: isVisible ? (isIdle ? 0.5 : 1) : 0,
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
    >
      <div
        className="relative flex items-center justify-center w-16 h-16 cursor-pointer"
        onClick={scrollToTop}
        role="button"
        aria-label="Scroll to top"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            scrollToTop()
          }
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg" />

        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" className="stroke-gray-700 fill-none" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            className="stroke-cyan-500 fill-none"
            strokeWidth="8"
            strokeLinecap="round"
            style={{
              pathLength: scaleX,
              filter: "drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-xs font-medium">Scrolled</span>
          <span className="text-sm font-bold">{scrollPercentage}%</span>
        </div>

        <motion.div
          className="absolute top-0 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: -15 }}
        >
          <ArrowUp className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ScrollProgressIndicator
