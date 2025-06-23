'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/lib/page-configs';

// Comprehensive TypeScript interface for all hero configurations
interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'expanded';
}

// Animation variants optimized for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const itemVariants = {
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

const textFocusVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    filter: 'blur(2px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Breadcrumb Component with SEO optimization
interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-white/40" />
            )}
            {index === items.length - 1 ? (
              <span className="text-white/60 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  'text-white/70 hover:text-white transition-colors duration-200',
                  'focus:outline-none focus:text-white'
                )}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>

      {/* Structured Data for Breadcrumbs - SEO Enhancement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.label,
              item: `${process.env.NEXT_PUBLIC_APP_URL || 'https://kdvlab.com'}${item.href}`,
            })),
          }),
        }}
      />
    </nav>
  );
};

// Back Button Component
interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, label }) => {
  return (
    <motion.div variants={itemVariants} className="mb-6">
      <Link
        href={href}
        className={cn(
          'inline-flex items-center space-x-2 text-white/70 hover:text-white',
          'transition-all duration-200 group',
          'focus:outline-none focus:text-white'
        )}
      >
        <ChevronLeft
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            'group-hover:-translate-x-1'
          )}
        />
        <span className="text-sm font-medium">{label}</span>
      </Link>
    </motion.div>
  );
};

// Main PageHero Component
export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumbs,
  showBackButton = false,
  backHref = '/',
  backLabel = 'Back',
  className,
  variant = 'default',
}) => {
  // Variant-based height classes
  const heightClasses = {
    compact: 'min-h-[50vh] py-16 md:py-20',
    default: 'min-h-[60vh] py-20 md:py-24 lg:py-28',
    expanded: 'min-h-[70vh] py-24 md:py-28 lg:py-32',
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden flex items-center',
        heightClasses[variant],
        className
      )}
      role="banner"
      aria-label={`${title} page header`}
    >
      {/* Enhanced Neo-Tech Background with Performance Optimization */}
      <div className="absolute inset-0">
        {/* Optimized background image with Next.js Image would go here */}
        {/* For now, using the provided background path */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/dark-background-abstract-with-light-effect-vector.jpg')",
          }}
        />

        {/* Enhanced gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Radial gradient overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.08] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/[0.04] via-transparent to-transparent" />

        {/* Subtle noise texture for enhanced glass effect */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />

        {/* Animated gradient orbs for movement */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400/[0.015] rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Back Button */}
          {showBackButton && (
            <div className="text-left mb-6">
              <BackButton href={backHref} label={backLabel} />
            </div>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div variants={itemVariants} className="text-left">
              <Breadcrumb items={breadcrumbs} />
            </motion.div>
          )}

          {/* Main Title - Now using subtitle styling */}
          {subtitle && (
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className={cn(
                  'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium',
                  'bg-white/[0.08] backdrop-blur-sm border border-white/[0.12]',
                  'text-white/90 shadow-lg',
                  'hover:bg-white/[0.12] transition-colors duration-300'
                )}
              >
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* Subtitle - Now using title styling with enhanced typography */}
          <motion.h1
            variants={textFocusVariants}
            className={cn(
              'text-heading-xl md:text-hero-lg font-heading text-white',
              'drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]',
              'tracking-tight leading-tight'
            )}
          >
            {title}
          </motion.h1>
        </motion.div>
      </div>

      {/* Enhanced Border Glow Effect */}
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 h-px',
          'bg-gradient-to-r from-transparent via-primary/30 to-transparent'
        )}
      />
    </section>
  );
};

export default PageHero;
