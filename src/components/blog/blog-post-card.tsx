'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogPostCardProps {
  post: BlogPost;
  priority?: boolean;
  compact?: boolean;
}

const cardVariants = {
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

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  priority = false,
  compact = false,
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      className="group relative h-full cursor-pointer"
    >
      <motion.div
        variants={cardVariants}
        className="relative h-full overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.12)] before:absolute before:inset-0 before:rounded-2xl before:z-[1] before:bg-gradient-to-br before:from-white/[0.04] before:via-transparent before:to-black/[0.03] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_20px_40px_rgba(18,164,237,0.15),0_8px_32px_rgba(0,0,0,0.2)] hover:before:from-primary/[0.06] hover:before:to-primary/[0.02] transition-all duration-500 ease-out"
      >
        {/* Image Container */}
        <div
          className={`relative overflow-hidden ${compact ? 'h-40' : 'h-48 md:h-52'}`}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
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
        <div
          className={`relative flex flex-col flex-grow z-[2] ${compact ? 'p-4' : 'p-6'}`}
        >
          {/* Meta Information */}
          <div className="flex items-center space-x-4 mb-3 text-sm text-white/60">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date} className="font-medium">
                {formatDate(post.date)}
              </time>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`${compact ? 'text-subheading-sm' : 'text-subheading-md'} text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-colors duration-300 line-clamp-2`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className={`${compact ? 'text-body-sm' : 'text-body-base'} font-rubik text-white/80 leading-relaxed mb-6 flex-grow drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] line-clamp-3`}
          >
            {post.excerpt}
          </p>

          {/* Author and Read More */}
          <div className="flex items-center justify-between">
            {/* Author Info */}
            <div className="flex items-center space-x-3">
              <div
                className={`${compact ? 'w-7 h-7' : 'w-8 h-8'} rounded-full bg-gradient-to-br from-primary/30 to-primary/60 border border-white/10 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)]`}
              >
                <span
                  className={`text-white ${compact ? 'text-xs' : 'text-xs'} font-semibold`}
                >
                  {post.author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div>
                <div
                  className={`${compact ? 'text-xs' : 'text-xs'} font-medium text-white/90`}
                >
                  {post.author.name}
                </div>
                {post.author.role && !compact && (
                  <div className="text-xs text-white/60">
                    {post.author.role}
                  </div>
                )}
              </div>
            </div>

            {/* Read More Link */}
            <Link
              href={`/blog/${post.slug}`}
              className={`inline-flex items-center space-x-1 ${compact ? 'text-xs' : 'text-sm'} font-medium text-primary hover:text-primary/80 transition-colors duration-300 group/link cursor-pointer`}
              aria-label={`Read more about ${post.title}`}
            >
              <span>Read more</span>
              <ArrowRight
                className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} transition-transform duration-300 group-hover/link:translate-x-1`}
              />
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
