"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in" | "none"
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
  animation = "fade-up",
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 100,
              duration: 0.6,
              delay,
            },
          },
        }
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.8,
              delay,
            },
          },
        }
      case "slide-in-left":
        return {
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 100,
              duration: 0.6,
              delay,
            },
          },
        }
      case "slide-in-right":
        return {
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 100,
              duration: 0.6,
              delay,
            },
          },
        }
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 100,
              duration: 0.6,
              delay,
            },
          },
        }
      case "none":
      default:
        return {
          hidden: {},
          visible: {},
        }
    }
  }

  return (
    <section id={id} className={className} ref={ref}>
      <motion.div
        variants={getAnimationVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
