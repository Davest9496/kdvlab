import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';

export default function CareersPage() {
  const careersConfig = pageConfigs.careers;

  return (
    <main>
      <PageHero
        title={careersConfig.title}
        subtitle={careersConfig.subtitle}
        description={careersConfig.description}
        breadcrumbs={careersConfig.breadcrumbs}
        ctaText={careersConfig.ctaText}
        ctaHref={careersConfig.ctaHref}
        backgroundVariant="secondary"
      />
      {/* Job listings */}
    </main>
  );
}
