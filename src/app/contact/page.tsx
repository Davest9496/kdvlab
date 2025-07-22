import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';
import { PageHero } from '@/components/ui/page-hero';
import { getPageConfig } from '@/lib/page-configs';
import { ScheduleCallButton } from '@/components/ui/calendly-buttons';
import { Mail, MapPin, Clock, Calendar } from 'lucide-react';

// SEO Metadata with structured data
export const metadata: Metadata = {
  title: 'Contact Us - Get In Touch | KDVLab',
  description:
    'Ready to start your project? Get in touch with KDVLab for expert web development services. Located in London, United Kingdom.',
  keywords: [
    'contact kdvlab',
    'web development consultation',
    'project inquiry',
    'united kingdom web developer',
    'dave ejezie contact',
  ],
  openGraph: {
    title: 'Contact KDVLab - Let&apos;s Build Something Amazing',
    description:
      'Get in touch with our expert web development team. We&apos;re ready to bring your ideas to life.',
    images: [
      {
        url: '/images/socials.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact KDVLab - Web Development Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://kdvlab.com/contact',
  },
};

export default function ContactPage() {
  const pageConfig = getPageConfig('contact');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section using PageHero component */}
      <PageHero
        title={pageConfig.title}
        breadcrumbs={pageConfig.breadcrumbs?.slice()}
        backgroundImage="/images/socials.jpg"
        backgroundImageAlt="Contact KDVLab - Social and Communication"
        overlayOpacity={50}
        variant="default"
        showBreadcrumbs={true}
        showSubtitle={false}
      />

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-gilroy-bold text-heading-lg text-white">
                  Have a <span className="text-gradient">Project?</span>
                </h2>
                <h3 className="mb-6 text-subheading-lg text-muted-foreground">
                  Contact Us
                </h3>
                <p className="text-body-base leading-relaxed text-muted-foreground">
                  Whether you have a question about our services, want to
                  discuss a potential project, or are interested in joining our
                  team, we&apos;d love to hear from you. Fill out the form, and
                  we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-subheading-sm font-medium text-white">
                      Email
                    </h4>
                    <p className="text-body-base text-muted-foreground">
                      <a
                        href="mailto:info@kdvlab.com"
                        className="transition-colors hover:text-primary"
                      >
                        info@kdvlab.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-subheading-sm font-medium text-white">
                      Location
                    </h4>
                    <p className="text-body-base text-muted-foreground">
                      London, United Kingdom
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-subheading-sm font-medium text-white">
                      Response Time
                    </h4>
                    <p className="text-body-base text-muted-foreground">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA with Simple Calendly Integration */}
              <div className="rounded-xl border border-border bg-muted/20 p-6 backdrop-blur-sm">
                <h4 className="mb-2 text-subheading-md font-medium text-white">
                  Prefer to schedule a call?
                </h4>
                <p className="mb-4 text-body-sm text-muted-foreground">
                  Book a free 30-minute consultation to discuss your project in
                  detail.
                </p>

                {/* Simple, Reliable Calendly Button */}
                <ScheduleCallButton
                  variant="outline"
                  size="default"
                  utmPreset="contact"
                  className="border-primary/20 bg-primary/5 text-primary hover:border-primary/30 hover:bg-primary/10"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                </ScheduleCallButton>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:pl-8" id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-muted/10 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-gilroy-bold text-heading-md text-white">
              What Happens Next?
            </h2>
            <p className="mb-12 text-body-base text-muted-foreground">
              Here&apos;s what you can expect after reaching out to us.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="mb-2 text-subheading-sm font-medium text-white">
                  Initial Response
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  We&apos;ll respond within 24 hours to acknowledge your inquiry
                  and schedule a discovery call.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="mb-2 text-subheading-sm font-medium text-white">
                  Discovery Call
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  We&apos;ll discuss your project goals, requirements, and
                  timeline in detail.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="mb-2 text-subheading-sm font-medium text-white">
                  Proposal & Timeline
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  You&apos;ll receive a detailed proposal with project scope,
                  timeline, and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact KDVLab',
            description:
              'Get in touch with KDVLab for expert web development services',
            url: 'https://kdvlab.com/contact',
            mainEntity: {
              '@type': 'Organization',
              name: 'KDVLab',
              email: 'info@kdvlab.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'London',
                addressRegion: 'England',
                addressCountry: 'GB',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'info@kdvlab.com',
                availableLanguage: 'English',
              },
            },
          }),
        }}
      />
    </div>
  );
}
