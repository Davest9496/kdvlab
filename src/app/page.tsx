'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Zap,
  Rocket,
  Target,
  Code2,
  Palette,
  Shield,
} from 'lucide-react';

export default function Home(): JSX.Element {
  const features = [
    {
      title: 'TypeScript',
      description:
        'Fully typed with strict TypeScript configuration for bulletproof development',
      icon: Code2,
      gradient: 'from-primary/20 to-blue-500/20',
    },
    {
      title: 'Performance',
      description:
        'Optimized for speed with Next.js 14, edge functions, and global CDN delivery',
      icon: Rocket,
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'SEO Ready',
      description:
        'Built-in SEO optimization, structured data, and server-side rendering',
      icon: Target,
      gradient: 'from-purple-500/20 to-violet-500/20',
    },
    {
      title: 'Modern Stack',
      description:
        'React 18, Tailwind CSS, Framer Motion, and shadcn/ui components',
      icon: Zap,
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'Design System',
      description:
        'Consistent typography, spacing, and color palette with dark theme',
      icon: Palette,
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
    {
      title: 'Production Ready',
      description:
        'Optimized builds, error boundaries, and comprehensive testing setup',
      icon: Shield,
      gradient: 'from-cyan-500/20 to-teal-500/20',
    },
  ];

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
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />

        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="mb-8"
            >
              <h1 className="text-heading-xl sm:text-6xl lg:text-7xl font-heading mb-6">
                Welcome to{' '}
                {/* Fixed gradient text - Method 1: Improved class */}
                <span
                  className="inline-block bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent font-heading"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'inherit',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                  }}
                >
                  KDVLab
                </span>
              </h1>

              <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A cutting-edge TypeScript React application built with Next.js
                14, featuring modern design, blazing-fast performance, and
                enterprise-grade architecture
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-foreground hover:bg-primary/10 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Documentation
              </Button>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 text-body-sm"
            >
              {[
                'Next.js 14',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'shadcn/ui',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-muted/50 text-muted-foreground rounded-full border border-border/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-lg font-heading mb-4">
              Built for {/* Alternative method: Using CSS custom properties */}
              <span
                className="inline-block font-heading"
                style={{
                  background:
                    'linear-gradient(135deg, #12A4ED 0%, #47A7EF 50%, #12A4ED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  lineHeight: 'inherit',
                }}
              >
                Modern Development
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build scalable, performant web applications
              with the latest technologies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 card-hover">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-foreground" />
                      </div>

                      <h3 className="text-heading-sm font-heading mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-body-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Performance Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-lg font-heading mb-4">
              {/* Method 3: Using relative positioning for better consistency */}
              <span className="relative inline-block font-heading">
                <span
                  className="relative z-10 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    lineHeight: 'inherit',
                  }}
                >
                  Performance First
                </span>
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Optimized for Core Web Vitals and built to deliver exceptional
              user experiences globally
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                metric: '< 1.2s',
                label: 'Largest Contentful Paint',
                desc: 'Lightning fast loading',
              },
              {
                metric: '< 100ms',
                label: 'First Input Delay',
                desc: 'Instant interactions',
              },
              {
                metric: '< 0.1',
                label: 'Cumulative Layout Shift',
                desc: 'Stable layouts',
              },
              {
                metric: '99.9%',
                label: 'Uptime',
                desc: 'Reliable performance',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <div className="text-heading-md font-heading text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-body-base font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-body-sm text-muted-foreground">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-heading-lg font-heading mb-6">
              Ready to Build Something{' '}
              {/* Final method: Clean inline approach */}
              <span
                className="font-heading"
                style={{
                  background:
                    'linear-gradient(135deg, #12A4ED 0%, #47A7EF 50%, #12A4ED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  lineHeight: 'inherit',
                  fontFamily: 'inherit',
                }}
              >
                Amazing?
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Start your next project with a modern, scalable foundation that's
              built for performance and developer experience
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="text-foreground hover:bg-muted px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                Explore Features
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
