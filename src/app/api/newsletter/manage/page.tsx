import { NewsletterManagement } from '@/components/forms/newsletter-form';

export default function NewsletterManagePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-2 font-gilroy-bold text-heading-lg">
              Newsletter Management
            </h1>
            <p className="text-muted-foreground">
              Update your preferences or unsubscribe from our newsletter
            </p>
          </div>

          <NewsletterManagement />

          <div className="mt-8 text-center">
            <a href="/" className="text-sm text-primary hover:underline">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
