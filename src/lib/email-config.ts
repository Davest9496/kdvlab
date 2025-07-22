export const EMAIL_CONFIG = {
  // Business emails (handled by Zoho)
  business: {
    info: 'info@kdvlab.com', // General inquiries
    accounts: 'accounts@kdvlab.com', // Billing/invoicing
    newsletter: 'newsletter@kdvlab.com', // Marketing campaigns & automated emails
  },

  // Email routing rules
  routing: {
    contactForm: 'info@kdvlab.com',
    projectInquiry: 'info@kdvlab.com',
    billing: 'accounts@kdvlab.com',
    newsletter: 'newsletter@kdvlab.com',
    generalSupport: 'info@kdvlab.com',
    automated: 'newsletter@kdvlab.com', // All automated emails
  },
} as const;

export type EmailType = keyof typeof EMAIL_CONFIG.routing;

// Helper function to get recipient for email type
export function getEmailRecipient(type: EmailType): string {
  return EMAIL_CONFIG.routing[type];
}

// Helper function to get appropriate sender (always newsletter@ for automated)
export function getEmailSender(): string {
  return EMAIL_CONFIG.business.newsletter;
}
