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
