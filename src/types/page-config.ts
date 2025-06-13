import { PageHeroProps } from '@/components/ui/page-hero';

// Import or define pageConfigs
import { pageConfigs } from '@/utils/page-hero-configs';

export interface PageConfig {
  hero: PageHeroProps;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export const typedPageConfigs: Record<string, PageConfig> = {
  about: {
    hero: pageConfigs.about,
    seo: {
      title: 'About KDVLAB - Innovation Through Technology',
      description:
        'Learn about KDVLAB, our mission, values, and team of software development experts.',
      keywords: [
        'about kdvlab',
        'software development team',
        'technology company',
      ],
    },
  },
  services: {
    hero: pageConfigs.services,
    seo: {
      title: 'Software Development Services - KDVLAB',
      description:
        'End-to-end software development services including web apps, mobile apps, cloud services, and more.',
      keywords: [
        'software development',
        'web development',
        'mobile apps',
        'cloud services',
      ],
    },
  },
  // ... more configs
};
