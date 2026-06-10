import { FloatingCircles } from './components/layout/FloatingCircles'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  JourneySection,
  PrinciplesSection,
  ProjectsSection,
  TechnologiesSection,
} from './components/sections'
import { useDocumentMeta } from './hooks/useDocumentMeta'

function App() {
  useDocumentMeta()

  return (
    <div className="relative min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <FloatingCircles />
      <Navbar />

      <main id="main-content" className="relative z-10">
        <HeroSection />
        <JourneySection />
        <TechnologiesSection />
        <ProjectsSection />
        <ExperienceSection />
        <PrinciplesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
