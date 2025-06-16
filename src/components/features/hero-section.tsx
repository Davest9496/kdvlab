'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background with angled lines pattern */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

        {/* Angled lines background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(135deg, 
              transparent 0%, 
              transparent 45%, 
              rgba(255,255,255,0.05) 46%, 
              rgba(255,255,255,0.05) 48%, 
              transparent 49%, 
              transparent 51%, 
              rgba(255,255,255,0.05) 52%, 
              rgba(255,255,255,0.05) 54%, 
              transparent 55%, 
              transparent 65%, 
              rgba(255,255,255,0.03) 66%, 
              rgba(255,255,255,0.03) 68%, 
              transparent 69%, 
              transparent 100%)`,
            backgroundSize: '120px 120px',
          }}
        />

        {/* Additional angled lines for more depth */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-15"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(18, 164, 237, 0.1) 2px,
              rgba(18, 164, 237, 0.1) 4px
            )`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* More subtle diagonal lines */}
        <div
          className="absolute top-0 right-0 w-3/4 h-full opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1px,
              rgba(255, 255, 255, 0.1) 1px,
              rgba(255, 255, 255, 0.1) 2px
            )`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      </div>

      {/* Animated gradient orbs for ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Subtitle with play icon */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full">
                <div className="w-0 h-0 border-l-[6px] border-l-primary border-y-[4px] border-y-transparent ml-0.5" />
              </div>
              <span className="text-responsive-base font-medium text-foreground/80">
                Building innovative software solutions
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-responsive-xl font-heading leading-tight">
                Innovative Software{' '}
                <span className="text-gradient inline-block text-[1em] leading-[inherit]">
                  Solutions for Modern
                </span>{' '}
                Businesses
              </h1>
            </div>

            {/* Description */}
            <p className="text-responsive-base text-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We build custom software that transforms how businesses operate,
              connecting people with technology that works for them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group border border-border hover:border-primary/50 bg-background/50 backdrop-blur-sm text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:bg-primary/10">
                <span className="flex items-center gap-2">
                  Learn More
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[5px] border-l-current border-y-[3px] border-y-transparent group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </span>
              </button>
            </div>

            {/* Discover more section */}
            <div className="pt-8">
              <button className="group flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 mx-auto lg:mx-0">
                <span className="text-sm font-medium">Discover more</span>
                <div className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M8 3v10M3 8l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right side - Optimized Vector image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-2xl">
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl scale-110 animate-pulse-slow" />

              {/* Main vector image using Next.js Image */}
              <div className="relative z-10 animate-float">
                <Image
                  src="/images/Vector.png"
                  alt="Innovative software solutions visualization showing modern technology stack"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>

              {/* Floating elements around the vector */}
              <div
                className="absolute top-1/4 -left-4 w-3 h-3 bg-primary rounded-full animate-bounce opacity-80"
                style={{ animationDelay: '0.5s' }}
              />
              <div
                className="absolute top-3/4 -right-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: '1.5s' }}
              />
              <div
                className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-bounce opacity-70"
                style={{ animationDelay: '2s' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-primary/50 transition-colors duration-300">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Performance monitoring comment for development */}
      {/* 
        Performance optimizations included:
        - Next.js Image component with proper optimization
        - Priority loading for hero image
        - Proper width/height attributes for layout stability
        - CSS transforms for animations (GPU accelerated)
        - Minimal DOM nodes for smooth animations
        - Semantic HTML for SEO
      */}
    </section>
  );
};

export default HeroSection;
