'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GetInTouchButtonProps {
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const GetInTouchButton: React.FC<GetInTouchButtonProps> = ({
  href = '/contact',
  className,
  size = 'md',
  children = 'Get In Touch'
}) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-body-sm',
    md: 'px-8 py-3 text-body-base',
    lg: 'px-10 py-4 text-body-lg'
  };

  const buttonClasses = cn(
    // Base styles matching your image
    'group relative inline-flex items-center justify-between',
    'rounded-full border-2 border-white/20',
    'bg-transparent text-white font-medium',
    'transition-all duration-400 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',
    
    // Hover effects with your blue color
    'hover:border-primary hover:bg-primary',
    'hover:shadow-[0_8px_32px_rgba(18,164,237,0.4)]',
    
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
      
      {/* Background overlay for smooth color transition */}
      <div className={cn(
        'absolute inset-0 rounded-full',
        'bg-primary opacity-0 group-hover:opacity-100',
        'transition-opacity duration-400 ease-out'
      )} />
    </Link>
  );
};

// Alternative version with just text and underline (like in the image)
export const GetInTouchButtonMinimal: React.FC<GetInTouchButtonProps> = ({
  href = '/contact',
  className,
  children = 'Get In Touch'
}) => {
  return (
    <Link 
      href={href} 
      className={cn(
        'group relative inline-flex items-center',
        'text-white font-medium text-body-lg',
        'transition-all duration-300',
        'hover:text-primary',
        className
      )}
    >
      <span className="relative">
        {children}
        
        {/* Underline effect */}
        <span className={cn(
          'absolute left-0 bottom-0 h-0.5 w-full',
          'bg-white/30 transition-all duration-300',
          'group-hover:bg-primary'
        )} />
      </span>
      
      <ArrowRight className={cn(
        'w-5 h-5 ml-3 transition-all duration-300',
        'group-hover:translate-x-1 group-hover:text-primary'
      )} />
    </Link>
  );
};

// Main button matching your exact image style
export const GetInTouchButtonPill: React.FC<GetInTouchButtonProps> = ({
  href = '/contact',
  className,
  size = 'lg',
  children = 'Get In Touch'
}) => {
  return (
    <Link 
      href={href} 
      className={cn(
        // Exact pill shape like in your image
        'group relative inline-flex items-center gap-4',
        'px-12 py-5 rounded-full',
        'border-2 border-white/25',
        'bg-transparent text-white font-medium text-body-lg',
        'min-w-[200px]', // Ensures consistent width
        'transition-all duration-500 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',
        
        // Hover effects with your #12A4ED blue
        'hover:border-primary hover:bg-primary',
        'hover:shadow-[0_12px_40px_rgba(18,164,237,0.4)]',
        'hover:scale-105',
        
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      
      <ArrowRight className={cn(
        'w-6 h-6 relative z-10 transition-all duration-300',
        'group-hover:translate-x-2'
      )} />
      
      {/* Smooth background fill on hover */}
      <div className={cn(
        'absolute inset-0 rounded-full',
        'bg-gradient-to-r from-primary to-primary',
        'opacity-0 group-hover:opacity-100',
        'transition-all duration-500 ease-out',
        'scale-95 group-hover:scale-100'
      )} />
    </Link>
  );
};

export default GetInTouchButton;