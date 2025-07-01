import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import { BlogNewsSection } from '@/components/features/blog-news-section';
import { getPageConfig } from '@/lib/page-configs';

// Enhanced SEO metadata for blog page
export const metadata: Metadata = {
  title: 'Blog & Insights',
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
  ],
  openGraph: {
    title: 'Blog & Insights | KDVLAB',
    description:
      'Stay updated with the latest trends in software development, project showcases, and industry insights.',
    images: [
      {
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLAB Blog - Insights & Resources',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Insights | KDVLAB',
    description:
      'Stay updated with the latest trends in software development, project showcases, and industry insights.',
  },
  alternates: {
    canonical: 'https://kdvlab.com/blog',
  },
};

// Coming Soon Component with your exact design
const ComingSoonSection = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background matching your image */}
      <div className="absolute inset-0">
        {/* Abstract geometric background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/20" />

        {/* Geometric shapes - matching your design */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-lg transform rotate-45 blur-sm" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-tl from-blue-400/8 to-transparent rounded-lg transform -rotate-12 blur-sm" />

        {/* Connecting lines/borders effect */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading - matching your image exactly */}
          <h1 className="text-hero-lg md:text-hero-xl font-heading text-white tracking-tight leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
            COMING SOON
          </h1>

          {/* Description paragraph - matching your content */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-body-lg font-rubik text-white/80 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              We&apos;re working on bringing you valuable insights, industry news,
              and thought leadership content. Check back soon for articles on
              software development, technology trends, and more.
            </p>
          </div>

          {/* Optional: Newsletter signup */}
          <div className="pt-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-white/70">
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

// Main Blog Page Component
export default function BlogPage() {
  const pageConfig = getPageConfig('blog');

  return (
    <>
      {/* Page Hero with breadcrumbs */}
      <PageHero
        title="Insights & Resources"
        breadcrumbs={pageConfig.breadcrumbs?.slice()}
        variant="compact"
        backgroundImage="/images/dark-background-abstract-with-light-effect-vector.jpg"
        overlayOpacity={60}
      />

      {/* Coming Soon Section */}
      <ComingSoonSection />

      {/* Optional: Show preview of upcoming content using your existing component */}
      {/* Uncomment this when you want to show the blog posts preview */}
      {/* <BlogNewsSection /> */}

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'KDVLAB Blog',
            description:
              'Insights and resources about software development, web technologies, and digital innovation.',
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
          }),
        }}
      />
    </>
  );
}
