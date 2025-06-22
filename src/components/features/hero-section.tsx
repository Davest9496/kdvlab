'use client';

import React from 'react';
import Image from 'next/image';
import { GetInTouchButton } from '@/components/ui/get-in-touch-button';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const scrollToSection = () => {
    const element = document.querySelector('[aria-label="Our Services"]');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Enhanced Background with Single Moving Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

        {/* Single floating glow - Bottom left to top right - More Noticeable */}
        <div
          className="absolute w-[900px] h-[900px] bg-primary/15 rounded-full blur-3xl opacity-90"
          style={{
            animation: 'glowFloat 85s ease-in-out infinite',
          }}
        />

        {/* Additional glow layer for enhanced visibility */}
        <div
          className="absolute w-[600px] h-[600px] bg-primary/15 rounded-full blur-2xl opacity-80"
          style={{
            animation: 'glowFloat 95s ease-in-out infinite',
            animationDelay: '0.5s',
          }}
        />

        {/* Core bright center for more impact */}
        <div
          className="absolute w-[300px] h-[300px] bg-primary/15 rounded-full blur-xl opacity-70"
          style={{
            animation: 'glowFloat 65s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />

        {/* Reduced contrast overlay to maintain readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(20,20,20,0.1)_80%)]" />

        {/* Noise texture for enhanced glass effect */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E\')',
          }}
        />
      </div>

      {/* Decorative floating shapes */}
      <Image
        src="/images/bg-shape.png"
        alt=""
        width={300}
        height={300}
        aria-hidden="true"
        priority={false}
        className="absolute bottom-0 right-0 w-96 h-96 lg:w-[36rem] lg:h-[36rem] pointer-events-none select-none hidden sm:block opacity-30"
      />

      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Subtitle with play icon */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/10 shadow-lg">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
              </div>
              <span className="text-body-base font-medium text-foreground/80 drop-shadow-sm">
                Building innovative software solutions
              </span>
            </div>

            {/* Main headline with enhanced text shadow */}
            <div className="space-y-4">
              <h1 className="text-hero-lg font-heading leading-tight drop-shadow-lg">
                Innovative Software{' '}
                <span className="text-gradient bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent drop-shadow-md">
                  Solutions for Modern
                </span>{' '}
                Businesses
              </h1>
            </div>

            {/* Description with subtle enhancement */}
            <p className="text-body-lg text-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
              We build custom software that transforms how businesses operate,
              connecting people with technology that works for them.
            </p>

            {/* Responsive CTA Wrapper - Key Change Here */}
            <div className="w-full">
              {/* 
                Responsive Layout Explanation:
                - Mobile (default): flex-row with gap-4, items side-by-side using full width
                - Large screens (lg:): flex-col with gap-6, items stacked vertically
                - Both: justify-center on mobile, lg:justify-start on desktop
              */}
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 justify-center lg:justify-start items-center lg:items-start w-full">
                {/* CTA Button - maintains its existing styling */}
                <div className="flex-shrink-0">
                  <GetInTouchButton
                    size="lg"
                    className="min-w-[200px] bg-primary hover:bg-primary/90 focus:bg-primary text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                {/* Discover more section */}
                <div className="flex-shrink-0">
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection();
                    }}
                    className="group flex items-center gap-3 text-foreground/60 hover:text-foreground transition-all duration-300 text-body-sm font-medium drop-shadow-sm cursor-pointer"
                  >
                    {/* Circular icon container with rounded background */}
                    <div className="relative w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Arrow icon - V-shaped down arrow */}
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-4 h-4 group-hover:text-primary/80 transition-colors duration-300"
                      >
                        <path
                          d="m4 6 4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Standalone text */}
                    <span className="font-rubik font-medium tracking-wide group-hover:text-white/90 transition-colors duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                      Discover more
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Vector image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-2xl">
              {/* Enhanced glow effect behind the image with interaction with background glows */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl scale-110 animate-pulse-slow opacity-80" />

              {/* Secondary glow for depth */}
              <div
                className="absolute inset-0 bg-gradient-to-tl from-blue-400/10 via-transparent to-primary/15 rounded-full blur-2xl scale-125 animate-pulse-slow opacity-60"
                style={{ animationDelay: '1s' }}
              />

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
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Custom Keyframes and Styles */}
      <style jsx>{`
        @keyframes glowFloat {
          0% {
            transform: translate(-400px, -350px) scale(0.9);
            opacity: 0.7;
          }
          12% {
            transform: translate(800px, 200px) scale(1.2);
            opacity: 0.5;
          }
          28% {
            transform: translate(-300px, 400px) scale(0.8);
            opacity: 0.9;
          }
          34% {
            transform: translate(600px, -250px) scale(1.4);
            opacity: 0.6;
          }
          45% {
            transform: translate(-500px, 100px) scale(1.1);
            opacity: 1;
          }
          56% {
            transform: translate(700px, 350px) scale(0.7);
            opacity: 0.8;
          }
          67% {
            transform: translate(-200px, -400px) scale(1.3);
            opacity: 0.4;
          }
          73% {
            transform: translate(500px, 250px) scale(1);
            opacity: 0.9;
          }
          85% {
            transform: translate(-600px, -100px) scale(1.1);
            opacity: 0.6;
          }
          94% {
            transform: translate(400px, 450px) scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: translate(-350px, -200px) scale(1.2);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Enhanced blur effects for more noticeable glow */
        .blur-xl {
          filter: blur(24px);
        }

        .blur-2xl {
          filter: blur(40px);
        }

        .blur-3xl {
          filter: blur(64px);
        }

        /* Performance optimization for animations */
        .animate-float,
        [style*='glowFloat'] {
          will-change: transform, opacity;
          transform-origin: center;
          backface-visibility: hidden;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-bounce,
          .animate-pulse-slow,
          [style*='glowFloat'] {
            animation: none;
          }

          /* Provide a static glow position for reduced motion users */
          [style*='glowFloat'] {
            transform: translate(200px, 0px) scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Performance monitoring comment for development */}
      {/* 
        Performance optimizations included:
        - GPU-accelerated animations using transform and opacity
        - Will-change property for optimized rendering
        - Reduced motion support for accessibility
        - Efficient keyframe animations with proper easing
        - Layered glow effects for depth without performance impact
        - Next.js Image component with proper optimization
        - Semantic HTML for SEO
        - Enhanced responsive typography system
        - Backdrop blur effects for modern glass morphism
        
        Responsive Layout Features:
        - Mobile: CTA button and "Discover more" side-by-side for better space utilization
        - Desktop: Stacked layout maintaining visual hierarchy
        - Proper flex-shrink-0 to prevent unwanted compression
        - Consistent alignment and spacing across breakpoints
      */}
    </section>
  );
};

export default HeroSection;
