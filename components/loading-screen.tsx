"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Loader2 } from "lucide-react"

interface LoadingScreenProps {
  minimumLoadingTime?: number
  showLogo?: boolean
  showProgressBar?: boolean
  logoText?: string
}

export default function LoadingScreen({
  minimumLoadingTime = 2000,
  showLogo = true,
  showProgressBar = true,
  logoText = "Satender Kumar",
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        return newProgress > 100 ? 100 : newProgress
      })
    }, 200)

    // Ensure minimum loading time
    const timer = setTimeout(() => {
      clearInterval(interval)
      setProgress(100)

      // Small delay after reaching 100% before hiding
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }, minimumLoadingTime)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [minimumLoadingTime])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D1B2A]"
        >
          <div className="flex flex-col items-center">
            {showLogo && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex items-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <Shield className="h-16 w-16 text-[#00BFA6]" />
                </motion.div>
                {logoText && (
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="ml-4 text-3xl font-bold text-[#E0E1DD]"
                  >
                    {logoText}
                  </motion.h1>
                )}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              {showProgressBar ? (
                <>
                  <div className="h-1 w-64 overflow-hidden rounded-full bg-[#1A2C42]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00BFA6] to-[#06B6D4]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-[#E0E1DD]/70">{Math.round(progress)}% Loading...</p>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-5 w-5 animate-spin text-[#00BFA6]" />
                  <p className="text-sm text-[#E0E1DD]/70">Loading...</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
