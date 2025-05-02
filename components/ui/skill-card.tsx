"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SkillCardProps {
  title: string
  icon: ReactNode
  children: ReactNode
  color?: string
  className?: string
  description?: string
}

export function SkillCard({ title, icon, children, color = "#00BFA6", className, description }: SkillCardProps) {
  return (
    <motion.div
      className={cn("rounded-xl overflow-hidden backdrop-blur-[6px] h-full", className)}
      style={{
        backgroundColor: `rgba(13, 27, 42, 0.6)`,
        border: `1px solid rgba(255, 255, 255, 0.1)`,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
      }}
      whileHover={{
        y: -8,
        boxShadow: `0 15px 30px rgba(0, 0, 0, 0.25), 0 0 15px ${color}30`,
        borderColor: `${color}40`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-md"
              style={{
                backgroundColor: `${color}20`,
                color: color,
              }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
                className="w-5 h-5"
              >
                {icon}
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-[#E0E1DD] flex items-center gap-2">
              {title}
              {description && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-[#00BFA6]/70 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-[200px]">{description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </h3>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </motion.div>
  )
}
