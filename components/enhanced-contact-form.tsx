"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

interface EnhancedContactFormProps {
  endpoint?: string
  formType?: "general" | "resume"
  onSuccess?: () => void
  className?: string
}

export default function EnhancedContactForm({
  endpoint = "https://formspree.io/f/mgvkoobv",
  formType = "general",
  onSuccess,
  className,
}: EnhancedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ message: string; type: "success" | "error" | null }>({
    message: "",
    type: null,
  })
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, touchedFields },
    reset,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  // Watch form values for real-time validation
  const formValues = watch()

  // Scroll to first error when form is submitted with errors
  useEffect(() => {
    const firstError = Object.keys(errors)[0]
    if (firstError) {
      const errorElement = document.getElementById(firstError)
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" })
        errorElement.focus()
      }
    }
  }, [errors])

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setFormStatus({ message: "", type: null })

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append("form-type", formType === "general" ? "General Inquiry" : "Resume Request")

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      if (response.ok) {
        setFormStatus({
          message: "✅ Thank you! Your message has been sent. I will get back to you soon.",
          type: "success",
        })
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        reset()
        if (onSuccess) onSuccess()
      } else {
        setFormStatus({
          message: "❌ Oops! Something went wrong. Please try again.",
          type: "error",
        })
      }
    } catch (error) {
      setFormStatus({
        message: "❌ Oops! Network error. Please try again.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get field validation status
  const getFieldStatus = (fieldName: keyof FormValues) => {
    if (touchedFields[fieldName]) {
      return errors[fieldName] ? "error" : formValues[fieldName] ? "valid" : "default"
    }
    return "default"
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <input type="hidden" name="form-type" value={formType === "general" ? "General Inquiry" : "Resume Request"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <div className="relative">
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name")}
              className={`pr-10 transition-all ${
                getFieldStatus("name") === "error"
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : getFieldStatus("name") === "valid"
                    ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                    : ""
              }`}
            />
            <AnimatePresence mode="wait">
              {getFieldStatus("name") !== "default" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {getFieldStatus("name") === "error" ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-red-500 ml-1"
            >
              {errors.name.message}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className={`pr-10 transition-all ${
                getFieldStatus("email") === "error"
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : getFieldStatus("email") === "valid"
                    ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                    : ""
              }`}
            />
            <AnimatePresence mode="wait">
              {getFieldStatus("email") !== "default" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {getFieldStatus("email") === "error" ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-red-500 ml-1"
            >
              {errors.email.message}
            </motion.p>
          )}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="relative">
          <Input
            id="subject"
            placeholder="Your Subject"
            {...register("subject")}
            className={`pr-10 transition-all ${
              getFieldStatus("subject") === "error"
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : getFieldStatus("subject") === "valid"
                  ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                  : ""
            }`}
          />
          <AnimatePresence mode="wait">
            {getFieldStatus("subject") !== "default" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {getFieldStatus("subject") === "error" ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 ml-1"
          >
            {errors.subject.message}
          </motion.p>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="relative">
          <Textarea
            id="message"
            placeholder="Your Message"
            rows={5}
            {...register("message")}
            className={`pr-10 transition-all ${
              getFieldStatus("message") === "error"
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : getFieldStatus("message") === "valid"
                  ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                  : ""
            }`}
          />
          <AnimatePresence mode="wait">
            {getFieldStatus("message") !== "default" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute right-3 top-6"
              >
                {getFieldStatus("message") === "error" ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 ml-1"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {formStatus.message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-md mb-4 ${
            formStatus.type === "success"
              ? "bg-[#00BFA6]/20 text-[#E0E1DD] border border-[#00BFA6]/30"
              : "bg-red-500/20 text-[#E0E1DD] border border-red-500/30"
          } flex items-center gap-2`}
        >
          {formStatus.type === "success" ? (
            <CheckCircle className="h-5 w-5 text-[#00BFA6]" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-500" />
          )}
          <span>{formStatus.message}</span>
        </motion.div>
      )}

      <motion.div
        whileHover={{ scale: isDirty && isValid ? 1.02 : 1 }}
        whileTap={{ scale: isDirty && isValid ? 0.98 : 1 }}
      >
        <Button
          type="submit"
          className={`w-full transition-all duration-300 ${
            isDirty && isValid
              ? "bg-gradient-to-r from-[#06B6D4] to-[#10B981] hover:from-[#06B6D4]/90 hover:to-[#10B981]/90 text-[#0D1B2A] font-medium hover:shadow-[0_0_15px_rgba(0,191,166,0.5)]"
              : "bg-gray-600/50 text-gray-300 cursor-not-allowed"
          }`}
          disabled={isSubmitting || !isDirty || !isValid}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  )
}
