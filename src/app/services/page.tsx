import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
// import { ServicesSection } from '@/components/sections/services-section';
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
  // Now we can safely access pageConfigs from a server component
  const servicesConfig = pageConfigs.services;

  return (
    <>
      <PageHero
        title={servicesConfig.title}
        subtitle={servicesConfig.subtitle}
        breadcrumbs={[...servicesConfig.breadcrumbs]}
      />
      {/* <ServicesSection /> */}
      {/* Additional services content */}
    </>
  );
}
