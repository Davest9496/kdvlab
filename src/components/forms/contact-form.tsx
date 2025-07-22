'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import {
  Mail,
  ArrowRight,
  Check,
  Send,
  User,
  MessageSquare,
} from 'lucide-react';

// Newsletter Schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required').max(50),
  interests: z.array(z.string()).optional(),
  source: z.string().optional(),
});

type NewsletterData = z.infer<typeof newsletterSchema>;

// Contact Form Schema
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const interestOptions = [
  { id: 'web-development', label: 'Web Development Tips' },
  { id: 'design-trends', label: 'Design Trends' },
  { id: 'performance-tips', label: 'Performance Optimization' },
  { id: 'case-studies', label: 'Project Case Studies' },
  { id: 'business-growth', label: 'Business Growth' },
];

const projectTypes = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-app', label: 'Mobile App Development' },
  { value: 'e-commerce', label: 'E-commerce Solutions' },
  { value: 'web-design', label: 'Web Design & UI/UX' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'maintenance', label: 'Website Maintenance' },
  { value: 'other', label: 'Other' },
];

const timelineOptions = [
  { value: 'urgent', label: 'ASAP (Urgent)' },
  { value: '1-month', label: 'Within 1 Month' },
  { value: '2-3-months', label: '2-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: 'flexible', label: 'Flexible Timeline' },
];

interface NewsletterFormProps {
  source?: string;
  variant?: 'inline' | 'popup' | 'footer';
  className?: string;
}

interface ContactFormProps {
  className?: string;
  variant?: 'default' | 'compact';
}

// Contact Form Component
export function ContactForm({
  className = '',
  variant = 'default',
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <div className={`space-y-6 text-center ${className}`}>
        <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <div>
          <h3 className="mb-2 font-gilroy-bold text-heading-md text-green-600">
            Message Sent!
          </h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We&apos;ve received your message and
            will get back to you within 24 hours.
          </p>
        </div>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mx-auto"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {variant === 'default' && (
        <div className="text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 font-gilroy-bold text-heading-md">
            Let&apos;s Work Together
          </h3>
          <p className="text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you with a
            custom proposal.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Input
              {...register('fullName')}
              placeholder="Full Name *"
              className="border-white/10 bg-background/50"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register('email')}
              type="email"
              placeholder="Email Address *"
              className="border-white/10 bg-background/50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <Input
            {...register('phone')}
            type="tel"
            placeholder="Phone Number (Optional)"
            className="border-white/10 bg-background/50"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Select onValueChange={value => setValue('projectType', value)}>
              <SelectTrigger className="border-white/10 bg-background/50">
                <SelectValue placeholder="Project Type *" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map(type => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-400">
                {errors.projectType.message}
              </p>
            )}
          </div>

          <div>
            <Select onValueChange={value => setValue('timeline', value)}>
              <SelectTrigger className="border-white/10 bg-background/50">
                <SelectValue placeholder="Project Timeline (Optional)" />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map(timeline => (
                  <SelectItem key={timeline.value} value={timeline.value}>
                    {timeline.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        <div>
          <Textarea
            {...register('message')}
            placeholder="Tell us about your project, goals, and any specific requirements... *"
            rows={6}
            className="border-white/10 bg-background/50"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        {/* Privacy Notice */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            . We&apos;ll never share your information.
          </p>
        </div>
      </form>
    </div>
  );
}

// Newsletter Form Component
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
  if (isSuccess && (variant === 'inline' || variant === 'popup')) {
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

// Newsletter Management Component
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
    <div className="mx-auto max-w-md p-6">
      <div className="mb-6 text-center">
        <h2 className="mb-2 font-gilroy-bold text-heading-md">
          Manage Newsletter
        </h2>
        <p className="text-muted-foreground">
          Enter your email to update preferences or unsubscribe
        </p>
      </div>

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
    </div>
  );
}
