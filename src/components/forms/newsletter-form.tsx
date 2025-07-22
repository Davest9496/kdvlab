'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Mail, ArrowRight } from 'lucide-react';

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

      toast.success(result.message || 'Successfully subscribed!');
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

  if (variant === 'footer') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="mb-2 flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Stay Updated</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </form>
      </div>
    );
  }

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
              placeholder="First Name"
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
              placeholder="your@email.com"
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
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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

        <p className="text-center text-xs text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
          <br />
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
}
