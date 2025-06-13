'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
  ArrowUp,
  Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for comprehensive TypeScript support
interface FooterLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  newTab?: boolean;
}

interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
  ariaLabel: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

// Footer navigation data - SEO optimized with internal linking
const footerSections: FooterSection[] = [
  {
    id: 'services',
    title: 'Services',
    links: [
      {
        id: 'custom-software',
        label: 'Custom Software',
        href: '/services/custom-software',
      },
      {
        id: 'web-applications',
        label: 'Web Applications',
        href: '/services/web-applications',
      },
      {
        id: 'mobile-apps',
        label: 'Mobile Apps',
        href: '/services/mobile-apps',
      },
      {
        id: 'cloud-services',
        label: 'Cloud Services',
        href: '/services/cloud-services',
      },
      {
        id: 'ui-ux-design',
        label: 'UI/UX Design',
        href: '/services/ui-ux-design',
      },
      {
        id: 'consultancy',
        label: 'Consultancy',
        href: '/services/consultancy',
      },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'our-work', label: 'Our Work', href: '/portfolio' },
      { id: 'careers', label: 'Careers', href: '/careers' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
      {
        id: 'whitepapers',
        label: 'Whitepapers',
        href: '/resources/whitepapers',
      },
      {
        id: 'tech-insights',
        label: 'Tech Insights',
        href: '/blog/tech-insights',
      },
      { id: 'developer-tools', label: 'Developer Tools', href: '/tools' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    links: [
      {
        id: 'privacy-policy',
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        id: 'terms-of-service',
        label: 'Terms of Service',
        href: '/terms-of-service',
      },
      { id: 'cookie-policy', label: 'Cookie Policy', href: '/cookie-policy' },
      { id: 'gdpr', label: 'GDPR Compliance', href: '/gdpr' },
    ],
  },
];

// Social media links with proper accessibility
const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/kdvlab',
    icon: Github,
    ariaLabel: 'Visit KDVLAB on GitHub',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/kdvlab',
    icon: Linkedin,
    ariaLabel: 'Connect with KDVLAB on LinkedIn',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    href: 'https://twitter.com/kdvlab',
    icon: Twitter,
    ariaLabel: 'Follow KDVLAB on Twitter',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://facebook.com/kdvlab',
    icon: Facebook,
    ariaLabel: 'Like KDVLAB on Facebook',
  },
];

// Contact information
const contactInfo: ContactInfo = {
  email: 'hello@kdvlab.com',
  phone: '+1 (555) 123-4567',
  address: 'London, UK & New York, USA',
};

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

// Footer Section Component
interface FooterSectionProps {
  section: FooterSection;
}

const FooterSectionComponent: React.FC<FooterSectionProps> = ({ section }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3
        className={cn(
          'text-body-lg font-heading text-white',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
        )}
      >
        {section.title}
      </h3>

      <nav aria-label={`${section.title} navigation`}>
        <ul className="space-y-3">
          {section.links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={cn(
                  'text-body-sm text-white/70 hover:text-white',
                  'transition-colors duration-300 ease-out',
                  'hover:drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]',
                  'focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-sm'
                )}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                <span className="flex items-center gap-1">
                  {link.label}
                  {link.external && (
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

// Social Links Component
const SocialLinksComponent: React.FC = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3
        className={cn(
          'text-body-lg font-heading text-white',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
        )}
      >
        Connect
      </h3>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className={cn(
                'group relative inline-flex items-center justify-center',
                'w-10 h-10 rounded-xl',
                // Neo-tech glassmorphism for social icons
                'bg-white/[0.05] backdrop-blur-sm',
                'border border-white/[0.08]',
                'shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
                // Enhanced hover effects
                'hover:bg-primary/[0.15] hover:border-primary/[0.3]',
                'hover:shadow-[0_8px_24px_rgba(18,164,237,0.25)]',
                'hover:scale-110',
                // Smooth transitions
                'transition-all duration-300 ease-out',
                // Focus states for accessibility
                'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 text-white/70',
                  'group-hover:text-white',
                  'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]',
                  'transition-colors duration-300'
                )}
              />

              {/* Subtle glow effect */}
              <div
                className={cn(
                  'absolute inset-0 rounded-xl',
                  'bg-gradient-to-r from-primary/[0.1] via-transparent to-primary/[0.1]',
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300'
                )}
              />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

// Contact Information Component
const ContactInfoComponent: React.FC = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3
        className={cn(
          'text-body-lg font-heading text-white',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
        )}
      >
        Get in Touch
      </h3>

      <div className="space-y-3">
        {/* Email */}
        <a
          href={`mailto:${contactInfo.email}`}
          className={cn(
            'flex items-center gap-3 text-body-sm text-white/70 hover:text-white',
            'transition-colors duration-300 ease-out',
            'hover:drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]',
            'focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-sm'
          )}
        >
          <Mail className="w-4 h-4 text-primary/70" />
          {contactInfo.email}
        </a>

        {/* Phone */}
        <a
          href={`tel:${contactInfo.phone}`}
          className={cn(
            'flex items-center gap-3 text-body-sm text-white/70 hover:text-white',
            'transition-colors duration-300 ease-out',
            'hover:drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]',
            'focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-sm'
          )}
        >
          <Phone className="w-4 h-4 text-primary/70" />
          {contactInfo.phone}
        </a>

        {/* Address */}
        <div className="flex items-center gap-3 text-body-sm text-white/70">
          <MapPin className="w-4 h-4 text-primary/70" />
          {contactInfo.address}
        </div>
      </div>
    </motion.div>
  );
};

// Newsletter Signup Component
const NewsletterSignup: React.FC = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3
        className={cn(
          'text-body-lg font-heading text-white',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
        )}
      >
        Stay Updated
      </h3>

      <p
        className={cn(
          'text-body-sm text-white/70',
          'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
        )}
      >
        Get the latest insights on technology and software development.
      </p>

      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className={cn(
              'w-full px-4 py-3 pr-12 rounded-xl',
              'bg-white/[0.05] backdrop-blur-sm',
              'border border-white/[0.08]',
              'text-white placeholder:text-white/50',
              'focus:bg-white/[0.08] focus:border-primary/50',
              'focus:outline-none focus:ring-2 focus:ring-primary/50',
              'transition-all duration-300'
            )}
          />
          <button
            type="submit"
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2',
              'w-8 h-8 rounded-lg',
              'bg-primary/20 hover:bg-primary/30',
              'border border-primary/30',
              'flex items-center justify-center',
              'transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-primary/50'
            )}
            aria-label="Subscribe to newsletter"
          >
            <Send className="w-4 h-4 text-primary" />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

// Back to Top Component
const BackToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      variants={itemVariants}
      onClick={scrollToTop}
      className={cn(
        'group relative inline-flex items-center justify-center',
        'w-12 h-12 rounded-2xl',
        // Neo-tech glassmorphism
        'bg-white/[0.05] backdrop-blur-sm',
        'border border-white/[0.08]',
        'shadow-[0_8px_24px_rgba(0,0,0,0.15)]',
        // Enhanced hover effects
        'hover:bg-primary/[0.15] hover:border-primary/[0.3]',
        'hover:shadow-[0_12px_32px_rgba(18,164,237,0.25)]',
        'hover:scale-110 hover:-translate-y-1',
        // Smooth transitions
        'transition-all duration-400 ease-out',
        // Focus states
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background'
      )}
      aria-label="Back to top"
    >
      <ArrowUp
        className={cn(
          'w-5 h-5 text-white/70',
          'group-hover:text-white',
          'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]',
          'transition-colors duration-300'
        )}
      />

      {/* Glow effect */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl',
          'bg-gradient-to-r from-primary/[0.1] via-transparent to-primary/[0.1]',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300'
        )}
      />
    </motion.button>
  );
};

// Main Footer Component
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Enhanced Neo-Tech Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />

        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/[0.04] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/[0.02] via-transparent to-transparent" />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.01] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/[0.01] rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Top border with glassmorphism */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container py-16 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
              {/* Brand Section - Takes 2 columns on large screens */}
              <div className="lg:col-span-2 space-y-6">
                <motion.div variants={itemVariants}>
                  {/* Logo */}
                  <Link href="/" className="inline-block group">
                    <div
                      className={cn(
                        'text-heading-md font-heading',
                        'bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent',
                        'drop-shadow-[0_4px_8px_rgba(18,164,237,0.3)]',
                        'group-hover:drop-shadow-[0_6px_12px_rgba(18,164,237,0.4)]',
                        'transition-all duration-300'
                      )}
                    >
                      KDVLAB
                    </div>
                  </Link>

                  {/* Tagline */}
                  <p
                    className={cn(
                      'text-body-base text-white/80 leading-relaxed max-w-sm',
                      'drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]'
                    )}
                  >
                    Crafting exceptional digital experiences through innovative
                    software development and design.
                  </p>
                </motion.div>

                {/* Contact Info */}
                <ContactInfoComponent />

                {/* Back to Top Button */}
                <BackToTop />
              </div>

              {/* Navigation Sections */}
              {footerSections.map((section) => (
                <FooterSectionComponent key={section.id} section={section} />
              ))}

              {/* Newsletter & Social - Takes remaining space */}
              <div className="lg:col-span-2 space-y-8">
                <NewsletterSignup />
                <SocialLinksComponent />
              </div>
            </div>

            {/* Bottom Section */}
            <motion.div variants={itemVariants}>
              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Copyright and Legal */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p
                  className={cn(
                    'text-body-sm text-white/60',
                    'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                  )}
                >
                  © {currentYear} KDVLAB. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                  <Link
                    href="/privacy-policy"
                    className={cn(
                      'text-body-sm text-white/60 hover:text-white/80',
                      'transition-colors duration-300',
                      'focus:text-primary focus:outline-none'
                    )}
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className={cn(
                      'text-body-sm text-white/60 hover:text-white/80',
                      'transition-colors duration-300',
                      'focus:text-primary focus:outline-none'
                    )}
                  >
                    Terms
                  </Link>
                  <Link
                    href="/cookie-policy"
                    className={cn(
                      'text-body-sm text-white/60 hover:text-white/80',
                      'transition-colors duration-300',
                      'focus:text-primary focus:outline-none'
                    )}
                  >
                    Cookies
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
            url: 'https://kdvlab.com',
            logo: 'https://kdvlab.com/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: contactInfo.phone,
              contactType: 'customer service',
              email: contactInfo.email,
              availableLanguage: ['English'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'London',
              addressCountry: 'UK',
            },
            sameAs: socialLinks.map((link) => link.href),
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
