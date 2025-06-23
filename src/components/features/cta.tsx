'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  Mail,
  Phone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for comprehensive TypeScript support
interface CTAVariant {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
    icon?: React.ElementType;
  };
  secondaryAction?: {
    text: string;
    href: string;
    icon?: React.ElementType;
  };
  layout: 'split' | 'centered' | 'minimal' | 'illustration';
  illustration?: {
    type: 'geometric' | 'dashboard' | 'abstract';
    position: 'right' | 'left' | 'background';
  };
}

// CTA configurations - easily customizable
const ctaVariants: CTAVariant[] = [
  {
    id: 'main-cta',
    title: 'Ready to Build Something Great?',
    subtitle: 'Transform Your Vision',
    description:
      "Let's discuss how we can help you achieve your business goals with custom software solutions.",
    primaryAction: {
      text: 'Start a Conversation',
      href: '/contact',
      icon: MessageCircle,
    },
    secondaryAction: {
      text: 'Schedule a Call',
      href: '/schedule',
      icon: Calendar,
    },
    layout: 'split',
    illustration: {
      type: 'dashboard',
      position: 'right',
    },
  },
  {
    id: 'centered-cta',
    title: 'Ready to Transform Your Business?',
    subtitle: 'Next-Level Solutions',
    description:
      'Partner with us to create cutting-edge software that drives growth and innovation.',
    primaryAction: {
      text: 'Get Started Today',
      href: '/contact',
      icon: Sparkles,
    },
    layout: 'centered',
  },
  {
    id: 'minimal-cta',
    title: "Let's Build Together",
    subtitle: '',
    description: 'Ready to turn your ideas into reality?',
    primaryAction: {
      text: 'Contact Us',
      href: '/contact',
      icon: ArrowRight,
    },
    layout: 'minimal',
  },
];

// Animation variants optimized for performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const illustrationVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const buttonHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.25, 0, 1],
    },
  },
  tap: { scale: 0.98 },
};

// Dashboard Illustration Component
const DashboardIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
      {/* Main Monitor */}
      <motion.div
        variants={illustrationVariants}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2',
          'w-64 h-48 md:w-80 md:h-60',
          // Neo-tech glassmorphism
          'bg-gradient-to-br from-white/[0.08] to-white/[0.02]',
          'backdrop-blur-xl border border-white/[0.1]',
          'rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]',
          // Inner glow
          'before:absolute before:inset-0 before:rounded-2xl',
          'before:bg-gradient-to-br before:from-primary/[0.1] before:to-transparent',
          'before:opacity-60'
        )}
      >
        {/* Screen content */}
        <div className="p-4 md:p-6 h-full flex flex-col">
          {/* Header bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="w-1 h-1 rounded-full bg-white/40" />
            </div>
          </div>

          {/* Dashboard content */}
          <div className="flex-1 space-y-3">
            {/* Chart area */}
            <div
              className={cn(
                'h-16 md:h-20 rounded-xl',
                'bg-gradient-to-r from-primary/[0.2] to-blue-400/[0.2]',
                'border border-white/[0.1]',
                'relative overflow-hidden'
              )}
            >
              {/* Animated chart bars */}
              <div className="absolute bottom-2 left-2 flex items-end space-x-1">
                {[40, 65, 45, 80, 55, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-primary/60 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-2">
              {[1, 2].map((i) => (
                <motion.div
                  key={i}
                  className={cn(
                    'h-8 md:h-12 rounded-lg',
                    'bg-white/[0.05] border border-white/[0.08]',
                    'flex items-center justify-center'
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-3 h-1 bg-white/30 rounded" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        animate={{
          opacity: 1,
          rotate: -5,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { delay: 0.8, duration: 0.5 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className={cn(
          'absolute top-12 right-12 md:top-16 md:right-20',
          'w-24 h-16 md:w-32 md:h-20',
          'bg-gradient-to-br from-blue-400/[0.15] to-purple-400/[0.15]',
          'backdrop-blur-md border border-white/[0.1]',
          'rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)]',
          'flex items-center justify-center'
        )}
      >
        <div className="w-4 h-4 bg-white/40 rounded" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 8 }}
        animate={{
          opacity: 1,
          rotate: 8,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 2, duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className={cn(
          'absolute bottom-16 right-8 md:bottom-20 md:right-16',
          'w-20 h-14 md:w-28 md:h-18',
          'bg-gradient-to-br from-green-400/[0.15] to-teal-400/[0.15]',
          'backdrop-blur-md border border-white/[0.1]',
          'rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)]',
          'flex items-center justify-center'
        )}
      >
        <div className="space-y-1">
          <div className="w-3 h-1 bg-white/40 rounded" />
          <div className="w-4 h-1 bg-white/40 rounded" />
        </div>
      </motion.div>

      {/* Glow effects */}
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/[0.08] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-400/[0.06] rounded-full blur-2xl" />
    </div>
  );
};

// Primary Button Component
interface PrimaryButtonProps {
  action: CTAVariant['primaryAction'];
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ action, className }) => {
  const Icon = action.icon;

  return (
    <motion.a
      href={action.href}
      variants={buttonHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        'group relative inline-flex items-center justify-center',
        'px-8 py-4 rounded-2xl font-semibold text-white',
        'bg-primary hover:bg-primary/90',
        'shadow-[0_8px_24px_rgba(18,164,237,0.3)]',
        'hover:shadow-[0_12px_32px_rgba(18,164,237,0.4)]',
        'border border-primary/20 hover:border-primary/30',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
        'active:scale-95',
        className
      )}
    >
      {/* Button background glow */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl',
          'bg-gradient-to-r from-primary via-primary to-primary',
          'opacity-0 group-hover:opacity-20',
          'transition-opacity duration-300',
          'blur-sm'
        )}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        <span>{action.text}</span>
        {Icon && (
          <Icon
            className={cn(
              'w-5 h-5 transition-transform duration-300',
              'group-hover:translate-x-1'
            )}
          />
        )}
      </span>
    </motion.a>
  );
};

// Secondary Button Component
interface SecondaryButtonProps {
  action: CTAVariant['secondaryAction'];
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  action,
  className,
}) => {
  if (!action) return null;

  const Icon = action.icon;

  return (
    <motion.a
      href={action.href}
      variants={buttonHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        'group relative inline-flex items-center justify-center',
        'px-8 py-4 rounded-2xl font-semibold text-white',
        'bg-white/[0.05] hover:bg-white/[0.1]',
        'backdrop-blur-sm border border-white/[0.1] hover:border-white/[0.2]',
        'shadow-[0_4px_16px_rgba(0,0,0,0.1)]',
        'hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2',
        className
      )}
    >
      <span className="relative z-10 flex items-center space-x-2">
        <span>{action.text}</span>
        {Icon && (
          <Icon
            className={cn(
              'w-5 h-5 transition-transform duration-300',
              'group-hover:translate-x-1'
            )}
          />
        )}
      </span>
    </motion.a>
  );
};

// Split Layout CTA
interface SplitCTAProps {
  variant: CTAVariant;
}

const SplitCTA: React.FC<SplitCTAProps> = ({ variant }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Content Side */}
      <motion.div variants={contentVariants} className="space-y-8">
        {/* Subtitle */}
        {variant.subtitle && (
          <div
            className={cn(
              'inline-flex items-center space-x-2 px-4 py-2 rounded-full',
              'bg-primary/[0.1] border border-primary/[0.2]',
              'text-primary text-sm font-medium'
            )}
          >
            <Sparkles className="w-4 h-4" />
            <span>{variant.subtitle}</span>
          </div>
        )}

        {/* Main Title */}
        <h2
          className={cn(
            'text-heading-lg md:text-heading-lg font-heading text-white',
            'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]',
            'leading-tight'
          )}
        >
          {variant.title}
        </h2>

        {/* Description */}
        <p
          className={cn(
            'text-body-lg text-white/80 leading-relaxed max-w-lg',
            'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
          )}
        >
          {variant.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <PrimaryButton action={variant.primaryAction} />
          <SecondaryButton action={variant.secondaryAction} />
        </div>
      </motion.div>

      {/* Illustration Side */}
      <motion.div
        variants={illustrationVariants}
        className="relative lg:h-[400px]"
      >
        {variant.illustration?.type === 'dashboard' && (
          <DashboardIllustration />
        )}
      </motion.div>
    </div>
  );
};

// Centered Layout CTA
const CenteredCTA: React.FC<SplitCTAProps> = ({ variant }) => {
  return (
    <div className="text-center space-y-8 max-w-4xl mx-auto">
      {/* Subtitle */}
      {variant.subtitle && (
        <motion.div
          variants={contentVariants}
          className={cn(
            'inline-flex items-center space-x-2 px-6 py-3 rounded-full',
            'bg-primary/[0.1] border border-primary/[0.2]',
            'text-primary font-medium'
          )}
        >
          <Zap className="w-5 h-5" />
          <span>{variant.subtitle}</span>
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        variants={contentVariants}
        className={cn(
          'text-heading-lg md:text-heading-xl font-heading text-white',
          'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'
        )}
      >
        {variant.title}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={contentVariants}
        className={cn(
          'text-body-lg text-white/80 leading-relaxed max-w-2xl mx-auto',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
        )}
      >
        {variant.description}
      </motion.p>

      {/* Action Button */}
      <motion.div variants={contentVariants}>
        <PrimaryButton
          action={variant.primaryAction}
          className="text-lg px-12 py-5"
        />
      </motion.div>
    </div>
  );
};

// Minimal Layout CTA
const MinimalCTA: React.FC<SplitCTAProps> = ({ variant }) => {
  return (
    <div className="text-center space-y-6 max-w-2xl mx-auto">
      <motion.h2
        variants={contentVariants}
        className={cn(
          'text-heading-md md:text-heading-lg font-heading text-white',
          'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'
        )}
      >
        {variant.title}
      </motion.h2>

      <motion.p
        variants={contentVariants}
        className={cn(
          'text-body-base text-white/75',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
        )}
      >
        {variant.description}
      </motion.p>

      <motion.div variants={contentVariants}>
        <PrimaryButton action={variant.primaryAction} />
      </motion.div>
    </div>
  );
};

// Main CTA Section Component
interface CTASectionProps {
  variant?: 'main-cta' | 'centered-cta' | 'minimal-cta';
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  variant = 'main-cta',
  className,
}) => {
  const selectedVariant =
    ctaVariants.find((v) => v.id === variant) || ctaVariants[0];

  const renderLayout = () => {
    switch (selectedVariant.layout) {
      case 'split':
        return <SplitCTA variant={selectedVariant} />;
      case 'centered':
        return <CenteredCTA variant={selectedVariant} />;
      case 'minimal':
        return <MinimalCTA variant={selectedVariant} />;
      default:
        return <SplitCTA variant={selectedVariant} />;
    }
  };

  return (
    <section
      className={cn(
        'py-16 md:py-24 lg:py-32 relative overflow-hidden',
        className
      )}
      aria-label="Call to Action"
    >
      {/* Enhanced Neo-Tech Background */}
      <div className="absolute inset-0">
        {/* Base gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

        {/* Radial overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.08] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/[0.04] via-transparent to-transparent" />

        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/[0.02] rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="container relative">
        {/* Glassmorphism Container */}
        <div
          className={cn(
            'relative p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden',
            // Enhanced glassmorphism effect
            'bg-white/[0.02] backdrop-blur-2xl',
            'border border-white/[0.08]',
            // Multi-layered shadows
            'shadow-[0_20px_40px_rgba(0,0,0,0.15)]',
            // Gradient overlays
            'before:absolute before:inset-0 before:rounded-3xl',
            'before:bg-gradient-to-br before:from-white/[0.05] before:via-transparent before:to-black/[0.05]',
            'before:opacity-60',
            // Inner glow
            'after:absolute after:inset-0 after:rounded-3xl',
            'after:bg-gradient-to-r after:from-primary/[0.02] after:via-transparent after:to-primary/[0.02]'
          )}
        >
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="relative z-10"
          >
            {renderLayout()}
          </motion.div>

          {/* Corner highlights */}
          <div
            className={cn(
              'absolute top-0 left-0 w-32 h-32',
              'bg-gradient-to-br from-white/[0.08] to-transparent',
              'rounded-3xl'
            )}
          />
          <div
            className={cn(
              'absolute bottom-0 right-0 w-24 h-24',
              'bg-gradient-to-tl from-primary/[0.06] to-transparent',
              'rounded-3xl'
            )}
          />
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KDVLAB',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              url: selectedVariant.primaryAction.href,
            },
            offers: {
              '@type': 'Offer',
              description: selectedVariant.description,
            },
          }),
        }}
      />
    </section>
  );
};

export default CTASection;
