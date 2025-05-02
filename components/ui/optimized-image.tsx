"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  quality?: number
  sizes?: string
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
  loading?: "eager" | "lazy"
  fallbackSrc?: string
  fetchPriority?: "high" | "low" | "auto"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  objectFit = "cover",
  quality = 80,
  sizes = "100vw",
  placeholder = "empty",
  blurDataURL,
  onLoad,
  loading,
  fallbackSrc = "/placeholder.svg",
  fetchPriority,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [error, setError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  const handleError = () => {
    setError(true)
    setIsLoading(false)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse">
          <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
        </div>
      )}

      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        sizes={sizes}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading || (priority ? "eager" : "lazy")}
        fetchPriority={fetchPriority}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", {
          "object-contain": objectFit === "contain",
          "object-cover": objectFit === "cover",
          "object-fill": objectFit === "fill",
          "object-none": objectFit === "none",
          "object-scale-down": objectFit === "scale-down",
        })}
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "auto",
        }}
      />
    </div>
  )
}
