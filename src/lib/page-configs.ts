export interface PageConfig {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'default' | 'compact' | 'minimal';
  backgroundVariant?: 'primary' | 'secondary' | 'image';
}

export const pageConfigs: Record<string, PageConfig> = {
  about: {
    title: 'Innovation Through Technology',
    subtitle: 'About KDVLAB',
    description:
      'We are a forward-thinking software development company that transforms ideas into powerful digital solutions. Our expertise in cutting-edge technologies enables businesses to thrive in the digital landscape.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
    ctaText: 'Get In Touch',
    ctaHref: '/contact',
    variant: 'default',
    backgroundVariant: 'image',
  },

  services: {
    title: 'Comprehensive Development Solutions',
    subtitle: 'Our Services',
    description:
      'From custom software development to cloud solutions, we offer end-to-end services that drive digital transformation and business growth.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
    ],
    variant: 'default',
    backgroundVariant: 'image',
  },

  work: {
    title: 'Showcasing Excellence',
    subtitle: 'Our Work',
    description:
      'Explore our portfolio of successful projects that demonstrate our commitment to quality, innovation, and client satisfaction.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/work' },
    ],
    variant: 'default',
    backgroundVariant: 'image',
  },

  careers: {
    title: 'Join Our Mission',
    subtitle: 'Careers',
    description:
      "Be part of a team that's shaping the future of technology. We're always looking for talented individuals who share our passion for innovation.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Careers', href: '/careers' },
    ],
    ctaText: 'View Open Positions',
    ctaHref: '#open-positions',
    variant: 'default',
    backgroundVariant: 'secondary',
  },

  blog: {
    title: 'Insights & Innovation',
    subtitle: 'Tech Blog',
    description:
      'Stay updated with the latest trends, insights, and innovations in software development and technology.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ],
    variant: 'compact',
    backgroundVariant: 'primary',
  },

  contact: {
    title: "Let's Build Something Amazing",
    subtitle: 'Get In Touch',
    description:
      "Ready to start your next project? We'd love to hear about your ideas and discuss how we can help bring them to life.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaText: 'Start Conversation',
    ctaHref: '#contact-form',
    variant: 'compact',
    backgroundVariant: 'image',
  },

  // Service sub-pages
  'custom-software': {
    title: 'Custom Software Development',
    subtitle: 'Services',
    description:
      'Tailored software solutions designed to address your unique business challenges and accelerate growth.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Custom Software', href: '/services/custom-software' },
    ],
    ctaText: 'Discuss Your Project',
    ctaHref: '/contact',
    variant: 'compact',
    backgroundVariant: 'image',
  },

  'web-applications': {
    title: 'Modern Web Applications',
    subtitle: 'Services',
    description:
      'Scalable, responsive web applications built with the latest technologies for optimal performance and user experience.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Web Applications', href: '/services/web-applications' },
    ],
    ctaText: 'Start Your Project',
    ctaHref: '/contact',
    variant: 'compact',
    backgroundVariant: 'image',
  },

  'mobile-apps': {
    title: 'Mobile App Development',
    subtitle: 'Services',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
    ],
    ctaText: 'Build Your App',
    ctaHref: '/contact',
    variant: 'compact',
    backgroundVariant: 'image',
  },

  'cloud-services': {
    title: 'Cloud Solutions & DevOps',
    subtitle: 'Services',
    description:
      'Comprehensive cloud services, migration, and DevOps solutions to optimize your infrastructure and deployment processes.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Cloud Services', href: '/services/cloud-services' },
    ],
    ctaText: 'Explore Solutions',
    ctaHref: '/contact',
    variant: 'compact',
    backgroundVariant: 'image',
  },

  'ui-ux-design': {
    title: 'UI/UX Design Excellence',
    subtitle: 'Services',
    description:
      'User-centered design that creates intuitive, engaging, and accessible digital experiences for your audience.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
    ctaText: 'Design With Us',
    ctaHref: '/contact',
    variant: 'compact',
    backgroundVariant: 'image',
  },

  consultancy: {
    title: 'Technology Consultancy',
    subtitle: 'Services',
    description:
      'Strategic technology advice and consulting to help you make informed decisions about your digital transformation journey.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Consultancy', href: '/services/consultancy' },
    ],
    ctaText: 'Get Expert Advice',
    ctaHref: '/contact',
    variant: 'compact',
    backgroundVariant: 'image',
  },
};

// Utility function to get page config with fallback
export function getPageConfig(key: string): PageConfig {
  return (
    pageConfigs[key] || {
      title: 'Page Not Found',
      subtitle: 'Error',
      description: 'The requested page configuration could not be found.',
      breadcrumbs: [{ label: 'Home', href: '/' }],
      variant: 'minimal',
      backgroundVariant: 'secondary',
    }
  );
}
