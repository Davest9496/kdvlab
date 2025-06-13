import { PageHero, pageConfigs } from '@/components/ui/page-hero';

export default function CareersPage() {
  return (
    <main>
      <PageHero
        {...{
          ...pageConfigs.careers,
          breadcrumbs: [...pageConfigs.careers.breadcrumbs],
        }}
        backgroundVariant="secondary"
      />
      {/* Job listings */}
    </main>
  );
}
