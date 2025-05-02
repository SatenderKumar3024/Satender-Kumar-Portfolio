"use client"

import { useState } from "react"
import { ResponsiveContainer } from "@/components/ui/responsive-container"
import { SwipeableCarousel } from "@/components/ui/swipeable-carousel"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { useResponsive } from "@/hooks/use-responsive"
import SmoothScrollNav from "@/components/smooth-scroll-nav"
import EnhancedContactForm from "@/components/enhanced-contact-form"
import LoadingScreen from "@/components/loading-screen"
import { Shield, Cloud, Database, FileCheck, AlertTriangle, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResponsiveExample() {
  const { is } = useResponsive()
  const [showLoadingScreen, setShowLoadingScreen] = useState(false)

  // Example navigation items
  const navItems = [
    { id: "hero", label: "Home", icon: <Shield className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <Shield className="h-4 w-4" /> },
    { id: "expertise", label: "Expertise", icon: <Cloud className="h-4 w-4" /> },
    { id: "experience", label: "Experience", icon: <FileCheck className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="h-4 w-4" /> },
    { id: "certifications", label: "Certifications", icon: <Database className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <AlertTriangle className="h-4 w-4" /> },
  ]

  // Example carousel items
  const carouselItems = [
    <div key="1" className="bg-[#0D1B2A] p-6 rounded-lg border border-white/10 h-full">
      <h3 className="text-xl font-bold mb-2">Project 1</h3>
      <p>This is a sample project card that would appear in the carousel.</p>
    </div>,
    <div key="2" className="bg-[#0D1B2A] p-6 rounded-lg border border-white/10 h-full">
      <h3 className="text-xl font-bold mb-2">Project 2</h3>
      <p>This is another sample project card for the carousel.</p>
    </div>,
    <div key="3" className="bg-[#0D1B2A] p-6 rounded-lg border border-white/10 h-full">
      <h3 className="text-xl font-bold mb-2">Project 3</h3>
      <p>A third sample project card for the carousel.</p>
    </div>,
  ]

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      {/* Loading Screen (toggle with button) */}
      {showLoadingScreen && <LoadingScreen />}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#E0E1DD]">Responsive Portfolio Components</h1>

        <Button
          onClick={() => setShowLoadingScreen(!showLoadingScreen)}
          className="mb-8 mx-auto block bg-gradient-to-r from-[#06B6D4] to-[#10B981]"
        >
          {showLoadingScreen ? "Hide" : "Show"} Loading Screen
        </Button>

        {/* Responsive Grid Example */}
        <h2 className="text-2xl font-bold mb-4 text-[#E0E1DD]">Responsive Grid Layout</h2>
        <ResponsiveContainer className="mb-12" mobileStack={true} tabletCols={2} desktopCols={3} gap="lg">
          <div className="bg-[#0D1B2A] p-6 rounded-lg border border-white/10 h-full">
            <h3 className="text-xl font-bold mb-2">Card 1</h3>
            <p>This card will stack on mobile and be part of a grid on larger screens.</p>
          </div>
          <div className="bg-[#0D1B2A] p-6 rounded-lg border border-white/10 h-full">
            <h3 className="text-xl font-bold mb-2">Card 2</h3>
            <p>This card will stack on mobile and be part of a grid on larger screens.</p>
          </div>
          <div className="bg-[#0D1B2A] p-6 rounded-lg border border-white/10 h-full">
            <h3 className="text-xl font-bold mb-2">Card 3</h3>
            <p>This card will stack on mobile and be part of a grid on larger screens.</p>
          </div>
        </ResponsiveContainer>

        {/* Swipeable Carousel Example */}
        <h2 className="text-2xl font-bold mb-4 text-[#E0E1DD]">Mobile-Friendly Carousel</h2>
        <p className="mb-4 text-[#E0E1DD]/70">
          {is.mobile ? "Swipe left/right to navigate" : "Click arrows to navigate or use keyboard"}
        </p>
        <div className="mb-12">
          <SwipeableCarousel showArrows showDots autoPlay={false}>
            {carouselItems}
          </SwipeableCarousel>
        </div>

        {/* Optimized Image Example */}
        <h2 className="text-2xl font-bold mb-4 text-[#E0E1DD]">Optimized Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <OptimizedImage
            src="/secure-cloud-network.png"
            alt="Cloud Security"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <OptimizedImage
            src="/interconnected-security-mesh.png"
            alt="Security Mesh"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <OptimizedImage
            src="/cyber-shield-analysis.png"
            alt="Shield Analysis"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Parallax Section Example */}
        <h2 className="text-2xl font-bold mb-4 text-[#E0E1DD]">Parallax Effect</h2>
        <ParallaxSection
          backgroundImage="/interconnected-security-mesh.png"
          className="h-64 mb-12 rounded-lg flex items-center justify-center"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Parallax Background</h3>
            <p className="text-white/80">Scroll to see the effect</p>
          </div>
        </ParallaxSection>

        {/* Side-by-side Navigation and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-[#E0E1DD]">Smooth Navigation</h2>
            <SmoothScrollNav items={navItems} showBreadcrumbs={true} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 text-[#E0E1DD]">Enhanced Contact Form</h2>
            <EnhancedContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
