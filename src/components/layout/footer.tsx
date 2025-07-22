import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScheduleCallButton } from '@/components/scheduling/calendly-integration';
import { NewsletterForm } from '@/components/forms/newsletter-form';

// Footer sections data for better organization
const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services/web-applications' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'Consulting', href: '/services/consultancy' },
      { name: 'Cloud Services', href: '/services/cloud-services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/work' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Contact Us', href: '/contact' },
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
                  'text-body-base',
                  'max-w-sm leading-relaxed'
                )}
              >
                Expert web development services. Lightning-fast, SEO-optimized
                websites with cutting-edge technologies.
              </p>
            </div>

            {/* Contact info with Calendly integration */}
            <div className="space-y-3">
              <p
                className={cn(
                  'font-rubik text-white/60',
                  'text-body-sm',
                  'font-medium'
                )}
              >
                Ready to build something amazing?
              </p>

              <div className="flex flex-col gap-2">
                {/* Contact Form Link */}
                <Link
                  href="/contact"
                  className={cn(
                    'inline-flex items-center font-rubik',
                    'text-body-base text-primary hover:text-primary/80',
                    'transition-colors duration-200',
                    'font-semibold'
                  )}
                >
                  Send us a message →
                </Link>

                {/* Calendly Schedule Call Button */}
                <ScheduleCallButton
                  variant="outline"
                  size="sm"
                  className={cn(
                    'w-fit border-primary/20 bg-primary/5 text-primary',
                    'hover:border-primary/30 hover:bg-primary/10',
                    'px-4 py-2 text-sm'
                  )}
                  utm={{
                    source: 'kdvlab_website',
                    medium: 'footer',
                    campaign: 'schedule_call',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4
              className={cn(
                'font-rubik font-semibold text-white',
                'text-subheading-sm',
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
                      'text-body-base',
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
                    'text-subheading-sm',
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
                          'text-body-base',
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
                    'text-subheading-sm',
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
                          'text-body-base',
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
        <div className={cn('mt-12 border-t border-white/10 pt-8')}>
          <div className="mx-auto max-w-md">
            <NewsletterForm
              variant="footer"
              source="footer"
              className="space-y-4"
            />
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
              'text-body-sm',
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
                'text-body-sm',
                'transition-colors duration-200'
              )}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={cn(
                'font-rubik text-white/60 hover:text-white',
                'text-body-sm',
                'transition-colors duration-200'
              )}
            >
              Terms
            </Link>
            <Link
              href="/newsletter/manage"
              className={cn(
                'font-rubik text-white/60 hover:text-white',
                'text-body-sm',
                'transition-colors duration-200'
              )}
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
