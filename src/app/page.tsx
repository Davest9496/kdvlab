import { Metadata } from 'next';
import { HeroSection } from '@/components/features/hero-section';
import ServicesSection from '@/components/features/service-section';
import TestimonialsSection from '@/components/features/testimonials-section';
import BlogNewsSection from '@/components/features/blog-news-section';
import UnifiedCTA from '@/components/features/unified-cta';

export const metadata: Metadata = {
  title:
    'KDVLab - Modern Web Development for Businesses. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
  description:
    'Expert web development services for Businesses. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Outside main tag since it's full-screen */}
      <HeroSection />

      {/* Page Content */}
      <ServicesSection />
      <TestimonialsSection />
      <BlogNewsSection />
      <UnifiedCTA context="home" />
      {/* Footer is handled in the layout, so no need to include it here */}
    </>
  );
}
