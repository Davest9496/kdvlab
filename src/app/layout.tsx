import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { heading, body } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kdvlab.com'),
  title: {
    template: '%s | KDVLab',
    default: 'KDVLab - Modern Web Development by Dave Ejezie',
  },
  description: 'Expert web development services by Dave Ejezie. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
  keywords: ['Web Development', 'TypeScript', 'React', 'Next.js', 'Dave Ejezie', 'KDVLab'],
  authors: [{ name: 'Dave Ejezie', url: 'https://kdvlab.com' }],
  creator: 'Dave Ejezie',
  publisher: 'KDVLab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kdvlab.com',
    siteName: 'KDVLab',
    title: 'KDVLab - Modern Web Development by Dave Ejezie',
    description: 'Expert web development services creating lightning-fast, SEO-optimized websites.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLab - Modern Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDVLab - Modern Web Development by Dave Ejezie',
    description: 'Expert web development services creating lightning-fast, SEO-optimized websites.',
    images: ['/og-image.jpg'],
    creator: '@kdvlab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#12A4ED',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-background font-body antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
