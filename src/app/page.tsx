import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { HeroSection } from '@/components/features/hero-section'
import ServicesSection from '@/components/features/service-section'

export const metadata: Metadata = {
  title: 'KDVLab - Modern Web Development by Dave Ejezie',
  description: 'Expert web development services by Dave Ejezie. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </>
  )
}
