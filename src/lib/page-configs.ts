// This file is server-safe and can be imported in server components
export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageConfig {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  ctaText?: string;
  ctaHref?: string;
}

export const pageConfigs: Record<string, PageConfig> = {
  about: {
    title: 'About KDVLAB',
    subtitle: 'Innovation Through Technology',
    description:
      'We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
  services: {
    title: 'Our Services',
    subtitle: 'End-to-End Software Solutions',
    description:
      'From concept to deployment, we offer comprehensive software development services tailored to your business needs.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
    ],
  },
  work: {
    title: 'Our Work',
    subtitle: 'Portfolio of Excellence',
    description:
      "Explore our latest projects and see how we've helped businesses transform their digital presence.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/work' },
    ],
  },
  careers: {
    title: 'Join Our Team',
    subtitle: 'Build the Future with Us',
    description:
      "We're always looking for talented individuals who share our passion for technology and innovation.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Careers', href: '/careers' },
    ],
    ctaText: 'View Open Positions',
    ctaHref: '/careers#positions',
  },
  blog: {
    title: 'Blog',
    subtitle: 'Insights & Expertise',
    description:
      'Stay updated with the latest trends, insights, and best practices in software development and technology.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: "Let's Build Something Amazing",
    description:
      "Ready to start your next project? We'd love to hear about your ideas and discuss how we can help.",
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaText: 'Start a Project',
    ctaHref: '/contact#project-form',
  },
} as const;
