"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Shield, ExternalLink, Info, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GdprConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if consent has been given previously
    const hasConsent = localStorage.getItem("gdpr-consent")
    if (!hasConsent) {
      // Show banner immediately
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("gdpr-consent", "all")
    setShowBanner(false)
    // Enable analytics, etc.
    window.dispatchEvent(new Event("consentUpdated"))
  }

  const acceptEssential = () => {
    localStorage.setItem("gdpr-consent", "essential")
    setShowBanner(false)
    // Disable analytics, etc.
    window.dispatchEvent(new Event("consentUpdated"))
  }

  const closeBanner = () => {
    setShowBanner(false)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 z-50 max-w-sm"
        >
          <div className="bg-[#0D1B2A] border border-[#00BFA6]/30 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-[#00BFA6] mr-2" />
                <h3 className="text-base font-semibold text-[#E0E1DD]">Privacy & Cookie Notice</h3>
              </div>
              <button
                onClick={closeBanner}
                className="text-[#E0E1DD]/60 hover:text-[#E0E1DD] transition-colors"
                aria-label="Close privacy notice"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="text-[#E0E1DD]/90 text-xs mb-3">
              <p className="mb-2">
                This website uses cookies and similar technologies to enhance your browsing experience, analyze site
                traffic, and assist in our marketing efforts.
              </p>

              <div className="flex items-start mb-2">
                <Info className="h-3 w-3 text-[#00BFA6] mr-1.5 mt-0.5 flex-shrink-0" />
                <p className="text-[#E0E1DD]/80">
                  <strong className="text-[#00BFA6]">Why Privacy Matters:</strong> As a cybersecurity professional, I
                  take your privacy seriously and implement industry-standard protections for your data.
                </p>
              </div>

              <div className="mb-2">
                <button
                  onClick={toggleDetails}
                  className="text-[#00BFA6] hover:text-[#00BFA6]/80 text-xs flex items-center"
                >
                  {showDetails ? (
                    <>
                      <ChevronUp className="h-3 w-3 mr-1" /> Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3 mr-1" /> Show Details
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 p-2 bg-[#1B263B] rounded-lg text-xs">
                        <h4 className="font-medium mb-1 text-[#E0E1DD]">Types of cookies used:</h4>
                        <ul className="list-disc pl-4 space-y-1 text-[#E0E1DD]/80">
                          <li>
                            <strong>Essential:</strong> Required for the website to function properly
                          </li>
                          <li>
                            <strong>Analytics:</strong> Help me understand how visitors interact with the website
                          </li>
                          <li>
                            <strong>Functional:</strong> Enable enhanced functionality and personalization
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p>
                By clicking "Accept All", you consent to the use of cookies as described in our{" "}
                <Link href="/privacy-policy" className="text-[#00BFA6] hover:underline inline-flex items-center">
                  Privacy Policy <ExternalLink className="h-2 w-2 ml-0.5" />
                </Link>{" "}
                and{" "}
                <Link href="/terms-of-service" className="text-[#00BFA6] hover:underline inline-flex items-center">
                  Terms of Service <ExternalLink className="h-2 w-2 ml-0.5" />
                </Link>
                .
              </p>
            </div>

            <div className="flex gap-2 justify-end">
              <Button
                onClick={acceptEssential}
                variant="outline"
                size="sm"
                className="border-[#00BFA6]/30 text-[#E0E1DD] hover:bg-[#00BFA6]/10 text-xs py-1 h-auto"
              >
                Essential Only
              </Button>
              <Button
                onClick={acceptAll}
                size="sm"
                className="bg-gradient-to-r from-[#06B6D4] to-[#10B981] hover:from-[#06B6D4]/90 hover:to-[#10B981]/90 text-[#0D1B2A] font-medium text-xs py-1 h-auto"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
