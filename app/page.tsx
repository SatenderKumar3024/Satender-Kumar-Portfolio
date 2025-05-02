import Hero from "@/components/hero"
import About from "@/components/about"
import TechnicalExpertise from "@/components/technical-expertise"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import CareerTimelineSection from "@/components/career-timeline-section"
import EducationSection from "@/components/education-section"
import TechnicalSkills from "@/components/technical-skills"
import SecurityDashboard from "@/components/security-dashboard"
import KeyAchievements from "@/components/key-achievements"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <KeyAchievements />
      <TechnicalSkills />
      <SecurityDashboard />
      <TechnicalExpertise />
      <EducationSection />
      <CareerTimelineSection />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}
