import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';

export default function CareersPage() {
  const careersConfig = pageConfigs.careers;

  return (
    <main>
      <PageHero
        title={careersConfig.title}
        subtitle={careersConfig.subtitle}
        breadcrumbs={[...careersConfig.breadcrumbs]}
      />
      {/* Job listings */}
    </main>
  );
}
