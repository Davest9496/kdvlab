'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { DesktopNav } from './desktop-nav';
import { MobileMenuButton } from './mobile-menu-button';
import { MobileMenu } from './mobile-menu';

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for enhanced header styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
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
          {/* Logo - Fixed positioning, no movement */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </header>
  );
};

export default Navigation;
