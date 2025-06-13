import { Metadata } from 'next';
import { PageHero, pageConfigs } from '@/components/ui/page-hero';

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
  return (
    <main>
      <PageHero
        {...{ ...pageConfigs.about, breadcrumbs: [...pageConfigs.about.breadcrumbs] }}
        id="about-hero" // For accessibility and SEO
      />
      {/* Rest of content */}
    </main>
  );
}
