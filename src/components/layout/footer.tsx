import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-white">
              KDVLab
            </h3>
            <p className="text-white/70 text-sm">
              Expert web development services creating lightning-fast,
              SEO-optimized websites.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white/70 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/70 hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} KDVLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}