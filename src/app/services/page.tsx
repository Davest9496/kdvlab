// src/app/services/page.tsx
import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { UnifiedCTA } from '@/components/features/unified-cta';
import { pageConfigs } from '@/lib/page-configs';

export const metadata: Metadata = {
  title: 'Software Development Services | KDVLAB',
  description:
    'Comprehensive software development services including web applications, mobile apps, cloud solutions, and digital transformation. Expert React, Next.js, and cloud development.',
  keywords: [
    'software development services',
    'web development',
    'mobile app development',
    'cloud services',
    'digital transformation',
    'React development',
    'Next.js',
    'custom software development',
    'UI/UX design',
    'technology consulting',
  ],
  openGraph: {
    title: 'Software Development Services | KDVLAB',
    description:
      'Comprehensive software development services including web applications, mobile apps, cloud solutions, and digital transformation.',
    url: 'https://kdvlab.com/services',
    type: 'website',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://kdvlab.com/services',
  },
  // Add structured data for service organization
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'KDVLAB',
      url: 'https://kdvlab.com',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software Development',
              description:
                'Bespoke software solutions designed specifically for your unique business requirements.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Application Development',
              description:
                'High-performance web applications built with cutting-edge technologies.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description:
                'Native and cross-platform mobile applications for iOS and Android.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Services',
              description:
                'Modern cloud infrastructure and services for scalable operations.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UI/UX Design',
              description:
                'Beautiful, intuitive interfaces that prioritize user experience.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technology Consultancy',
              description:
                'Expert technology consulting to help you make informed decisions.',
            },
          },
        ],
      },
    }),
  },
};

export default function ServicesPage() {
  const servicesConfig = pageConfigs.services;

  return (
    <div className="min-h-screen">
      <PageHero
        title={servicesConfig.title}
        subtitle={servicesConfig.subtitle}
        breadcrumbs={[...servicesConfig.breadcrumbs]}
      />
      <ServicesOverview />
      {/* Add UnifiedCTA with services context */}
      <UnifiedCTA context="services" />
    </div>
  );
}
