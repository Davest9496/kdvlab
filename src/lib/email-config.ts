export const EMAIL_CONFIG = {
  // Business emails (handled by Zoho)
  business: {
    info: 'info@kdvlab.com', // General inquiries
    accounts: 'accounts@kdvlab.com', // Billing/invoicing
    newsletter: 'newsletter@kdvlab.com', // Marketing campaigns
  },

  // Transactional emails (handled by Resend)
  transactional: {
    noreply: 'noreply@kdvlab.com', // System notifications
    updates: 'updates@kdvlab.com', // Project updates
    support: 'support@kdvlab.com', // Automated support
  },

  // Email routing rules
  routing: {
    contactForm: 'info@kdvlab.com',
    projectInquiry: 'info@kdvlab.com',
    billing: 'accounts@kdvlab.com',
    newsletter: 'newsletter@kdvlab.com',
    generalSupport: 'info@kdvlab.com',
  },
} as const;

export type EmailType = keyof typeof EMAIL_CONFIG.routing;

// Helper function to get recipient for email type
export function getEmailRecipient(type: EmailType): string {
  return EMAIL_CONFIG.routing[type];
}

// Helper function to get appropriate sender
export function getEmailSender(type: 'business' | 'transactional'): string {
  return type === 'business'
    ? EMAIL_CONFIG.business.info
    : EMAIL_CONFIG.transactional.noreply;
}
