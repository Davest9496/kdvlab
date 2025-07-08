'use client';

import { motion } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';
import type { BlogCategory } from '@/lib/blog';

interface BlogFiltersProps {
  categories: BlogCategory[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  activeFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
}) => {
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

  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={filterVariants}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6 p-6 rounded-xl bg-card/20 backdrop-blur-xl border border-border/30"
    >
      {/* Category Filters */}
      <div className="w-full md:w-auto">
        {/* Icon and Filter label - always on top on small screens */}
        <div className="flex items-center space-x-2 mb-3 md:mb-0 md:mr-3 md:inline-flex">
          <Filter className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-foreground">Filter:</span>
        </div>

        {/* Filter buttons - horizontal scroll on small screens, wrap on larger */}
        <div className="flex md:flex-wrap gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          <button
            onClick={() => handleFilterClick('all')}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
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
              onClick={() => handleFilterClick(category.slug)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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

      {/* View Mode Toggle - Hidden on small screens where all posts are stacked */}
      <div className="hidden md:flex items-center space-x-2">
        <span className="text-sm font-medium text-foreground">View:</span>
        <div className="flex rounded-lg bg-muted/30 p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-md transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-label="Grid view"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-md transition-all duration-300 ${
              viewMode === 'list'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
