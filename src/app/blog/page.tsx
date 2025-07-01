import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';
import CTASection from '@/components/features/cta';
import { createOrganizationLD, createWebsiteLD } from '@/lib/seo';

// Enhanced SEO metadata following your pattern
export const metadata: Metadata = {
  title: 'Blog & Insights - Latest Technology Trends',
  description:
    'Discover the latest insights, industry news, and thought leadership content about software development, web technologies, and digital innovation from the KDVLAB team.',
  keywords: [
    'Web Development Blog',
    'Software Development Insights',
    'TypeScript Tutorials',
    'React Best Practices',
    'Next.js Guide',
    'Tech Industry News',
    'KDVLAB Blog',
    'Developer Resources',
    'Programming Tips',
    'Modern Web Technologies',
    'Dave Ejezie Blog',
    'Technology Insights',
  ],
  openGraph: {
    title: 'Blog & Insights - Latest Technology Trends | KDVLAB',
    description:
      'Stay updated with the latest trends in software development, project showcases, and industry insights from our expert team.',
    type: 'website',
    images: [
      {
        url: '/images/blog-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLAB Blog - Technology insights and industry trends',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Insights - Latest Technology Trends | KDVLAB',
    description:
      'Stay updated with the latest trends in software development, project showcases, and industry insights.',
    images: ['/images/blog-hero.jpg'],
  },
  alternates: {
    canonical: 'https://kdvlab.com/blog',
  },
};

// Generate structured data following your SEO pattern
const blogStructuredData = createWebsiteLD({
  name: 'KDVLAB Blog',
  url: 'https://kdvlab.com/blog',
  description:
    'Technology insights, tutorials, and industry trends from KDVLAB',
  publisher: 'KDVLAB',
});

const organizationLD = createOrganizationLD({
  name: 'KDVLAB',
  url: 'https://kdvlab.com',
  logo: 'https://kdvlab.com/logo.png',
  description:
    'Innovative software development company specializing in modern web technologies',
});

// Blog-specific structured data
const blogLD = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'KDVLAB Blog',
  description: 'Technology insights, tutorials, and industry trends',
  url: 'https://kdvlab.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'KDVLAB',
    url: 'https://kdvlab.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kdvlab.com/blog',
  },
  about: [
    'Software Development',
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'DevOps',
  ],
};

// Coming Soon Content Component (Server Component)
const ComingSoonContent = () => {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects - matching your design system */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Geometric shapes - matching your work page style */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-lg transform rotate-45 blur-sm" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-tl from-blue-400/8 to-transparent rounded-lg transform -rotate-12 blur-sm" />

        {/* Connecting lines effect */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main Heading - following your typography pattern */}
          <h1 className="text-hero-lg md:text-hero-xl font-gilroy-bold text-foreground tracking-tight leading-tight">
            COMING SOON
          </h1>

          {/* Description - matching your about page style */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              We&rsquo;re working on bringing you valuable insights, industry
              news, and thought leadership content. Check back soon for articles
              on software development, technology trends, and more.
            </p>

            <p className="text-body-base text-muted-foreground leading-relaxed">
              Our blog will feature in-depth tutorials, case studies from our
              projects, industry analysis, and best practices for modern web
              development.
            </p>
          </div>

          {/* Feature Preview Cards - using your card style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              {
                title: 'Technical Tutorials',
                description: 'Step-by-step guides for modern web development',
                icon: '📚',
              },
              {
                title: 'Project Case Studies',
                description:
                  'Behind-the-scenes look at our development process',
                icon: '🔍',
              },
              {
                title: 'Industry Insights',
                description: 'Analysis of trends and emerging technologies',
                icon: '💡',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 h-full"
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-heading-sm font-gilroy-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-body-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter signup hint */}
          <div className="pt-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-card/40 backdrop-blur-xl border border-border/50 text-muted-foreground">
              <span className="text-sm font-medium">
                Stay tuned for updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Blog Page Component - Server Component following your pattern
export default function BlogPage() {
  const pageConfig = pageConfigs.blog;

  return (
    <>
      {/* Structured Data - following your pattern */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationLD, blogStructuredData, blogLD]),
        }}
      />

      <main>
        {/* Page Hero - following your exact pattern */}
        <PageHero
          title={pageConfig.title}
          breadcrumbs={pageConfig.breadcrumbs.slice()}
          backgroundImageAlt="Blog KDVLab - Insights and updates from our team"
          overlayOpacity={50}
          variant="default"
          showBreadcrumbs={true}
          showSubtitle={false}
        />

        {/* Coming Soon Content */}
        <ComingSoonContent />

        {/* CTA Section - following your pattern */}
        <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
          <CTASection />
        </section>
      </main>
    </>
  );
}
