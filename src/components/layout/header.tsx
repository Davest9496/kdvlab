'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Custom Software', href: '/services/custom-software' },
      { name: 'Web Applications', href: '/services/web-applications' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'Cloud Services', href: '/services/cloud-services' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'Consultancy', href: '/services/consultancy' },
    ],
  },
  { name: 'Our Work', href: '/work' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown')) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        'border-b border-white/10',
        scrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-background/90 backdrop-blur-sm'
      )}
    >
      <nav className="container flex items-center justify-between py-4 ">
        {/* Logo - Using Gilroy ExtraBold family at weight 400 for brand impact */}
        <Link
          href="/"
          className={cn(
            'font-gilroy-bold text-white transition-all duration-200',
            'text-subheading-lg', // Uses CSS variable: 20px-24px responsive
            'hover:text-gradient hover:scale-105',
            'tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
          )}
        >
          KDVLAB
        </Link>

        {/* Desktop Navigation - Using Gilroy Light family at weight 400 */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative services-dropdown">
              {item.hasDropdown ? (
                // Services dropdown
                <div className="relative">
                  <button
                    onClick={() =>
                      setServicesDropdownOpen(!servicesDropdownOpen)
                    }
                    className={cn(
                      'font-gilroy-light text-body-base',
                      'text-white/80 hover:text-white',
                      'font-normal flex items-center space-x-1',
                      'transition-all duration-200 ease-out',
                      'hover:scale-105 hover:text-gradient-body',
                      'tracking-normal',
                      'relative after:absolute after:bottom-0 after:left-0',
                      'after:w-0 after:h-0.5 after:bg-primary',
                      'after:transition-all after:duration-300',
                      'hover:after:w-full',
                      'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        servicesDropdownOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div
                      className={cn(
                        'absolute top-full left-0 mt-2 w-48',
                        'bg-background/95 backdrop-blur-xl',
                        'border border-white/10 rounded-lg',
                        'shadow-lg shadow-black/10',
                        'py-2',
                        'animate-slide-down'
                      )}
                    >
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={cn(
                            'block px-4 py-2 text-body-sm',
                            'font-gilroy-light font-normal',
                            'text-white/80 hover:text-white',
                            'hover:bg-white/5',
                            'transition-all duration-200',
                            'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                          )}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Regular navigation link
                <Link
                  href={item.href}
                  className={cn(
                    'font-gilroy-light text-body-base',
                    'text-white/80 hover:text-white',
                    'font-normal',
                    'transition-all duration-200 ease-out',
                    'hover:scale-105 hover:text-gradient-body',
                    'tracking-normal',
                    'relative after:absolute after:bottom-0 after:left-0',
                    'after:w-0 after:h-0.5 after:bg-primary',
                    'after:transition-all after:duration-300',
                    'hover:after:w-full',
                    'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right side - Search and CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Icon */}
          <button
            className={cn(
              'text-white/80 hover:text-white p-2 rounded-lg',
              'hover:bg-white/10 transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary'
            )}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Get In Touch Button */}
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center space-x-2 px-6 py-2.5 rounded-lg',
              'bg-primary text-primary-foreground',
              'font-gilroy-light font-normal text-body-sm',
              'hover:bg-primary/90 hover:scale-105',
              'transition-all duration-200 will-change-transform',
              'shadow-lg hover:shadow-xl',
              'border border-primary/20 hover:border-primary/40',
              'drop-shadow-[0_2px_4px_rgba(18,164,237,0.3)]'
            )}
          >
            <span>Get In Touch</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </Link>

          {/* Menu Button (for tablet/smaller desktop) */}
          <button
            type="button"
            className={cn(
              'text-white/80 hover:text-white p-2 rounded-lg',
              'hover:bg-white/10 transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary',
              'flex items-center space-x-2'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-body-sm font-gilroy-light font-normal">
              Menu
            </span>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu button (for mobile only) */}
        <button
          type="button"
          className={cn(
            'lg:hidden text-white p-2 rounded-lg',
            'hover:bg-white/10 transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary'
          )}
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
          <div
            className={cn(
              'absolute top-full left-0 right-0 lg:hidden',
              'bg-background/95 backdrop-blur-xl',
              'border-b border-white/10',
              'shadow-lg shadow-black/10',
              'animate-slide-down'
            )}
          >
            <div className="container py-6 space-y-4">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <Link
                        href={item.href}
                        className={cn(
                          'block font-gilroy-light text-body-lg',
                          'text-white/80 hover:text-white',
                          'font-normal py-2 px-4 rounded-lg',
                          'hover:bg-white/5',
                          'transition-all duration-200 ease-out',
                          'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                        )}
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {/* Mobile dropdown items */}
                      <div className="ml-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={cn(
                              'block font-gilroy-light text-body-base',
                              'text-white/60 hover:text-white/80',
                              'font-normal py-1 px-4 rounded-lg',
                              'hover:bg-white/5',
                              'transition-all duration-200',
                              'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block font-gilroy-light text-body-lg',
                        'text-white/80 hover:text-white',
                        'font-normal py-2 px-4 rounded-lg',
                        'hover:bg-white/5',
                        'transition-all duration-200 ease-out',
                        'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                      )}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className={cn(
                    'btn-cta w-full text-center block',
                    'py-3 px-6 rounded-lg'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
