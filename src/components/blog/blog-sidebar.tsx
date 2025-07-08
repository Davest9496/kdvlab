'use client';

import { motion } from 'framer-motion';
import { Search, Tag, TrendingUp, BookOpen } from 'lucide-react';
import type { BlogCategory } from '@/lib/blog';

interface BlogSidebarProps {
  categories: BlogCategory[];
  popularTags: string[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onCategoryFilter: (category: string) => void;
  onTagFilter: (tag: string) => void;
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

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  categories,
  popularTags,
  searchTerm,
  onSearchChange,
  onCategoryFilter,
  onTagFilter,
}) => {
  const handleCategoryClick = (categorySlug: string) => {
    onCategoryFilter(categorySlug);
  };

  const handleTagClick = (tag: string) => {
    onTagFilter(tag);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const clearSearch = () => {
    onSearchChange('');
  };

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
            onChange={handleSearchChange}
            className="w-full px-4 py-3 pr-10 rounded-xl bg-card/40 backdrop-blur-xl border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
          />
          {searchTerm ? (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Clear search"
            >
              ×
            </button>
          ) : (
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          )}
        </div>
        {searchTerm && (
          <p className="text-xs text-muted-foreground">
            Searching for: "{searchTerm}"
          </p>
        )}
      </motion.div>

      {/* Categories */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-subheading-md font-gilroy-bold text-foreground flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <span>Categories</span>
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-card/20 backdrop-blur-xl border border-border/30 hover:bg-card/40 hover:border-border/50 transition-all duration-300 group text-left"
            >
              <span className="text-body-base text-foreground group-hover:text-primary transition-colors duration-300">
                {category.name}
              </span>
              <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
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
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-card/30 backdrop-blur-xl border border-border/30 text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
            >
              {tag}
            </button>
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
          <button
            className="w-full px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
            onClick={() => {
              // TODO: Implement newsletter signup
              console.log('Newsletter signup clicked');
            }}
          >
            Subscribe
          </button>
        </div>
      </motion.div>
    </motion.aside>
  );
};
