'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for comprehensive TypeScript support
interface Client {
  id: string;
  name: string;
  logo: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  featured?: boolean;
}

// Updated client logos data with your actual PNG files
const clients: Client[] = [
  {
    id: 'hootscope',
    name: 'Hootscope',
    logo: '/images/Logo/organisations/hootscope.png',
    logoAlt: 'Hootscope company logo - social media management platform',
    logoWidth: 140,
    logoHeight: 45,
  },
  {
    id: 'kdvwears',
    name: 'KDVwears',
    logo: '/images/Logo/organisations/kdvwears.png',
    logoAlt: 'KDVwears company logo - fashion and apparel brand',
    logoWidth: 130,
    logoHeight: 45,
  },
  {
    id: 'mophire',
    name: 'MOPHIRE',
    logo: '/images/Logo/organisations/mophire.png',
    logoAlt: 'MOPHIRE company logo - cleaning services provider',
    logoWidth: 150,
    logoHeight: 45,
  },
  {
    id: 'shutrlink',
    name: 'SHUTRLINK',
    logo: '/images/Logo/organisations/shutrlink.png',
    logoAlt: 'SHUTRLINK company logo - digital connectivity platform',
    logoWidth: 145,
    logoHeight: 45,
  },
  {
    id: 'smartdesk',
    name: 'Smartdesk',
    logo: '/images/Logo/organisations/smartdesk247.png',
    logoAlt: 'Smartdesk company logo - smart workspace solutions',
    logoWidth: 135,
    logoHeight: 45,
  },
];

// Sample testimonials data - replace with real client feedback
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Solutions',
    avatar: '/avatars/sarah-chen.jpg',
    content:
      'KDVLAB transformed our legacy system into a modern, scalable platform. Their expertise in React and cloud architecture delivered results beyond our expectations.',
    rating: 5,
    featured: true,
  },
  {
    id: 'testimonial-2',
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    company: 'Innovation Labs',
    avatar: '/avatars/marcus-rodriguez.jpg',
    content:
      "The team's attention to detail and commitment to performance optimization helped us achieve a 40% improvement in user engagement.",
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Emma Thompson',
    role: 'Founder',
    company: 'StartupVenture',
    avatar: '/avatars/emma-thompson.jpg',
    content:
      'From concept to deployment, KDVLAB guided us through every step. Their technical expertise and business understanding made all the difference.',
    rating: 5,
    featured: true,
  },
];

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

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Seamless infinite scroll animation - Option 2 (Recommended)
const scrollContainerVariants = {
  animate: {
    x: [-1248, -2496], // Start from second set, move to third set for perfect seamless loop
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 24,
        ease: 'linear',
      },
    },
  },
};

// Client Logo Component with performance optimizations
interface ClientLogoProps {
  client: Client;
  index: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client, index }) => {
  return (
    <motion.div
      variants={logoVariants}
      className="group relative flex h-20 items-center justify-center rounded-2xl bg-white p-4 align-middle md:h-20 md:p-6 lg:h-20 lg:p-4"
    >
      {/* Neo-Tech glassmorphism container */}
      <div>
        {/* Logo container with optimization */}
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {/* Actual logo implementation with Next.js Image optimization */}
          <Image
            src={client.logo}
            alt={client.logoAlt}
            width={client.logoWidth || 140}
            height={client.logoHeight || 45}
            className={cn(
              'h-auto max-w-full object-contain',
              // Enhanced styling for PNG logos with transparency
              'contrast-110 saturate-110 brightness-90 filter',
              'group-hover:saturate-125 group-hover:brightness-100 group-hover:contrast-125',
              // Smooth transitions
              'transition-all duration-300 ease-out',
              // Ensure logos are properly sized
              'max-h-[45px] w-auto'
            )}
            priority={index < 3} // Prioritize first 3 logos for performance
            loading={index < 3 ? 'eager' : 'lazy'}
            quality={90} // High quality for logos
            // Add blur placeholder for better loading experience
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBobHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/xAAhEQACAQIEBwAAAAAAAAAAAAABAgADITEEQVNhcYGx0eH/2gAMAwEAAhEDEQA/AO4s6lzunGJJnZFEeOcqjZOz1bwjMVdw+a+WZUKTKhRJmCE8UF3yx8kKjl1KdWSgJZLMRiuZCB+Cp+Y="
          />
        </div>

        {/* Subtle corner highlights */}
        <div
          className={cn(
            'absolute right-0 top-0 h-12 w-12',
            'bg-gradient-to-bl from-white/[0.04] to-transparent',
            'rounded-2xl opacity-0 group-hover:opacity-100',
            'transition-opacity duration-300'
          )}
        />
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.article variants={itemVariants} className="group relative">
      {/* Neo-Tech glassmorphism card */}
      <div
        className={cn(
          'relative h-full overflow-hidden rounded-2xl p-6 md:p-8',
          // Enhanced glassmorphism
          'bg-white/[0.03] backdrop-blur-2xl',
          'border border-white/[0.08]',
          // Multi-layered shadows
          'shadow-[0_8px_32px_rgba(0,0,0,0.1)]',
          // Gradient overlays for depth
          'before:absolute before:inset-0 before:rounded-2xl',
          'before:bg-gradient-to-br before:from-white/[0.04] before:via-transparent before:to-black/[0.02]',
          // Enhanced hover effects
          'hover:border-white/[0.12] hover:bg-white/[0.05]',
          'hover:shadow-[0_20px_40px_rgba(18,164,237,0.12),0_8px_32px_rgba(0,0,0,0.15)]',
          'hover:before:from-primary/[0.05] hover:before:to-primary/[0.01]',
          // Smooth transitions
          'transition-all duration-500 ease-out',
          // Subtle scale on hover
          'hover:scale-[1.02]',
          // Featured testimonial styling
          testimonial.featured && 'ring-1 ring-primary/20'
        )}
      >
        {/* Quote icon */}
        <div className="relative z-10 mb-4">
          <Quote
            className={cn(
              'h-8 w-8 text-primary/60',
              'drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]'
            )}
          />
        </div>

        {/* Testimonial content */}
        <div className="relative z-10 space-y-6">
          {/* Review text */}
          <blockquote
            className={cn(
              'font-rubik text-body-base leading-relaxed text-white/90',
              'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
            )}
          >
            &quot;{testimonial.content}&quot;
          </blockquote>

          {/* Rating stars */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < testimonial.rating
                    ? 'fill-current text-yellow-400'
                    : 'text-gray-500',
                  'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                )}
              />
            ))}
          </div>

          {/* Author info */}
          <div className="flex items-center space-x-4">
            {/* Avatar placeholder */}
            <div
              className={cn(
                'h-12 w-12 rounded-full',
                'bg-gradient-to-br from-primary/20 to-primary/40',
                'border border-white/10',
                'flex items-center justify-center',
                'shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
              )}
            >
              <span className="font-rubik text-sm font-semibold text-white">
                {testimonial.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </span>
            </div>

            {/* Author details */}
            <div>
              <div
                className={cn(
                  'font-rubik font-semibold text-white',
                  'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                )}
              >
                {testimonial.name}
              </div>
              <div
                className={cn(
                  'font-rubik text-sm text-white/70',
                  'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                )}
              >
                {testimonial.role} at {testimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* Animated border glow */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl',
            'bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02]',
            'opacity-0 group-hover:opacity-100',
            'transition-opacity duration-500'
          )}
        />

        {/* Corner highlight */}
        <div
          className={cn(
            'absolute right-0 top-0 h-16 w-16',
            'bg-gradient-to-bl from-white/[0.04] to-transparent',
            'rounded-2xl opacity-0 group-hover:opacity-80',
            'transition-opacity duration-300'
          )}
        />
      </div>
    </motion.article>
  );
};

// Main Testimonials Section Component
export const TestimonialsSection: React.FC = () => {
  // Duplicate the logos array 3 times for a seamless infinite loop
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      aria-label="Client Testimonials and Trusted Companies"
    >
      {/* Enhanced Neo-Tech Background - Consistent with project design */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="via-background/98 absolute inset-0 bg-gradient-to-b from-background to-background" />

        {/* Radial gradient overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />

        {/* Noise texture for enhanced glass effect */}
        <div
          className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute right-1/4 top-1/3 h-96 w-96 animate-pulse-slow rounded-full bg-primary/[0.02] blur-3xl" />
        <div
          className="absolute bottom-1/3 left-1/4 h-80 w-80 animate-pulse-slow rounded-full bg-blue-400/[0.015] blur-3xl"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container relative">
        {/* Trusted Companies Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12 md:space-y-16"
        >
          {/* Section Header with proper typography and glassmorphism */}
          <div className="relative mx-auto max-w-4xl space-y-6 text-center">
            <div className="relative z-10 py-8">
              <motion.h2
                variants={itemVariants}
                className="mb-4 text-heading-lg capitalize text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
              >
                Trusted by Innovative Companies
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className={cn(
                  'font-rubik text-body-base leading-relaxed text-white/75',
                  'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
                )}
              >
                Organizations around the world trust KDVLab for their
                engineering needs.
              </motion.p>
            </div>
          </div>

          {/* Client Logos Seamless Infinite Scroll */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient fade edges for seamless effect */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

            {/* Scrolling container with seamless animation */}
            <motion.div
              className="flex will-change-transform"
              variants={scrollContainerVariants}
              animate="animate"
              style={{
                gap: '32px', // 32px gap between logos
              }}
            >
              {repeatedClients.map((client, index) => (
                <motion.div
                  key={`logo-${index}-${client.id}`}
                  variants={logoVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-[220px] flex-shrink-0"
                >
                  <ClientLogo client={client} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mt-24 space-y-12 md:mt-32 md:space-y-16"
        >
          {/* Section Header with proper typography and glassmorphism */}
          <div className="relative mx-auto max-w-4xl space-y-6 text-center">
            <div className="relative z-10 py-8">
              <motion.h2
                variants={itemVariants}
                className="mb-4 text-heading-lg capitalize text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
              >
                What Our Clients Say
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className={cn(
                  'mx-auto max-w-2xl font-rubik text-body-base leading-relaxed text-white/75',
                  'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
                )}
              >
                Don&#39;t just take our word for it. Here&#39;s what our clients
                have to say about working with KDVLab.
              </motion.p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KDVLab',
            description:
              'Trusted by innovative companies worldwide for expert software development services.',
            url: 'https://kdvlab.com',
            review: testimonials.map(testimonial => ({
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: testimonial.name,
                jobTitle: testimonial.role,
                worksFor: {
                  '@type': 'Organization',
                  name: testimonial.company,
                },
              },
              reviewBody: testimonial.content,
              reviewRating: {
                '@type': 'Rating',
                ratingValue: testimonial.rating,
                bestRating: 5,
              },
            })),
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 5,
              reviewCount: testimonials.length,
              bestRating: 5,
            },
          }),
        }}
      />
    </section>
  );
};

export default TestimonialsSection;
