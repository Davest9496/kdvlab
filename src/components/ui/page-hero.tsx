'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/lib/page-configs';

// Enhanced TypeScript interface with background image support
interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'expanded';

  // New props for custom backgrounds
  backgroundImage?: string;
  backgroundImageAlt?: string;
  overlayOpacity?: number; // 0-100, defaults to 50
  backgroundPosition?: string; // 'center', 'top', 'bottom', etc.
  backgroundSize?: string; // 'cover', 'contain', etc.

  // Breadcrumb display options
  showBreadcrumbs?: boolean; // defaults to true if breadcrumbs provided
  showSubtitle?: boolean; // defaults to false when breadcrumbs are shown
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

// Enhanced Breadcrumb component matching your design
const Breadcrumbs: React.FC<{ breadcrumbs: BreadcrumbItem[] }> = ({
  breadcrumbs,
}) => (
  <nav
    className="flex justify-center items-center space-x-2 mb-6"
    aria-label="Breadcrumb"
  >
    {breadcrumbs.map((breadcrumb, index) => (
      <div key={breadcrumb.href} className="flex items-center">
        {index > 0 && <ChevronRight className="w-5 h-5 mx-3 text-white/50" />}
        <Link
          href={breadcrumb.href}
          className={cn(
            'transition-colors duration-200',
            index === breadcrumbs.length - 1
              ? 'text-white font-medium text-lg' // Active/current page
              : 'text-white/70 hover:text-white text-lg' // Previous pages
          )}
        >
          {breadcrumb.label}
        </Link>
      </div>
    ))}
  </nav>
);

// Main PageHero Component
export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumbs,
  className,
  variant = 'default',
  backgroundImage,
  backgroundImageAlt,
  overlayOpacity = 50,
  backgroundPosition = 'center',
  backgroundSize = 'cover',
  showBreadcrumbs = true,
  showSubtitle = false, // Don't show subtitle by default when breadcrumbs exist
}) => {
  // Variant-based height classes
  const heightClasses = {
    compact: 'min-h-[50vh] py-16 md:py-20',
    default: 'min-h-[60vh] py-20 md:py-24 lg:py-28',
    expanded: 'min-h-[70vh] py-24 md:py-28 lg:py-32',
  };

  // Default background image
  const defaultBackgroundImage =
    '/images/dark-background-abstract-with-light-effect-vector.jpg';
  const currentBackgroundImage = backgroundImage || defaultBackgroundImage;
  const isUsingCustomImage = !!backgroundImage;

  // Determine what to show in the top section
  const shouldShowBreadcrumbs =
    showBreadcrumbs && breadcrumbs && breadcrumbs.length > 0;
  const shouldShowSubtitle = showSubtitle && subtitle && !shouldShowBreadcrumbs;

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
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        {isUsingCustomImage ? (
          // Use Next.js Image for custom images (better for SEO and performance)
          <Image
            src={currentBackgroundImage}
            alt={backgroundImageAlt || `${title} background`}
            fill
            className={cn(
              'object-cover',
              backgroundPosition === 'top' && 'object-top',
              backgroundPosition === 'bottom' && 'object-bottom',
              backgroundPosition === 'left' && 'object-left',
              backgroundPosition === 'right' && 'object-right',
              backgroundSize === 'contain' && 'object-contain'
            )}
            priority
            sizes="100vw"
            quality={85}
          />
        ) : (
          // Use CSS background for default abstract image (smaller file)
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${currentBackgroundImage}')`,
            }}
          />
        )}

        {/* Dynamic overlay opacity */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity / 100 }}
        />

        {/* Enhanced effects only for default background */}
        {!isUsingCustomImage && (
          <>
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
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Breadcrumbs - Replaces subtitle when available */}
          {shouldShowBreadcrumbs && (
            <motion.div variants={itemVariants}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </motion.div>
          )}

          {/* Subtitle Badge - Only shown when explicitly requested and no breadcrumbs */}
          {shouldShowSubtitle && (
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

          {/* Main Title */}
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
