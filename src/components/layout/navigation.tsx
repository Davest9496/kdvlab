'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  MessageSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GetInTouchButton } from '@/components/ui/get-in-touch-button';

// Types for better TypeScript support
interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface ServiceItem {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
}

// Complete navigation data with Services positioned after About
const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'work', label: 'Our Work', href: '/work' },
  { id: 'careers', label: 'Careers', href: '/careers' },
  { id: 'blog', label: 'Blog', href: '/blog' },
];

// Enhanced services matching your original dropdown structure
const serviceItems: ServiceItem[] = [
  {
    id: 'custom-software',
    label: 'Custom Software',
    href: '/services/custom-software',
    icon: Code2,
  },
  {
    id: 'web-applications',
    label: 'Web Applications',
    href: '/services/web-applications',
    icon: Globe,
  },
  {
    id: 'mobile-apps',
    label: 'Mobile Apps',
    href: '/services/mobile-apps',
    icon: Smartphone,
  },
  {
    id: 'cloud-services',
    label: 'Cloud Services',
    href: '/services/cloud-services',
    icon: Cloud,
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    href: '/services/ui-ux-design',
    icon: Palette,
  },
  {
    id: 'consultancy',
    label: 'Consultancy',
    href: '/services/consultancy',
    icon: MessageSquare,
  },
];

// Animation variants - keeping the sophisticated animations from Navigation component
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1],
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const dropdownVariants = {
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.25, 0, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const mobileDropdownVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1],
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const staggerVariants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 },
};

// Main Navigation Component
export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Refs for click outside functionality
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for enhanced header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesDropdownOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-background/90 backdrop-blur-sm'
      )}
    >
      {/* Enhanced Neo-Tech Background */}
      <div className="absolute inset-0">
        {/* Glassmorphism backdrop */}
        <div
          className={cn(
            'absolute inset-0 border-b border-white/[0.08]',
            scrolled
              ? 'bg-background/95 backdrop-blur-xl'
              : 'bg-background/90 backdrop-blur-sm'
          )}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
      </div>

      <nav className="px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Enhanced with Gilroy font matching your Header component */}
          <Link
            href="/"
            className={cn(
              'flex items-center space-x-2 transition-all duration-300',
              'font-heading text-white hover:text-gradient',
              'text-heading-sm tracking-tight',
              'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
            )}
          >
            <div
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-2xl',
                'bg-primary/10 border border-primary/20',
                'hover:bg-primary/20 hover:border-primary/30',
                'transition-all duration-300'
              )}
            >
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span>KDVLAB</span>
          </Link>

          {/* Desktop Navigation - Services positioned after About */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home */}
            <Link
              href="/"
              className={cn(
                'text-body-base font-medium transition-all duration-300 relative group',
                'font-body', // Using Rubik as per your typography system
                isActive('/')
                  ? 'text-primary'
                  : 'text-white/80 hover:text-white',
                // Enhanced hover effects matching your Header component
                'hover:scale-105 relative after:absolute after:bottom-0 after:left-0',
                'after:w-0 after:h-0.5 after:bg-primary',
                'after:transition-all after:duration-300',
                'hover:after:w-full',
                'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
              )}
            >
              <span className="relative z-10">Home</span>
              {isActive('/') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                  initial={false}
                  transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
                />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={cn(
                'text-body-base font-medium transition-all duration-300 relative group',
                'font-body',
                isActive('/about')
                  ? 'text-primary'
                  : 'text-white/80 hover:text-white',
                'hover:scale-105 relative after:absolute after:bottom-0 after:left-0',
                'after:w-0 after:h-0.5 after:bg-primary',
                'after:transition-all after:duration-300',
                'hover:after:w-full',
                'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
              )}
            >
              <span className="relative z-10">About</span>
              {isActive('/about') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                  initial={false}
                  transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
                />
              )}
            </Link>

            {/* Desktop Services Dropdown - Now positioned after About */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className={cn(
                  'flex items-center space-x-1 text-body-base font-medium transition-all duration-300 relative group',
                  'font-body',
                  isActive('/services')
                    ? 'text-primary'
                    : 'text-white/80 hover:text-white',
                  'hover:scale-105 relative after:absolute after:bottom-0 after:left-0',
                  'after:w-0 after:h-0.5 after:bg-primary',
                  'after:transition-all after:duration-300',
                  'hover:after:w-full',
                  'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    isServicesDropdownOpen && 'rotate-180'
                  )}
                />
                {isActive('/services') && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    initial={false}
                    transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
                  />
                )}
              </button>

              {/* Enhanced Desktop Dropdown Menu */}
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    className={cn(
                      'absolute top-full left-0 mt-2 w-80 origin-top',
                      // Enhanced glassmorphism matching your design system
                      'bg-white/[0.05] backdrop-blur-2xl',
                      'border border-white/[0.1] rounded-2xl',
                      'shadow-[0_20px_40px_rgba(0,0,0,0.3)]',
                      // Gradient overlay
                      'before:absolute before:inset-0 before:rounded-2xl',
                      'before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent',
                      'before:opacity-60'
                    )}
                  >
                    <div className="p-4 relative z-10">
                      <div className="grid gap-2">
                        {serviceItems.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.id}
                              href={service.href}
                              className={cn(
                                'flex items-start space-x-3 p-3 rounded-xl transition-all duration-300',
                                'hover:bg-white/[0.08] hover:shadow-lg group',
                                isActive(service.href) &&
                                  'bg-primary/10 border border-primary/20'
                              )}
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div
                                className={cn(
                                  'flex items-center justify-center w-10 h-10 rounded-lg',
                                  'bg-primary/10 border border-primary/20',
                                  'group-hover:bg-primary/20 group-hover:border-primary/30',
                                  'transition-all duration-300'
                                )}
                              >
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-body-base font-medium text-white mb-1">
                                  {service.label}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining navigation items */}
            {navItems.slice(2).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'text-body-base font-medium transition-all duration-300 relative group',
                  'font-body',
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-white/80 hover:text-white',
                  'hover:scale-105 relative after:absolute after:bottom-0 after:left-0',
                  'after:w-0 after:h-0.5 after:bg-primary',
                  'after:transition-all after:duration-300',
                  'hover:after:w-full',
                  'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    initial={false}
                    transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
                  />
                )}
              </Link>
            ))}

            {/* Enhanced CTA Button using GetInTouchButtonPill */}
            <GetInTouchButton
                            size="lg"
                            className="min-w-[200px] bg-transparent hover:bg-primary focus:bg-primary text-white"
                          />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden flex items-center justify-center w-10 h-10 rounded-xl',
              'bg-white/[0.08] border border-white/[0.12]',
              'hover:bg-white/[0.12] hover:border-white/[0.2]',
              'transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-primary/50'
            )}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={cn(
              'lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50',
              // Enhanced glassmorphism
              'bg-background/95 backdrop-blur-2xl',
              'border-l border-white/[0.08]',
              'shadow-[0_0_50px_rgba(0,0,0,0.5)]'
            )}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/[0.08]">
                <Link
                  href="/"
                  className="flex items-center space-x-2 font-heading text-heading-sm text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 border border-primary/20">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                  <span>KDVLAB</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/[0.08] transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto py-6">
                <motion.div
                  variants={staggerVariants}
                  initial="closed"
                  animate="open"
                  className="space-y-2 px-6"
                >
                  {/* Home */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300',
                        'font-body text-body-base font-medium',
                        isActive('/')
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                      )}
                    >
                      <span>Home</span>
                    </Link>
                  </motion.div>

                  {/* About */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300',
                        'font-body text-body-base font-medium',
                        isActive('/about')
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                      )}
                    >
                      <span>About</span>
                    </Link>
                  </motion.div>

                  {/* Mobile Services Dropdown - Now positioned after About */}
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300',
                        'font-body text-body-base font-medium',
                        isActive('/services')
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                      )}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          isMobileServicesOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          variants={mobileDropdownVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-1">
                            {serviceItems.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.id}
                                  href={service.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={cn(
                                    'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300',
                                    'font-body',
                                    isActive(service.href)
                                      ? 'bg-primary/10 text-primary border border-primary/20'
                                      : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                                  )}
                                >
                                  <Icon className="w-4 h-4 flex-shrink-0" />
                                  <div className="flex-1 min-w-0">
                                    <div className="text-body-sm font-medium">
                                      {service.label}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Remaining navigation items */}
                  {navItems.slice(2).map((item) => (
                    <motion.div key={item.id} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300',
                          'font-body text-body-base font-medium',
                          isActive(item.href)
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
