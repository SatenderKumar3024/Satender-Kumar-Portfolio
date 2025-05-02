"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TechBadgeProps {
  name: string
  icon: ReactNode
  color?: string
  description?: string
  className?: string
}

export function TechBadge({ name, icon, color = "#00BFA6", description, className }: TechBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <motion.div
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
              "border transition-all duration-300",
              className,
            )}
            style={{
              backgroundColor: `${color}15`,
              borderColor: `${color}30`,
              color: color,
            }}
            whileHover={{ y: -3, boxShadow: `0 4px 12px ${color}30` }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex-shrink-0">{icon}</span>
            <span>{name}</span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-[200px] text-center">
          <p>{description || `Expertise in ${name}`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
