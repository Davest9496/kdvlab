'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

// Types for comprehensive TypeScript support
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  readTime: number;
  category: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  featured?: boolean;
  tags?: string[];
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// Sample blog posts data - replace with CMS data later
const blogPosts: BlogPost[] = [
  {
    id: 'blog-post-1',
    slug: 'custom-software-development-guide',
    title: 'Do you need a Custom Software Development Service?',
    excerpt:
      'Discover when custom software development is the right choice for your business and how it can drive innovation and efficiency.',
    image: '/images/Custom-software-development.jpg',
    imageAlt:
      'Custom software development workspace with multiple screens showing code and cloud services',
    publishedAt: '2025-05-22',
    readTime: 8,
    category: 'Development',
    author: {
      name: 'KDVLAB Team',
      role: 'Development Team',
    },
    featured: true,
    tags: ['Custom Development', 'Software Strategy', 'Business Solutions'],
  },
  {
    id: 'blog-post-2',
    slug: 'completed-website-development-project',
    title: 'Check out our completed website development project.',
    excerpt:
      'I have been passionate about website development for years and I cannot emphasize its importance enough. The endless possibilities.',
    image: '/images/kindpng_1272110.png',
    imageAlt:
      'Completed website development project showcase with design elements and mobile responsiveness',
    publishedAt: '2025-05-22',
    readTime: 6,
    category: 'Case Study',
    author: {
      name: 'KDVLAB Team',
      role: 'Design Team',
    },
    tags: ['Web Development', 'Case Study', 'React', 'Next.js'],
  },
  {
    id: 'blog-post-3',
    slug: 'mobile-app-development-enrollment',
    title: 'Will you be enrolling for our mobile app development service?',
    excerpt:
      'Explore our comprehensive mobile app development services and learn how we can help bring your mobile app ideas to life.',
    image: '/images/mobile-app-development.jpg',
    imageAlt:
      'Mobile app development process showing various app icons and smartphone interfaces',
    publishedAt: '2025-05-22',
    readTime: 5,
    category: 'Mobile',
    author: {
      name: 'KDVLAB Team',
      role: 'Mobile Team',
    },
    tags: ['Mobile Development', 'React Native', 'iOS', 'Android'],
  },
];

// Animation variants optimized for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Utility function to format dates
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Blog Card Component
interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      className="group relative h-full cursor-pointer"
    >
      <motion.div
        variants={cardHoverVariants}
        className="relative h-full overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.12)] before:absolute before:inset-0 before:rounded-2xl before:z-[1] before:bg-gradient-to-br before:from-white/[0.04] before:via-transparent before:to-black/[0.03] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_20px_40px_rgba(18,164,237,0.15),0_8px_32px_rgba(0,0,0,0.2)] hover:before:from-primary/[0.06] hover:before:to-primary/[0.02] transition-all duration-500 ease-out"
      >
        {/* Image Container with Optimization */}
        <div className="relative h-48 md:h-52 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
            loading={index < 2 ? 'eager' : 'lazy'}
          />

          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white backdrop-blur-sm border border-primary/20 shadow-[0_4px_12px_rgba(18,164,237,0.4)]">
              {post.category}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/90 text-black backdrop-blur-sm border border-yellow-400/30 shadow-[0_4px_12px_rgba(234,179,8,0.4)]">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="relative p-6 flex flex-col flex-grow z-[2]">
          {/* Meta Information */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-white/60">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt} className="font-medium">
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Title - FIXED to match services section pattern */}
          <h3 className="text-subheading-md text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt - FIXED to match services section pattern */}
          <p className="text-body-base font-rubik text-white/80 leading-relaxed mb-6 flex-grow drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author and Read More */}
          <div className="flex items-center justify-between">
            {/* Author Info */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/60 border border-white/10 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                <span className="text-white text-xs font-semibold">
                  {post.author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div>
                <div className="text-xs font-medium text-white/90">
                  {post.author.name}
                </div>
                {post.author.role && (
                  <div className="text-xs text-white/60">
                    {post.author.role}
                  </div>
                )}
              </div>
            </div>

            {/* Read More Link */}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 group/link cursor-pointer"
              aria-label={`Read more about ${post.title}`}
            >
              <span>Read more</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Enhanced border glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Corner highlights */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/[0.06] to-transparent rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/[0.04] to-transparent rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
      </motion.div>
    </motion.article>
  );
};

// Main Blog & News Section Component
export const BlogNewsSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-label="Latest Blog Posts and News"
    >
      {/* Enhanced Neo-Tech Background */}
      <div className="absolute inset-0">
        {/* Radial gradient overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_var(--tw-gradient-stops))] from-primary/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />

        {/* Noise texture for enhanced glass effect */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/[0.025] rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/[0.02] rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12 md:space-y-16"
        >
          {/* Section Header - MATCHES SERVICES SECTION EXACTLY */}
          <div className="text-center space-y-6 max-w-4xl mx-auto relative">
            <div className="relative z-10 py-8">
              {/* Breadcrumb */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-2 mb-6"
              >
                <span className="text-sm font-medium text-primary tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]">
                  BLOG & NEWS
                </span>
                <ChevronRight className="w-4 h-4 text-primary/60" />
              </motion.div>

              {/* Main Heading - FIXED to match services section */}
              <motion.h2
                variants={itemVariants}
                className="text-heading-lg text-white capitalize mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] leading-tight"
              >
                Our Latest News & Blog Get <br className="hidden sm:block" />
                Every Updates
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-body-lg font-rubik text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              >
                Stay updated with the latest trends in software development, our
                project showcases, and industry insights.
              </motion.p>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-white font-medium hover:bg-white/[0.08] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(18,164,237,0.2)] transition-all duration-400 ease-out group cursor-pointer"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'KDVLAB Blog',
            description:
              'Latest news and insights about software development, web applications, and technology trends',
            url: 'https://kdvlab.com/blog',
            blogPost: blogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              author: {
                '@type': 'Organization',
                name: post.author.name,
              },
              publisher: {
                '@type': 'Organization',
                name: 'KDVLAB',
              },
              datePublished: post.publishedAt,
              url: `/blog/${post.slug}`,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `/blog/${post.slug}`,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default BlogNewsSection;
