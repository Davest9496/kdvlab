'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/lib/page-configs';

// Remove pageConfigs from here since it's now in lib/page-configs.ts
export interface PageHeroProps {
  // Core content
  title: string;
  subtitle?: string;
  description?: string;

  // Breadcrumb navigation
  breadcrumbs?: BreadcrumbItem[];
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;

  // Visual customization
  variant?: 'default' | 'large' | 'compact';
  backgroundVariant?: 'primary' | 'secondary' | 'gradient';
  className?: string;

  // SEO and accessibility
  titleTag?: 'h1' | 'h2';
  id?: string;

  // Optional CTA
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'secondary' | 'outline';
}

// Animation variants (keep the same as before)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.6,
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

const breadcrumbVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Breadcrumb Component
interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <motion.nav
      variants={breadcrumbVariants}
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-2 text-sm', className)}
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight
                className="w-4 h-4 text-white/40 mx-2"
                aria-hidden="true"
              />
            )}
            {index === items.length - 1 ? (
              <span className="text-white font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  'text-white/70 hover:text-white',
                  'transition-colors duration-200',
                  'hover:underline underline-offset-2'
                )}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
};

// Main PageHero Component (rest remains the same as your current implementation)
export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  breadcrumbs,
  showBackButton = false,
  backHref = '/',
  backLabel = 'Back',
  variant = 'default',
  backgroundVariant = 'primary',
  className,
  titleTag: TitleTag = 'h1',
  id,
  ctaText,
  ctaHref,
  ctaVariant = 'primary',
}) => {
  // Your existing component implementation...
  const variantClasses = {
    default: 'py-16 md:py-24 lg:py-32',
    large: 'py-20 md:py-32 lg:py-40',
    compact: 'py-12 md:py-16 lg:py-20',
  };

  const backgroundClasses = {
    primary: cn(
      'bg-gradient-to-b from-background via-background/98 to-background',
      'before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-primary/[0.08] before:via-transparent before:to-transparent'
    ),
    secondary: cn(
      'bg-gradient-to-br from-background via-background/95 to-background',
      'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] before:from-blue-500/[0.06] before:via-transparent before:to-transparent'
    ),
    gradient: cn(
      'bg-gradient-to-br from-background via-primary/[0.02] to-background',
      'before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-primary/[0.1] before:via-primary/[0.02] before:to-transparent'
    ),
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        variantClasses[variant],
        className
      )}
      aria-labelledby={id ? `${id}-title` : undefined}
      {...(id && { id })}
    >
      <div
        className={cn('absolute inset-0', backgroundClasses[backgroundVariant])}
      >
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          />
        </div>
      </div>

      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          {showBackButton && (
            <motion.div variants={itemVariants} className="flex justify-center">
              <Link
                href={backHref}
                className={cn(
                  'inline-flex items-center text-white/70 hover:text-white',
                  'transition-colors duration-200 group'
                )}
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                {backLabel}
              </Link>
            </motion.div>
          )}

          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex justify-center">
              <Breadcrumb items={breadcrumbs} />
            </div>
          )}

          <div className="space-y-4 md:space-y-6">
            {subtitle && (
              <motion.div variants={itemVariants}>
                <span
                  className={cn(
                    'inline-block px-4 py-2 rounded-full',
                    'bg-primary/10 border border-primary/20',
                    'text-primary text-sm font-medium',
                    'backdrop-blur-sm'
                  )}
                >
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <TitleTag
                className={cn(
                  'text-4xl md:text-5xl lg:text-6xl font-heading text-white',
                  'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]',
                  'leading-tight font-bold'
                )}
                {...(id && { id: `${id}-title` })}
              >
                {title}
              </TitleTag>
            </motion.div>

            {description && (
              <motion.p
                variants={itemVariants}
                className={cn(
                  'text-lg text-white/80 leading-relaxed max-w-2xl mx-auto',
                  'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
                )}
              >
                {description}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;