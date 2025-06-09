#!/bin/bash

# Create essential Next.js App Router files
echo "🔧 Creating essential Next.js files..."

# Create the app directory structure (App Router)
mkdir -p src/app

# Create root layout (required for App Router)
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KDVLab - TypeScript React App',
  description: 'Modern TypeScript React application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
EOF

# Create main page (required for App Router)
cat > src/app/page.tsx << 'EOF'
'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to <span className="text-blue-600">KDVLab</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A modern TypeScript React application built with Next.js, Tailwind CSS, and Framer Motion
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            {
              title: "TypeScript",
              description: "Fully typed with strict TypeScript configuration",
              icon: "⚡"
            },
            {
              title: "Performance",
              description: "Optimized for speed with Next.js and modern build tools",
              icon: "🚀"
            },
            {
              title: "SEO Ready",
              description: "Built-in SEO optimization and server-side rendering",
              icon: "🎯"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
EOF

# Create global CSS with Tailwind
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply antialiased;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto;
  }
}
EOF

# Create Tailwind config if it doesn't exist
if [ ! -f "tailwind.config.ts" ]; then
cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
EOF
fi

# Create PostCSS config if it doesn't exist
if [ ! -f "postcss.config.js" ]; then
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF
fi

# Create Next.js config if it doesn't exist
if [ ! -f "next.config.js" ]; then
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
EOF
fi

echo "✅ Essential Next.js files created!"
echo ""
echo "📁 Created files:"
echo "   ✅ src/app/layout.tsx (Root layout)"
echo "   ✅ src/app/page.tsx (Homepage with animations)"
echo "   ✅ src/app/globals.css (Tailwind styles)"
echo "   ✅ tailwind.config.ts (Tailwind configuration)"
echo "   ✅ postcss.config.js (PostCSS configuration)"
echo "   ✅ next.config.js (Next.js configuration)"
echo ""
echo "🎉 Your app should now work at http://localhost:3000"
echo "   Refresh your browser to see the welcome page!"
EOF