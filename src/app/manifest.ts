import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KDVLab - Modern Web Development',
    short_name: 'KDVLab',
    description: 'Expert web development services by Dave Ejezie',
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
