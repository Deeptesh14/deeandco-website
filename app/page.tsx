import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { PhilosophySection } from './components/PhilosophySection'
import { ServicesSection } from './components/ServicesSection'
import { ProcessSection } from './components/ProcessSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
