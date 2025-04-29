"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface AnimatedTypingProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export default function AnimatedTyping({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: AnimatedTypingProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isPaused) return

        const currentFullText = texts[currentTextIndex]

        if (!isDeleting) {
          // Typing
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.substring(0, currentText.length + 1))
          } else {
            // Finished typing, wait before deleting
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setIsDeleting(true)
            }, delayBetweenTexts)
            return
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1))
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={`inline-block ${className}`}>
      <motion.span
        key={currentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        {currentText}
        <motion.span
          ref={cursorRef}
          className="absolute right-[-4px] top-0 h-full w-[2px] bg-[#00BFA6]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        />
      </motion.span>
    </span>
  )
}
