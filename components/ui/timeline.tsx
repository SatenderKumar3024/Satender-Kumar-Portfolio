"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  date: string
  title: string
  company: string
  description: string
  skills: string[]
  color?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
          </div>

          <Card
            className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl ${item.color || "bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900"}`}
          >
            <CardContent className="p-0">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-primary">{item.company}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
