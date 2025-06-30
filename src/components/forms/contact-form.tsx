'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

// Zod validation schema for type safety and validation
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactFormProps {
  className?: string;
  action?: (formData: FormData) => Promise<void>;
}

export function ContactForm({ className, action }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    if (!action) return;

    setSubmitStatus('idle');

    // Create FormData object for Server Action
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('phone', data.phone || '');
    formData.append('message', data.message);

    startTransition(async () => {
      try {
        await action(formData);
        setSubmitStatus('success');
        reset(); // Clear form on success
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
      }
    });
  };

  return (
    <div className={cn('w-full max-w-lg', className)}>
      <div className="mb-8">
        <h2 className="text-heading-md font-gilroy-bold text-white mb-2">
          Drop Us a Message
        </h2>
        <p className="text-body-base text-muted-foreground">
          We&apos;d love to hear from you. Send us a message and we&apos;ll
          respond as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Full Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-foreground"
          >
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className={cn(
                'w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-lg',
                'text-foreground placeholder:text-muted-foreground',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                'transition-all duration-200',
                errors.fullName && 'border-destructive focus:ring-destructive'
              )}
              {...register('fullName')}
            />
          </div>
          {errors.fullName && (
            <p className="text-sm text-destructive" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className={cn(
                'w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-lg',
                'text-foreground placeholder:text-muted-foreground',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                'transition-all duration-200',
                errors.email && 'border-destructive focus:ring-destructive'
              )}
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground"
          >
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className={cn(
                'w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-lg',
                'text-foreground placeholder:text-muted-foreground',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                'transition-all duration-200',
                errors.phone && 'border-destructive focus:ring-destructive'
              )}
              {...register('phone')}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Message *
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </div>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your project..."
              className={cn(
                'w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-lg',
                'text-foreground placeholder:text-muted-foreground',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                'transition-all duration-200 resize-vertical',
                errors.message && 'border-destructive focus:ring-destructive'
              )}
              {...register('message')}
            />
          </div>
          {errors.message && (
            <p className="text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isPending || !isValid}
          className={cn(
            'w-full font-medium transition-all duration-200',
            'bg-primary hover:bg-primary/90 text-primary-foreground',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          {isPending ? (
            <>
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 text-sm font-medium">
              ✓ Message sent successfully! We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive text-sm font-medium">
              ✗ There was an error sending your message. Please try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
