"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Cloud, Lock, ChevronDown, ChevronUp, Target, Award, TrendingUp } from "lucide-react"

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
          <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}>
            <Shield className="h-5 w-5 text-[#00BFA6] mr-1" />
          </motion.span>
          <span className="bg-gradient-to-r from-white to-[#E0E1DD] bg-clip-text text-transparent">{text}</span>
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
            className="absolute z-20 mt-2 w-full bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] border border-[#00BFA6]/40 rounded-xl p-4 shadow-lg shadow-[#00BFA6]/20"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#00BFA6]/20 pb-2">
                <Target className="h-5 w-5 text-[#00BFA6]" />
                <h4 className="font-bold text-[#E0E1DD]">Career Aspirations</h4>
              </div>

              <div className="space-y-3">
                <motion.div
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Cloud className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Seeking advanced roles in Cloud Security Architecture and Implementation
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Shield className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Passionate about building and leading SOC teams with cutting-edge detection capabilities
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Lock className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Interested in Zero Trust implementation and modern IAM frameworks
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Award className="h-4 w-4 text-[#00BFA6] mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#E0E1DD]/90">
                    Pursuing advanced certifications in cloud security and security architecture
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="mt-3 p-2 bg-[#0D1B2A]/70 rounded-md border border-[#00BFA6]/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <TrendingUp className="h-4 w-4 text-[#00BFA6]" />
                  <span className="text-sm font-semibold text-[#22d3ee]">Current Focus:</span>
                </div>
                <p className="text-sm text-[#E0E1DD]/90">
                  Expanding expertise in cloud security architecture and advanced threat detection techniques while
                  pursuing CISSP certification
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
