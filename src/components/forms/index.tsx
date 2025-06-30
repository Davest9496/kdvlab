export { ContactForm } from './contact-form';
export type { ContactFormProps } from './contact-form';

// Form data types for reuse
export type ContactFormData = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
};
