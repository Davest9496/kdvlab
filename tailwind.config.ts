import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // STEP 1: Complete font-weight theme override - Force all weights to 400
    fontWeight: {
      thin: '400',
      extralight: '400',
      light: '400',
      normal: '400',
      medium: '400',
      semibold: '400',
      bold: '400',
      extrabold: '400',
      black: '400',
      100: '400',
      200: '400',
      300: '400',
      400: '400',
      500: '400',
      600: '400',
      700: '400',
      800: '400',
      900: '400',
    },
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
        // Use different font families for hierarchy instead of weights
        heading: [
          'var(--font-gilroy-bold)', // This gives "bold" appearance at weight 400
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        'heading-light': [
          'var(--font-gilroy-light)', // This gives "light" appearance at weight 400
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        body: ['var(--font-rubik)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-rubik)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // STEP 2: Remove all fontWeight specifications from fontSize configs
        // Let font-family handle the visual weight difference

        // Hero text: Visual impact through font-family, not weight
        hero: [
          'clamp(2rem, 8vw, 3rem)', // 32px min, 48px max
          {
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
            // No fontWeight specified - defaults to 400
          },
        ],

        // Headings: Use font-family for hierarchy
        heading: [
          'clamp(1.75rem, 6vw, 2.5rem)', // 28px min, 40px max
          {
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            // No fontWeight specified - defaults to 400
          },
        ],

        // Sub-headings: Consistent weight, different family if needed
        subheading: [
          'clamp(1.125rem, 3vw, 1.25rem)', // 18px min, 20px max
          {
            lineHeight: '1.3',
            letterSpacing: '-0.01em',
            // No fontWeight specified - defaults to 400
          },
        ],

        // Body text: Standard treatment
        body: [
          'clamp(0.875rem, 2vw, 1rem)', // 14px min, 16px max
          {
            lineHeight: '1.6',
            letterSpacing: '0em',
            // No fontWeight specified - defaults to 400
          },
        ],

        // Specific sizes for precise control - no weights
        'hero-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }], // 48px
        'heading-lg': [
          '2.5rem',
          { lineHeight: '1.2', letterSpacing: '-0.02em' },
        ], // 40px
        'subheading-md': [
          '1.25rem',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ], // 20px
        'body-base': ['1rem', { lineHeight: '1.6', letterSpacing: '0em' }], // 16px

        // Responsive variants - no weights
        'hero-responsive': [
          'clamp(1.75rem, 5vw + 1rem, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.025em' },
        ],
        'heading-responsive': [
          'clamp(1.5rem, 4vw + 0.5rem, 2.5rem)',
          { lineHeight: '1.2', letterSpacing: '-0.02em' },
        ],
        'subheading-responsive': [
          'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em' },
        ],
        'body-responsive': [
          'clamp(0.875rem, 1vw + 0.5rem, 1rem)',
          { lineHeight: '1.6', letterSpacing: '0em' },
        ],
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

    // STEP 3: Font Weight Enforcement Plugin
    function ({ addBase, addUtilities, addComponents }: { addBase: any; addUtilities: any; addComponents: any }) {
      // Base styles - enforce 400 weight globally
      addBase({
        // Global font-weight override
        '*': {
          'font-weight': '400 !important',
        },

        // Specific element overrides
        'h1, h2, h3, h4, h5, h6, strong, b, bold': {
          'font-weight': '400 !important',
        },

        // CSS custom properties
        ':root': {
          '--font-weight': '400',
          '--font-weight-normal': '400',
          '--font-weight-bold': '400', // Even "bold" is 400
        },
      });

      // Component styles for typography hierarchy using font families
      addComponents({
        // Hero text components
        '.text-hero': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(2rem, 8vw, 3rem)',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          fontWeight: '400',
        },

        // Heading components - use ExtraBold family for impact
        '.text-heading': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },

        // Subheading components - use Light family for contrast
        '.text-subheading': {
          fontFamily: 'var(--font-gilroy-light)',
          fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },

        // Body text components
        '.text-body': {
          fontFamily: 'var(--font-rubik)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          lineHeight: '1.6',
          letterSpacing: '0em',
          fontWeight: '400',
        },
      });

      // Utility classes - override ALL font-weight utilities
      const fontWeightOverrides: Record<string, any> = {};
      const weights = [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ];
      const numericWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

      weights.forEach((weight) => {
        fontWeightOverrides[`.font-${weight}`] = {
          'font-weight': '400 !important',
        };
      });

      numericWeights.forEach((weight) => {
        fontWeightOverrides[`.font-${weight}`] = {
          'font-weight': '400 !important',
        };
      });

      // Add responsive typography utilities with proper font families
      const typographyUtilities = {
        // Hero variants using ExtraBold family
        '.text-hero-xl': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(2.5rem, 10vw, 4rem)',
          lineHeight: '1.05',
          letterSpacing: '-0.03em',
          fontWeight: '400',
        },
        '.text-hero-lg': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(2rem, 8vw, 3rem)',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          fontWeight: '400',
        },
        '.text-hero-md': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
          lineHeight: '1.15',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },

        // Heading variants using ExtraBold family
        '.text-heading-xl': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(2rem, 7vw, 2.75rem)',
          lineHeight: '1.15',
          letterSpacing: '-0.025em',
          fontWeight: '400',
        },
        '.text-heading-lg': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        },
        '.text-heading-md': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          lineHeight: '1.25',
          letterSpacing: '-0.015em',
          fontWeight: '400',
        },
        '.text-heading-sm': {
          fontFamily: 'var(--font-gilroy-bold)',
          fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },

        // Subheading variants using Light family for contrast
        '.text-subheading-lg': {
          fontFamily: 'var(--font-gilroy-light)',
          fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },
        '.text-subheading-md': {
          fontFamily: 'var(--font-gilroy-light)',
          fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },
        '.text-subheading-sm': {
          fontFamily: 'var(--font-rubik)',
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          lineHeight: '1.4',
          letterSpacing: '-0.005em',
          fontWeight: '400',
        },

        // Body text variants using Rubik
        '.text-body-lg': {
          fontFamily: 'var(--font-rubik)',
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          lineHeight: '1.6',
          letterSpacing: '0em',
          fontWeight: '400',
        },
        '.text-body-base': {
          fontFamily: 'var(--font-rubik)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          lineHeight: '1.6',
          letterSpacing: '0em',
          fontWeight: '400',
        },
        '.text-body-sm': {
          fontFamily: 'var(--font-rubik)',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
          lineHeight: '1.5',
          letterSpacing: '0.01em',
          fontWeight: '400',
        },
        '.text-body-xs': {
          fontFamily: 'var(--font-rubik)',
          fontSize: 'clamp(0.625rem, 1.25vw, 0.75rem)',
          lineHeight: '1.5',
          letterSpacing: '0.01em',
          fontWeight: '400',
        },
      };

      addUtilities({
        ...fontWeightOverrides,
        ...typographyUtilities,
      });
    },
  ],
};

export default config;
