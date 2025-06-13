import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'kdvlab',
    short_name: 'kdvlab',
    description: 'Innovative solutions for modern web development',
    start_url: '/',
    display: 'standalone',
    background_color: '#141414',
    theme_color: '#12A4ED',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
