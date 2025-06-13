import { PageHero } from '@/components/ui/page-hero';

interface CaseStudyPageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  return (
    <main>
      <PageHero
        title="TechFlow Solutions"
        subtitle="Case Study"
        description="How we helped TechFlow Solutions modernize their legacy system and improve performance by 300%."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Work', href: '/work' },
          { label: 'TechFlow Solutions', href: `/case-studies/${params.slug}` },
        ]}
        showBackButton
        backHref="/work"
        backLabel="Back to Portfolio"
        variant="compact"
        ctaText="View Live Project"
        ctaHref="https://techflow.example.com"
        ctaVariant="outline"
      />
      {/* Case study content */}
    </main>
  );
}
