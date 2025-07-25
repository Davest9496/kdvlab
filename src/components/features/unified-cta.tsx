'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  Sparkles,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CalendlyTrigger } from '@/components/ui/calendly-buttons';
import { openCalendly, UTM_PRESETS } from '@/lib/calendly';

// Context-aware CTA configurations (SIMPLIFIED - no more complex Calendly integration)
export interface CTAContext {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
    icon?: React.ElementType;
    type?: 'link' | 'calendly';
  };
  secondaryAction?: {
    text: string;
    href: string;
    icon?: React.ElementType;
    type?: 'link' | 'calendly';
  };
  layout?: 'split' | 'centered' | 'minimal';
  showIllustration?: boolean;
}

// Get Calendly URL with fallback
const getCalendlyUrl = () => {
  return (
    process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/kdvlab/30min'
  );
};

// Updated pre-configured contexts with SIMPLE Calendly integration
const ctaContexts: Record<string, CTAContext> = {
  // Home page
  home: {
    id: 'home',
    title: 'Ready to Build Something Great?',
    subtitle: 'Transform Your Vision',
    description:
      "Let's discuss how we can help you achieve your business goals with custom software solutions that drive real results.",
    primaryAction: {
      text: 'Start a Conversation',
      href: '/contact',
      icon: MessageCircle,
      type: 'link',
    },
    secondaryAction: {
      text: 'Schedule a Call',
      href: getCalendlyUrl(),
      icon: Calendar,
      type: 'calendly',
    },
    layout: 'split',
    showIllustration: true,
  },

  // About page
  about: {
    id: 'about',
    title: 'Ready to Work Together?',
    subtitle: 'Join Our Success Stories',
    description:
      "Now that you know our story, let's write the next chapter together. Partner with KDVLAB for innovative solutions that drive growth.",
    primaryAction: {
      text: 'Start Your Project',
      href: '/contact',
      icon: Sparkles,
      type: 'link',
    },
    secondaryAction: {
      text: 'Schedule Consultation',
      href: getCalendlyUrl(),
      icon: Calendar,
      type: 'calendly',
    },
    layout: 'centered',
    showIllustration: false,
  },

  // Services page
  services: {
    id: 'services',
    title: 'Ready to Start Your Project?',
    subtitle: 'Expert Development Services',
    description:
      "Choose from our comprehensive range of development services. Let's discuss which solution best fits your business needs.",
    primaryAction: {
      text: 'Get Free Consultation',
      href: getCalendlyUrl(),
      icon: Calendar,
      type: 'calendly',
    },
    secondaryAction: {
      text: 'Send Message',
      href: '/contact',
      icon: MessageCircle,
      type: 'link',
    },
    layout: 'split',
    showIllustration: true,
  },

  // Contact page
  contact: {
    id: 'contact',
    title: 'Ready to Get Started?',
    subtitle: 'Quick Response Guaranteed',
    description:
      "We'll respond to your inquiry within 24 hours with a detailed plan and next steps for your project.",
    primaryAction: {
      text: 'Send Message',
      href: '#contact-form',
      icon: MessageCircle,
      type: 'link',
    },
    secondaryAction: {
      text: 'Book Call Instead',
      href: getCalendlyUrl(),
      icon: Calendar,
      type: 'calendly',
    },
    layout: 'centered',
    showIllustration: false,
  },

  // Default fallback
  default: {
    id: 'default',
    title: 'Ready to Build Something Amazing?',
    subtitle: "Let's Create Together",
    description:
      'Partner with us to bring your ideas to life with cutting-edge technology and expert development.',
    primaryAction: {
      text: 'Get Started',
      href: '/contact',
      icon: Sparkles,
      type: 'link',
    },
    secondaryAction: {
      text: 'Schedule Call',
      href: getCalendlyUrl(),
      icon: Calendar,
      type: 'calendly',
    },
    layout: 'split',
    showIllustration: true,
  },
};

// Animation variants (keeping the same animations)
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

// SIMPLIFIED Button Components - No more complex Calendly widget logic
interface ActionButtonProps {
  action: CTAContext['primaryAction'] | CTAContext['secondaryAction'];
  variant: 'primary' | 'secondary';
  className?: string;
  context: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  action,
  variant,
  className,
  context,
}) => {
  if (!action) return null;

  const Icon = action.icon;
  const isCalendly = action.type === 'calendly';

  const buttonClasses = cn(
    'group relative inline-flex items-center justify-center',
    'rounded-2xl px-8 py-4 font-semibold text-white',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'active:scale-95',
    variant === 'primary'
      ? [
          'bg-primary hover:bg-primary/90',
          'shadow-[0_8px_24px_rgba(18,164,237,0.3)]',
          'hover:shadow-[0_12px_32px_rgba(18,164,237,0.4)]',
          'border border-primary/20 hover:border-primary/30',
          'focus:ring-primary/50',
        ]
      : [
          'bg-white/[0.05] hover:bg-white/[0.1]',
          'border border-white/[0.1] backdrop-blur-sm hover:border-white/[0.2]',
          'shadow-[0_4px_16px_rgba(0,0,0,0.1)]',
          'hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]',
          'focus:ring-white/20',
        ],
    className
  );

  const ButtonContent = () => (
    <>
      {variant === 'primary' && (
        <div
          className={cn(
            'absolute inset-0 rounded-2xl',
            'bg-gradient-to-r from-primary via-primary to-primary',
            'opacity-0 group-hover:opacity-20',
            'transition-opacity duration-300',
            'blur-sm'
          )}
        />
      )}

      <span className="relative z-10 flex items-center space-x-2">
        <span>{action.text}</span>
        {Icon && (
          <Icon
            className={cn(
              'h-5 w-5 transition-transform duration-300',
              'group-hover:translate-x-1'
            )}
          />
        )}
      </span>
    </>
  );

  // SIMPLE approach - just use appropriate click handler
  const handleClick = () => {
    if (isCalendly) {
      // Use the simple openCalendly function
      openCalendly({
        utm: UTM_PRESETS.cta,
      });
    } else {
      // Regular navigation
      if (action.href.startsWith('#')) {
        // Scroll to element
        const element = document.querySelector(action.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to URL
        window.location.href = action.href;
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      variants={buttonHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={buttonClasses}
      aria-label={action.text}
    >
      <ButtonContent />
    </motion.button>
  );
};

// Dashboard Illustration Component (unchanged)
const DashboardIllustration: React.FC = () => {
  return (
    <div className="relative h-full min-h-[300px] w-full md:min-h-[400px]">
      {/* Main Monitor */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2',
          'h-48 w-64 md:h-60 md:w-80',
          'bg-gradient-to-br from-white/[0.08] to-white/[0.02]',
          'border border-white/[0.1] backdrop-blur-xl',
          'rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]',
          'before:absolute before:inset-0 before:rounded-2xl',
          'before:bg-gradient-to-br before:from-primary/[0.1] before:to-transparent',
          'before:opacity-60'
        )}
      >
        {/* Screen content */}
        <div className="flex h-full flex-col p-4 md:p-6">
          {/* Header bar */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
              <div className="h-3 w-3 rounded-full bg-green-400/60" />
            </div>
            <div className="flex space-x-1">
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <div className="h-1 w-1 rounded-full bg-white/40" />
            </div>
          </div>

          {/* Dashboard content */}
          <div className="flex-1 space-y-3">
            {/* Chart area */}
            <div
              className={cn(
                'h-16 rounded-xl md:h-20',
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
                    className="w-2 rounded-t bg-primary/60"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-2">
              {[1, 2].map(i => (
                <motion.div
                  key={i}
                  className={cn(
                    'h-8 rounded-lg md:h-12',
                    'border border-white/[0.08] bg-white/[0.05]',
                    'flex items-center justify-center'
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="h-1 w-3 rounded bg-white/30" />
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
          'absolute right-12 top-12 md:right-20 md:top-16',
          'h-16 w-24 md:h-20 md:w-32',
          'bg-gradient-to-br from-blue-400/[0.15] to-purple-400/[0.15]',
          'border border-white/[0.1] backdrop-blur-md',
          'rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)]',
          'flex items-center justify-center'
        )}
      >
        <div className="h-4 w-4 rounded bg-white/40" />
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
          'h-14 w-20 md:h-18 md:w-28',
          'bg-gradient-to-br from-green-400/[0.15] to-teal-400/[0.15]',
          'border border-white/[0.1] backdrop-blur-md',
          'rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)]',
          'flex items-center justify-center'
        )}
      >
        <div className="space-y-1">
          <div className="h-1 w-3 rounded bg-white/40" />
          <div className="h-1 w-4 rounded bg-white/40" />
        </div>
      </motion.div>

      {/* Glow effects */}
      <div className="absolute right-1/4 top-1/2 h-32 w-32 rounded-full bg-primary/[0.08] blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 h-24 w-24 rounded-full bg-blue-400/[0.06] blur-2xl" />
    </div>
  );
};

// Layout Components (updated to pass context)
interface LayoutProps {
  context: CTAContext;
  contextName: string;
}

const SplitLayout: React.FC<LayoutProps> = ({ context, contextName }) => {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Content Side */}
      <motion.div variants={contentVariants} className="space-y-8">
        {/* Subtitle */}
        {context.subtitle && (
          <div
            className={cn(
              'inline-flex items-center space-x-2 rounded-full px-4 py-2',
              'border border-primary/[0.2] bg-primary/[0.1]',
              'text-sm font-medium text-primary'
            )}
          >
            <Sparkles className="h-4 w-4" />
            <span>{context.subtitle}</span>
          </div>
        )}

        {/* Main Title */}
        <h2
          className={cn(
            'font-heading text-heading-lg text-white md:text-heading-lg',
            'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]',
            'leading-tight'
          )}
        >
          {context.title}
        </h2>

        {/* Description */}
        <p
          className={cn(
            'max-w-lg text-body-lg leading-relaxed text-white/80',
            'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
          )}
        >
          {context.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <ActionButton
            action={context.primaryAction}
            variant="primary"
            context={contextName}
          />
          <ActionButton
            action={context.secondaryAction}
            variant="secondary"
            context={contextName}
          />
        </div>
      </motion.div>

      {/* Illustration Side */}
      {context.showIllustration && (
        <motion.div
          variants={contentVariants}
          className="relative lg:h-[400px]"
        >
          <DashboardIllustration />
        </motion.div>
      )}
    </div>
  );
};

const CenteredLayout: React.FC<LayoutProps> = ({ context, contextName }) => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 text-center">
      {/* Subtitle */}
      {context.subtitle && (
        <motion.div
          variants={contentVariants}
          className={cn(
            'inline-flex items-center space-x-2 rounded-full px-6 py-3',
            'border border-primary/[0.2] bg-primary/[0.1]',
            'font-medium text-primary'
          )}
        >
          <Zap className="h-5 w-5" />
          <span>{context.subtitle}</span>
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        variants={contentVariants}
        className={cn(
          'font-heading text-heading-lg text-white md:text-heading-xl',
          'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'
        )}
      >
        {context.title}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={contentVariants}
        className={cn(
          'mx-auto max-w-2xl text-body-lg leading-relaxed text-white/80',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
        )}
      >
        {context.description}
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={contentVariants}
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <ActionButton
          action={context.primaryAction}
          variant="primary"
          className="px-12 py-5 text-lg"
          context={contextName}
        />
        <ActionButton
          action={context.secondaryAction}
          variant="secondary"
          context={contextName}
        />
      </motion.div>
    </div>
  );
};

const MinimalLayout: React.FC<LayoutProps> = ({ context, contextName }) => {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-center">
      <motion.h2
        variants={contentVariants}
        className={cn(
          'font-heading text-heading-md text-white md:text-heading-lg',
          'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'
        )}
      >
        {context.title}
      </motion.h2>

      <motion.p
        variants={contentVariants}
        className={cn(
          'text-body-base text-white/75',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
        )}
      >
        {context.description}
      </motion.p>

      <motion.div
        variants={contentVariants}
        className="flex justify-center gap-4"
      >
        <ActionButton
          action={context.primaryAction}
          variant="primary"
          context={contextName}
        />
        <ActionButton
          action={context.secondaryAction}
          variant="secondary"
          context={contextName}
        />
      </motion.div>
    </div>
  );
};

// Main Unified CTA Component (SIMPLIFIED)
interface UnifiedCTAProps {
  context?: string;
  customContext?: Partial<CTAContext>;
  className?: string;
}

export const UnifiedCTA: React.FC<UnifiedCTAProps> = ({
  context = 'default',
  customContext,
  className,
}) => {
  // Get the appropriate context configuration
  const selectedContext = ctaContexts[context] || ctaContexts.default;

  // Merge with any custom overrides
  const finalContext: CTAContext = {
    ...selectedContext,
    ...customContext,
  };

  const renderLayout = () => {
    switch (finalContext.layout) {
      case 'split':
        return <SplitLayout context={finalContext} contextName={context} />;
      case 'centered':
        return <CenteredLayout context={finalContext} contextName={context} />;
      case 'minimal':
        return <MinimalLayout context={finalContext} contextName={context} />;
      default:
        return <SplitLayout context={finalContext} contextName={context} />;
    }
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden py-16 md:py-24 lg:py-32',
        className
      )}
      aria-label="Call to Action"
    >
      {/* Enhanced Neo-Tech Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.08] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/[0.04] via-transparent to-transparent" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-slow rounded-full bg-primary/[0.03] blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse-slow rounded-full bg-purple-400/[0.02] blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
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
            'relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16',
            'bg-white/[0.02] backdrop-blur-2xl',
            'border border-white/[0.08]',
            'shadow-[0_20px_40px_rgba(0,0,0,0.15)]',
            'before:absolute before:inset-0 before:rounded-3xl',
            'before:bg-gradient-to-br before:from-white/[0.05] before:via-transparent before:to-black/[0.05]',
            'before:opacity-60',
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
              'absolute left-0 top-0 h-32 w-32',
              'bg-gradient-to-br from-white/[0.08] to-transparent',
              'rounded-3xl'
            )}
          />
          <div
            className={cn(
              'absolute bottom-0 right-0 h-24 w-24',
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
              url: finalContext.primaryAction.href,
            },
            offers: {
              '@type': 'Offer',
              description: finalContext.description,
            },
          }),
        }}
      />
    </section>
  );
};

export default UnifiedCTA;
