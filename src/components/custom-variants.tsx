import { PageHero } from '@/components/ui/page-hero';
import type { PageHeroProps } from '@/components/ui/page-hero';

// For pages requiring special styling
export function MinimalPageHero(
  props: Omit<PageHeroProps, 'variant' | 'backgroundVariant'>
) {
  return (
    <PageHero
      {...props}
      title="Welcome to KDVLAB"
      variant="compact"
      backgroundVariant="secondary"
      className="border-b border-white/10"
    />
  );
}

// For landing pages with strong CTAs
export function CTAPageHero(props: PageHeroProps) {
  return (
    <PageHero
      {...props}
      variant="large"
      backgroundVariant="gradient"
      ctaVariant="primary"
    />
  );
}
