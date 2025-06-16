'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for enhanced styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        'border-b border-white/10',
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-background/90 backdrop-blur-sm'
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-heading font-bold text-white hover:text-primary transition-colors"
        >
          KDVLab
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'transition-colors duration-200 relative',
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-white/80 hover:text-white',
                  // Add underline for active state
                  isActive &&
                    'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center justify-center',
              'px-4 py-2 rounded-lg text-sm font-medium',
              'bg-primary text-white hover:bg-primary/90',
              'transition-all duration-200',
              'hover:scale-105 hover:shadow-lg hover:shadow-primary/25'
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white hover:text-primary transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10 md:hidden">
            <div className="container py-6 space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block py-2 transition-colors duration-200',
                      isActive
                        ? 'text-primary font-medium'
                        : 'text-white/80 hover:text-white'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className={cn(
                    'block w-full text-center',
                    'px-4 py-3 rounded-lg font-medium',
                    'bg-primary text-white hover:bg-primary/90',
                    'transition-colors duration-200'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
