"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface NavItem {
  id: string
  label: string
  icon?: React.ReactNode
}

interface SmoothScrollNavProps {
  items: NavItem[]
  className?: string
  showBreadcrumbs?: boolean
  highlightActive?: boolean
  offset?: number
}

export default function SmoothScrollNav({
  items,
  className,
  showBreadcrumbs = true,
  highlightActive = true,
  offset = 100,
}: SmoothScrollNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the current section
      const currentSection = items
        .map((item) => {
          const element = document.getElementById(item.id)
          if (!element) return null

          const top = element.offsetTop
          const height = element.offsetHeight
          return { id: item.id, top, height }
        })
        .filter(Boolean)
        .find((section) => {
          if (!section) return false
          return scrollPosition >= section.top && scrollPosition < section.top + section.height
        })

      if (currentSection) {
        setActiveSection(currentSection.id)
        // Update URL hash without scrolling
        history.replaceState(null, "", `#${currentSection.id}`)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items, offset])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Get header height for offset
      const headerHeight = document.getElementById("header")?.offsetHeight || 0
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight - 20

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className={cn("sticky top-20 z-40", className)}>
      {/* Navigation links */}
      <nav className="bg-[#0D1B2A]/80 backdrop-blur-md p-4 rounded-lg border border-white/10 shadow-lg">
        <ul className="flex flex-col space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md transition-all flex items-center gap-2",
                  highlightActive && activeSection === item.id
                    ? "bg-[#00BFA6]/20 text-[#00BFA6]"
                    : "text-[#E0E1DD]/70 hover:bg-white/5 hover:text-[#E0E1DD]",
                )}
              >
                {item.icon}
                <span>{item.label}</span>
                {highlightActive && activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto h-2 w-2 rounded-full bg-[#00BFA6]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Breadcrumb navigation */}
      {showBreadcrumbs && activeSection && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mt-4 bg-[#0D1B2A]/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg"
          >
            <div className="flex items-center text-sm text-[#E0E1DD]/70">
              <span className="font-medium text-[#00BFA6]">Current Section</span>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="font-semibold text-[#E0E1DD]">
                {items.find((item) => item.id === activeSection)?.label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
