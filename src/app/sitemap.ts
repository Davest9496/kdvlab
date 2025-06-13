import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kdvlab.com';

  // Add your static routes
  const staticRoutes = ['', '/about', '/services', '/contact', '/blog', '/careers'];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // TODO: Add dynamic routes from your CMS/database
  // const dynamicRoutes = await fetchDynamicRoutes()

  return [...staticSitemap];
}
