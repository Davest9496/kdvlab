'use client';

import { Calendar, ArrowRight, Video, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openCalendly, UTM_PRESETS, type CalendlyConfig } from '@/lib/calendly';
import { cn } from '@/lib/utils';

interface CalendlyButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  utmPreset?: keyof typeof UTM_PRESETS;
  customConfig?: CalendlyConfig;
  children?: React.ReactNode;
  onClick?: () => void;
}

/**
 * Basic Schedule Call Button - works everywhere
 */
export function ScheduleCallButton({
  variant = 'default',
  size = 'default',
  className,
  utmPreset = 'cta',
  customConfig,
  children,
  onClick,
}: CalendlyButtonProps) {
  const handleClick = () => {
    const config: CalendlyConfig = {
      utm: UTM_PRESETS[utmPreset],
      ...customConfig,
    };

    openCalendly(config);
    onClick?.();
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(
        'group inline-flex items-center gap-2',
        variant === 'default' && 'bg-primary hover:bg-primary/90',
        className
      )}
    >
      {children || (
        <>
          <Calendar className="h-4 w-4" />
          Schedule a Call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

/**
 * Enhanced CTA Button for main call-to-actions
 */
export function BookConsultationButton({
  className,
  utmPreset = 'hero',
  customConfig,
}: Omit<CalendlyButtonProps, 'variant' | 'size' | 'children'>) {
  const handleClick = () => {
    const config: CalendlyConfig = {
      utm: UTM_PRESETS[utmPreset],
      ...customConfig,
    };

    openCalendly(config);
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className={cn(
        'group relative inline-flex items-center gap-3',
        'rounded-full px-8 py-4 font-semibold',
        'bg-primary hover:bg-primary/90',
        'shadow-lg hover:shadow-xl',
        'transition-all duration-300',
        'hover:scale-105',
        className
      )}
    >
      <Video className="h-5 w-5" />
      Book Free Consultation
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}

/**
 * Simple text link version for footer/inline use
 */
export function ScheduleCallLink({
  className,
  utmPreset = 'footer',
  customConfig,
  children = 'Schedule a call',
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const config: CalendlyConfig = {
      utm: UTM_PRESETS[utmPreset],
      ...customConfig,
    };

    openCalendly(config);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-1 font-semibold text-primary',
        'transition-colors duration-200 hover:text-primary/80',
        'cursor-pointer hover:underline',
        className
      )}
    >
      {children}
    </button>
  );
}

/**
 * Wrapper for any custom element to make it a Calendly trigger
 */
export function CalendlyTrigger({
  children,
  utmPreset = 'cta',
  customConfig,
  className,
}: {
  children: React.ReactNode;
  utmPreset?: keyof typeof UTM_PRESETS;
  customConfig?: CalendlyConfig;
  className?: string;
}) {
  const handleClick = () => {
    const config: CalendlyConfig = {
      utm: UTM_PRESETS[utmPreset],
      ...customConfig,
    };

    openCalendly(config);
  };

  return (
    <div
      onClick={handleClick}
      className={cn('cursor-pointer', className)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Schedule a meeting"
    >
      {children}
    </div>
  );
}

/**
 * Inline booking widget info (for dedicated booking pages)
 * This creates a simple link that opens Calendly instead of embedding
 */
export function CalendlyBookingSection({
  className,
  title = 'Schedule Your Consultation',
  description = "Choose a time that works best for you. We'll discuss your project and how we can help.",
  utmPreset = 'contact',
}: {
  className?: string;
  title?: string;
  description?: string;
  utmPreset?: keyof typeof UTM_PRESETS;
}) {
  const handleClick = () => {
    const config: CalendlyConfig = {
      utm: UTM_PRESETS[utmPreset],
    };

    openCalendly(config);
  };

  return (
    <div className={cn('mx-auto max-w-4xl text-center', className)}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-4 font-gilroy-bold text-heading-xl text-white">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-body-lg text-white/80">
          {description}
        </p>
      </div>

      {/* Main CTA */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm">
        <div className="space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Calendar className="h-10 w-10 text-primary" />
          </div>

          <div className="space-y-4">
            <h2 className="text-heading-md text-white">
              Ready to get started?
            </h2>
            <p className="mx-auto max-w-lg text-white/70">
              Click below to open our scheduling page and pick a time that works
              for you.
            </p>
          </div>

          <Button
            onClick={handleClick}
            size="lg"
            className="bg-primary px-12 py-4 text-lg text-white hover:bg-primary/90"
          >
            Open Calendar & Schedule
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="text-center">
            <Clock className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm font-medium text-white">30 Minutes</p>
            <p className="text-xs text-white/70">Free consultation</p>
          </div>
          <div className="text-center">
            <Video className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm font-medium text-white">Video Call</p>
            <p className="text-xs text-white/70">Google Meet or Zoom</p>
          </div>
          <div className="text-center">
            <Calendar className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm font-medium text-white">Flexible</p>
            <p className="text-xs text-white/70">Reschedule anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
