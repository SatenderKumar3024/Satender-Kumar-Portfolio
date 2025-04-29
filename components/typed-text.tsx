"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypedTextProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypedText({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
}: TypedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentFullText = texts[currentTextIndex]

        if (!isDeleting) {
          // Typing
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.substring(0, currentText.length + 1))
          } else {
            // Finished typing, wait before deleting
            setTimeout(() => setIsDeleting(true), delayBetweenTexts)
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
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative"
        >
          {currentText}
          <motion.span
            className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
