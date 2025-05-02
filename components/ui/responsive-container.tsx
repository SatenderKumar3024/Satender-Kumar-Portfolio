"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState, type ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  mobileReverse?: boolean
  mobileStack?: boolean
  mobileCentered?: boolean
  tabletCols?: 1 | 2 | 3 | 4
  desktopCols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: "none" | "sm" | "md" | "lg" | "xl"
}

export function ResponsiveContainer({
  children,
  className,
  mobileReverse = false,
  mobileStack = true,
  mobileCentered = true,
  tabletCols = 2,
  desktopCols = 3,
  gap = "md",
}: ResponsiveContainerProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const gapClasses = {
    none: "gap-0",
    sm: "gap-2 md:gap-3",
    md: "gap-4 md:gap-6",
    lg: "gap-6 md:gap-8",
    xl: "gap-8 md:gap-12",
  }

  const tabletColClasses = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }

  const desktopColClasses = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
  }

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1",
        tabletColClasses[tabletCols],
        desktopColClasses[desktopCols],
        gapClasses[gap],
        mobileReverse && "flex-col-reverse md:flex-row",
        mobileCentered && "items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  )
}
