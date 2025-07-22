'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, X, Loader } from 'lucide-react';

export default function NewsletterConfirmPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {
      setStatus('error');
      setMessage('Invalid confirmation link');
      return;
    }

    // The GET request will handle the confirmation
    // This page is just for display after redirect
    setStatus('success');
    setMessage('Your subscription has been confirmed!');
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-md p-8 text-center">
        {status === 'loading' && (
          <>
            <Loader className="mx-auto mb-4 h-16 w-16 animate-spin text-primary" />
            <h1 className="mb-2 font-gilroy-bold text-heading-md">
              Confirming...
            </h1>
            <p className="text-muted-foreground">
              Please wait while we confirm your subscription.
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <Check className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h1 className="mb-2 font-gilroy-bold text-heading-md text-green-600">
              Welcome!
            </h1>
            <p className="mb-6 text-muted-foreground">{message}</p>
            <a
              href="/"
              className="btn-primary inline-block rounded-lg px-6 py-2"
            >
              Back to Home
            </a>
          </>
        )}

        {status === 'error' && (
          <>
            <X className="mx-auto mb-4 h-16 w-16 text-red-600" />
            <h1 className="mb-2 font-gilroy-bold text-heading-md text-red-600">
              Error
            </h1>
            <p className="mb-6 text-muted-foreground">{message}</p>
            <a
              href="/newsletter"
              className="btn-primary inline-block rounded-lg px-6 py-2"
            >
              Try Again
            </a>
          </>
        )}
      </div>
    </div>
  );
}
