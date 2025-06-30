import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';
import { PageHero } from '@/components/ui/page-hero';
import { getPageConfig } from '@/lib/page-configs';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

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

// Server Action for form submission
async function submitContactForm(formData: FormData) {
  'use server';

  try {
    // Extract form data
    const contactData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    // Basic validation
    if (!contactData.fullName || !contactData.email || !contactData.message) {
      throw new Error('Missing required fields');
    }

    // In production, integrate with your email service:
    // - Send email via Resend, SendGrid, or similar
    // - Save to database
    // - Send confirmation email to user

    console.log('Contact form submitted:', contactData);

    // For now, just log the data
    // await sendContactEmail(contactData);
    // await saveContactToDatabase(contactData);

    // Redirect to success page or show success message
    // redirect('/contact/success');
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}

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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-heading-lg font-gilroy-bold text-white mb-4">
                  Have a <span className="text-gradient">Project?</span>
                </h2>
                <h3 className="text-subheading-lg text-muted-foreground mb-6">
                  Contact Us
                </h3>
                <p className="text-body-base text-muted-foreground leading-relaxed">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-subheading-sm font-medium text-white mb-1">
                      Email
                    </h4>
                    <p className="text-body-base text-muted-foreground">
                      <a
                        href="mailto:info@kdvlab.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@kdvlab.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-subheading-sm font-medium text-white mb-1">
                      Location
                    </h4>
                    <p className="text-body-base text-muted-foreground">
                      London, United Kingdom
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-subheading-sm font-medium text-white mb-1">
                      Response Time
                    </h4>
                    <p className="text-body-base text-muted-foreground">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional CTA */}
              <div className="p-6 bg-muted/20 border border-border rounded-xl">
                <h4 className="text-subheading-md font-medium text-white mb-2">
                  Prefer to schedule a call?
                </h4>
                <p className="text-body-sm text-muted-foreground mb-4">
                  Book a free 30-minute consultation to discuss your project in
                  detail.
                </p>
                <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:pl-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content - FAQ or Services Preview */}
      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-md font-gilroy-bold text-white mb-4">
              What Happens Next?
            </h2>
            <p className="text-body-base text-muted-foreground mb-12">
              Here&apos;s what you can expect after reaching out to us.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-subheading-sm font-medium text-white mb-2">
                  Initial Response
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  We&apos;ll respond within 24 hours to acknowledge your inquiry
                  and schedule a discovery call.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-subheading-sm font-medium text-white mb-2">
                  Discovery Call
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  We&apos;ll discuss your project goals, requirements, and
                  timeline in detail.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-subheading-sm font-medium text-white mb-2">
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
