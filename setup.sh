# KDVLab Setup Fixes Script

# 1. Create proper directory structure
mkdir -p src/app/fonts
mkdir -p src/components/{ui,layout,features}
mkdir -p src/lib
mkdir -p public/fonts

# 2. Download Gilroy fonts (or use alternatives)
# Option A: Use free Gilroy alternative (Nunito Sans)
echo "Creating font fallback configuration..."

# Create a fallback fonts setup if Gilroy is not available
cat > src/app/fonts/index.ts << 'EOF'
import { Nunito_Sans, Rubik } from 'next/font/google'

// Nunito Sans as Gilroy alternative (free and similar)
export const heading = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

export const body = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})
EOF

# 3. Updated layout.tsx without font loading issues
cat > src/app/layout.tsx << 'EOF'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { heading, body } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kdvlab.com'),
  title: {
    template: '%s | KDVLab',
    default: 'KDVLab - Modern Web Development by Dave Ejezie',
  },
  description: 'Expert web development services by Dave Ejezie. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
  keywords: ['Web Development', 'TypeScript', 'React', 'Next.js', 'Dave Ejezie', 'KDVLab'],
  authors: [{ name: 'Dave Ejezie', url: 'https://kdvlab.com' }],
  creator: 'Dave Ejezie',
  publisher: 'KDVLab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kdvlab.com',
    siteName: 'KDVLab',
    title: 'KDVLab - Modern Web Development by Dave Ejezie',
    description: 'Expert web development services creating lightning-fast, SEO-optimized websites.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDVLab - Modern Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KDVLab - Modern Web Development by Dave Ejezie',
    description: 'Expert web development services creating lightning-fast, SEO-optimized websites.',
    images: ['/og-image.jpg'],
    creator: '@kdvlab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#12A4ED',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-background font-body antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
EOF

# 4. Fixed globals.css without font loading errors
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  /* CSS variables for KDVLab dark theme */
  :root {
    --background: 20 14.3% 4.1%; /* #141414 */
    --foreground: 0 0% 100%; /* #FFFFFF */
    --card: 0 0% 15%;
    --card-foreground: 0 0% 100%;
    --popover: 0 0% 8%;
    --popover-foreground: 0 0% 100%;
    --primary: 205 85% 50%; /* #12A4ED */
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 64%;
    --accent: 205 85% 50%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 25%;
    --input: 0 0% 15%;
    --ring: 205 85% 50%;
    --radius: 0.5rem;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-body antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
    color-scheme: dark;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }

  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl leading-tight font-bold;
  }

  h2 {
    @apply text-3xl md:text-4xl leading-tight font-semibold;
  }

  h3 {
    @apply text-2xl md:text-3xl leading-tight font-semibold;
  }

  p, span, div {
    @apply text-base leading-relaxed;
  }

  *:focus-visible {
    @apply outline-none ring-2 ring-ring ring-offset-2 ring-offset-background;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .glass-effect {
    @apply bg-white/5 backdrop-blur-md border border-white/10;
  }

  .card-hover {
    @apply transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1;
  }
}
EOF

# 5. Create working components structure
cat > src/components/ui/button.tsx << 'EOF'
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    }
    
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    }
    
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
EOF

# 6. Fixed lib/utils.ts
cat > src/lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# 7. Working page.tsx without hooks issues
cat > src/app/page.tsx << 'EOF'
import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { HeroSection } from '@/components/features/hero-section'

export const metadata: Metadata = {
  title: 'KDVLab - Modern Web Development by Dave Ejezie',
  description: 'Expert web development services by Dave Ejezie. Creating lightning-fast, SEO-optimized websites with cutting-edge technologies.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  )
}
EOF

# 8. Fixed Header component
cat > src/components/layout/header.tsx << 'EOF'
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gradient">
            KDVLab
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button>
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="container py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
EOF

# 9. Simple Hero Section without complex animations initially
cat > src/components/features/hero-section.tsx << 'EOF'
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Building Amazing{' '}
            <span className="text-gradient">
              Digital Experiences
            </span>{' '}
            for the Modern Web
          </h1>

          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Expert web development services by Dave Ejezie. Creating lightning-fast, 
            SEO-optimized websites with cutting-edge technologies like Next.js, TypeScript, 
            and modern design principles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="min-w-[200px] h-11 px-8 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Start Your Project
            </button>
            <button className="min-w-[200px] h-11 px-8 border border-input bg-background rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
              View Portfolio
            </button>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-6 text-sm text-foreground/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Global Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>SEO Optimized</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
EOF

# 10. Updated tailwind.config.ts
cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
EOF

# 11. Updated package.json with correct dependencies
cat > package.json << 'EOF'
{
  "name": "kdvlab",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.2.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "@vercel/analytics": "^1.2.2",
    "@vercel/speed-insights": "^1.0.10"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.12.7",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.3"
  }
}
EOF

# 12. Simple tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

echo "✅ KDVLab setup completed!"
echo ""
echo "📋 Steps to run:"
echo "1. npm install"
echo "2. npm run dev"
echo ""
echo "🔧 What was fixed:"
echo "- Removed next-seo dependency (using Next.js 14 native metadata)"
echo "- Fixed font loading with Google Fonts fallbacks"
echo "- Simplified components to avoid hook errors"
echo "- Added proper metadataBase for kdvlab.com"
echo "- Updated all content for KDVLab branding"
echo "- Removed complex dependencies that caused conflicts"
echo ""
echo "🚀 Your site should now work without errors!"