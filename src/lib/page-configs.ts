
export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageConfig {
  title: string;
  subtitle?: string;
  breadcrumbs?: readonly BreadcrumbItem[];
  variant?: 'default' | 'compact' | 'expanded';
}

// Pre-configured page configurations for consistency
// This can be imported in both server and client components
export const pageConfigs = {
  about: {
    title: 'About KDVLAB',
    subtitle: 'Our Story',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
  services: {
    title: 'Our Services',
    subtitle: 'What We Offer',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
    ],
  },
  work: {
    title: 'Our Work',
    subtitle: 'Portfolio',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/work' },
    ],
  },
  blog: {
    title: 'Blog',
    subtitle: 'Insights & Stories',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Contact Us',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  careers: {
    title: 'Join Our Team',
    subtitle: 'Careers',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Careers', href: '/careers' },
    ],
  },
} as const;

// Type helper for page config keys
export type PageConfigKey = keyof typeof pageConfigs;

// Helper function to get page config with type safety
export function getPageConfig(key: PageConfigKey): PageConfig {
  return pageConfigs[key];
}

// Helper function to create dynamic breadcrumbs
export function createBreadcrumbs(items: BreadcrumbItem[]): BreadcrumbItem[] {
  return items;
}

// Helper function to create page config with overrides
export function createPageConfig(
  baseConfig: PageConfig,
  overrides: Partial<PageConfig> = {}
): PageConfig {
  return {
    ...baseConfig,
    ...overrides,
    breadcrumbs: overrides.breadcrumbs || baseConfig.breadcrumbs,
  };
}
