import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | kdvlab',
  defaultTitle: 'kdvlab - Description',
  description: 'innovative solutions for modern web development',
  canonical: 'https://kdvlab.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kdvlab.com',
    siteName: 'kdvlab',
    title: 'kdvlab',
    description: 'Your default site description for SEO',
    images: [
      {
        url: 'https://kdvlab.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'kdvlab',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'application-name',
      content: 'kdvlab',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'kdvlab',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#12A4ED',
    },
  ],
};

// JSON-LD structured data helpers
export const createOrganizationLD = (data: {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: data.name,
  url: data.url,
  logo: data.logo,
  description: data.description,
  ...(data.address && {
    address: { '@type': 'PostalAddress', ...data.address },
  }),
  ...(data.contactPoint && {
    contactPoint: { '@type': 'ContactPoint', ...data.contactPoint },
  }),
});

export const createWebsiteLD = (data: {
  name: string;
  url: string;
  description: string;
  publisher: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: data.name,
  url: data.url,
  description: data.description,
  publisher: {
    '@type': 'Organization',
    name: data.publisher,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${data.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const createBreadcrumbLD = (
  items: Array<{ name: string; url: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
