'use client';

import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Smartphone, Code, TrendingUp } from 'lucide-react';

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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-lg font-heading mb-4">
            Everything you need for{' '}
            <span className="text-gradient">modern web development</span>
          </h2>
          <p className="text-body-lg text-foreground/80 max-w-2xl mx-auto">
            Built with the latest technologies and best practices for
            performance, SEO, and user experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow card-hover"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-heading-sm font-heading">
                  {feature.title}
                </h3>
              </div>
              <p className="text-body-base text-foreground/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
