"use client"

import type React from "react"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode
  rippleColor?: string
  hoverScale?: number
}

export default function AnimatedButton({
  children,
  rippleColor = "rgba(0, 191, 166, 0.4)",
  hoverScale = 1.05,
  ...props
}: AnimatedButtonProps) {
  const [isRippling, setIsRippling] = useState(false)
  const [coords, setCoords] = useState({ x: -1, y: -1 })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsRippling(true)

    // If there's an onClick handler passed as a prop, call it
    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative overflow-hidden rounded-md"
    >
      <Button {...props} onClick={handleClick} className={`relative overflow-hidden ${props.className || ""}`}>
        {isRippling && (
          <motion.span
            className="absolute rounded-full"
            style={{
              left: coords.x,
              top: coords.y,
              backgroundColor: rippleColor,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{
              width: 500,
              height: 500,
              opacity: 0,
            }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setIsRippling(false)}
          />
        )}
        {children}
      </Button>
    </motion.div>
  )
}
