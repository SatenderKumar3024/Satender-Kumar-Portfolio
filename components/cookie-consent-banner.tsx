"use client"

import { useState, useEffect } from "react"
import { X, ChevronDown, ChevronUp, Shield } from "lucide-react"
import Link from "next/link"

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  functional: boolean
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Essential cookies are always required
    analytics: false,
    functional: false,
  })

  useEffect(() => {
    // Check if user has already set cookie preferences
    const consentGiven = localStorage.getItem("cookieConsentGiven")

    // Only show banner if consent hasn't been given
    if (!consentGiven) {
      // Small delay to prevent banner from showing immediately on page load
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      functional: true,
    })
    saveCookiePreferences({
      essential: true,
      analytics: true,
      functional: true,
    })
    setIsVisible(false)
  }

  const handleEssentialOnly = () => {
    setPreferences({
      essential: true,
      analytics: false,
      functional: false,
    })
    saveCookiePreferences({
      essential: true,
      analytics: false,
      functional: false,
    })
    setIsVisible(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    // Save preferences to localStorage
    localStorage.setItem("cookieConsentGiven", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs))

    // Here you would typically set actual cookies based on preferences
    // For example, only initialize analytics if prefs.analytics is true

    // Example: if (prefs.analytics) { initializeAnalytics(); }
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md w-full sm:w-96 bg-[#0D1B2A]/95 backdrop-blur-sm border border-[#00BFA6]/50 rounded-lg shadow-lg text-white p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-[#00BFA6] mr-2" />
          <h3 className="text-lg font-semibold text-[#E0E1DD]">Privacy & Cookie Notice</h3>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close cookie notice"
        >
          <X size={18} />
        </button>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-[#E0E1DD]/90">
          This website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic,
          and assist in our marketing efforts.
        </p>

        <div className="bg-[#1B263B]/70 border-l-2 border-[#00BFA6] pl-3 py-2 my-2">
          <p className="text-sm font-medium text-[#00BFA6]">Why Privacy Matters:</p>
          <p className="text-xs text-[#E0E1DD]/80">
            As a cybersecurity professional, I take your privacy seriously and implement industry-standard protections
            for your data.
          </p>
        </div>

        <button
          onClick={toggleDetails}
          className="flex items-center text-sm text-[#00BFA6] hover:text-[#00BFA6]/80 transition-colors"
        >
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <span className="ml-1">{showDetails ? "Hide Details" : "Show Details"}</span>
        </button>

        {showDetails && (
          <div className="bg-[#0D1B2A] p-3 rounded border border-[#415A77] text-xs space-y-2 mt-2">
            <p className="font-medium text-[#E0E1DD]">Types of cookies used:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#E0E1DD]/80">
              <li>
                <span className="font-medium text-[#00BFA6]">Essential</span> – Required for the website to function
                properly
              </li>
              <li>
                <span className="font-medium text-[#00BFA6]">Analytics</span> – Help me understand how visitors interact
                with the website
              </li>
              <li>
                <span className="font-medium text-[#00BFA6]">Functional</span> – Enable enhanced functionality and
                personalization
              </li>
            </ul>
            <p className="mt-2 text-[#E0E1DD]/70">
              For more information, please read our{" "}
              <Link href="/privacy-policy" className="text-[#00BFA6] hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="text-[#00BFA6] hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            onClick={handleEssentialOnly}
            className="px-4 py-2 bg-[#1B263B] hover:bg-[#1B263B]/80 text-[#E0E1DD] text-sm rounded transition-colors flex-1 border border-[#415A77]"
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 bg-[#00BFA6] hover:bg-[#00BFA6]/80 text-white text-sm rounded transition-colors flex-1"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
