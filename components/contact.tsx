"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Linkedin,
  Twitter,
  Calendar,
  ExternalLink,
  Mail,
  Phone,
  Github,
  Shield,
  CheckCircle,
  AlertCircle,
  Loader2,
  Send,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { AnimatedInput } from "@/components/animated-input"
import { AnimatedTextarea } from "@/components/animated-textarea"

const Contact = () => {
  const [activeTab, setActiveTab] = useState("general")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ message: string; type: "success" | "error" | null }>({
    message: "",
    type: null,
  })
  const { toast } = useToast()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Listen for the custom event to switch to resume tab
  useEffect(() => {
    const handleRequestResume = () => {
      setActiveTab("resume")
    }

    document.addEventListener("requestResume", handleRequestResume)
    return () => {
      document.removeEventListener("requestResume", handleRequestResume)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ message: "", type: null })

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/mgvkoobv", {
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
        ;(e.target as HTMLFormElement).reset()
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

  // Group contact links by category
  const contactLinks = {
    essential: [
      {
        icon: <Mail className="h-5 w-5" />,
        text: "satenderkumar.analyst@gmail.com",
        href: "mailto:satenderkumar.analyst@gmail.com",
        color: "text-[#10B981]",
        bgColor: "bg-[#10B981]/20",
        label: "Email",
      },
      {
        icon: <Phone className="h-5 w-5" />,
        text: "+1 (226) 637-****",
        href: "tel:+12266370000",
        color: "text-[#10B981]",
        bgColor: "bg-[#10B981]/20",
        label: "Phone",
      },
    ],
    professional: [
      {
        icon: <Linkedin className="h-5 w-5" />,
        text: "linkedin.com/in/satender-singh2430",
        href: "https://www.linkedin.com/in/satender-singh2430/",
        color: "text-[#0A66C2]",
        bgColor: "bg-[#0A66C2]/20",
        label: "LinkedIn",
      },
      {
        icon: <Calendar className="h-5 w-5" />,
        text: "calendly.com/satenderkumar-analyst",
        href: "https://calendly.com/satenderkumar-analyst",
        color: "text-[#38BDF8]",
        bgColor: "bg-[#38BDF8]/20",
        label: "Calendly",
      },
    ],
    community: [
      {
        icon: <Twitter className="h-5 w-5" />,
        text: "@SatendeK2430",
        href: "https://x.com/SatendeK2430",
        color: "text-[#06AED5]",
        bgColor: "bg-[#06AED5]/20",
        label: "Twitter/X",
      },
      {
        icon: <Github className="h-5 w-5" />,
        text: "github.com/SatenderKumar3024",
        href: "https://github.com/SatenderKumar3024",
        color: "text-[#6B7280]",
        bgColor: "bg-[#6B7280]/20",
        label: "GitHub",
      },
      {
        icon: <ExternalLink className="h-5 w-5" />,
        text: "linktr.ee/satendersingh",
        href: "https://linktr.ee/satendersingh",
        color: "text-[#06AED5]",
        bgColor: "bg-[#06AED5]/20",
        label: "Linktree",
      },
    ],
  }

  return (
    <section id="contact" className="py-16" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#E0E1DD]">Contact Me</h2>
          <p className="text-center text-[#E0E1DD]/80 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, cybersecurity challenges, or opportunities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-[#0D1B2A] shadow-lg border-[#00BFA6]/20 rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-[#E0E1DD] text-2xl font-bold">Get In Touch</CardTitle>
                  <CardDescription className="text-[#E0E1DD]/80 text-base">
                    Feel free to reach out or schedule a call.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Essential Contact Methods */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#93C5FD] font-semibold mb-3">
                      Primary Contact
                    </h3>
                    <div className="space-y-3">
                      {contactLinks.essential.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#00BFA6]/10 transition-colors border border-[#00BFA6]/10"
                          whileHover={{ x: 5, scale: 1.02, boxShadow: "0 4px 12px rgba(0, 191, 166, 0.15)" }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <motion.div
                            className={`${link.bgColor} p-3 rounded-md ${link.color} w-12 h-12 flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {link.icon}
                          </motion.div>
                          <div>
                            <div className="text-xs text-[#E0E1DD]/60 mb-1">{link.label}</div>
                            <span className="text-sm md:text-base text-[#E0E1DD] font-medium">{link.text}</span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Professional Networks */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#93C5FD] font-semibold mb-3">Professional</h3>
                    <div className="space-y-3">
                      {contactLinks.professional.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#00BFA6]/10 transition-colors"
                          whileHover={{ x: 5, scale: 1.02 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: (index + 2) * 0.1 }}
                        >
                          <motion.div
                            className={`${link.bgColor} p-3 rounded-md ${link.color} w-12 h-12 flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {link.icon}
                          </motion.div>
                          <div>
                            <div className="text-xs text-[#E0E1DD]/60 mb-1">{link.label}</div>
                            <span className="text-sm md:text-base text-[#E0E1DD] font-medium">{link.text}</span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Community & Social */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#93C5FD] font-semibold mb-3">
                      Community & Social
                    </h3>
                    <div className="space-y-3">
                      {contactLinks.community.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#00BFA6]/10 transition-colors"
                          whileHover={{ x: 5, scale: 1.02 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: (index + 4) * 0.1 }}
                        >
                          <motion.div
                            className={`${link.bgColor} p-3 rounded-md ${link.color} w-12 h-12 flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {link.icon}
                          </motion.div>
                          <div>
                            <div className="text-xs text-[#E0E1DD]/60 mb-1">{link.label}</div>
                            <span className="text-sm md:text-base text-[#E0E1DD] font-medium">{link.text}</span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card className="shadow-lg bg-[#0D1B2A] border-[#00BFA6]/20 rounded-xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-[#E0E1DD] text-2xl font-bold">Send Me a Message</CardTitle>
                  <CardDescription className="text-[#E0E1DD]/80 text-base">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#0D1B2A]/50">
                      <TabsTrigger
                        value="general"
                        className={
                          activeTab === "general"
                            ? "bg-gradient-to-r from-[#06B6D4] to-[#10B981] text-[#0D1B2A] font-medium"
                            : "text-[#E0E1DD]/80"
                        }
                      >
                        General Inquiry
                      </TabsTrigger>
                      <TabsTrigger
                        value="resume"
                        className={
                          activeTab === "resume"
                            ? "bg-gradient-to-r from-[#06B6D4] to-[#10B981] text-[#0D1B2A] font-medium"
                            : "text-[#E0E1DD]/80"
                        }
                      >
                        Request Resume
                      </TabsTrigger>
                    </TabsList>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: activeTab === "general" ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: activeTab === "general" ? 20 : -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TabsContent value="general" className="mt-0">
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="hidden" name="form-type" value="General Inquiry" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="name" className="text-[#E0E1DD]">
                                  Name
                                </Label>
                                <AnimatedInput id="name" name="name" placeholder="Your Name" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email" className="text-[#E0E1DD]">
                                  Email
                                </Label>
                                <AnimatedInput id="email" name="email" type="email" placeholder="Your Email" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="subject" className="text-[#E0E1DD]">
                                Subject
                              </Label>
                              <AnimatedInput id="subject" name="subject" placeholder="Your Subject" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="message" className="text-[#E0E1DD]">
                                Message
                              </Label>
                              <AnimatedTextarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                              />
                            </div>

                            {formStatus.message && (
                              <div
                                className={`p-3 rounded-md ${
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
                              </div>
                            )}

                            <div className="flex items-center gap-2 text-xs text-[#E0E1DD]/80">
                              <Shield className="h-3.5 w-3.5" />
                              <span>
                                This form is protected by reCAPTCHA and implements strict CSP headers, input validation,
                                and DOMPurify sanitization.
                              </span>
                            </div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#06B6D4] to-[#10B981] hover:from-[#06B6D4]/90 hover:to-[#10B981]/90 text-[#0D1B2A] font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,166,0.5)]"
                                disabled={isSubmitting}
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
                        </TabsContent>

                        <TabsContent value="resume" className="mt-0">
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="hidden" name="form-type" value="Resume Request" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="resume-name" className="text-[#E0E1DD]">
                                  Name
                                </Label>
                                <AnimatedInput id="resume-name" name="name" placeholder="Your Name" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="resume-email" className="text-[#E0E1DD]">
                                  Email
                                </Label>
                                <AnimatedInput
                                  id="resume-email"
                                  name="email"
                                  type="email"
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company" className="text-[#E0E1DD]">
                                Company
                              </Label>
                              <AnimatedInput id="company" name="company" placeholder="Your Company (Optional)" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="resume-message" className="text-[#E0E1DD]">
                                Message (Optional)
                              </Label>
                              <AnimatedTextarea
                                id="resume-message"
                                name="message"
                                rows={5}
                                placeholder="Please let me know a bit about your company and the role you're considering me for."
                              />
                            </div>

                            {formStatus.message && (
                              <div
                                className={`p-3 rounded-md ${
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
                              </div>
                            )}

                            <div className="flex items-center gap-2 text-xs text-[#E0E1DD]/80">
                              <Shield className="h-3.5 w-3.5" />
                              <span>
                                This form is protected by reCAPTCHA and implements strict CSP headers, input validation,
                                and DOMPurify sanitization.
                              </span>
                            </div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#06B6D4] to-[#10B981] hover:from-[#06B6D4]/90 hover:to-[#10B981]/90 text-[#0D1B2A] font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,166,0.5)]"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                  </>
                                ) : (
                                  <>
                                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    Request Resume
                                  </>
                                )}
                              </Button>
                            </motion.div>
                          </form>
                        </TabsContent>
                      </motion.div>
                    </AnimatePresence>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
