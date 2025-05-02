"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            Return to Homepage
          </Link>

          <div className="mt-8 text-sm text-gray-400">
            <p>If you believe this is an error, please contact the site administrator.</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 w-full text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Cybersecurity Portfolio. All rights reserved.
      </div>
    </div>
  )
}
