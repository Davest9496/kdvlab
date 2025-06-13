import type { Metadata, Viewport } from 'next';
import { Inter, Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

// Font optimization
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kdvlab.com'),
  title: {
    template: '%s | kdvlab',
    default: 'kdvlab - Innovative Web Solutions for businesses',
  },
  description:
    'Fast, modern, and SEO-optimized website built with Next.js, TypeScript, and Tailwind CSS.',
  keywords: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'SEO'],
  authors: [{ name: 'dave ejezie' }],
  creator: 'dave ejezie',
  publisher: 'kdvlab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kdvlab.com',
    siteName: 'kdvlab',
    title: 'kdvlab',
    description:
      'Fast, modern, and SEO-optimized website built with Next.js, TypeScript, and Tailwind CSS.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'kdvlab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kdvlab',
    description:
      'Fast, modern, and SEO-optimized website built with Next.js, TypeScript, and Tailwind CSS.',
    images: ['/og-image.jpg'],
    creator: '@yourhandle',
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
};

export const viewport: Viewport = {
  themeColor: '#12A4ED',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${gilroy.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
