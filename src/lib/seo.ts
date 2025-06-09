import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  title: 'kdvlab',
  description: 'Innovative solutions for modern web development',
  canonical: process.env.NEXT_PUBLIC_APP_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'kdvlab',
    title: 'kdvlab',
    description: 'Innovative solutions for modern web development',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-image.jpg`,
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
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#12A4ED',
    },
  ],
};
