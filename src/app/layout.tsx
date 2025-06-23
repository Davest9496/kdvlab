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
    default: 'KDVLab - Modern Web Development by Dave Ejezie',
  },
  description:
    'Expert web development services by Dave Ejezie. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies including React, Next.js, and TypeScript.',
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
    title: 'KDVLab - Modern Web Development by Dave Ejezie',
    description:
      'Expert web development services creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLab - Modern Web Development by Dave Ejezie',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDVLab - Modern Web Development by Dave Ejezie',
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
    <html
      lang="en"
      className="dark" // CSS fonts don't need variable classes
      suppressHydrationWarning
    >
      <head>
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
      <body className="min-h-screen bg-background font-body antialiased flex flex-col selection:bg-primary/20">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-gilroy font-extrabold"
        >
          Skip to main content
        </a>

        {/* Global Header */}
        <Navigation/>

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 mt-12 md:mt-16 lg:mt-20">
          {/* Ensure main content is scrollable and has proper padding */}
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
