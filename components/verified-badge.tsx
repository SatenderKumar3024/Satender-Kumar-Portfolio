import { CheckCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface VerifiedBadgeProps {
  name: string
  className?: string
}

export default function VerifiedBadge({ name, className = "" }: VerifiedBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`inline-flex items-center ${className}`}>
            {name}
            <CheckCircle className="h-4 w-4 text-[#00BFA6] ml-1" />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">Verified Identity</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
