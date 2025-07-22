import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Footer sections data for better organization
const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Mobile Apps', href: '/services#mobile-apps' },
      { name: 'UI/UX Design', href: '/services#design' },
      { name: 'Consulting', href: '/services#consulting' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/work' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Contact', href: '/contact' },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/kdvlab',
        external: true,
      },
      { name: 'GitHub', href: 'https://github.com/kdvlab', external: true },
      { name: 'Twitter', href: 'https://twitter.com/kdvlab', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className={cn(
        'border-t border-white/10 bg-background',
        'relative overflow-hidden'
      )}
    >
      {/* Background gradient overlay */}
      <div className="via-background/98 absolute inset-0 bg-gradient-to-t from-background to-background opacity-90" />

      <div className="relative px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            {/* Logo and Brand */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <div className="flex items-center space-x-3">
                  {/* Custom Footer Logo */}
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src="/images/Logo/Logo-vertical-cropped.png"
                      alt="KDVLAB Logo"
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                </div>
              </Link>

              <p
                className={cn(
                  'font-rubik text-white/70',
                  'text-body-base', // 14px-16px responsive
                  'max-w-sm leading-relaxed'
                )}
              >
                Expert web development services. Lightning-fast, SEO-optimized
                websites with cutting-edge technologies.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-2">
              <p
                className={cn(
                  'font-rubik text-white/60',
                  'text-body-sm', // 12px-14px responsive
                  'font-medium'
                )}
              >
                Ready to build something amazing?
              </p>
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center font-rubik',
                  'text-body-base text-primary hover:text-primary/80',
                  'transition-colors duration-200',
                  'font-semibold'
                )}
              >
                Let&apos;s talk →
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4
              className={cn(
                'font-rubik font-semibold text-white',
                'text-subheading-sm', // 16px-18px responsive
                'tracking-wide'
              )}
            >
              {footerSections[0].title}
            </h4>
            <ul className="space-y-3">
              {footerSections[0].links.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      'font-rubik text-white/70 hover:text-white',
                      'text-body-base', // 14px-16px responsive
                      'transition-all duration-200 ease-out',
                      'hover:translate-x-1 hover:text-primary/80',
                      'inline-flex items-center gap-1'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Connect Container - Side by side on mobile */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-2 gap-6 lg:gap-12">
              {/* Company Section */}
              <div className="space-y-4">
                <h4
                  className={cn(
                    'font-rubik font-semibold text-white',
                    'text-subheading-sm', // 16px-18px responsive
                    'tracking-wide'
                  )}
                >
                  {footerSections[1].title}
                </h4>
                <ul className="space-y-3">
                  {footerSections[1].links.map(link => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          'font-rubik text-white/70 hover:text-white',
                          'text-body-base', // 14px-16px responsive
                          'transition-all duration-200 ease-out',
                          'hover:translate-x-1 hover:text-primary/80',
                          'inline-flex items-center gap-1'
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect Section */}
              <div className="space-y-4">
                <h4
                  className={cn(
                    'font-rubik font-semibold text-white',
                    'text-subheading-sm', // 16px-18px responsive
                    'tracking-wide'
                  )}
                >
                  {footerSections[2].title}
                </h4>
                <ul className="space-y-3">
                  {footerSections[2].links.map(link => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          'font-rubik text-white/70 hover:text-white',
                          'text-body-base', // 14px-16px responsive
                          'transition-all duration-200 ease-out',
                          'hover:translate-x-1 hover:text-primary/80',
                          'inline-flex items-center gap-1'
                        )}
                        {...(link.external && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        {link.name}
                        {link.external && <span className="text-xs">↗</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div
          className={cn(
            'mt-12 border-t border-white/10 pt-8',
            'grid grid-cols-1 items-center gap-8 lg:grid-cols-2'
          )}
        >
          <div className="space-y-3">
            <h4
              className={cn(
                'font-rubik font-semibold text-white',
                'text-subheading-md' // 18px-20px responsive
              )}
            >
              Stay Updated
            </h4>
            <p
              className={cn(
                'font-rubik text-white/60',
                'text-body-base', // 14px-16px responsive
                'max-w-md'
              )}
            >
              Get the latest insights on web development, design trends, and
              tech innovations.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className={cn(
                'flex-1 rounded-lg px-4 py-3',
                'border border-white/10 bg-white/5',
                'text-white placeholder:text-white/40',
                'font-rubik text-body-base', // 14px-16px responsive
                'focus:outline-none focus:ring-2 focus:ring-primary',
                'transition-all duration-200'
              )}
            />
            <button
              className={cn(
                'btn-cta',
                'text-body-sm', // 12px-14px responsive
                'rounded-lg px-6 py-3',
                'bg-primary text-primary-foreground',
                'hover:scale-105 hover:bg-primary/90',
                'transition-all duration-200',
                'shadow-lg hover:shadow-xl'
              )}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={cn(
            'mt-12 border-t border-white/10 pt-8',
            'flex flex-col items-center justify-between gap-4 sm:flex-row'
          )}
        >
          <p
            className={cn(
              'font-rubik text-white/60',
              'text-body-sm', // 12px-14px responsive
              'text-center sm:text-left'
            )}
          >
            © {new Date().getFullYear()} KDVLab. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className={cn(
                'font-rubik text-white/60 hover:text-white',
                'text-body-sm', // 12px-14px responsive
                'transition-colors duration-200'
              )}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={cn(
                'font-rubik text-white/60 hover:text-white',
                'text-body-sm', // 12px-14px responsive
                'transition-colors duration-200'
              )}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
