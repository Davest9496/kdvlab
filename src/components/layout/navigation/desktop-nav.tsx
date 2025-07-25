'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems } from './data';
import { ServicesDropdown } from './services-dropdown';
import { GetInTouchButtonPill } from '@/components/ui/get-in-touch-button';

export const DesktopNav: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => (
    <Link
      href={href}
      className={cn(
        'group relative text-body-base font-medium transition-all duration-300',
        'font-body',
        isActive(href) ? 'text-primary' : 'text-white/80 hover:text-white',
        'relative after:absolute after:bottom-0 after:left-0 hover:scale-105',
        'after:h-0.5 after:w-0 after:bg-primary',
        'after:transition-all after:duration-300',
        'hover:after:w-full',
        'drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
      )}
    >
      <span className="relative z-10">{children}</span>
      {isActive(href) && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
          initial={false}
          transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
        />
      )}
    </Link>
  );

  return (
    <div className="hidden items-center space-x-8 lg:flex">
      {/* Home */}
      <NavLink href="/">Home</NavLink>

      {/* About */}
      <NavLink href="/about">About</NavLink>

      {/* Services Dropdown */}
      <ServicesDropdown />

      {/* Remaining navigation items (excluding contact) */}
      {navItems.slice(2).map(item => (
        <NavLink key={item.id} href={item.href}>
          {item.label}
        </NavLink>
      ))}

      {/* Smart CTA Button with active state */}
      <GetInTouchButtonPill
        href="/contact"
        size="md"
        className="px-8 py-3"
        showActiveState={true} // This will show active state when on /contact
      >
        Get In Touch
      </GetInTouchButtonPill>
    </div>
  );
};
