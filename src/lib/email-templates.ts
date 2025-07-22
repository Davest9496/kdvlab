interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

interface ContactNotificationData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  timeline?: string;
  message: string;
}

interface WelcomeEmailData {
  firstName?: string;
  email: string;
  interests?: string[];
}

export const emailTemplates = {
  contactNotification: (data: ContactNotificationData): EmailTemplate => ({
    subject: `🚀 New Project Inquiry: ${data.projectType} - ${data.name}`,
    html: `
      <!-- Professional HTML email template -->
      <!-- ... (full template code as provided earlier) -->
    `,
  }),

  clientConfirmation: (data: ContactNotificationData): EmailTemplate => ({
    subject: "Thank you for contacting KDVLab - We'll be in touch soon",
    html: `
      <!-- Client confirmation template -->
      <!-- ... (full template code as provided earlier) -->
    `,
  }),

  newsletterWelcome: (data: WelcomeEmailData): EmailTemplate => ({
    subject: '🎉 Welcome to KDVLab Updates!',
    html: `
      <!-- Newsletter welcome template -->
      <!-- ... (full template code as provided earlier) -->
    `,
  }),

  newsletterConfirmation: (data: {
    email: string;
    confirmUrl: string;
    firstName?: string;
  }): EmailTemplate => ({
    subject: '🎉 Please confirm your KDVLab newsletter subscription',
    html: `
      <!-- Newsletter confirmation template -->
      <!-- ... (full template code as provided earlier) -->
    `,
  }),
};
