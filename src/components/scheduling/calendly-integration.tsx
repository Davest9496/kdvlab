'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalendlyConfig {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
}

interface CalendlyEmbedProps extends CalendlyConfig {
  className?: string;
  height?: number;
}

interface CalendlyPopupProps extends CalendlyConfig {
  children: React.ReactNode;
  className?: string;
  rootElement?: string;
}

// Get Calendly URL with proper fallback
const getCalendlyUrl = () => {
  return (
    process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/kdvlab/30min'
  );
};

// Main embedded Calendly component
export function CalendlyEmbed({
  url = getCalendlyUrl(),
  prefill,
  utm,
  className = '',
  height = 700,
}: CalendlyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="calendly"]');

    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
      console.log('Calendly script loaded successfully');
    };

    script.onerror = () => {
      setIsError(true);
      console.error('Failed to load Calendly script');
    };

    document.head.appendChild(script);

    return () => {
      // Don't remove script on unmount as other components might need it
    };
  }, []);

  const buildCalendlyUrl = () => {
    try {
      const calendlyUrl = new URL(url);

      // Add prefill data
      if (prefill) {
        Object.entries(prefill).forEach(([key, value]) => {
          if (typeof value === 'string') {
            calendlyUrl.searchParams.set(key, value);
          } else if (value && typeof value === 'object') {
            Object.entries(value).forEach(([subKey, subValue]) => {
              calendlyUrl.searchParams.set(
                `customAnswers[${subKey}]`,
                subValue
              );
            });
          }
        });
      }

      // Add UTM parameters
      if (utm) {
        Object.entries(utm).forEach(([key, value]) => {
          if (value) {
            calendlyUrl.searchParams.set(`utm_${key}`, value);
          }
        });
      }

      // Add embed parameters only in browser environment
      if (typeof window !== 'undefined') {
        calendlyUrl.searchParams.set('embed_domain', window.location.hostname);
        calendlyUrl.searchParams.set('embed_type', 'Inline');
      }

      return calendlyUrl.toString();
    } catch (error) {
      console.error('Error building Calendly URL:', error);
      return url; // Return original URL as fallback
    }
  };

  if (isError) {
    return (
      <div
        className={cn(
          'flex h-96 items-center justify-center rounded-lg border border-destructive/50 bg-destructive/10',
          className
        )}
      >
        <div className="text-center">
          <X className="mx-auto mb-2 h-8 w-8 text-destructive" />
          <p className="text-destructive">Failed to load calendar</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          >
            Open in new tab
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('calendly-wrapper', className)}>
      {!isLoaded && (
        <div className="flex h-96 items-center justify-center rounded-lg bg-muted/30">
          <div className="text-center">
            <Clock className="mx-auto mb-2 h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading calendar...</p>
          </div>
        </div>
      )}

      <div
        className="calendly-inline-widget"
        data-url={buildCalendlyUrl()}
        style={{
          minWidth: '320px',
          height: `${height}px`,
          display: isLoaded ? 'block' : 'none',
        }}
      />
    </div>
  );
}

// Enhanced popup version with better error handling
export function CalendlyPopup({
  children,
  url = getCalendlyUrl(),
  prefill,
  utm,
  className,
  rootElement,
}: CalendlyPopupProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="calendly"]');

    if (existingScript) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
      console.log('Calendly popup script loaded');
    };

    script.onerror = () => {
      console.error('Failed to load Calendly popup script');
      setIsScriptLoaded(false);
    };

    document.head.appendChild(script);
  }, []);

  const buildUrl = () => {
    try {
      const calendlyUrl = new URL(url);

      // Add UTM parameters
      if (utm) {
        Object.entries(utm).forEach(([key, value]) => {
          if (value) {
            calendlyUrl.searchParams.set(`utm_${key}`, value);
          }
        });
      }

      return calendlyUrl.toString();
    } catch (error) {
      console.error('Error building Calendly URL:', error);
      return url;
    }
  };

  const openCalendly = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      if (
        typeof window !== 'undefined' &&
        (window as any).Calendly &&
        isScriptLoaded
      ) {
        const options: any = {
          url: buildUrl(),
        };

        if (prefill) {
          options.prefill = prefill;
        }

        if (utm) {
          options.utm = utm;
        }

        if (rootElement) {
          const element = document.querySelector(rootElement);
          if (element) {
            options.rootElement = element;
          }
        }

        (window as any).Calendly.initPopupWidget(options);
      } else {
        // Fallback - open in new tab with proper security
        console.warn('Calendly popup not available, opening in new tab');
        window.open(buildUrl(), '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Error opening Calendly:', error);
      // Final fallback
      window.open(buildUrl(), '_blank', 'noopener,noreferrer');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      onClick={openCalendly}
      className={cn('cursor-pointer', className)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCalendly();
        }
      }}
      aria-label="Schedule a meeting"
    >
      {children}
    </div>
  );
}

// Pre-built Calendly CTA buttons
export function ScheduleCallButton({
  className,
  variant = 'default',
  size = 'default',
  utm = {
    source: 'kdvlab_website',
    medium: 'cta_button',
    campaign: 'schedule_call',
  },
}: {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  utm?: CalendlyConfig['utm'];
}) {
  return (
    <CalendlyPopup utm={utm} className={className}>
      <Button
        variant={variant}
        size={size}
        className={cn(
          'group inline-flex items-center gap-2',
          variant === 'default' && 'bg-primary hover:bg-primary/90',
          className
        )}
      >
        <Calendar className="h-4 w-4" />
        Schedule a Call
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </CalendlyPopup>
  );
}

// Consultation-specific button
export function BookConsultationButton({
  className,
  prefill,
  utm = {
    source: 'kdvlab_website',
    medium: 'cta_button',
    campaign: 'consultation',
  },
}: {
  className?: string;
  prefill?: CalendlyConfig['prefill'];
  utm?: CalendlyConfig['utm'];
}) {
  return (
    <CalendlyPopup prefill={prefill} utm={utm} className={className}>
      <Button
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
    </CalendlyPopup>
  );
}

// Inline booking widget for dedicated pages
export function CalendlyBookingPage({
  className,
  title = 'Schedule Your Consultation',
  description = "Choose a time that works best for you. We'll discuss your project and how we can help.",
  prefill,
  utm = { source: 'kdvlab_website', medium: 'booking_page' },
}: {
  className?: string;
  title?: string;
  description?: string;
  prefill?: CalendlyConfig['prefill'];
  utm?: CalendlyConfig['utm'];
}) {
  return (
    <div className={cn('mx-auto max-w-4xl', className)}>
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-4 font-gilroy-bold text-heading-xl text-white">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-body-lg text-white/80">
          {description}
        </p>
      </div>

      {/* Calendly Embed */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <CalendlyEmbed
          prefill={prefill}
          utm={utm}
          height={700}
          className="rounded-lg"
        />
      </div>

      {/* Footer info */}
      <div className="mt-8 text-center">
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
