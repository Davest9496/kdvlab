import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';

export default function WorkPage() {
  const workConfig = pageConfigs.work;

  return (
    <main>
      <PageHero
        title={workConfig.title}
        subtitle={workConfig.subtitle}
        description={workConfig.description}
        breadcrumbs={workConfig.breadcrumbs}
      />
      {/* Portfolio grid */}
    </main>
  );
}
