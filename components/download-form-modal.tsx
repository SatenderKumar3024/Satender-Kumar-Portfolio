"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { X, Loader2, CheckCircle, AlertCircle, FileDown, Shield, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { trackEvent } from "@/components/analytics-tracker"

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  reason: z.string().min(1, { message: "Please select a reason for download" }),
  password: z.string().min(1, { message: "Password is required" }),
  additionalInfo: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface DownloadFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (formData: FormValues) => void
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_portfolio" // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_portfolio_request" // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY" // Replace with your EmailJS public key

export function DownloadFormModal({ isOpen, onClose, onSuccess }: DownloadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formStatus, setFormStatus] = useState<{ message: string; type: "success" | "error" | null }>({
    message: "",
    type: null,
  })
  const { toast } = useToast()
  const [emailjsLoaded, setEmailjsLoaded] = useState(false)

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    // Check if the EmailJS script is loaded
    if (typeof window !== "undefined" && window.emailjs) {
      try {
        window.emailjs.init(EMAILJS_PUBLIC_KEY)
        setEmailjsLoaded(true)
      } catch (error) {
        console.error("EmailJS initialization error:", error)
      }
    } else {
      // If EmailJS is not loaded yet, set up a listener for when it loads
      const checkEmailJS = setInterval(() => {
        if (typeof window !== "undefined" && window.emailjs) {
          try {
            window.emailjs.init(EMAILJS_PUBLIC_KEY)
            setEmailjsLoaded(true)
            clearInterval(checkEmailJS)
          } catch (error) {
            console.error("EmailJS initialization error:", error)
          }
        }
      }, 500)

      // Clean up the interval
      return () => clearInterval(checkEmailJS)
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      reason: "",
      password: "",
      additionalInfo: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setFormStatus({ message: "", type: null })

    try {
      // Track the form submission attempt
      trackEvent({
        category: "Resume",
        action: "request_submit",
        label: data.fullName || "Unknown User",
      })

      // Check if password is correct
      if (data.password !== "Sate@2430$2266376900&") {
        setFormStatus({
          message: "Incorrect password. Please try again.",
          type: "error",
        })
        setIsSubmitting(false)
        return
      }

      // Store the form data in localStorage for reference
      localStorage.setItem(
        "portfolioDownloadRequest",
        JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      )

      // Send email notification using EmailJS
      if (emailjsLoaded && window.emailjs) {
        try {
          const templateParams = {
            name: data.fullName,
            email: data.email,
            reason: data.reason,
            additionalInfo: data.additionalInfo || "No additional information provided",
            timestamp: new Date().toLocaleString(),
          }

          // Send the email notification
          await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError)
          // Continue with success flow even if email fails
        }
      } else {
        console.warn("EmailJS not loaded, skipping email notification")
      }

      setFormStatus({
        message: "Thank you! Your request has been submitted. I'll get back to you soon.",
        type: "success",
      })

      // Reset form
      reset()

      // Close modal after a delay
      setTimeout(() => {
        onClose()
        // Pass the form data to the parent component
        onSuccess(data)
      }, 2000)

      // Try to send the data to the API in the background
      try {
        fetch("/api/download-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).catch((err) => {
          console.log("Background API call failed:", err)
        })
      } catch (apiError) {
        console.log("API call failed silently")
      }

      // Track successful submission
      trackEvent({
        category: "Resume",
        action: "request_success",
        label: data.fullName || "Unknown User",
      })
    } catch (error) {
      // Track error
      trackEvent({
        category: "Resume",
        action: "request_error",
        label: String(error),
      })
      console.error("Error in form submission:", error)
      setFormStatus({
        message: "An error occurred. Please try again or contact me directly.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle reason select change
  const handleReasonChange = (value: string) => {
    setValue("reason", value)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-md bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] rounded-xl shadow-[0_0_25px_rgba(0,191,166,0.2)] border border-[#00BFA6]/20 overflow-hidden"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-6 border-b border-[#00BFA6]/20">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00BFA6]" />
                <h3 className="text-xl font-semibold text-white">Request Portfolio PDF</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-[#1B263B]"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal body */}
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                Please provide your information to request the complete portfolio PDF. I'll review your request and send
                you the document.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm text-gray-300">
                    Full Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      {...register("fullName")}
                      className={`bg-[#0D1B2A]/50 border-[#1B263B] text-white placeholder:text-gray-500 focus:border-[#00BFA6] ${
                        errors.fullName ? "border-red-500 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.fullName && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-gray-300">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email")}
                      className={`bg-[#0D1B2A]/50 border-[#1B263B] text-white placeholder:text-gray-500 focus:border-[#00BFA6] ${
                        errors.email ? "border-red-500 focus:border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-sm text-gray-300">
                    Reason for Request
                  </Label>
                  <Select onValueChange={handleReasonChange}>
                    <SelectTrigger
                      id="reason"
                      className={`bg-[#0D1B2A]/50 border-[#1B263B] text-white placeholder:text-gray-500 focus:border-[#00BFA6] ${
                        errors.reason ? "border-red-500 focus:border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1B263B] border-[#00BFA6]/20">
                      <SelectItem value="hiring" className="text-white hover:bg-[#0D1B2A]/50">
                        Hiring
                      </SelectItem>
                      <SelectItem value="review" className="text-white hover:bg-[#0D1B2A]/50">
                        Review
                      </SelectItem>
                      <SelectItem value="collaboration" className="text-white hover:bg-[#0D1B2A]/50">
                        Collaboration
                      </SelectItem>
                      <SelectItem value="other" className="text-white hover:bg-[#0D1B2A]/50">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.reason && <p className="text-xs text-red-500 mt-1">{errors.reason.message}</p>}
                </div>

                {watch("reason") === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo" className="text-sm text-gray-300">
                      Additional Information
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Please provide more details..."
                      {...register("additionalInfo")}
                      className="bg-[#0D1B2A]/50 border-[#1B263B] text-white placeholder:text-gray-500 focus:border-[#00BFA6] min-h-[80px]"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm text-gray-300">
                    Access Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter access password"
                      {...register("password")}
                      className={`bg-[#0D1B2A]/50 border-[#1B263B] text-white placeholder:text-gray-500 focus:border-[#00BFA6] pr-10 ${
                        errors.password ? "border-red-500 focus:border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    {errors.password && (
                      <div className="absolute right-10 top-1/2 -translate-y-1/2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      </div>
                    )}
                  </div>
                  {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
                </div>

                {formStatus.message && (
                  <div
                    className={`p-3 rounded-md ${
                      formStatus.type === "success"
                        ? "bg-[#00BFA6]/20 border border-[#00BFA6]/30"
                        : "bg-red-500/20 border border-red-500/30"
                    } flex items-center gap-2`}
                  >
                    {formStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5 text-[#00BFA6]" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="text-sm text-white">{formStatus.message}</span>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#00BFA6] to-[#00A896] text-[#0D1B2A] hover:shadow-[0_0_15px_rgba(0,191,166,0.5)] font-medium transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <FileDown className="mr-2 h-4 w-4" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mt-4">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Your information is securely processed and will only be used to respond to your request.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
