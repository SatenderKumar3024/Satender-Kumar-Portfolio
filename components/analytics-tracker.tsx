"use client"

import { useEffect } from "react"

type AnalyticsEvent = {
  category: string
  action: string
  label?: string
  value?: number
}

export function trackEvent({ category, action, label, value }: AnalyticsEvent) {
  // Check if analytics is available (e.g., Google Analytics, Plausible, etc.)
  if (typeof window !== "undefined") {
    // For Google Analytics
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }

    // For Plausible (if implemented)
    if (window.plausible) {
      window.plausible(action, {
        props: {
          category,
          label,
          value,
        },
      })
    }

    // Fallback to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics Event:", { category, action, label, value })
    }
  }
}

// Hook for tracking page views
export function usePageView(pageName: string) {
  useEffect(() => {
    trackEvent({
      category: "Page View",
      action: "view",
      label: pageName,
    })
  }, [pageName])

  return null
}
