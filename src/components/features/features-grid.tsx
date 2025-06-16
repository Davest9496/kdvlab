'use client';

import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Smartphone, Code, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized for Core Web Vitals with sub-second load times globally.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description:
      'Deployed across 300+ edge locations for minimal latency worldwide.',
  },
  {
    icon: Shield,
    title: 'SEO Optimized',
    description:
      'Built-in SEO best practices with structured data and meta optimization.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description:
      'Responsive design that works perfectly on all devices and screen sizes.',
  },
  {
    icon: Code,
    title: 'TypeScript',
    description:
      'Fully typed codebase for better developer experience and fewer bugs.',
  },
  {
    icon: TrendingUp,
    title: 'Performance',
    description:
      'Lighthouse scores of 90+ across all categories out of the box.',
  },
];

export const FeaturesGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced Neo-Tech Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />

        {/* Radial gradient overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.04] via-transparent to-transparent" />

        {/* Noise texture for enhanced glass effect */}
        <div
          className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Enhanced Section Header */}
          <div className="space-y-6 max-w-4xl mx-auto relative">
            {/* Glassmorphism background for header */}
            <div className="absolute inset-0 bg-white/[0.015] backdrop-blur-3xl rounded-3xl border border-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.06)] -mx-8 -my-4" />

            <div className="relative z-10 py-8">
              <h2
                className={cn(
                  'text-heading-lg md:text-heading-xl font-heading text-white mb-6',
                  'drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'
                )}
              >
                Everything you need for{' '}
                <span className="text-gradient">modern web development</span>
              </h2>

              <p
                className={cn(
                  'text-body-lg text-white/80 leading-relaxed max-w-2xl mx-auto',
                  'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
                )}
              >
                Built with the latest technologies and best practices for
                performance, SEO, and user experience.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div
                className={cn(
                  'relative h-full p-6 rounded-2xl overflow-hidden',
                  // Enhanced Neo-Tech glassmorphism
                  'bg-white/[0.02] backdrop-blur-2xl',
                  'border border-white/[0.08]',
                  // Multi-layered shadows for depth
                  'shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
                  // Gradient overlays
                  'before:absolute before:inset-0 before:rounded-2xl',
                  'before:bg-gradient-to-br before:from-white/[0.04] before:via-transparent before:to-black/[0.03]',
                  // Enhanced hover effects
                  'hover:bg-white/[0.04] hover:border-white/[0.12]',
                  'hover:shadow-[0_20px_40px_rgba(18,164,237,0.15),0_8px_32px_rgba(0,0,0,0.2)]',
                  'hover:before:from-primary/[0.06] hover:before:to-primary/[0.02]',
                  // Smooth transitions
                  'transition-all duration-500 ease-out',
                  'card-hover'
                )}
              >
                {/* Icon and Title Section */}
                <div className="flex items-center space-x-4 mb-4 relative z-10">
                  <div
                    className={cn(
                      'p-3 rounded-2xl',
                      // Glassmorphism for icon container
                      'bg-white/[0.08] backdrop-blur-sm',
                      'border border-white/[0.12]',
                      // Enhanced glow effects
                      'shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.15)]',
                      'group-hover:bg-primary/[0.12] group-hover:border-primary/[0.2]',
                      'group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(18,164,237,0.3)]',
                      'transition-all duration-400 ease-out'
                    )}
                  >
                    <feature.icon
                      className={cn(
                        'w-6 h-6 text-primary',
                        'drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]',
                        'group-hover:drop-shadow-[0_4px_8px_rgba(18,164,237,0.5)]',
                        'transition-all duration-300'
                      )}
                    />
                  </div>
                  <h3
                    className={cn(
                      'text-heading-sm font-heading text-white',
                      'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                    )}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={cn(
                    'text-body-base text-white/80 leading-relaxed relative z-10',
                    'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                  )}
                >
                  {feature.description}
                </p>

                {/* Corner highlights */}
                <div
                  className={cn(
                    'absolute top-0 right-0 w-16 h-16',
                    'bg-gradient-to-bl from-white/[0.04] to-transparent',
                    'rounded-2xl opacity-40 group-hover:opacity-70',
                    'transition-opacity duration-300'
                  )}
                />

                <div
                  className={cn(
                    'absolute bottom-0 left-0 w-12 h-12',
                    'bg-gradient-to-tr from-primary/[0.03] to-transparent',
                    'rounded-2xl opacity-30 group-hover:opacity-60',
                    'transition-opacity duration-300'
                  )}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
