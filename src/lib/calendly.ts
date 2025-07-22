// src/lib/calendly.ts
/**
 * Simple, reliable Calendly integration utility
 * Uses window.open() approach - no complex widget loading
 */

export interface CalendlyConfig {
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
  };
  prefill?: {
    name?: string;
    email?: string;
    [key: string]: string | undefined;
  };
}

/**
 * Get the configured Calendly URL with environment variable fallback
 */
export function getCalendlyUrl(): string {
  return (
    process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/kdvlab/30min'
  );
}

/**
 * Build Calendly URL with UTM parameters and prefill data
 */
export function buildCalendlyUrl(config: CalendlyConfig = {}): string {
  const baseUrl = getCalendlyUrl();

  try {
    const url = new URL(baseUrl);

    // Add UTM parameters
    if (config.utm) {
      Object.entries(config.utm).forEach(([key, value]) => {
        if (value) {
          url.searchParams.set(`utm_${key}`, value);
        }
      });
    }

    // Add prefill parameters
    if (config.prefill) {
      Object.entries(config.prefill).forEach(([key, value]) => {
        if (value) {
          url.searchParams.set(key, value);
        }
      });
    }

    // Add default parameters for better tracking
    url.searchParams.set(
      'embed_domain',
      typeof window !== 'undefined' ? window.location.hostname : 'kdvlab.com'
    );
    url.searchParams.set('embed_type', 'Popup');

    return url.toString();
  } catch (error) {
    console.error('Error building Calendly URL:', error);
    return baseUrl; // Return base URL as fallback
  }
}

/**
 * Open Calendly in new window with optimized settings
 */
export function openCalendly(config: CalendlyConfig = {}): void {
  const url = buildCalendlyUrl(config);

  // Open in new window with optimal settings
  const windowFeatures = [
    'width=800',
    'height=900',
    'scrollbars=yes',
    'resizable=yes',
    'location=yes',
    'status=yes',
    'menubar=no',
    'toolbar=no',
  ].join(',');

  const newWindow = window.open(url, '_blank', windowFeatures);

  // Focus the new window if it opened successfully
  if (newWindow) {
    newWindow.focus();
  } else {
    // Fallback for popup blockers - open in same tab
    console.warn('Popup blocked, opening in same tab');
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Track the event for analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'calendly_open', {
      event_category: 'engagement',
      event_label: config.utm?.campaign || 'unknown',
      value: 1,
    });
  }
}

/**
 * Default UTM configurations for different contexts
 */
export const UTM_PRESETS = {
  footer: {
    source: 'kdvlab_website',
    medium: 'footer',
    campaign: 'schedule_call',
    content: 'footer_link',
  },
  cta: {
    source: 'kdvlab_website',
    medium: 'cta_button',
    campaign: 'unified_cta',
    content: 'cta_section',
  },
  contact: {
    source: 'kdvlab_website',
    medium: 'contact_page',
    campaign: 'contact_form',
    content: 'contact_page',
  },
  hero: {
    source: 'kdvlab_website',
    medium: 'hero_section',
    campaign: 'homepage_hero',
    content: 'primary_cta',
  },
} as const;
