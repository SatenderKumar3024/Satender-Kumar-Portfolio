"use client"

import { Settings } from "lucide-react"
import { useState, useEffect } from "react"

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  functional: boolean
}

export default function CookieSettingsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Essential cookies are always required
    analytics: false,
    functional: false,
  })

  // Load saved preferences when component mounts
  useEffect(() => {
    const savedPrefs = localStorage.getItem("cookiePreferences")
    if (savedPrefs) {
      try {
        setPreferences(JSON.parse(savedPrefs))
      } catch (e) {
        console.error("Error parsing cookie preferences", e)
      }
    }
  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
    localStorage.setItem("cookieConsentGiven", "true")

    // Here you would update actual cookies based on new preferences
    // Example: if (preferences.analytics) { initializeAnalytics(); } else { removeAnalyticsCookies(); }

    setIsOpen(false)
  }

  const handleToggle = (type: keyof CookiePreferences) => {
    if (type === "essential") return // Essential cookies cannot be toggled

    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-sm text-cyber-light-gray hover:text-[#00BFA6] transition-colors flex items-center gap-2"
        aria-label="Cookie Settings"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]/50"></span>
        <span className="flex items-center">
          <Settings size={14} className="mr-1.5" />
          Cookie Settings
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0D1B2A] border border-[#00BFA6]/30 rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close cookie settings"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-semibold text-[#00BFA6] mb-6">Cookie Preferences</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#E0E1DD]">Essential Cookies</p>
                  <p className="text-sm text-[#E0E1DD]/70">Required for the website to function</p>
                </div>
                <div className="relative">
                  <div className="w-10 h-5 bg-[#00BFA6] rounded-full shadow-inner"></div>
                  <div className="absolute w-3 h-3 bg-white rounded-full transition right-1 top-1"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#E0E1DD]">Analytics Cookies</p>
                  <p className="text-sm text-[#E0E1DD]/70">Help understand how you use the site</p>
                </div>
                <button onClick={() => handleToggle("analytics")} className="relative">
                  <div
                    className={`w-10 h-5 rounded-full shadow-inner transition-colors ${
                      preferences.analytics ? "bg-[#00BFA6]" : "bg-[#415A77]"
                    }`}
                  ></div>
                  <div
                    className={`absolute w-3 h-3 bg-white rounded-full transition ${
                      preferences.analytics ? "right-1" : "left-1"
                    } top-1`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#E0E1DD]">Functional Cookies</p>
                  <p className="text-sm text-[#E0E1DD]/70">Enable enhanced functionality</p>
                </div>
                <button onClick={() => handleToggle("functional")} className="relative">
                  <div
                    className={`w-10 h-5 rounded-full shadow-inner transition-colors ${
                      preferences.functional ? "bg-[#00BFA6]" : "bg-[#415A77]"
                    }`}
                  ></div>
                  <div
                    className={`absolute w-3 h-3 bg-white rounded-full transition ${
                      preferences.functional ? "right-1" : "left-1"
                    } top-1`}
                  ></div>
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-[#415A77] pt-4">
              <p className="text-xs text-[#E0E1DD]/70 mb-4">
                Your preferences are saved for 6 months. You can change them anytime by clicking on "Cookie Settings" in
                the footer.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#00BFA6] hover:bg-[#00BFA6]/80 text-white text-sm rounded transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function X(props: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}
