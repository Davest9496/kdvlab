'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Check, X, Loader2 } from 'lucide-react';

function NewsletterConfirmContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<
    'loading' | 'success' | 'error' | 'invalid'
  >('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    if (!token || !email) {
      setStatus('invalid');
      setMessage(
        'Invalid confirmation link. Please check your email for the correct link.'
      );
      return;
    }

    // Confirm the subscription
    const confirmSubscription = async () => {
      try {
        const response = await fetch('/api/newsletter/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, email }),
        });

        const result = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(
            result.message || 'Your newsletter subscription has been confirmed!'
          );
        } else {
          setStatus('error');
          setMessage(result.error || 'Failed to confirm subscription.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred while confirming your subscription.');
      }
    };

    confirmSubscription();
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg">Confirming your subscription...</span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full">
        {status === 'success' ? (
          <div className="bg-green-100">
            <Check className="h-10 w-10 text-green-600" />
          </div>
        ) : (
          <div className="bg-red-100">
            <X className="h-10 w-10 text-red-600" />
          </div>
        )}
      </div>

      <h1 className="mb-4 font-gilroy-bold text-heading-lg">
        {status === 'success'
          ? 'Subscription Confirmed!'
          : 'Confirmation Failed'}
      </h1>

      <p className="mx-auto mb-8 max-w-md text-muted-foreground">{message}</p>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button onClick={() => (window.location.href = '/')} variant="outline">
          Return Home
        </Button>

        {status !== 'success' && (
          <Button
            onClick={() => (window.location.href = '/newsletter')}
            className="bg-primary hover:bg-primary/90"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

export default function NewsletterConfirmPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-lg">Loading...</span>
              </div>
            }
          >
            <NewsletterConfirmContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
