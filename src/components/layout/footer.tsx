import Link from 'next/link';
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
        'bg-background border-t border-white/10',
        'relative overflow-hidden'
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/98 to-background opacity-90" />

      <div className="px-8 relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <h3
                className={cn(
                  'font-gilroy-extrabold text-white',
                  'text-heading-sm', // 20px-24px responsive
                  'text-gradient' // Gradient effect for brand
                )}
              >
                KDVLAB
              </h3>
              <p
                className={cn(
                  'font-rubik text-white/70',
                  'text-body-base', // 14px-16px responsive
                  'leading-relaxed max-w-sm'
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
              {footerSections[0].links.map((link) => (
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
                  {footerSections[1].links.map((link) => (
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
                  {footerSections[2].links.map((link) => (
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
            'mt-12 pt-8 border-t border-white/10',
            'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'
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

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className={cn(
                'flex-1 px-4 py-3 rounded-lg',
                'bg-white/5 border border-white/10',
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
                'px-6 py-3 rounded-lg',
                'bg-primary text-primary-foreground',
                'hover:bg-primary/90 hover:scale-105',
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
            'border-t border-white/10 mt-12 pt-8',
            'flex flex-col sm:flex-row justify-between items-center gap-4'
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
