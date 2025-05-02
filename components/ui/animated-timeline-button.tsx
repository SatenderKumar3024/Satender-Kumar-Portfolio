"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Cloud, Lock, ChevronDown, ChevronUp, Target, Award } from "lucide-react"

interface AnimatedTimelineButtonProps {
  text: string
  className?: string
}

export function AnimatedTimelineButton({ text, className = "" }: AnimatedTimelineButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative overflow-hidden bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] border-2 border-[#00BFA6]/40 hover:border-[#00BFA6] text-[#E0E1DD] px-6 py-6 rounded-xl ${className} max-w-2xl`}
      >
        <span className="relative z-10 flex items-center gap-2 text-lg font-medium">
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            >
              <Shield className="h-5 w-5 text-[#00BFA6] mr-1" />
            </motion.span>
            {text}
          </span>
          <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-[#00BFA6]" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[#00BFA6]" />
            )}
          </motion.div>
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00BFA6]/20 to-[#074d77]/20"
          initial={{ x: "-100%" }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-30"
          animate={{
            boxShadow: ["0 0 0 rgba(0, 191, 166, 0)", "0 0 20px rgba(0, 191, 166, 0.7)", "0 0 0 rgba(0, 191, 166, 0)"],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        />
      </Button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute z-20 mt-2 w-full bg-[#1B263B] border border-[#00BFA6]/40 rounded-xl p-4 shadow-lg shadow-[#00BFA6]/20"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#00BFA6]/20 pb-2">
                <Target className="h-5 w-5 text-[#00BFA6]" />
                <h4 className="font-bold text-[#E0E1DD]">Career Goals</h4>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Cloud className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Seeking advanced roles in Cloud Security Architecture and Implementation
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Passionate about building and leading SOC teams with cutting-edge detection capabilities
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Interested in Zero Trust implementation and modern IAM frameworks
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Pursuing advanced certifications in cloud security and security architecture
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
