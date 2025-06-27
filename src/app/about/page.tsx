'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';
import CTASection from '@/components/features/cta';
import { AnimatedStatsSection } from '@/components/ui/animated-stats';
import MissionVisionTabs from '@/components/ui/mission-vision-tab';
import OurValues from '@/components/ui/our-values';

// Enhanced metadata with structured data
const metadata: Metadata = {
  title: 'About KDVLAB - Innovation Through Technology',
  description:
    'Learn about KDVLAB, our mission, values, and the passionate team behind our innovative software development solutions. Founded by experienced engineers dedicated to excellence.',
  keywords: [
    'About KDVLAB',
    'Software Development Team',
    'Web Development Company',
    'Technology Innovation',
    'Dave Ejezie',
    'Software Engineers',
    'Business Solutions',
  ],
  openGraph: {
    title: 'About KDVLAB - Innovation Through Technology',
    description:
      'Learn about KDVLAB, our mission, values, and the passionate team behind our innovative software development solutions.',
    type: 'website',
    images: [
      {
        url: '/images/about/team-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLAB team working on innovative software solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://kdvlab.com/about',
  },
};

// Structured data for organization
const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KDVLAB',
  url: 'https://kdvlab.com',
  logo: 'https://kdvlab.com/logo.png',
  description:
    'Innovative software development company specializing in modern web technologies',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Dave Ejezie',
    jobTitle: 'Founder & Lead Developer',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'UK',
  },
  sameAs: ['https://github.com/kdvlab', 'https://linkedin.com/company/kdvlab'],
};

export default function AboutPage() {
  const aboutConfig = pageConfigs.about;

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

      <main className="relative">
        {/* Hero Section */}
        <PageHero
          title={aboutConfig.title}
          subtitle={aboutConfig.subtitle}
          breadcrumbs={[...aboutConfig.breadcrumbs]}
        />

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
              {/* Content (2 columns) */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <p className="text-primary text-gradient font-gilroy-light text-sm uppercase tracking-wider">
                    OUR STORY
                  </p>
                  <h2 className="text-heading-lg">
                    Building innovative software solutions that drive business
                    success.
                  </h2>
                </div>

                <div className="relative">
                  {/* Controlled border height - you can adjust this value */}
                  <div className="absolute left-0 top-0 w-1 bg-primary h-[120px]"></div>

                  {/* Content with proper spacing from the border */}
                  <div className="space-y-6 text-muted-foreground pl-8">
                    <p className="text-body-lg leading-relaxed">
                      KDVLAB was founded by a team of passionate software
                      engineers and designers who shared a common vision: to
                      create exceptional software that solves real-world
                      problems. We believed that by combining technical
                      excellence with a deep understanding of business needs, we
                      could deliver solutions that truly make a difference.
                    </p>

                    <p className="text-body-lg leading-relaxed">
                      Today, we work with companies of all sizes, from startups
                      to established enterprises, helping them leverage
                      technology to achieve their goals. Our team has grown, but
                      our commitment to quality, innovation, and client success
                      remains unchanged.
                    </p>

                    <p className="text-body-lg leading-relaxed">
                      {/* Fixed: Escaped apostrophes */}
                      We&rsquo;re proud of the work we do and the relationships
                      we&rsquo;ve built with our clients. We measure our success
                      by their success, and we&rsquo;re dedicated to delivering
                      software that exceeds expectations.
                    </p>
                  </div>
                </div>

                {/* Animated Stats */}
                <AnimatedStatsSection />
              </div>

              {/* Image (1 column) */}
              <div className="relative w-full flex justify-center items-center">
                <div className="relative w-[350px] h-[440px]">
                  <Image
                    src="/images/about-1.png"
                    alt="KDVLAB innovation workspace with modern development setup"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}

        <section className="py-16 lg:py-24 bg-muted/30 container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission */}
          <MissionVisionTabs />

          {/* Values */}
          <OurValues/>
        </section>

        {/* Contact CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
