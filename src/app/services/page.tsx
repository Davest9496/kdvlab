import type { Metadata } from 'next';
import { PageHero, pageConfigs } from '@/components/ui/page-hero';
import { ServicesSection } from '@/components/sections/services-section';

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
};

export default function ServicesPage() {
  return (
    <>
      <PageHero {...{ ...pageConfigs.services, breadcrumbs: [...pageConfigs.services.breadcrumbs] }} />
      <ServicesSection />
      {/* Additional services content */}
    </>
  );
}
