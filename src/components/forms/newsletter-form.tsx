'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Mail, ArrowRight, Check } from 'lucide-react';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required').max(50),
  interests: z.array(z.string()).optional(),
  source: z.string().optional(),
});

type NewsletterData = z.infer<typeof newsletterSchema>;

const interestOptions = [
  { id: 'web-development', label: 'Web Development Tips' },
  { id: 'design-trends', label: 'Design Trends' },
  { id: 'performance-tips', label: 'Performance Optimization' },
  { id: 'case-studies', label: 'Project Case Studies' },
  { id: 'business-growth', label: 'Business Growth' },
];

interface NewsletterFormProps {
  source?: string;
  variant?: 'inline' | 'popup' | 'footer';
  className?: string;
}

export function NewsletterForm({
  source = 'website',
  variant = 'inline',
  className = '',
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        ...data,
        interests: selectedInterests,
        source,
      };

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Subscription failed');
      }

      toast.success(
        result.message || 'Please check your email to confirm subscription!'
      );
      setIsSuccess(true);
      reset();
      setSelectedInterests([]);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Subscription failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setSelectedInterests(prev =>
      checked ? [...prev, interestId] : prev.filter(id => id !== interestId)
    );
  };

  // Footer variant - compact version
  if (variant === 'footer') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="mb-2 flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Stay Updated</h3>
        </div>

        {isSuccess ? (
          <div className="flex items-center gap-2 text-green-400">
            <Check className="h-4 w-4" />
            <span className="text-sm">Check your email to confirm!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <Input
              {...register('firstName')}
              type="text"
              placeholder="First name"
              className="border-white/10 bg-background/50"
            />
            <div className="flex gap-2">
              <Input
                {...register('email')}
                type="email"
                placeholder="your@email.com"
                className="flex-1 border-white/10 bg-background/50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                size="sm"
                className="px-6"
              >
                {isSubmitting ? '...' : 'Join'}
              </Button>
            </div>
            {(errors.email || errors.firstName) && (
              <p className="text-xs text-red-400">
                {errors.email?.message || errors.firstName?.message}
              </p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Success state for full forms
  if (isSuccess && variant !== ('footer' as NewsletterFormProps['variant'])) {
    return (
      <div className={`space-y-6 text-center ${className}`}>
        <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <div>
          <h3 className="mb-2 font-gilroy-bold text-heading-md text-green-600">
            Almost There!
          </h3>
          <p className="text-muted-foreground">
            We&apos;ve sent a confirmation email to your inbox. Click the link
            to complete your subscription.
          </p>
        </div>
        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Didn&apos;t receive the email?</strong> Check your spam
            folder or{' '}
            <button
              onClick={() => setIsSuccess(false)}
              className="text-primary hover:underline"
            >
              try again
            </button>
          </p>
        </div>
      </div>
    );
  }

  // Full newsletter form
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 font-gilroy-bold text-heading-md">
          Join Our Newsletter
        </h3>
        <p className="text-muted-foreground">
          Get monthly insights, case studies, and web development tips delivered
          to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input
              {...register('firstName')}
              placeholder="First Name *"
              className="border-white/10 bg-background/50"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('email')}
              type="email"
              placeholder="your@email.com *"
              className="border-white/10 bg-background/50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium">
            What interests you? (Optional)
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {interestOptions.map(interest => (
              <div key={interest.id} className="flex items-center space-x-2">
                <Checkbox
                  id={interest.id}
                  checked={selectedInterests.includes(interest.id)}
                  onCheckedChange={checked =>
                    handleInterestChange(interest.id, checked as boolean)
                  }
                />
                <label
                  htmlFor={interest.id}
                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {interest.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
              Subscribing...
            </>
          ) : (
            <>
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <div className="space-y-2 text-center">
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
          <p className="text-xs text-muted-foreground">
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            {' • '}
            <a
              href="/newsletter/manage"
              className="text-primary hover:underline"
            >
              Manage Preferences
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

// Newsletter Management Component - ADD THIS
export function NewsletterManagement() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Unsubscribe link sent to your email');
        setEmail('');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to send unsubscribe link'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleUnsubscribe} className="space-y-4">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border-white/10 bg-background/50"
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Sending...' : 'Send Management Link'}
        </Button>
      </form>

      <div className="rounded-lg bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          We&apos;ll send you a secure link to manage your newsletter
          preferences or unsubscribe completely.
        </p>
      </div>
    </div>
  );
}
