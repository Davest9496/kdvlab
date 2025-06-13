import { PageHero, pageConfigs } from '@/components/ui/page-hero';

export default function WorkPage() {
  return (
    <main>
      <PageHero {...{ ...pageConfigs.work, breadcrumbs: [...pageConfigs.work.breadcrumbs] }} />
      {/* Portfolio grid */}
    </main>
  );
}
