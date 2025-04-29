"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"

interface AnimatedTextareaProps {
  id: string
  name: string
  rows?: number
  placeholder: string
  required?: boolean
  className?: string
}

export function AnimatedTextarea({
  id,
  name,
  rows = 5,
  placeholder,
  required = false,
  className = "",
}: AnimatedTextareaProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="relative">
      <Textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`bg-[#0D1B2A]/50 border-[#E0E1DD]/30 text-[#E0E1DD] placeholder:text-[#E0E1DD]/50 transition-all duration-300 ${className} ${
          isFocused ? "border-[#00BFA6] shadow-[0_0_0_1px_rgba(0,191,166,0.5)]" : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 pointer-events-none border border-[#00BFA6] rounded-md"
            style={{ boxShadow: "0 0 8px rgba(0, 191, 166, 0.5)" }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
