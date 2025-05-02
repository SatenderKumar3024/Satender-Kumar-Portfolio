import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#E0E1DD] mb-6",
        "bg-gradient-to-r from-[#E0E1DD] to-[#00BFA6] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-[#E0E1DD] mb-5", className)}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight text-[#E0E1DD] mb-4", className)}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight text-[#E0E1DD] mb-3", className)}>
      {children}
    </h4>
  )
}

export function TypographyP({ children, className }: TypographyProps) {
  return <p className={cn("leading-7 text-base md:text-lg text-[#E0E1DD]/90 mb-4", className)}>{children}</p>
}

export function TypographyLead({ children, className }: TypographyProps) {
  return <p className={cn("text-lg md:text-xl text-[#E0E1DD]/90 leading-7 mb-4", className)}>{children}</p>
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return <div className={cn("text-lg md:text-xl font-semibold text-[#E0E1DD]", className)}>{children}</div>
}

export function TypographySmall({ children, className }: TypographyProps) {
  return <small className={cn("text-sm font-medium leading-none text-[#E0E1DD]/70", className)}>{children}</small>
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return <p className={cn("text-sm text-[#E0E1DD]/60", className)}>{children}</p>
}

export function TypographySection({ children, className }: TypographyProps) {
  return (
    <div className={cn("text-center mb-10", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E0E1DD] mb-3">{children}</h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-1 w-16 bg-gradient-to-r from-[#00BFA6] to-transparent rounded-full"></div>
        <div className="h-1 w-4 bg-[#00BFA6] rounded-full"></div>
      </div>
    </div>
  )
}
