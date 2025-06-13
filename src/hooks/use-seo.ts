import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

interface UseSEOOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
}

export const useSEO = (options: UseSEOOptions = {}) => {
  const router = useRouter();

  return useMemo(() => {
    const baseUrl = 'https://kdvlab.com';
    const currentPath =
      typeof window !== 'undefined' ? window.location.pathname : '';

    return {
      title: options.title,
      description: options.description,
      canonical: options.canonical || `${baseUrl}${currentPath}`,
      noindex: options.noindex || false,
      openGraph: {
        title: options.title,
        description: options.description,
        url: `${baseUrl}${currentPath}`,
      },
      additionalMetaTags: [
        ...(options.keywords
          ? [
              {
                name: 'keywords',
                content: options.keywords.join(', '),
              },
            ]
          : []),
      ],
    };
  }, [options]);
};
