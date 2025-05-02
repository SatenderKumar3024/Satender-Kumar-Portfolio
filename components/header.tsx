"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import VerifiedBadge from "@/components/verified-badge"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["hero", "about", "expertise", "experience", "projects", "certifications", "contact"]

      const sectionElements = sections.map((id) => document.getElementById(id))

      const currentSectionIndex = sectionElements.findIndex((section, index) => {
        if (!section) return false
        const nextSection = sectionElements[index + 1]

        const sectionTop = section.offsetTop - 100
        const sectionBottom = nextSection ? nextSection.offsetTop - 100 : document.body.scrollHeight

        return window.scrollY >= sectionTop && window.scrollY < sectionBottom
      })

      if (currentSectionIndex !== -1) {
        setActiveSection(sections[currentSectionIndex])
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  const headerClasses = `sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
    scrolled ? "bg-cyber-navy/95 shadow-md" : "bg-cyber-navy/80"
  }`

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className={headerClasses} id="header">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2" onClick={() => scrollToSection("#hero")}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Shield className="h-6 w-6 text-cyber-sunset-pink mr-2" />
            <div className="text-xl font-bold font-mono text-cyber-soft-white">
              <VerifiedBadge name="Satender Kumar" />
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-cyber-sunset-pink relative group ${
                  activeSection === item.href.replace("#", "") ? "text-cyber-sunset-pink" : "text-cyber-soft-white"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyber-sunset-pink transition-all ${
                    activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </motion.div>
          ))}

          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="relative overflow-hidden text-cyber-soft-white hover:text-cyber-sunset-pink hover:bg-cyber-navy/50"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2 text-cyber-soft-white hover:text-cyber-sunset-pink hover:bg-cyber-navy/50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-cyber-soft-white hover:text-cyber-sunset-pink hover:bg-cyber-navy/50"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b bg-cyber-navy"
          >
            <div className="container py-4 px-4 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-2 text-sm font-medium transition-colors hover:text-cyber-sunset-pink ${
                      activeSection === item.href.replace("#", "") ? "text-cyber-sunset-pink" : "text-cyber-soft-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
