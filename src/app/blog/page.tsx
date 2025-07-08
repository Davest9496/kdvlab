import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';
import { getSortedPostsData, getAllCategories } from '@/lib/blog';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { BlogSidebar } from '@/components/blog/blog-sidebar';
import { BlogFilters } from '@/components/blog/blog-filters';
import CTASection from '@/components/features/cta';

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

export default async function BlogPage() {
  const posts = getSortedPostsData();
  const categories = getAllCategories();
  const pageConfig = pageConfigs.blog;

  const blogStructuredData = {
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
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: 'KDVLAB',
      },
      datePublished: post.date,
      url: `https://kdvlab.com/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />

      <main>
        <PageHero
          title={pageConfig.title}
          breadcrumbs={pageConfig.breadcrumbs.slice()}
          backgroundImageAlt="KDVLAB Blog - Insights and updates from our team"
          overlayOpacity={50}
          variant="default"
          showBreadcrumbs={true}
          showSubtitle={false}
        />

        <section className="py-16 md:py-24 lg:py-32 bg-background">
          <div className="container">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3 space-y-8">
                  <BlogFilters categories={categories} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {posts.map((post, index) => (
                      <BlogPostCard
                        key={post.slug}
                        post={post}
                        priority={index < 4}
                      />
                    ))}
                  </div>

                  {/* Pagination placeholder */}
                  {posts.length > 12 && (
                    <div className="flex justify-center pt-8">
                      <div className="text-muted-foreground">
                        Pagination coming soon...
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <BlogSidebar categories={categories} />
                </div>
              </div>
            ) : (
              // Fallback Coming Soon Content
              <div className="text-center max-w-4xl mx-auto space-y-8">
                <h1 className="text-hero-lg md:text-hero-xl font-gilroy-bold text-foreground">
                  COMING SOON
                </h1>
                <p className="text-body-lg text-muted-foreground">
                  We&apos;re working on bringing you valuable insights, industry
                  news, and thought leadership content.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
