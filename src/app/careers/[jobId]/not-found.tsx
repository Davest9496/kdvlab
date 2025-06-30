import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function JobNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-heading-xl font-gilroy-bold text-foreground mb-4">
            Job Position Not Found
          </h1>

          {/* Description */}
          <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            The job position you are looking for does not exist or may have been
            filled. Don&apos;t worry though, we have many other exciting
            opportunities waiting for you!
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers"
              className="btn-primary px-8 py-3 rounded-lg text-body-base font-medium inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Open Positions
            </Link>

            <Link
              href="/"
              className="btn-secondary px-8 py-3 rounded-lg text-body-base font-medium"
            >
              Back to Home
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl">
            <h2 className="text-subheading-md font-gilroy-bold text-foreground mb-3">
              Looking for Something Specific?
            </h2>
            <p className="text-body-base text-muted-foreground mb-4">
              If you are interested in a particular role that is not currently
              listed, we would love to hear from you. Send us your resume and we will
              keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@kdvlab.com"
              className="text-primary hover:underline font-medium"
            >
              careers@kdvlab.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
