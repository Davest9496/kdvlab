import { Metadata } from 'next';
import { HeroSection } from '@/components/features/hero-section';
import ServicesSection from '@/components/features/service-section';
import TestimonialsSection from '@/components/features/testimonials-section';
import BlogNewsSection from '@/components/features/blog-news-section';
import CTASection from '@/components/features/cta';

export const metadata: Metadata = {
  title: 'KDVLab - Modern Web Development by Dave Ejezie',
  description:
    'Expert web development services by Dave Ejezie. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
};

export default function HomePage() {
  return (
    <>
      {/* Optional spacing section */}
      <section className="py-6 bg-muted/30" aria-hidden="true" />
      {/* Hero Section - Outside main tag since it's full-screen */}
      <HeroSection />

      {/* Page Content */}
      <ServicesSection />
      <TestimonialsSection />
      <BlogNewsSection />
      <CTASection />

      {/* Optional spacing section */}
      <section className="py-24 bg-muted/30" aria-hidden="true" />
    </>
  );
}
