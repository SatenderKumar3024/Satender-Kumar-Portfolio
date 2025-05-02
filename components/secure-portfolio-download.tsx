"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileDown, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadFormModal } from "./download-form-modal"
import { useToast } from "@/hooks/use-toast"

export function SecurePortfolioDownload() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasRequested, setHasRequested] = useState(false)
  const { toast } = useToast()

  // Check if there's a stored download request
  useEffect(() => {
    const storedRequest = localStorage.getItem("portfolioDownloadRequest")
    if (storedRequest) {
      setHasRequested(true)
    }
  }, [])

  const handleFormSuccess = (formData: any) => {
    setHasRequested(true)

    toast({
      title: "Request submitted successfully!",
      description: "I'll review your request and get back to you soon.",
      variant: "default",
    })
  }

  const handleRequestClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="w-full py-8 px-4 mb-4">
      {" "}
      {/* Reduced padding and added margin-bottom */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#0D1B2A]/80 to-[#1B263B]/80 backdrop-blur-lg rounded-xl p-8 border border-[#00BFA6]/20 shadow-[0_0_15px_rgba(0,191,166,0.2)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00BFA6]" />
                Complete Portfolio Access
              </h3>
              <p className="text-gray-300 mb-4">
                Request a comprehensive PDF version of my portfolio including all sections, visuals, and metrics in one
                polished document.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="h-4 w-4 text-[#00BFA6]" />
                  <span>Detailed project breakdowns with metrics</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="h-4 w-4 text-[#00BFA6]" />
                  <span>Complete skill matrix with proficiency levels</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="h-4 w-4 text-[#00BFA6]" />
                  <span>Certification details and verification links</span>
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={handleRequestClick}
                  className={`relative overflow-hidden group px-6 py-6 rounded-lg flex items-center gap-3 text-base font-medium transition-all duration-300 ${
                    hasRequested
                      ? "bg-gradient-to-r from-[#00BFA6] to-[#00A896] text-[#0D1B2A] hover:shadow-[0_0_20px_rgba(0,191,166,0.5)]"
                      : "bg-gradient-to-r from-[#1B263B] to-[#0D1B2A] text-white border border-[#00BFA6]/30 hover:border-[#00BFA6]/60"
                  }`}
                >
                  {hasRequested ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Request Submitted
                    </>
                  ) : (
                    <>
                      <FileDown className="h-5 w-5 group-hover:animate-bounce" />
                      Request Portfolio PDF
                    </>
                  )}

                  {/* Animated gradient border */}
                  <span className="absolute inset-0 rounded-lg overflow-hidden">
                    <span
                      className={`absolute inset-[-4px] bg-gradient-to-r from-[#00BFA6]/0 via-[#00BFA6]/50 to-[#00BFA6]/0 ${hasRequested ? "animate-shimmer" : ""}`}
                    ></span>
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <DownloadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={handleFormSuccess} />
    </div>
  )
}
