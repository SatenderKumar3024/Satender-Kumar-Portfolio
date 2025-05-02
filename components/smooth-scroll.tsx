"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })

            // Update URL without page reload
            history.pushState(null, "", targetId)
          }
        }
      }
    }

    // Add event listener to the document
    document.addEventListener("click", handleAnchorClick)

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
