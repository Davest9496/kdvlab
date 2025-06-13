import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { HeroSection } from '@/components/features/hero-section'
import ServicesSection from '@/components/features/service-section'
import TestimonialsSection from '@/components/features/testimonials-section'
import Footer from '@/components/layout/footer'
import BlogNewsSection from '@/components/features/blog-news-section'
import CTASection from '@/components/features/cta'

export const metadata: Metadata = {
  title: 'KDVLab - Modern Web Development by Dave Ejezie',
  description: 'Expert web development services by Dave Ejezie. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
}

export default function HomePage() {
  return (
    <>
      <Header />
        <HeroSection />
      <main >
        <ServicesSection />
        <TestimonialsSection />
        <BlogNewsSection />
        <CTASection />
        <section className="py-24 bg-muted/30"></section>
      </main>
      <Footer />
    </>
  )
}
