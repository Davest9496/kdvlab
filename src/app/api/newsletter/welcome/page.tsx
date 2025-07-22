import { Check } from 'lucide-react';
import { NewsletterForm } from '@/components/forms/newsletter-form';

export default function NewsletterWelcomePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <Check className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="mb-4 font-gilroy-bold text-heading-xl text-green-600">
            Welcome to KDVLab!
          </h1>

          <p className="mb-8 text-body-lg text-muted-foreground">
            Your newsletter subscription is now confirmed. You&apos;ll receive
            our next update soon!
          </p>

          <div className="mb-8 rounded-lg bg-muted/30 p-8">
            <h2 className="mb-4 font-gilroy-bold text-heading-sm">
              What&apos;s Next?
            </h2>
            <ul className="space-y-2 text-left text-muted-foreground">
              <li>• Monthly web development insights and tutorials</li>
              <li>• Behind-the-scenes case studies from our projects</li>
              <li>• Performance tips to improve your website</li>
              <li>• Industry news and trends that matter</li>
              <li>• Exclusive offers and early access to new services</li>
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <a href="/" className="btn-primary rounded-lg px-6 py-2">
              Explore Our Work
            </a>
            <a href="/contact" className="btn-secondary rounded-lg px-6 py-2">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
