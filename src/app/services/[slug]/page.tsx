// src/app/services/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getServiceBySlug,
  getServiceMetadata,
  getAllServiceSlugs,
} from '@/lib/services-data';
import { getIconByName } from '@/lib/icon-mapper';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { UnifiedCTA } from '@/components/features/unified-cta';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all services (ISR optimization)
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();

  return slugs.map(slug => ({
    slug: slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | KDVLAB',
    };
  }

  const metadata = getServiceMetadata(params.slug);

  if (!metadata) {
    return {
      title: 'Service Not Found | KDVLAB',
    };
  }

  return metadata;
}

// Hero CTA Button Component (keeping your existing design)
const HeroCtaButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <a
    href="/contact"
    className="group relative inline-flex min-w-[200px] items-center gap-4 rounded-full border-2 border-white/25 bg-transparent px-12 py-5 text-body-lg font-medium text-white transition-all duration-500 ease-out hover:scale-105 hover:border-primary hover:bg-primary hover:shadow-[0_12px_40px_rgba(18,164,237,0.4)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
  >
    <span className="relative z-10">{children}</span>

    <ArrowRight className="relative z-10 h-6 w-6 transition-all duration-300 group-hover:translate-x-2" />

    {/* Smooth background fill on hover */}
    <div className="absolute inset-0 scale-95 rounded-full bg-gradient-to-r from-primary to-primary opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100" />
  </a>
);

// Server Component with inline sections and hero images
export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = getIconByName(service.iconName);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Custom Background Image */}
      <section className="relative overflow-hidden py-20 md:py-24 lg:py-28">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${service.heroImage}')`,
          }}
        />

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black/40 to-blue-500/20" />

        {/* Content */}
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <ServiceIcon className="h-12 w-12 text-white" />
                </div>
              </div>

              <h1 className="mb-4 font-heading text-hero-lg text-white drop-shadow-lg">
                {service.heroTitle}
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-body-lg text-white/90 drop-shadow-md">
                {service.heroDescription}
              </p>

              {/* CTA Button instead of pricing/timeline */}
              <div className="flex justify-center">
                <HeroCtaButton>Book a Call</HeroCtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-heading text-heading-lg text-white">
              What Makes Our {service.title} Different
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-white/70">
              We combine cutting-edge technology with proven methodologies to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature, index) => {
              const FeatureIcon = getIconByName(feature.iconName);
              return (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="mb-4">
                    <div className="w-fit rounded-lg border border-primary/20 bg-primary/10 p-3">
                      <FeatureIcon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-3 font-heading text-subheading-md text-white">
                    {feature.title}
                  </h3>
                  <p className="text-body-base text-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-muted/5 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-heading text-heading-lg text-white">
              Technology Stack
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-white/70">
              We use industry-leading technologies to build robust, scalable
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.techStack.map((tech, index) => {
              const TechIcon = getIconByName(tech.iconName);
              return (
                <div
                  key={tech.name}
                  className="group rounded-xl border border-white/[0.08] bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <TechIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-subheading-sm text-white">
                      {tech.name}
                    </h3>
                  </div>
                  <p className="text-body-sm text-white/70">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-heading text-heading-lg text-white">
              Our Process
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-white/70">
              A proven methodology that ensures successful project delivery and
              client satisfaction.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div
                  key={step.step}
                  className="flex items-start gap-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/20">
                      <span className="text-lg font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="font-heading text-subheading-md text-white">
                        {step.title}
                      </h3>
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-body-base text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/5 py-20">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-heading text-heading-lg text-white">
                Why Choose Our {service.title}?
              </h2>
              <p className="mb-8 text-body-lg text-white/70">
                Our {service.title.toLowerCase()} services deliver measurable
                results and long-term value for your business.
              </p>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-body-base text-white/80">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-500/10 blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="mb-4 font-heading text-subheading-lg text-white">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-8 text-body-base text-white/70">
                    {service.ctaDescription}
                  </p>

                  {/* CTA Button in Benefits Section */}
                  <div className="flex justify-center">
                    <HeroCtaButton>Get In Touch</HeroCtaButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED CTA SECTION - Replaces the old CTA section */}
      <UnifiedCTA
        context={service.slug}
        customContext={{
          // Override the description with service-specific CTA description
          description: service.ctaDescription,
        }}
      />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'Organization',
              name: 'KDVLAB',
              url: 'https://kdvlab.com',
            },
            offers: {
              '@type': 'Offer',
              description: service.ctaDescription,
              priceRange: service.startingPrice,
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: service.title,
              itemListElement: service.features.map(feature => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: feature.title,
                  description: feature.description,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}

// Export for ISR (Incremental Static Regeneration)
export const revalidate = 3600;
