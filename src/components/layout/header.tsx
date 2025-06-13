'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Submenu configuration
const submenuConfig = {
  services: [
    {
      href: '/services/custom-software',
      label: 'Custom Software',
      isHighlighted: true,
    },
    { href: '/services/web-applications', label: 'Web Applications' },
    { href: '/services/mobile-apps', label: 'Mobile Apps' },
    { href: '/services/cloud-services', label: 'Cloud Services' },
    { href: '/services/ui-ux-design', label: 'UI/UX Design' },
    { href: '/services/consultancy', label: 'Consultancy' },
  ],
};

// Submenu Component
type SubmenuItem = {
  href: string;
  label: string;
  isHighlighted?: boolean;
};

type SubmenuProps = {
  items: SubmenuItem[];
  isVisible: boolean;
  parentRef: React.RefObject<HTMLElement>;
};

const Submenu = ({ items, isVisible, parentRef }: SubmenuProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (parentRef.current && isVisible) {
      const rect = parentRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left,
        y: rect.bottom + 8,
      });
    }
  }, [isVisible, parentRef]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed z-[60] bg-background border border-border/20 rounded-lg shadow-lg overflow-hidden backdrop-blur-md"
          style={{
            left: position.x,
            top: position.y,
            minWidth: '200px',
          }}
        >
          {/* Submenu header */}
          <div className="px-4 py-3 bg-muted/30 border-b border-border/10">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              submenu
            </span>
          </div>

          {/* Menu items */}
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm transition-all duration-200 border-l-3 ${
                  item.isHighlighted
                    ? 'bg-primary text-primary-foreground border-l-primary font-medium'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted/50 border-l-transparent hover:border-l-primary/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<keyof typeof submenuConfig | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      href: '/services',
      label: 'Services',
      hasDropdown: true,
      submenuKey: 'services',
    },
    { href: '/our-work', label: 'Our Work' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
  ];

interface NavItem {
    href: string;
    label: string;
    hasDropdown?: boolean;
    submenuKey?: keyof typeof submenuConfig;
}

interface NavRefs {
    [key: string]: HTMLElement | null;
}

const handleMouseEnter = (submenuKey: keyof typeof submenuConfig | undefined): void => {
    if (timeoutRef.current) {
        if (timeoutRef.current) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
    }
    if (submenuKey && submenuConfig[submenuKey]) {
        setActiveSubmenu(submenuKey);
    }
};

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    setActiveSubmenu(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/20'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-heading font-bold">
              <span className="text-primary">KDV</span>
              <span className="text-foreground">LAB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                ref={(el) => {
                  if (item.submenuKey) {
                    navRefs.current[item.submenuKey] = el;
                  }
                }}
                onMouseEnter={() => handleMouseEnter(item.submenuKey as keyof typeof submenuConfig)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    item.href === '/'
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <motion.svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{
                        rotate: activeSubmenu === item.submenuKey ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </Link>

                {/* Dropdown indicator line for active page */}
                {item.href === '/' && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeIndicator"
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-foreground/70 hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Get In Touch Button */}
            <Button
              variant="outline"
              className="hidden md:flex items-center gap-2 border-foreground/20 hover:border-foreground/40 text-foreground"
            >
              Get In Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="flex items-center gap-2">
                <Menu className="w-5 h-5" />
                <span className="text-sm font-medium">Menu</span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/20 bg-background/95 backdrop-blur-md">
            <nav className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-base transition-colors ${
                    item.href === '/'
                      ? 'text-primary font-medium'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && ' +'}
                </Link>
              ))}

              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full justify-between">
                  Get In Touch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Submenu */}
      {activeSubmenu && submenuConfig[activeSubmenu] && (
        <div
          onMouseEnter={handleSubmenuMouseEnter}
          onMouseLeave={handleSubmenuMouseLeave}
        >
          <Submenu
            items={submenuConfig[activeSubmenu]}
            isVisible={!!activeSubmenu}
            parentRef={{ current: navRefs.current[activeSubmenu] }}
          />
        </div>
      )}
    </header>
  );
};
