export { ContactForm } from './contact-form';

// Form data types for reuse
export type ContactFormData = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
};
