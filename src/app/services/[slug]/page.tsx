// src/app/services/[slug]/page.tsx (Updated with CTA Button)
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getServiceBySlug,
  getServiceMetadata,
  getAllServiceSlugs,
} from '@/lib/services-data';
import { getIconByName } from '@/lib/icon-mapper';
import { CheckCircle, MessageSquare, Calendar, ArrowRight } from 'lucide-react';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all services (ISR optimization)
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();

  return slugs.map((slug) => ({
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

// Hero CTA Button Component (inline to avoid import issues)
const HeroCtaButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <a
    href="/contact"
    className="group relative inline-flex items-center gap-4 px-12 py-5 rounded-full border-2 border-white/25 bg-transparent text-white font-medium text-body-lg min-w-[200px] transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background hover:border-primary hover:bg-primary hover:shadow-[0_12px_40px_rgba(18,164,237,0.4)] hover:scale-105"
  >
    <span className="relative z-10">{children}</span>

    <ArrowRight className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:translate-x-2" />

    {/* Smooth background fill on hover */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-95 group-hover:scale-100" />
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <ServiceIcon className="w-12 h-12 text-white" />
                </div>
              </div>

              <h1 className="text-hero-lg font-heading text-white mb-4 drop-shadow-lg">
                {service.heroTitle}
              </h1>

              <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
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
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg font-heading text-white mb-4">
              What Makes Our {service.title} Different
            </h2>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => {
              const FeatureIcon = getIconByName(feature.iconName);
              return (
                <div
                  key={feature.title}
                  className="group p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                      <FeatureIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-subheading-md font-heading text-white mb-3">
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
      <section className="py-20 bg-muted/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg font-heading text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              We use industry-leading technologies to build robust, scalable
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.techStack.map((tech, index) => {
              const TechIcon = getIconByName(tech.iconName);
              return (
                <div
                  key={tech.name}
                  className="group p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-white/[0.08] hover:border-primary/30 transition-all duration-300 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TechIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-subheading-sm font-heading text-white">
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
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg font-heading text-white mb-4">
              Our Process
            </h2>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and
              client satisfaction.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div
                  key={step.step}
                  className="flex items-start gap-6 p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border border-primary/30">
                      <span className="text-primary font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-subheading-md font-heading text-white">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
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
      <section className="py-20 bg-muted/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-heading-lg font-heading text-white mb-6">
                Why Choose Our {service.title}?
              </h2>
              <p className="text-body-lg text-white/70 mb-8">
                Our {service.title.toLowerCase()} services deliver measurable
                results and long-term value for your business.
              </p>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-body-base text-white/80">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-subheading-lg font-heading text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-body-base text-white/70 mb-8">
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

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-heading-lg font-heading text-white mb-4">
              {service.ctaTitle}
            </h2>
            <p className="text-body-lg text-white/70 mb-12 max-w-2xl mx-auto">
              {service.ctaDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/[0.08] text-white font-semibold backdrop-blur-sm border border-white/[0.16] hover:bg-white/[0.12] transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Meeting</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Quick response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Export for ISR (Incremental Static Regeneration)
export const revalidate = 3600;
