'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GetInTouchButtonProps {
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  showActiveState?: boolean; // New prop to control active state behavior
}

export const GetInTouchButton: React.FC<GetInTouchButtonProps> = ({
  href = '/contact',
  className,
  size = 'md',
  children = 'Get In Touch',
  showActiveState = false,
}) => {
  const pathname = usePathname();
  const isActive = showActiveState && pathname.startsWith(href);

  const sizeClasses = {
    sm: 'px-6 py-2 text-body-sm',
    md: 'px-8 py-3 text-body-base',
    lg: 'px-10 py-4 text-body-lg',
  };

  const buttonClasses = cn(
    // Base styles
    'group relative inline-flex items-center justify-between',
    'rounded-full border-2',
    'font-medium transition-all duration-400 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',

    // Active state styles
    isActive
      ? [
          'border-primary bg-primary text-white',
          'shadow-[0_8px_32px_rgba(18,164,237,0.4)]',
        ]
      : [
          'border-white/20 bg-transparent text-white',
          'hover:border-primary hover:bg-primary',
          'hover:shadow-[0_8px_32px_rgba(18,164,237,0.4)]',
        ],

    // Size classes
    sizeClasses[size],

    // Custom classes
    className
  );

  const arrowClasses = cn(
    'w-5 h-5 ml-3 transition-all duration-300',
    'group-hover:translate-x-1'
  );

  return (
    <Link href={href} className={buttonClasses}>
      <span className="relative z-10 flex items-center">
        {children}
        <ArrowRight className={arrowClasses} />
      </span>

      {/* Background overlay for smooth color transition (only for non-active state) */}
      {!isActive && (
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-primary opacity-0 group-hover:opacity-100',
            'transition-opacity duration-400 ease-out'
          )}
        />
      )}
    </Link>
  );
};

// Updated pill version with active state
export const GetInTouchButtonPill: React.FC<GetInTouchButtonProps> = ({
  href = '/contact',
  className,
  size = 'lg',
  children = 'Get In Touch',
  showActiveState = true, // Default to true for CTA buttons
}) => {
  const pathname = usePathname();
  const isActive = showActiveState && pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        // Base pill shape
        'group relative inline-flex items-center gap-4',
        'min-w-[200px] rounded-full px-12 py-5',
        'border-2 text-body-lg font-medium',
        'transition-all duration-500 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',

        // Active vs inactive styles
        isActive
          ? [
              // Active state - filled with primary color
              'border-primary bg-primary text-white',
              'shadow-[0_12px_40px_rgba(18,164,237,0.6)]',
              'scale-105',
            ]
          : [
              // Inactive state - transparent with hover effects
              'border-white/25 bg-transparent text-white',
              'hover:border-primary hover:bg-primary',
              'hover:shadow-[0_12px_40px_rgba(18,164,237,0.4)]',
              'hover:scale-105',
            ],

        className
      )}
    >
      <span className="relative z-10">{children}</span>

      <ArrowRight
        className={cn(
          'relative z-10 h-6 w-6 transition-all duration-300',
          isActive ? 'translate-x-2' : 'group-hover:translate-x-2'
        )}
      />

      {/* Background fill only for non-active state */}
      {!isActive && (
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r from-primary to-primary',
            'opacity-0 group-hover:opacity-100',
            'transition-all duration-500 ease-out',
            'scale-95 group-hover:scale-100'
          )}
        />
      )}
    </Link>
  );
};

// Alternative: Contextual button that changes based on current page
export const ContextualCTAButton: React.FC<
  Omit<GetInTouchButtonProps, 'children'>
> = ({ href = '/contact', className, size = 'lg', showActiveState = true }) => {
  const pathname = usePathname();
  const isOnContactPage = pathname.startsWith('/contact');

  // Change button text and behavior based on current page
  const buttonText = isOnContactPage ? 'Send Message' : 'Get In Touch';
  const buttonHref = isOnContactPage ? '#contact-form' : href;

  return (
    <GetInTouchButtonPill
      href={buttonHref}
      className={className}
      size={size}
      showActiveState={showActiveState}
    >
      {buttonText}
    </GetInTouchButtonPill>
  );
};

export default GetInTouchButton;
