"use client"

import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DashboardButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-6 z-50"
    >
      <Link
        href="/dashboard"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="View Security Analytics Dashboard"
      >
        <BarChart3 className="h-4 w-4" />
        <span className="text-sm font-medium">Analytics Dashboard</span>
      </Link>
    </motion.div>
  )
}
