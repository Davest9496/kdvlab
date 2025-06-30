import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';
import CareersContent from '@/components/careers/careers-page';
import { createOrganizationLD, createWebsiteLD } from '@/lib/seo';

// SEO Configuration for Careers Page
export const metadata: Metadata = {
  title: 'Careers - Join Our Team',
  description:
    'Join KDVLab and build the future of web development. We offer competitive salaries, flexible working arrangements, and opportunities to work with cutting-edge technologies.',
  keywords: [
    'Careers',
    'Jobs',
    'Web Developer Jobs',
    'TypeScript Jobs',
    'React Developer',
    'Remote Jobs',
    'Tech Careers',
    'KDVLab Jobs',
    'Frontend Developer',
    'Full Stack Developer',
  ],
  openGraph: {
    title: 'Careers - Join Our Team | KDVLab',
    description:
      'Join KDVLab and build the future of web development. We offer competitive salaries, flexible working arrangements, and opportunities to work with cutting-edge technologies.',
    type: 'website',
    images: [
      {
        url: '/images/career.jpg',
        width: 1200,
        height: 630,
        alt: 'Join KDVLab - Career opportunities in web development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join Our Team | KDVLab',
    description:
      'Join KDVLab and build the future of web development. Competitive salaries, flexible working, cutting-edge tech.',
    images: ['/images/career.jpg'],
  },
  alternates: {
    canonical: 'https://kdvlab.com/careers',
  },
};

// Generate structured data for better SEO
const organizationLD = createOrganizationLD({
  name: 'KDVLab',
  url: 'https://kdvlab.com',
  logo: 'https://kdvlab.com/logo.png',
  description:
    'Modern web development company specializing in React, Next.js, and TypeScript solutions.',
  contactPoint: {
    telephone: '+1-555-0123',
    contactType: 'customer service',
    email: 'careers@kdvlab.com',
  },
});

const jobPostingLD = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Web Developer Positions',
  description:
    'Multiple web development positions available at KDVLab. Join our team and work with cutting-edge technologies.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'KDVLab',
    sameAs: 'https://kdvlab.com',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Remote',
      addressCountry: 'Worldwide',
    },
  },
  employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACTOR'],
  workMode: ['REMOTE', 'HYBRID', 'ONSITE'],
  datePosted: '2024-01-15',
  validThrough: '2024-12-31',
};

export default function CareersPage() {
  const careersConfig = pageConfigs.careers;

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationLD, jobPostingLD]),
        }}
      />

      <main>
        {/* Dynamic Page Hero */}
        <PageHero
          title={careersConfig.title}
          subtitle={careersConfig.subtitle}
          breadcrumbs={[...careersConfig.breadcrumbs]}
        />

        {/* Careers Content Sections */}
        <CareersContent />
      </main>
    </>
  );
}
