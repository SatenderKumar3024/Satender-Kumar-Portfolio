"use client"

import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

interface UseResponsiveOptions {
  initialBreakpoint?: Breakpoint
  breakpoints?: Record<Breakpoint, number>
}

export function useResponsive(options?: UseResponsiveOptions) {
  const defaultBreakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  }

  const breakpoints = options?.breakpoints || defaultBreakpoints
  const initialBreakpoint = options?.initialBreakpoint || "xs"

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>(initialBreakpoint)
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      setWindowSize({ width, height })

      // Determine current breakpoint
      const breakpointEntries = Object.entries(breakpoints) as [Breakpoint, number][]
      const sortedBreakpoints = breakpointEntries.sort((a, b) => b[1] - a[1])

      for (const [name, minWidth] of sortedBreakpoints) {
        if (width >= minWidth) {
          setCurrentBreakpoint(name)
          break
        }
      }
    }

    // Set initial values
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoints])

  const is = {
    xs: currentBreakpoint === "xs",
    sm: currentBreakpoint === "sm",
    md: currentBreakpoint === "md",
    lg: currentBreakpoint === "lg",
    xl: currentBreakpoint === "xl",
    "2xl": currentBreakpoint === "2xl",
    mobile: currentBreakpoint === "xs" || currentBreakpoint === "sm",
    tablet: currentBreakpoint === "md",
    desktop: currentBreakpoint === "lg" || currentBreakpoint === "xl" || currentBreakpoint === "2xl",
    smallerThan: (breakpoint: Breakpoint) => {
      const breakpointValue = breakpoints[breakpoint]
      return windowSize.width < breakpointValue
    },
    largerThan: (breakpoint: Breakpoint) => {
      const breakpointValue = breakpoints[breakpoint]
      return windowSize.width >= breakpointValue
    },
  }

  return {
    breakpoint: currentBreakpoint,
    windowSize,
    is,
  }
}
