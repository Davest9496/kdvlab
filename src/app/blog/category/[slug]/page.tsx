// (Optional - for future use)
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/ui/page-hero';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import {
  getPostsByCategory,
  getAllCategories,
  getAllPostSlugs,
} from '@/lib/blog';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} | KDVLAB Blog`,
    description: category.description,
    openGraph: {
      title: `${category.name} | KDVLAB Blog`,
      description: category.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://kdvlab.com/blog/category/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(params.slug);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: category.name, href: `/blog/category/${category.slug}` },
  ];

  return (
    <main>
      <PageHero
        title={category.name}
        subtitle={category.description}
        breadcrumbs={breadcrumbs}
        backgroundImageAlt={`${category.name} posts`}
        overlayOpacity={50}
        variant="default"
        showBreadcrumbs={true}
        showSubtitle={true}
      />

      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <p className="text-body-base text-muted-foreground">
                Showing {posts.length} post{posts.length !== 1 ? 's' : ''} in{' '}
                {category.name}
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts.map((post, index) => (
                  <BlogPostCard
                    key={post.slug}
                    post={post}
                    priority={index < 6}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-heading-sm font-gilroy-bold text-foreground mb-4">
                  No posts found
                </h3>
                <p className="text-body-base text-muted-foreground mb-6">
                  There are no posts in the {category.name} category yet.
                </p>
                <a
                  href="/blog"
                  className="btn-primary px-6 py-3 rounded-lg inline-block"
                >
                  Browse all posts
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
