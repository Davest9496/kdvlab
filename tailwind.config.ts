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
        // Match the CSS variable names exactly
        heading: ['var(--font-gilroy-bold)', 'system-ui', 'sans-serif'],
        'heading-light': [
          'var(--font-gilroy-light)',
          'system-ui',
          'sans-serif',
        ],
        body: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-rubik)', 'system-ui', 'sans-serif'], // Default

        // Alternative names for convenience
        'gilroy-bold': ['var(--font-gilroy-bold)', 'system-ui', 'sans-serif'],
        'gilroy-light': ['var(--font-gilroy-light)', 'system-ui', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Your existing responsive sizes
        'hero-xl': [
          'clamp(2.5rem, 10vw, 4rem)',
          { lineHeight: '1.05', letterSpacing: '-0.03em' },
        ],
        'hero-lg': [
          'clamp(2rem, 8vw, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.025em' },
        ],
        'hero-md': [
          'clamp(1.5rem, 6vw, 2.25rem)',
          { lineHeight: '1.15', letterSpacing: '-0.02em' },
        ],

        'heading-xl': [
          'clamp(2rem, 7vw, 2.75rem)',
          { lineHeight: '1.15', letterSpacing: '-0.025em' },
        ],
        'heading-lg': [
          'clamp(1.75rem, 6vw, 2.5rem)',
          { lineHeight: '1.2', letterSpacing: '-0.02em' },
        ],
        'heading-md': [
          'clamp(1.5rem, 5vw, 2rem)',
          { lineHeight: '1.25', letterSpacing: '-0.015em' },
        ],
        'heading-sm': [
          'clamp(1.25rem, 4vw, 1.5rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ],

        'subheading-lg': [
          'clamp(1.25rem, 3.5vw, 1.5rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ],
        'subheading-md': [
          'clamp(1.125rem, 3vw, 1.25rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ],
        'subheading-sm': [
          'clamp(1rem, 2.5vw, 1.125rem)',
          { lineHeight: '1.4', letterSpacing: '-0.005em' },
        ],

        'body-lg': [
          'clamp(1rem, 2.5vw, 1.125rem)',
          { lineHeight: '1.6', letterSpacing: '0em' },
        ],
        'body-base': [
          'clamp(0.875rem, 2vw, 1rem)',
          { lineHeight: '1.6', letterSpacing: '0em' },
        ],
        'body-sm': [
          'clamp(0.75rem, 1.5vw, 0.875rem)',
          { lineHeight: '1.5', letterSpacing: '0.01em' },
        ],
      },
      fontWeight: {
        // Proper weights for your font files
        light: '300', // Gilroy Light
        normal: '400', // Default
        medium: '500', // Rubik medium
        semibold: '600', // Rubik semibold
        bold: '700', // Rubik bold
        extrabold: '800', // Gilroy ExtraBold
        black: '900', // Rubik black
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
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
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #12A4ED 0%, #47A7EF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #141414 0%, #262626 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(18, 164, 237, 0.3)',
        'glow-lg': '0 0 40px rgba(18, 164, 237, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(18, 164, 237, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),

    // Custom plugin for additional utilities
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-gpu': {
          transform: 'translateZ(0)',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'hsl(var(--muted))',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'hsl(var(--muted-foreground))',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'hsl(var(--primary))',
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

export default config;