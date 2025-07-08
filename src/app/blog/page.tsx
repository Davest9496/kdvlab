import type { Metadata } from 'next';
import { getSortedPostsData, getAllCategories } from '@/lib/blog';
import BlogPageClient from './blog-client';

export const metadata: Metadata = {
  title: 'Blog & Insights - Latest Technology Trends',
  description:
    'Discover the latest insights, industry news, and thought leadership content about software development, web technologies, and digital innovation from the KDVLAB team.',
  keywords: [
    'Web Development Blog',
    'Software Development Insights',
    'TypeScript Tutorials',
    'React Best Practices',
    'Next.js Guide',
    'Tech Industry News',
    'KDVLAB Blog',
    'Developer Resources',
    'Programming Tips',
    'Modern Web Technologies',
    'Dave Ejezie Blog',
    'Technology Insights',
  ],
  openGraph: {
    title: 'Blog & Insights - Latest Technology Trends | KDVLAB',
    description:
      'Stay updated with the latest trends in software development, project showcases, and industry insights from our expert team.',
    type: 'website',
    images: [
      {
        url: '/images/blog-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLAB Blog - Technology insights and industry trends',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Insights - Latest Technology Trends | KDVLAB',
    description:
      'Stay updated with the latest trends in software development, project showcases, and industry insights.',
    images: ['/images/blog-hero.jpg'],
  },
  alternates: {
    canonical: 'https://kdvlab.com/blog',
  },
};

export default function BlogPage() {
  const posts = getSortedPostsData();
  const categories = getAllCategories();

  return <BlogPageClient initialPosts={posts} categories={categories} />;
}
