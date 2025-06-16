import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Mobile Apps', href: '/services#mobile-apps' },
    { name: 'Cloud Services', href: '/services#cloud-services' },
    { name: 'Consulting', href: '/services#consulting' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/work' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 mt-auto">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-heading font-bold text-white">
              KDVLab
            </h3>
            <p className="text-white/70 text-sm max-w-md leading-relaxed">
              Expert web development services creating lightning-fast,
              SEO-optimized websites that drive business growth and user
              engagement.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:hello@kdvlab.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@kdvlab.com
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} KDVLab. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-white/60 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
