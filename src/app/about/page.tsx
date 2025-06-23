import { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import { pageConfigs } from '@/lib/page-configs';

export const metadata: Metadata = {
  title: 'About KDVLAB - Innovation Through Technology',
  description:
    'Learn about KDVLAB, our mission, values, and the passionate team behind our innovative software development solutions.',
  openGraph: {
    title: 'About KDVLAB - Innovation Through Technology',
    description:
      'Learn about KDVLAB, our mission, values, and the passionate team behind our innovative software development solutions.',
    type: 'website',
  },
};

export default function AboutPage() {
  const aboutConfig = pageConfigs.about;

  return (
    <main>
      <PageHero
        title={aboutConfig.title}
        subtitle={aboutConfig.subtitle}
        breadcrumbs={[...aboutConfig.breadcrumbs]}
      />
      {/* Rest of content */}
    </main>
  );
}
