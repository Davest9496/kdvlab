'use client';

import { useState, useMemo } from 'react';
import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { BlogSidebar } from '@/components/blog/blog-sidebar';
import { BlogFilters } from '@/components/blog/blog-filters';
import CTASection from '@/components/features/cta';
import type { BlogPost } from '@/lib/blog';

interface BlogPageClientProps {
  initialPosts: BlogPost[];
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    description: string;
    count: number;
  }>;
}

// FIXED: Helper function to normalize category for filtering
function normalizeCategoryForFilter(category: string): string {
  const categoryMap: Record<string, string> = {
    'Case Study': 'case-studies',
    Development: 'development',
    Mobile: 'mobile',
    Tutorial: 'tutorials',
    News: 'news',
    General: 'general',
  };

  return categoryMap[category] || category.toLowerCase().replace(/\s+/g, '-');
}

export default function BlogPageClient({
  initialPosts,
  categories,
}: BlogPageClientProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const pageConfig = pageConfigs.blog;

  // FIXED: Filter and search logic with proper category matching
  const filteredPosts = useMemo(() => {
    let filtered = initialPosts;

    // Apply category filter - FIXED the matching logic
    if (activeFilter !== 'all') {
      filtered = filtered.filter((post) => {
        const postCategorySlug = normalizeCategoryForFilter(post.category);
        return postCategorySlug === activeFilter;
      });
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
          post.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [initialPosts, activeFilter, searchTerm]);

  // Get popular tags from all posts
  const popularTags = useMemo(() => {
    const tagCount = new Map<string, number>();

    initialPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
      });
    });

    return Array.from(tagCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag]) => tag);
  }, [initialPosts]);

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
    blogPost: initialPosts.slice(0, 10).map((post) => ({
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
            {initialPosts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Sidebar - Appears first on mobile */}
                <div className="lg:col-span-1 order-2 lg:order-1">
                  <BlogSidebar
                    categories={categories}
                    popularTags={popularTags}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onCategoryFilter={setActiveFilter}
                    onTagFilter={(tag) => setSearchTerm(tag)}
                  />
                </div>

                {/* Main Content - Appears second on mobile */}
                <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
                  <BlogFilters
                    categories={categories}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                  />

                  {/* Results info */}
                  <div className="flex items-center justify-between">
                    <p className="text-body-base text-muted-foreground">
                      {filteredPosts.length === initialPosts.length
                        ? `Showing all ${filteredPosts.length} posts`
                        : `Showing ${filteredPosts.length} of ${initialPosts.length} posts`}
                      {searchTerm && ` for "${searchTerm}"`}
                      {activeFilter !== 'all' &&
                        ` in ${categories.find((c) => c.slug === activeFilter)?.name}`}
                    </p>
                  </div>

                  {filteredPosts.length > 0 ? (
                    <div
                      className={
                        viewMode === 'grid'
                          ? 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'
                          : 'grid grid-cols-1 gap-6'
                      }
                    >
                      {filteredPosts.map((post, index) => (
                        <BlogPostCard
                          key={post.slug}
                          post={post}
                          priority={index < 4}
                          compact={viewMode === 'list'}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-heading-sm font-gilroy-bold text-foreground mb-4">
                        No posts found
                      </h3>
                      <p className="text-body-base text-muted-foreground mb-6">
                        {searchTerm
                          ? `No posts match your search for "${searchTerm}"`
                          : `No posts found in ${categories.find((c) => c.slug === activeFilter)?.name} category`}
                      </p>
                      <button
                        onClick={() => {
                          setActiveFilter('all');
                          setSearchTerm('');
                        }}
                        className="btn-primary px-6 py-3 rounded-lg"
                      >
                        Clear filters
                      </button>
                    </div>
                  )}

                  {/* Pagination placeholder */}
                  {filteredPosts.length > 12 && (
                    <div className="flex justify-center pt-8">
                      <div className="text-muted-foreground">
                        Pagination coming soon...
                      </div>
                    </div>
                  )}
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
