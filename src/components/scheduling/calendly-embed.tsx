'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video } from 'lucide-react';

interface CalendlyEmbedProps {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  className?: string;
}

export function CalendlyEmbed({
  url = 'https://calendly.com/kdvlab/consultation',
  prefill,
  className = '',
}: CalendlyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const calendlyUrl = new URL(url);
  if (prefill) {
    Object.entries(prefill).forEach(([key, value]) => {
      if (typeof value === 'string') {
        calendlyUrl.searchParams.set(key, value);
      } else if (value && typeof value === 'object') {
        // For customAnswers, append each key-value pair
        Object.entries(value).forEach(([subKey, subValue]) => {
          calendlyUrl.searchParams.set(`customAnswers[${subKey}]`, subValue);
        });
      }
    });
  }

  return (
    <div className={`calendly-wrapper ${className}`}>
      {!isLoaded && (
        <div className="flex h-96 items-center justify-center rounded-lg bg-muted">
          <div className="text-center">
            <Clock className="mx-auto mb-2 h-8 w-8 animate-spin" />
            <p className="text-muted-foreground">Loading calendar...</p>
          </div>
        </div>
      )}

      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl.toString()}
        style={{
          minWidth: '320px',
          height: '700px',
          display: isLoaded ? 'block' : 'none',
        }}
      />
    </div>
  );
}

// Popup version for better UX
export function CalendlyPopup({
  children,
  url = 'https://calendly.com/kdvlab/consultation',
  prefill,
}: {
  children: React.ReactNode;
  url?: string;
  prefill?: CalendlyEmbedProps['prefill'];
}) {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: url,
        prefill: prefill,
      });
    }
  };

  return (
    <div onClick={openCalendly} className="cursor-pointer">
      {children}
    </div>
  );
}
