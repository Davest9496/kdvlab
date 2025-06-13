import { PageHero } from '@/components/ui/page-hero';

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <main>
      <PageHero
        title="The Future of Web Development"
        subtitle="Technology Insights"
        description="Exploring the latest trends and technologies shaping the future of web development in 2024 and beyond."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          {
            label: 'The Future of Web Development',
            href: `/blog/${params.slug}`,
          },
        ]}
        showBackButton
        backHref="/blog"
        backLabel="Back to Blog"
        variant="compact"
        backgroundVariant="secondary"
      />
      {/* Blog post content */}
    </main>
  );
}
