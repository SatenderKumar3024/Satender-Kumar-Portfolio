"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

interface CertificationBadgeProps {
  name: string
  issuer: string
  icon?: string
  color?: string
  delay?: number
}

export function CertificationBadge({ name, issuer, icon, color = "bg-blue-500", delay = 0 }: CertificationBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
      className="flex justify-center"
    >
      <Card className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-center overflow-hidden border-2 border-primary/20 shadow-md">
        <CardContent className="p-0 w-full h-full flex flex-col items-center justify-center">
          <div className={`w-full h-1/3 ${color} flex items-center justify-center`}>
            {icon ? (
              <img src={icon || "/placeholder.svg"} alt={name} className="h-8 w-8 object-contain" />
            ) : (
              <Award className="h-6 w-6 text-white" />
            )}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-2">
            <h3 className="text-xs font-bold leading-tight">{name}</h3>
            <p className="text-[10px] text-muted-foreground mt-1">{issuer}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
