'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems, serviceItems } from './data';
import { Logo } from './logo';

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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  // Add debugging
  const handleClose = (reason: string) => {
    console.log('📱 Mobile menu closing due to:', reason);
    onClose();
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Only close on actual route changes, not initial render
  useEffect(() => {
    // Only close if pathname actually changed from a previous value
    if (
      previousPathnameRef.current !== pathname &&
      previousPathnameRef.current !== undefined
    ) {
      console.log(
        '📱 Route changed from',
        previousPathnameRef.current,
        'to',
        pathname
      );
      handleClose('route change');
      setIsMobileServicesOpen(false);
    }
    previousPathnameRef.current = pathname;
  }, [pathname]);

  // FIXED: Only add click outside listener when menu is actually open and after a delay
  useEffect(() => {
    if (!isOpen) return;

    // Add a small delay before enabling click outside detection
    // This prevents immediate closure when the menu just opened
    const timer = setTimeout(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target as Node)
        ) {
          console.log('📱 Click detected outside mobile menu');
          handleClose('click outside');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      // Cleanup function
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, 100); // 100ms delay

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Only add escape listener when menu is open
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        console.log('📱 Escape key pressed');
        handleClose('escape key');
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const MobileNavLink: React.FC<{
    href: string;
    children: React.ReactNode;
  }> = ({ href, children }) => (
    <Link
      href={href}
      onClick={() => handleClose('nav link click')}
      className={cn(
        'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300',
        'font-body text-body-base font-medium',
        isActive(href)
          ? 'bg-primary/10 text-primary border border-primary/20'
          : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
      )}
    >
      <span>{children}</span>
    </Link>
  );

  // Fallback CTA button if GetInTouchButtonPill doesn't exist
  const CTAButton = () => (
    <Link
      href="/contact"
      onClick={() => handleClose('CTA button click')}
      className="w-full text-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-medium text-body-base block"
    >
      Get In Touch
    </Link>
  );

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => handleClose('overlay click')}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={cn(
              'lg:hidden fixed top-0 right-0 h-auto w-full z-50',
              // Enhanced glassmorphism with better mobile support
              'bg-background/95 backdrop-blur-2xl',
              'border-l border-white/[0.08]',
              'shadow-[0_0_50px_rgba(0,0,0,0.5)]',
              // Ensure proper height on mobile devices
              'min-h-screen max-h-screen'
            )}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/[0.08] flex-shrink-0">
                <Logo onClick={() => handleClose('logo click')} />
                <button
                  onClick={() => handleClose('close button click')}
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
                    <MobileNavLink href="/">Home</MobileNavLink>
                  </motion.div>

                  {/* About */}
                  <motion.div variants={itemVariants}>
                    <MobileNavLink href="/about">About</MobileNavLink>
                  </motion.div>

                  {/* Mobile Services Dropdown */}
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
                                  onClick={() =>
                                    handleClose('service link click')
                                  }
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
                      <MobileNavLink href={item.href}>
                        {item.label}
                      </MobileNavLink>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-white/[0.08] flex-shrink-0">
                <CTAButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
