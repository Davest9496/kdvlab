'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import logoImage from '/images/Logo/logo-cropped.png';

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
        'cursor-pointer text-heading-sm tracking-tight',
        'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]',
        // Fixed positioning - no transform or scale effects
        'relative', // Remove any transform-based animations
        className
      )}
    >
      {/* Custom Logo Image */}
      <div className="relative h-20 w-20 flex-shrink-0">
        <Image
          src={logoImage}
          alt="KDVLAB Logo"
          fill
          className="object-contain"
          sizes="80px"
          priority
        />
      </div>
    </Link>
  );
};
