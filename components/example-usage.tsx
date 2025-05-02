"use client"

import SectionWrapper from "@/components/section-wrapper"
import GlassCard from "@/components/glass-card"
import AnimatedButton from "@/components/animated-button"
import AnimatedCounter from "@/components/animated-counter"
import ParallaxHero from "@/components/parallax-hero"

export default function ExampleUsage() {
  return (
    <>
      {/* Example of ParallaxHero */}
      <ParallaxHero>
        <div className="text-center">
          <h1 className="mb-6">Welcome to My Portfolio</h1>
          <p className="max-w-2xl mx-auto mb-8">
            Information Security Analyst specializing in Cloud Security, SIEM, and Threat Hunting
          </p>
          <AnimatedButton>Get Started</AnimatedButton>
        </div>
      </ParallaxHero>

      {/* Example of SectionWrapper with different animations */}
      <SectionWrapper animation="fade-up" id="about" className="py-16">
        <h2 className="text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-6">
            <h3 className="mb-4">My Background</h3>
            <p>Content about your background...</p>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="mb-4">My Skills</h3>
            <p>Content about your skills...</p>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Example of SectionWrapper with slide-in animation */}
      <SectionWrapper animation="slide-in-left" id="experience" className="py-16 bg-cyber-navy">
        <h2 className="text-center mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <h3 className="mb-2">Years of Experience</h3>
            <div className="text-4xl font-bold text-cyber-teal">
              <AnimatedCounter from={0} to={4} suffix="+" />
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="mb-2">Projects Completed</h3>
            <div className="text-4xl font-bold text-cyber-teal">
              <AnimatedCounter from={0} to={20} suffix="+" />
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="mb-2">Certifications</h3>
            <div className="text-4xl font-bold text-cyber-teal">
              <AnimatedCounter from={0} to={8} />
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Example of buttons with different styles */}
      <SectionWrapper animation="fade-in" className="py-16">
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatedButton>Primary Button</AnimatedButton>
          <AnimatedButton variant="outline">Secondary Button</AnimatedButton>
          <AnimatedButton variant="ghost">Ghost Button</AnimatedButton>
        </div>
      </SectionWrapper>
    </>
  )
}
