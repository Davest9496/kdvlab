import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/layout/footer';
import './globals.css';
import { Navigation } from '@/components/layout/navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://kdvlab.com'),
  title: {
    template: '%s | KDVLab',
    default: 'KDVLab - Modern Web Development for Businesses',
  },
  description:
    'Expert web development services for Businesses. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies including React, Next.js, and TypeScript.',
  keywords: [
    'Web Development',
    'TypeScript',
    'React',
    'Next.js',
    'Dave Ejezie',
    'KDVLab',
    'Frontend Development',
    'Full Stack Development',
    'Performance Optimization',
    'SEO',
    'Modern Web Design',
  ],
  authors: [{ name: 'Dave Ejezie', url: 'https://kdvlab.com' }],
  creator: 'Dave Ejezie',
  publisher: 'KDVLab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kdvlab.com',
    siteName: 'KDVLab',
    title: 'KDVLab - Modern Web Development for Businesses',
    description:
      'Expert web development services creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLab - Modern Web Development for Businesses',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDVLab - Modern Web Development for Businesses',
    description:
      'Expert web development services creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
    images: ['/og-image.jpg'],
    creator: '@kdvlab',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      // Prioritize the most visible sizes first
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      {
        url: '/favicon/favicon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: 'https://kdvlab.com',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#12A4ED' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* CRITICAL: Preload the 32x32 favicon for better visibility and Core Web Vitals */}
        <link
          rel="preload"
          href="/favicon/favicon-32x32.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />

        {/* Preload 16x16 as backup */}
        <link
          rel="preload"
          href="/favicon/favicon-16x16.png"
          as="image"
          type="image/png"
        />

        {/* Font preloading for Core Web Vitals optimization */}
        <link
          rel="preload"
          href="/fonts/Gilroy-ExtraBold.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Rubik-Variable.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />

        {/* Preconnect to Vercel Analytics for performance */}
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />

        {/* Enhanced structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dave Ejezie',
              alternateName: 'KDVLab',
              url: 'https://kdvlab.com',
              jobTitle: 'Web Developer',
              knowsAbout: [
                'Web Development',
                'TypeScript',
                'React',
                'Next.js',
                'Performance Optimization',
              ],
              description:
                'Expert web developer specializing in modern technologies including React, Next.js, and TypeScript.',
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-body antialiased selection:bg-primary/20">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="font-gilroy sr-only z-50 rounded-md bg-primary px-4 py-2 font-extrabold text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>

        {/* Global Header */}
        <Navigation />

        {/* Main Content Area */}
        <main id="main-content" className="mt-12 flex-1 md:mt-16 lg:mt-20">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />

        {/* Enhanced font loading performance tracking */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Track font loading performance
                if ('fonts' in document) {
                  const fontLoadStart = performance.now();
                  
                  document.fonts.ready.then(() => {
                    const fontLoadTime = performance.now() - fontLoadStart;
                    console.log('Custom fonts loaded in', Math.round(fontLoadTime), 'ms');
                    
                    // Send to Vercel Analytics if available
                    if (typeof va !== 'undefined') {
                      va('track', 'Font Load Time', {
                        duration: Math.round(fontLoadTime),
                        fonts: 'Gilroy + Rubik (CSS-based)'
                      });
                    }
                  });
                }
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
