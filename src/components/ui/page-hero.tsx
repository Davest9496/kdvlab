'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for comprehensive TypeScript support
interface BreadcrumbItem {
  label: string;
  href: string;
}

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

// Predefined page configurations for consistency
export const pageConfigs = {
  about: {
    title: 'About KDVLAB',
    subtitle: 'Innovation Through Technology',
    description:
      'We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
  services: {
    title: 'Our Services',
    subtitle: 'End-to-End Software Solutions',
    description:
      'From concept to deployment, we offer comprehensive software development services tailored to your business needs.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
    ],
  },
  work: {
    title: 'Our Work',
    subtitle: 'Portfolio of Excellence',
    description:
      "Explore our latest projects and see how we've helped businesses transform their digital presence.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/work' },
    ],
  },
  careers: {
    title: 'Join Our Team',
    subtitle: 'Build the Future with Us',
    description:
      "We're always looking for talented individuals who share our passion for technology and innovation.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Careers', href: '/careers' },
    ],
    ctaText: 'View Open Positions',
    ctaHref: '/careers#positions',
  },
  blog: {
    title: 'Blog',
    subtitle: 'Insights & Expertise',
    description:
      'Stay updated with the latest trends, insights, and best practices in software development and technology.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: "Let's Build Something Amazing",
    description:
      "Ready to start your next project? We'd love to hear about your ideas and discuss how we can help.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaText: 'Start a Project',
    ctaHref: '/contact#project-form',
  },
} as const;

// Animation variants optimized for performance
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

// CTA Button Component
interface CTAButtonProps {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, variant }) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center',
    'px-6 py-3 rounded-xl font-medium',
    'transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'
  );

  const variantClasses = {
    primary: cn(
      'bg-primary text-primary-foreground',
      'hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25',
      'active:scale-95'
    ),
    secondary: cn(
      'bg-white/10 text-white backdrop-blur-sm',
      'border border-white/20',
      'hover:bg-white/15 hover:border-white/30',
      'active:scale-95'
    ),
    outline: cn(
      'border-2 border-primary text-primary',
      'hover:bg-primary hover:text-primary-foreground',
      'active:scale-95'
    ),
  };

  return (
    <motion.div variants={itemVariants}>
      <Link href={href} className={cn(baseClasses, variantClasses[variant])}>
        {text}
        <ChevronRight className="w-4 h-4 ml-2" />
      </Link>
    </motion.div>
  );
};

// Main PageHero Component
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
  // Variant-specific styling
  const variantClasses = {
    default: 'py-16 md:py-24 lg:py-32',
    large: 'py-20 md:py-32 lg:py-40',
    compact: 'py-12 md:py-16 lg:py-20',
  };

  const backgroundClasses = {
    primary: cn(
      // Base gradient
      'bg-gradient-to-b from-background via-background/98 to-background',
      // Radial gradient overlays
      'before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-primary/[0.08] before:via-transparent before:to-transparent',
      'after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] after:from-primary/[0.04] after:via-transparent after:to-transparent'
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
      {/* Enhanced Neo-Tech Background */}
      <div
        className={cn('absolute inset-0', backgroundClasses[backgroundVariant])}
      >
        {/* Geometric patterns for depth */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/[0.02] rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          {/* Back Button */}
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

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex justify-center">
              <Breadcrumb items={breadcrumbs} />
            </div>
          )}

          {/* Main Content */}
          <div className="space-y-4 md:space-y-6">
            {/* Subtitle */}
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

            {/* Title */}
            <motion.div variants={itemVariants}>
              <TitleTag
                className={cn(
                  'text-heading-lg md:text-heading-xl font-heading text-white',
                  'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]',
                  'leading-tight'
                )}
                {...(id && { id: `${id}-title` })}
              >
                {title}
              </TitleTag>
            </motion.div>

            {/* Description */}
            {description && (
              <motion.p
                variants={itemVariants}
                className={cn(
                  'text-body-lg text-white/80 leading-relaxed max-w-2xl mx-auto',
                  'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
                )}
              >
                {description}
              </motion.p>
            )}

            {/* CTA Button */}
            {ctaText && ctaHref && (
              <div className="pt-4">
                <CTAButton text={ctaText} href={ctaHref} variant={ctaVariant} />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

// Usage examples and convenience functions
export const createPageHero = (
  pageKey: keyof typeof pageConfigs,
  overrides?: Partial<PageHeroProps>
) => {
  const config = pageConfigs[pageKey];
  return { ...config, ...overrides };
};

// Export default for easy importing
export default PageHero;
