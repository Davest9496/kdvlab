import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#E8F4FD',
          100: '#D1E9FB',
          200: '#A3D3F7',
          300: '#75BDF3',
          400: '#47A7EF',
          500: '#12A4ED', // Main accent color
          600: '#0E83BE',
          700: '#0B628F',
          800: '#074160',
          900: '#042030',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        heading: [
          'var(--font-gilroy)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        body: ['var(--font-rubik)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-rubik)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Your responsive typography system
        // Hero: 48px desktop, scales down responsively
        hero: [
          'clamp(2rem, 8vw, 3rem)', // 32px min, 48px max
          {
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
            fontWeight: '800',
          },
        ],

        // Headings: 40px desktop, scales down responsively
        heading: [
          'clamp(1.75rem, 6vw, 2.5rem)', // 28px min, 40px max
          {
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontWeight: '800',
          },
        ],

        // Sub-headings: 20px desktop, scales down responsively
        subheading: [
          'clamp(1.125rem, 3vw, 1.25rem)', // 18px min, 20px max
          {
            lineHeight: '1.3',
            letterSpacing: '-0.01em',
            fontWeight: '600',
          },
        ],

        // Body text: 16px desktop, scales down responsively
        body: [
          'clamp(0.875rem, 2vw, 1rem)', // 14px min, 16px max
          {
            lineHeight: '1.6',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],

        // Alternative specific sizes for precise control
        'hero-xl': [
          '3rem',
          { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' },
        ], // 48px
        'heading-lg': [
          '2.5rem',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' },
        ], // 40px
        'subheading-md': [
          '1.25rem',
          { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' },
        ], // 20px
        'body-base': [
          '1rem',
          { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' },
        ], // 16px

        // Responsive breakpoint variants
        'hero-responsive': [
          'clamp(1.75rem, 5vw + 1rem, 3rem)', // More aggressive scaling
          { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' },
        ],
        'heading-responsive': [
          'clamp(1.5rem, 4vw + 0.5rem, 2.5rem)',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'subheading-responsive': [
          'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'body-responsive': [
          'clamp(0.875rem, 1vw + 0.5rem, 1rem)',
          { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' },
        ],
      },
      // Enhanced spacing for typography
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Typography-specific animations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'text-focus': 'textFocus 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translate3d(0, 10px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale3d(0.95, 0.95, 1)' },
          '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
        },
        textFocus: {
          '0%': { opacity: '0', transform: 'scale(0.98)', filter: 'blur(2px)' },
          '100%': { opacity: '1', transform: 'scale(1)', filter: 'blur(0px)' },
        },
      },
      // Screen breakpoints for reference
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Custom plugin for typography utilities
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        // Responsive text utilities with your exact specs
        '.text-hero-responsive': {
          fontSize: 'clamp(2rem, 8vw, 3rem)', // 32px - 48px
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          fontWeight: '800',
          fontFamily: 'var(--font-gilroy)',
        },
        '.text-heading-responsive': {
          fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', // 28px - 40px
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '800',
          fontFamily: 'var(--font-gilroy)',
        },
        '.text-subheading-responsive': {
          fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', // 18px - 20px
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '600',
          fontFamily: 'var(--font-rubik)',
        },
        '.text-body-responsive': {
          fontSize: 'clamp(0.875rem, 2vw, 1rem)', // 14px - 16px
          lineHeight: '1.6',
          letterSpacing: '0em',
          fontWeight: '400',
          fontFamily: 'var(--font-rubik)',
        },

        // Fixed size utilities for precise control
        '.text-hero-fixed': {
          fontSize: '3rem', // 48px
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          fontWeight: '800',
          fontFamily: 'var(--font-gilroy)',
        },
        '.text-heading-fixed': {
          fontSize: '2.5rem', // 40px
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '800',
          fontFamily: 'var(--font-gilroy)',
        },
        '.text-subheading-fixed': {
          fontSize: '1.25rem', // 20px
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '600',
          fontFamily: 'var(--font-rubik)',
        },
        '.text-body-fixed': {
          fontSize: '1rem', // 16px
          lineHeight: '1.6',
          letterSpacing: '0em',
          fontWeight: '400',
          fontFamily: 'var(--font-rubik)',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

export default config;
