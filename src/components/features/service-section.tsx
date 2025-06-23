'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  MessageSquare,
  Zap,
  Users,
  Target,
  Phone,
  Settings,
  HeadphonesIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for better TypeScript support
interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features?: string[];
}

interface WhyChooseItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

// Services data with SEO-optimized content
const services: Service[] = [
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Tailored solutions designed to address your specific business challenges and goals.',
    features: [
      'Enterprise Applications',
      'API Development',
      'System Integration',
      'Legacy Modernization',
    ],
  },
  {
    id: 'web-applications',
    icon: Globe,
    title: 'Web Applications',
    description:
      'Scalable, responsive web applications with modern frameworks and exceptional UX.',
    features: [
      'React/Next.js Apps',
      'E-commerce Platforms',
      'Progressive Web Apps',
      'CMS Solutions',
    ],
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'React Native',
      'Flutter Development',
      'App Store Optimization',
      'Mobile UI/UX',
    ],
  },
  {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Services',
    description:
      'Migration, optimization, and management of cloud infrastructure.',
    features: [
      'Cloud Migration',
      'DevOps Automation',
      'Serverless Architecture',
      'Performance Optimization',
    ],
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design that delivers intuitive and engaging digital experiences.',
    features: [
      'Design Systems',
      'User Research',
      'Prototyping',
      'Accessibility Testing',
    ],
  },
  {
    id: 'consultancy',
    icon: MessageSquare,
    title: 'Consultancy',
    description:
      'Strategic technology advice to help you make informed decisions about your digital future.',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'Architecture Review',
      'Team Augmentation',
    ],
  },
];

// Why choose us data
const whyChooseItems: WhyChooseItem[] = [
  {
    id: 'technical-excellence',
    icon: Zap,
    title: 'Technical Excellence',
    description:
      'Our team of experienced developers, designers, and architects use the latest technologies and best practices.',
  },
  {
    id: 'collaborative-approach',
    icon: Users,
    title: 'Collaborative Approach',
    description:
      'We work closely with you, ensuring your vision is realized and your goals are achieved.',
  },
  {
    id: 'business-focus',
    icon: Target,
    title: 'Business Focus',
    description:
      'We understand that technology must serve business objectives, not the other way around.',
  },
  {
    id: 'transparent-communication',
    icon: Phone,
    title: 'Transparent Communication',
    description:
      "Regular updates and clear communication ensure you're always informed about project progress.",
  },
  {
    id: 'future-proof-solutions',
    icon: Settings,
    title: 'Future-Proof Solutions',
    description:
      'We build scalable, maintainable systems designed to grow with your business.',
  },
  {
    id: 'continued-support',
    icon: HeadphonesIcon,
    title: 'Continued Support',
    description:
      "Our relationship doesn't end at launch. We provide ongoing support and maintenance.",
  },
];

// Animation variants
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

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Service Card Component
interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      className="group relative"
    >
      <motion.article
        variants={cardHoverVariants}
        className={cn(
          'relative h-full p-6 rounded-2xl overflow-hidden',
          // Neo-Tech Glassmorphism base
          'bg-white/[0.02] backdrop-blur-xl',
          'border border-white/[0.08]',
          // Gradient overlays for depth
          'before:absolute before:inset-0 before:rounded-2xl',
          'before:bg-gradient-to-br before:from-white/[0.05] before:via-transparent before:to-black/[0.05]',
          'before:opacity-60',
          // Enhanced shadow system
          'shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
          // Hover effects
          'hover:bg-white/[0.04] hover:border-white/[0.12]',
          'hover:shadow-[0_20px_40px_rgba(18,164,237,0.15),0_8px_32px_rgba(0,0,0,0.2)]',
          'hover:before:from-primary/[0.08] hover:before:to-primary/[0.02]',
          // Smooth transitions
          'transition-all duration-500 ease-out',
          // Inner glow effect
          'after:absolute after:inset-0 after:rounded-2xl',
          'after:bg-gradient-to-r after:from-primary/[0.03] after:via-transparent after:to-primary/[0.03]',
          'after:opacity-0 after:transition-opacity after:duration-300',
          'hover:after:opacity-100'
        )}
      >
        {/* Neo-Tech Icon Container - Centered */}
        <div className="mb-6 relative z-10 flex justify-center">
          <div
            className={cn(
              'inline-flex items-center justify-center',
              'w-14 h-14 rounded-2xl',
              // Glassmorphism for icon container
              'bg-white/[0.08] backdrop-blur-sm',
              'border border-white/[0.12]',
              // Inner shadow and glow
              'shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.15)]',
              // Hover effects with enhanced glow
              'group-hover:bg-primary/[0.12] group-hover:border-primary/[0.2]',
              'group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(18,164,237,0.3)]',
              // Smooth transitions
              'transition-all duration-400 ease-out',
              // Subtle animation
              'group-hover:scale-110'
            )}
          >
            <Icon
              className={cn(
                'w-7 h-7 text-primary',
                'drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]',
                'group-hover:drop-shadow-[0_4px_8px_rgba(18,164,237,0.5)]',
                'transition-all duration-300'
              )}
            />
          </div>
        </div>

        {/* Content typography - with proper font classes */}
        <div className="space-y-4 relative z-10 text-center">
          <h3 className="text-subheading-md text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {service.title}
          </h3>

          <p className="text-body-base font-rubik text-white/80 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
            {service.description}
          </p>
        </div>

        {/* Neo-Tech Border Glow Effect */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl',
            'bg-gradient-to-r from-primary/0 via-primary/[0.05] to-primary/0',
            'opacity-0 group-hover:opacity-100',
            'transition-opacity duration-500',
            'pointer-events-none'
          )}
        />

        {/* Animated Corner Highlights */}
        <div
          className={cn(
            'absolute top-0 left-0 w-20 h-20',
            'bg-gradient-to-br from-white/[0.08] to-transparent',
            'rounded-2xl',
            'opacity-60 group-hover:opacity-100',
            'transition-opacity duration-300'
          )}
        />

        <div
          className={cn(
            'absolute bottom-0 right-0 w-16 h-16',
            'bg-gradient-to-tl from-primary/[0.06] to-transparent',
            'rounded-2xl',
            'opacity-40 group-hover:opacity-80',
            'transition-opacity duration-300'
          )}
        />
      </motion.article>
    </motion.div>
  );
};

// Why Choose Card Component
interface WhyChooseCardProps {
  item: WhyChooseItem;
  index: number;
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ item, index }) => {
  return (
    <motion.div variants={itemVariants} className="group relative">
      {/* Neo-Tech Glassmorphism Card */}
      <div
        className={cn(
          'p-6 rounded-2xl h-full relative overflow-hidden',
          // Enhanced glassmorphism
          'bg-white/[0.03] backdrop-blur-2xl',
          'border border-white/[0.06]',
          // Multi-layered shadows
          'shadow-[0_8px_32px_rgba(0,0,0,0.1)]',
          // Gradient overlays
          'before:absolute before:inset-0 before:rounded-2xl',
          'before:bg-gradient-to-br before:from-white/[0.04] before:via-transparent before:to-black/[0.02]',
          // Enhanced hover effects
          'hover:bg-white/[0.05] hover:border-white/[0.1]',
          'hover:shadow-[0_12px_40px_rgba(18,164,237,0.1),0_8px_32px_rgba(0,0,0,0.15)]',
          'hover:before:from-primary/[0.05] hover:before:to-primary/[0.01]',
          // Smooth transitions
          'transition-all duration-400 ease-out',
          // Subtle scale on hover
          'hover:scale-[1.02]'
        )}
      >
        {/* Content - Left Aligned with proper typography */}
        <div className="space-y-3 relative z-10 text-left">
          <h4 className="text-subheading-md text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {item.title}
          </h4>

          <p className="text-body-base font-rubik text-white/75 leading-relaxed group-hover:text-white/85 transition-colors duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
            {item.description}
          </p>
        </div>

        {/* Subtle Corner Highlights */}
        <div
          className={cn(
            'absolute top-0 right-0 w-16 h-16',
            'bg-gradient-to-bl from-white/[0.05] to-transparent',
            'rounded-2xl',
            'opacity-50 group-hover:opacity-80',
            'transition-opacity duration-300'
          )}
        />

        {/* Animated Border Glow */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl',
            'bg-gradient-to-t from-primary/[0.02] via-transparent to-transparent',
            'opacity-0 group-hover:opacity-100',
            'transition-opacity duration-400'
          )}
        />
      </div>
    </motion.div>
  );
};

// Main Services Section Component
export const ServicesSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      aria-label="Our Services"
    >
      {/* Enhanced Neo-Tech Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />

        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.08] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/[0.04] via-transparent to-transparent" />

        {/* Noise texture for glass effect */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/[0.02] rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container relative">
        {/* Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12 md:space-y-16"
        >
          {/* Section Header with proper typography and glassmorphism */}
          <div className="text-center space-y-6 max-w-4xl mx-auto relative">

            <div className="relative z-10 py-8">
              <motion.h2
                variants={itemVariants}
                className="text-heading-lg text-white capitalize mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
              >
                Your solutions
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-body-lg font-rubik text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              >
                We solve all your software development needs, from ideation
                to deployment and beyond.
              </motion.p>
            </div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mt-24 md:mt-32 space-y-12 md:space-y-16"
        >
          {/* Section Header with proper typography and glassmorphism */}
          <div className="text-center space-y-6 max-w-4xl mx-auto relative">

            <div className="relative z-10 py-8">
              <motion.h2
                variants={itemVariants}
                className="text-heading-lg text-white capitalize mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
              >
                your experience
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-body-lg font-rubik text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              >
                We combine technical expertise with a deep understanding of
                business to deliver exceptional results.
              </motion.p>
            </div>
          </div>

          {/* Why Choose Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {whyChooseItems.map((item, index) => (
              <WhyChooseCard key={item.id} item={item} index={index} />
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
            '@type': 'ProfessionalService',
            name: 'KDVLab',
            description:
              'Expert software development services including custom software, web applications, mobile apps, cloud services, UI/UX design, and technology consultancy.',
            serviceType: services.map((service) => service.title),
            areaServed: 'Global',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Software Development Services',
              itemListElement: services.map((service, index) => ({
                '@type': 'Offer',
                position: index + 1,
                name: service.title,
                description: service.description,
                category: 'Software Development',
              })),
            },
            founder: {
              '@type': 'Person',
              name: 'Dave Ejezie',
            },
          }),
        }}
      />
    </section>
  );
};

export default ServicesSection;
