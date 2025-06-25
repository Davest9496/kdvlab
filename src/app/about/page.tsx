import { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';
import { cn } from '@/utils/cn';
import CTASection from '@/components/features/cta';
import { AnimatedStatsSection } from '@/components/ui/animated-stats'; // Add this import

// Enhanced metadata with structured data
export const metadata: Metadata = {
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
                  <div className="absolute left-0 top-0 w-1 bg-primary h-[100px]"></div>

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
                      We're proud of the work we do and the relationships we've
                      built with our clients. We measure our success by their
                      success, and we're dedicated to delivering software that
                      exceeds expectations.
                    </p>
                  </div>
                </div>

                {/* REPLACE THIS SECTION WITH THE ANIMATED VERSION */}
                {/* Old static stats:
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                  <div className="text-center lg:text-left">
                    <div className="text-heading-md text-gradient font-gilroy-bold">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-heading-md text-gradient font-gilroy-bold">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-heading-md text-gradient font-gilroy-bold">
                      99%
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
                */}

                {/* NEW: Animated Stats */}
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-heading-lg mb-4">Our Mission & Values</h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                We're driven by core principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="group">
                <div className="bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-subheading-lg mb-4 font-gilroy-light">
                    Innovation
                  </h3>
                  <p className="text-muted-foreground">
                    We embrace cutting-edge technologies and creative
                    problem-solving to deliver solutions that push boundaries
                    and drive progress.
                  </p>
                </div>
              </div>

              {/* Quality */}
              <div className="group">
                <div className="bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-subheading-lg mb-4 font-gilroy-light">
                    Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Excellence is not negotiable. We maintain the highest
                    standards in code quality, design, and user experience
                    across all our projects.
                  </p>
                </div>
              </div>

              {/* Partnership */}
              <div className="group md:col-span-2 lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-subheading-lg mb-4 font-gilroy-light">
                    Partnership
                  </h3>
                  <p className="text-muted-foreground">
                    We build lasting relationships with our clients, working as
                    trusted partners to understand their vision and deliver
                    solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}

        {/* Contact CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
