'use client';

import React from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        'flex items-center space-x-2 font-heading text-white',
        'text-heading-sm tracking-tight cursor-pointer',
        'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]',
        // Fixed positioning - no transform or scale effects
        'relative', // Remove any transform-based animations
        className
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center w-10 h-10 rounded-2xl',
          'bg-primary/10 border border-primary/20'
          // Removed hover effects as requested
        )}
      >
        <Code2 className="w-5 h-5 text-primary" />
      </div>
      <span>KDVLAB</span>
    </Link>
  );
};
