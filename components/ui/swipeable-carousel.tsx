"use client"

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface SwipeableCarouselProps {
  children: ReactNode[]
  className?: string
  showArrows?: boolean
  showDots?: boolean
  autoPlay?: boolean
  interval?: number
  slideWidth?: "full" | "auto" | "custom"
  customWidth?: string
  gap?: number
}

export function SwipeableCarousel({
  children,
  className,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  interval = 5000,
  slideWidth = "full",
  customWidth = "90%",
  gap = 16,
}: SwipeableCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (autoPlay && !isDragging) {
      const timer = setTimeout(() => {
        handleNext()
      }, interval)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, autoPlay, interval, isDragging])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const getSlideWidth = () => {
    if (slideWidth === "full") return "100%"
    if (slideWidth === "auto") return "auto"
    return customWidth
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={carouselRef}
        className="overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          drag={isMobile ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) {
              handlePrev()
            } else if (info.offset.x < -100) {
              handleNext()
            }
            setIsDragging(false)
          }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
              style={{ width: getSlideWidth() }}
            >
              {children[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {showArrows && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 border-white/10 hidden md:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 border-white/10 hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {showDots && (
        <div className="flex justify-center mt-4 gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-[#00BFA6] w-6" : "bg-white/30"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}

      {isMobile && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/50">Swipe to navigate</div>
      )}
    </div>
  )
}
