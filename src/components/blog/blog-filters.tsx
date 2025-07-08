'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import type { BlogCategory } from '@/lib/blog';

interface BlogFiltersProps {
  categories: BlogCategory[];
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({ categories }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={filterVariants}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6 p-6 rounded-xl bg-card/20 backdrop-blur-xl border border-border/30"
    >
      {/* Category Filters */}
      <div className="flex items-center space-x-2">
        <Filter className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-foreground mr-3">
          Filter:
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(18,164,237,0.4)]'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.slug)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.slug
                  ? 'bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(18,164,237,0.4)]'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category.name}
              <span className="ml-1 text-xs opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-foreground">View:</span>
        <div className="flex rounded-lg bg-muted/30 p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-all duration-300 ${
              viewMode === 'list'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
