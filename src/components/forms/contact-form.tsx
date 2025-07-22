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
import { useToast } from '@/components/ui/toast';
import {
  Mail,
  ArrowRight,
  Check,
  Send,
  MessageSquare,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface ContactFormProps {
  className?: string;
  variant?: 'default' | 'compact';
}

// Contact Form Component with Toast Integration
export function ContactForm({
  className = '',
  variant = 'default',
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loadingToastId, setLoadingToastId] = useState<string | null>(null);
  const { success, error, info, removeToast } = useToast();

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

    // Show loading toast
    const loadingMessage =
      data.timeline === 'urgent'
        ? 'Sending urgent inquiry...'
        : 'Sending your message...';

    info(loadingMessage, {
      duration: 0,
      title: 'Please wait',
    });

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

      // Show success message
      success(
        result.message ||
          "Message sent successfully! We'll get back to you soon.",
        {
          title: 'Success!',
          duration: 6000,
          action: {
            label: 'Schedule Call',
            onClick: () => {
              // This could open Calendly or navigate to scheduling page
              window.open('https://calendly.com/kdvlab/consultation', '_blank');
            },
          },
        }
      );

      setIsSuccess(true);
      reset();

      // Track successful submission for analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1,
        });
      }
    } catch (submitError) {
      console.error('Contact form error:', submitError);

      const errorMessage =
        submitError instanceof Error
          ? submitError.message
          : 'Failed to send message. Please try again or email us directly at info@kdvlab.com';

      error(errorMessage, {
        title: 'Sending Failed',
        duration: 8000,
        action: {
          label: 'Email Directly',
          onClick: () => {
            window.location.href = `mailto:info@kdvlab.com?subject=Project Inquiry: ${data.projectType}&body=Hi, I'd like to discuss: ${data.message}`;
          },
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state with enhanced UX
  if (isSuccess) {
    return (
      <div className={cn('space-y-8 text-center', className)}>
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
          <Check className="h-10 w-10 text-green-500" />
        </div>

        <div className="space-y-4">
          <h3 className="font-gilroy-bold text-heading-md text-green-500">
            Message Sent Successfully!
          </h3>
          <p className="mx-auto max-w-md text-muted-foreground">
            Thank you for reaching out. We&apos;ve received your message and
            will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Send Another Message
          </Button>

          <Button
            onClick={() =>
              window.open(
                process.env.NEXT_PUBLIC_CALENDLY_URL ||
                  'https://calendly.com/kdvlab/30min',
                '_blank'
              )
            }
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            <MessageSquare className="h-4 w-4" />
            Schedule a Call
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {variant === 'default' && (
        <div className="space-y-4 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="mb-2 font-gilroy-bold text-heading-md">
              Let&apos;s Work Together
            </h3>
            <p className="text-muted-foreground">
              Tell us about your project and we&apos;ll get back to you with a
              custom proposal.
            </p>
          </div>
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Select
              onValueChange={value => setValue('projectType', value)}
              disabled={isSubmitting}
            >
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
            <Select
              onValueChange={value => setValue('timeline', value)}
              disabled={isSubmitting}
            >
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
            className="resize-none border-white/10 bg-background/50"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            {watch('message')?.length || 0}/2000 characters
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'relative w-full overflow-hidden',
            'bg-primary hover:bg-primary/90 focus:bg-primary',
            'transition-all duration-300',
            isSubmitting && 'cursor-not-allowed opacity-90'
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {watch('timeline') === 'urgent'
                ? 'Sending Urgent Inquiry...'
                : 'Sending Message...'}
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>

        {/* Privacy Notice & Help Text */}
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              By submitting this form, you agree to our{' '}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              . We&apos;ll never share your information.
            </p>
          </div>

          {/* Urgent project notice */}
          {watch('timeline') === 'urgent' && (
            <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3">
              <p className="text-center text-sm text-yellow-400">
                🚨 <strong>Urgent Project:</strong> We&apos;ll prioritize your
                inquiry and respond within 2 hours during business hours.
              </p>
            </div>
          )}

          {/* Help text */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Need immediate help? Email us directly at{' '}
              <a
                href="mailto:info@kdvlab.com"
                className="text-primary hover:underline"
              >
                info@kdvlab.com
              </a>{' '}
              or{' '}
              <button
                type="button"
                onClick={() =>
                  window.open(
                    process.env.NEXT_PUBLIC_CALENDLY_URL ||
                      'https://calendly.com/kdvlab/30min',
                    '_blank'
                  )
                }
                className="cursor-pointer text-primary hover:underline"
              >
                schedule a call
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
