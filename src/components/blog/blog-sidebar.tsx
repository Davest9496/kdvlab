'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Tag, TrendingUp, BookOpen } from 'lucide-react';
import { useState } from 'react';
import type { BlogCategory } from '@/lib/blog';

interface BlogSidebarProps {
  categories: BlogCategory[];
}

const sidebarVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const popularTags = [
    'TypeScript',
    'React',
    'Next.js',
    'Web Development',
    'Performance',
    'SEO',
    'UI/UX',
    'Mobile Development',
  ];

  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="space-y-8"
    >
      {/* Search */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-subheading-md font-gilroy-bold text-foreground flex items-center space-x-2">
          <Search className="w-5 h-5 text-primary" />
          <span>Search</span>
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-card/40 backdrop-blur-xl border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-subheading-md font-gilroy-bold text-foreground flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <span>Categories</span>
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className="flex items-center justify-between p-3 rounded-xl bg-card/20 backdrop-blur-xl border border-border/30 hover:bg-card/40 hover:border-border/50 transition-all duration-300 group"
            >
              <span className="text-body-base text-foreground group-hover:text-primary transition-colors duration-300">
                {category.name}
              </span>
              <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Popular Tags */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-subheading-md font-gilroy-bold text-foreground flex items-center space-x-2">
          <Tag className="w-5 h-5 text-primary" />
          <span>Popular Tags</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-card/30 backdrop-blur-xl border border-border/30 text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-xl">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-subheading-md font-gilroy-bold text-foreground">
              Stay Updated
            </h3>
          </div>
          <p className="text-body-sm text-muted-foreground mb-4">
            Get the latest insights and updates delivered to your inbox.
          </p>
          <button className="w-full px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </motion.div>
    </motion.aside>
  );
};
