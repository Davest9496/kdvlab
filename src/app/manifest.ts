import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KDVLab - Modern Web Development',
    short_name: 'KDVLab',
    description:
      'Expert web development services for Businesses. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#141414',
    theme_color: '#12A4ED',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'developer'],
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png', // Use existing file as fallback
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      // Maskable versions for better PWA support
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
