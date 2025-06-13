import { PageHeroProps, pageConfigs } from '@/components/ui/page-hero';

export function createDynamicPageHero(
  baseConfig: keyof typeof pageConfigs,
  dynamicData: {
    title?: string;
    subtitle?: string;
    description?: string;
    slug?: string;
  }
): PageHeroProps {
  const base = pageConfigs[baseConfig];

  return {
    ...base,
    title: dynamicData.title || base.title,
    subtitle: dynamicData.subtitle || base.subtitle,
    description: dynamicData.description || base.description,
    breadcrumbs: dynamicData.slug
      ? [
          ...base.breadcrumbs!,
          {
            label: dynamicData.title || 'Item',
            href: `${base.breadcrumbs![base.breadcrumbs!.length - 1].href}/${dynamicData.slug}`,
          },
        ]
      : base.breadcrumbs,
  };
}
