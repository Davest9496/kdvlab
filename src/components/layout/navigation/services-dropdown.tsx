'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ChevronDown, ArrowRight, Grid3X3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { serviceItems } from './data';

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

export const ServicesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
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
            isOpen && 'rotate-180'
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onMouseLeave={() => setIsOpen(false)}
            className={cn(
              'absolute top-full left-0 mt-2 w-80 origin-top',
              'bg-background backdrop-blur-xl',
              'border border-white/[0.2] rounded-2xl',
              'shadow-[0_20px_40px_rgba(0,0,0,0.5)]',
              'before:absolute before:inset-0 before:rounded-2xl',
              'before:bg-gradient-to-br before:from-white/[0.05] before:to-transparent',
              'before:opacity-100'
            )}
          >
            <div className="p-4 relative z-10">
              {/* View All Services Link */}
              <Link
                href="/services"
                className={cn(
                  'flex items-center justify-between p-3 mb-3 rounded-xl transition-all duration-300',
                  'bg-primary/10 border border-primary/20 hover:bg-primary/15',
                  'group'
                )}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 border border-primary/30">
                    <Grid3X3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-body-base font-semibold text-white">
                      View All Services
                    </div>
                    <div className="text-body-sm text-white/70">
                      Explore our complete service offering
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Divider */}
              <div className="h-px bg-white/[0.08] mb-3" />

              {/* Individual Services */}
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
                      onClick={() => setIsOpen(false)}
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
                        <div className="text-body-base font-medium text-white">
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
  );
};
