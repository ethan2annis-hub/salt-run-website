import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import HowItWorks from '@/components/HowItWorks'
import ValueProps from '@/components/ValueProps'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <ValueProps />
      <Pricing />
      <FAQ />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
