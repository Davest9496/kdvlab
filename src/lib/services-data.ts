export interface TechStack {
  name: string;
  iconName: string; // Changed from icon component to string
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName: string; // Changed from icon component to string
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string; // Changed from icon component to string

  // SEO & Meta
  metadata: ServiceMetadata;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;

  // Features & Benefits
  features: ServiceFeature[];

  // Technology Stack
  techStack: TechStack[];

  // Process/Methodology
  process: ProcessStep[];

  // Key Benefits
  benefits: string[];

  // CTA
  ctaTitle: string;
  ctaDescription: string;

  // Pricing Starting Point (optional)
  startingPrice?: string;

  // Delivery Timeline
  deliveryTimeline: string;
}

export const servicesData: ServiceContent[] = [
  {
    id: 'custom-software',
    slug: 'custom-software',
    title: 'Custom Software Development',
    subtitle: 'Tailored Solutions for Your Business',
    description:
      'Bespoke software solutions designed specifically for your unique business requirements and processes.',
    iconName: 'Code2',

    metadata: {
      title: 'Custom Software Development Services | KDVLAB',
      description:
        'Expert custom software development services. Build tailored solutions with React, Next.js, TypeScript, and cloud technologies. Fast, secure, and scalable.',
      keywords: [
        'custom software development',
        'bespoke software solutions',
        'enterprise software development',
        'React development',
        'TypeScript development',
        'custom web applications',
        'software consulting',
        'agile development',
      ],
      ogImage: '/og-custom-software.jpg',
    },

    heroTitle: 'Custom Software That Grows With Your Business',
    heroSubtitle: 'Tailored Development Solutions',
    heroDescription:
      'Transform your unique business processes into powerful, scalable software solutions. We build custom applications that perfectly fit your workflow, boost productivity, and drive growth.',

    features: [
      {
        title: 'Requirement Analysis',
        description:
          'Deep dive into your business processes to understand exact requirements and create optimal solutions.',
        iconName: 'Target',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Built with growth in mind using modern, maintainable architectures that evolve with your business.',
        iconName: 'Layers',
      },
      {
        title: 'Agile Development',
        description:
          'Iterative development with regular feedback loops to ensure the final product exceeds expectations.',
        iconName: 'Zap',
      },
      {
        title: 'Security First',
        description:
          'Enterprise-grade security measures and best practices built into every line of code.',
        iconName: 'Shield',
      },
    ],

    techStack: [
      {
        name: 'React & Next.js',
        iconName: 'Globe',
        description:
          'Modern React applications with Next.js for optimal performance and SEO.',
      },
      {
        name: 'TypeScript',
        iconName: 'Code2',
        description:
          'Type-safe development for maintainable and robust applications.',
      },
      {
        name: 'Cloud Services',
        iconName: 'Cloud',
        description:
          'AWS, Azure, and Google Cloud for scalable infrastructure.',
      },
      {
        name: 'Database Design',
        iconName: 'Database',
        description:
          'Optimized database architecture for performance and reliability.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description:
          'Comprehensive analysis of your business requirements, processes, and goals.',
        duration: '1-2 weeks',
      },
      {
        step: 2,
        title: 'Design & Architecture',
        description:
          'System design, database modeling, and technical architecture planning.',
        duration: '1-2 weeks',
      },
      {
        step: 3,
        title: 'Development & Testing',
        description:
          'Iterative development with continuous testing and quality assurance.',
        duration: '4-12 weeks',
      },
      {
        step: 4,
        title: 'Deployment & Support',
        description:
          'Production deployment with ongoing support and maintenance.',
        duration: 'Ongoing',
      },
    ],

    benefits: [
      'Perfectly aligned with your business processes',
      'Scalable architecture that grows with your business',
      'Full ownership of your software solution',
      'Competitive advantage through unique features',
      'Reduced operational costs and increased efficiency',
      'Enhanced security and data control',
    ],

    ctaTitle: 'Ready to Build Your Custom Solution?',
    ctaDescription:
      "Let's discuss your unique requirements and create software that transforms your business operations.",

    startingPrice: '$15,000',
    deliveryTimeline: '6-16 weeks',
  },

  {
    id: 'web-applications',
    slug: 'web-applications',
    title: 'Web Application Development',
    subtitle: 'Modern Web Solutions',
    description:
      'High-performance web applications built with cutting-edge technologies for optimal user experience.',
    iconName: 'Globe',

    metadata: {
      title: 'Web Application Development Services | KDVLAB',
      description:
        'Professional web application development with React, Next.js, and TypeScript. Fast, responsive, and SEO-optimized web apps for modern businesses.',
      keywords: [
        'web application development',
        'React web applications',
        'Next.js development',
        'Progressive web apps',
        'responsive web design',
        'TypeScript web apps',
        'modern web development',
        'web app consulting',
      ],
      ogImage: '/og-web-applications.jpg',
    },

    heroTitle: 'Lightning-Fast Web Applications',
    heroSubtitle: 'Modern Web Development',
    heroDescription:
      'Build powerful, responsive web applications that deliver exceptional user experiences. Our solutions are optimized for speed, SEO, and scalability.',

    features: [
      {
        title: 'Performance Optimized',
        description:
          'Sub-second load times with advanced optimization techniques and modern frameworks.',
        iconName: 'Zap',
      },
      {
        title: 'Responsive Design',
        description:
          'Perfect experience across all devices with mobile-first responsive design principles.',
        iconName: 'Smartphone',
      },
      {
        title: 'SEO Optimized',
        description:
          'Built-in SEO best practices for maximum visibility and organic traffic.',
        iconName: 'Target',
      },
      {
        title: 'Progressive Web Apps',
        description:
          'Native app-like experiences with offline capabilities and push notifications.',
        iconName: 'Rocket',
      },
    ],

    techStack: [
      {
        name: 'React & Next.js',
        iconName: 'Globe',
        description:
          'Modern React ecosystem with Next.js for optimal performance.',
      },
      {
        name: 'TypeScript',
        iconName: 'Code2',
        description: 'Type-safe development for maintainable code.',
      },
      {
        name: 'Tailwind CSS',
        iconName: 'Paintbrush',
        description: 'Utility-first CSS framework for rapid styling.',
      },
      {
        name: 'Cloud Hosting',
        iconName: 'Cloud',
        description: 'Global CDN deployment for worldwide performance.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Requirements & Design',
        description:
          'Define functionality, user experience, and visual design requirements.',
        duration: '1-2 weeks',
      },
      {
        step: 2,
        title: 'Development Setup',
        description:
          'Project architecture, development environment, and initial framework setup.',
        duration: '1 week',
      },
      {
        step: 3,
        title: 'Feature Development',
        description:
          'Iterative development of core features with regular testing and feedback.',
        duration: '4-8 weeks',
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description:
          'Comprehensive testing, performance optimization, and production deployment.',
        duration: '1-2 weeks',
      },
    ],

    benefits: [
      'Blazing fast performance and load times',
      'Perfect mobile and desktop experiences',
      'SEO-optimized for better search rankings',
      'Scalable architecture for future growth',
      'Modern, intuitive user interfaces',
      'Cross-browser compatibility guaranteed',
    ],

    ctaTitle: "Let's Build Your Web Application",
    ctaDescription:
      'Transform your ideas into a powerful web application that drives business growth.',

    startingPrice: '$8,000',
    deliveryTimeline: '4-10 weeks',
  },

  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform Apps',
    description:
      'High-quality mobile applications for iOS and Android with native performance and user experience.',
    iconName: 'Smartphone',

    metadata: {
      title: 'Mobile App Development Services | KDVLAB',
      description:
        'Professional mobile app development for iOS and Android. React Native, Flutter, and native development with modern UI/UX design.',
      keywords: [
        'mobile app development',
        'iOS app development',
        'Android app development',
        'React Native development',
        'Flutter development',
        'cross-platform apps',
        'native mobile apps',
        'mobile UI/UX design',
      ],
      ogImage: '/og-mobile-apps.jpg',
    },

    heroTitle: 'Mobile Apps That Users Love',
    heroSubtitle: 'iOS & Android Development',
    heroDescription:
      'Create engaging mobile experiences that keep users coming back. Our mobile apps combine beautiful design with powerful functionality.',

    features: [
      {
        title: 'Native Performance',
        description:
          'Smooth, responsive apps that feel natural on each platform with optimized performance.',
        iconName: 'Zap',
      },
      {
        title: 'Cross-Platform',
        description:
          'Reach both iOS and Android users with efficient cross-platform development.',
        iconName: 'Users',
      },
      {
        title: 'Modern UI/UX',
        description:
          'Beautiful, intuitive interfaces following platform-specific design guidelines.',
        iconName: 'Palette',
      },
      {
        title: 'App Store Ready',
        description:
          'Complete app store optimization and submission process handled for you.',
        iconName: 'CheckCircle',
      },
    ],

    techStack: [
      {
        name: 'React Native',
        iconName: 'Smartphone',
        description: 'Cross-platform development with native performance.',
      },
      {
        name: 'TypeScript',
        iconName: 'Code2',
        description: 'Type-safe mobile development for reliable apps.',
      },
      {
        name: 'Native APIs',
        iconName: 'Cpu',
        description: 'Full access to device capabilities and native features.',
      },
      {
        name: 'Cloud Backend',
        iconName: 'Cloud',
        description: 'Scalable backend services and real-time synchronization.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'App Strategy & Design',
        description:
          'Define app concept, target audience, and create wireframes and designs.',
        duration: '2-3 weeks',
      },
      {
        step: 2,
        title: 'Development Phase',
        description:
          'Build core features with regular testing on both iOS and Android devices.',
        duration: '6-12 weeks',
      },
      {
        step: 3,
        title: 'Testing & Optimization',
        description:
          'Comprehensive testing, performance optimization, and bug fixes.',
        duration: '2-3 weeks',
      },
      {
        step: 4,
        title: 'App Store Launch',
        description:
          'App store submission, optimization, and post-launch support.',
        duration: '1-2 weeks',
      },
    ],

    benefits: [
      'Reach millions of iOS and Android users',
      'Native performance with cross-platform efficiency',
      'App store optimization for better visibility',
      'Push notifications and offline capabilities',
      'Integration with device features and APIs',
      'Ongoing updates and maintenance support',
    ],

    ctaTitle: 'Ready to Launch Your Mobile App?',
    ctaDescription:
      "Let's bring your mobile app idea to life with expert development and design.",

    startingPrice: '$12,000',
    deliveryTimeline: '8-16 weeks',
  },

  {
    id: 'cloud-services',
    slug: 'cloud-services',
    title: 'Cloud Services & Infrastructure',
    subtitle: 'Scalable Cloud Solutions',
    description:
      'Modern cloud infrastructure and services for scalable, secure, and cost-effective operations.',
    iconName: 'Cloud',

    metadata: {
      title: 'Cloud Services & Infrastructure | KDVLAB',
      description:
        'Professional cloud services including AWS, Azure, and Google Cloud. Cloud migration, DevOps, and scalable infrastructure solutions.',
      keywords: [
        'cloud services',
        'cloud infrastructure',
        'AWS services',
        'Azure cloud',
        'Google Cloud',
        'cloud migration',
        'DevOps services',
        'serverless architecture',
      ],
      ogImage: '/og-cloud-services.jpg',
    },

    heroTitle: 'Scalable Cloud Infrastructure',
    heroSubtitle: 'Modern Cloud Solutions',
    heroDescription:
      'Leverage the power of cloud computing to scale your applications, reduce costs, and improve reliability with our expert cloud services.',

    features: [
      {
        title: 'Cloud Migration',
        description:
          'Seamless migration of existing applications to cloud platforms with minimal downtime.',
        iconName: 'Rocket',
      },
      {
        title: 'Auto-Scaling',
        description:
          'Automatic scaling based on demand to handle traffic spikes and optimize costs.',
        iconName: 'Zap',
      },
      {
        title: 'Security & Compliance',
        description:
          'Enterprise-grade security measures and compliance with industry standards.',
        iconName: 'Shield',
      },
      {
        title: 'DevOps Integration',
        description:
          'Streamlined deployment pipelines and continuous integration/deployment.',
        iconName: 'Layers',
      },
    ],

    techStack: [
      {
        name: 'AWS Services',
        iconName: 'Cloud',
        description:
          'Complete AWS ecosystem including EC2, Lambda, RDS, and S3.',
      },
      {
        name: 'Docker & Kubernetes',
        iconName: 'Database',
        description:
          'Containerized applications with orchestration and management.',
      },
      {
        name: 'CI/CD Pipelines',
        iconName: 'Zap',
        description: 'Automated testing, building, and deployment processes.',
      },
      {
        name: 'Monitoring & Logging',
        iconName: 'Target',
        description:
          'Comprehensive monitoring and logging for optimal performance.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Cloud Assessment',
        description:
          'Analyze current infrastructure and create cloud migration strategy.',
        duration: '1-2 weeks',
      },
      {
        step: 2,
        title: 'Architecture Design',
        description:
          'Design scalable cloud architecture optimized for your needs.',
        duration: '1-2 weeks',
      },
      {
        step: 3,
        title: 'Migration & Setup',
        description:
          'Migrate applications and set up cloud infrastructure with testing.',
        duration: '2-6 weeks',
      },
      {
        step: 4,
        title: 'Optimization & Monitoring',
        description:
          'Ongoing optimization, monitoring, and support for cloud infrastructure.',
        duration: 'Ongoing',
      },
    ],

    benefits: [
      'Reduced infrastructure costs and overhead',
      'Automatic scaling and high availability',
      'Enhanced security and disaster recovery',
      'Faster deployment and development cycles',
      'Global reach with CDN integration',
      '24/7 monitoring and support',
    ],

    ctaTitle: 'Ready to Move to the Cloud?',
    ctaDescription:
      'Transform your infrastructure with scalable, secure cloud solutions that grow with your business.',

    startingPrice: '$5,000',
    deliveryTimeline: '4-8 weeks',
  },

  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design Services',
    subtitle: 'User-Centered Design',
    description:
      'Beautiful, intuitive interfaces that prioritize user experience and drive engagement.',
    iconName: 'Palette',

    metadata: {
      title: 'UI/UX Design Services | KDVLAB',
      description:
        'Professional UI/UX design services. Create beautiful, user-friendly interfaces that convert visitors into customers with modern design principles.',
      keywords: [
        'UI/UX design',
        'user interface design',
        'user experience design',
        'web design services',
        'mobile app design',
        'design systems',
        'user research',
        'prototyping services',
      ],
      ogImage: '/og-ui-ux-design.jpg',
    },

    heroTitle: 'Designs That Convert',
    heroSubtitle: 'UI/UX Excellence',
    heroDescription:
      'Create stunning user interfaces that not only look beautiful but also drive conversions and enhance user satisfaction.',

    features: [
      {
        title: 'User Research',
        description:
          'Deep understanding of your users through research, interviews, and behavioral analysis.',
        iconName: 'Users',
      },
      {
        title: 'Prototyping',
        description:
          'Interactive prototypes to test and refine user experiences before development.',
        iconName: 'Layers',
      },
      {
        title: 'Design Systems',
        description:
          'Consistent design languages and component libraries for scalable products.',
        iconName: 'Palette',
      },
      {
        title: 'Accessibility',
        description:
          'Inclusive design that works for users of all abilities and assistive technologies.',
        iconName: 'CheckCircle',
      },
    ],

    techStack: [
      {
        name: 'Figma',
        iconName: 'Paintbrush',
        description:
          'Collaborative design tool for creating and sharing designs.',
      },
      {
        name: 'Design Systems',
        iconName: 'Layers',
        description: 'Consistent component libraries and design tokens.',
      },
      {
        name: 'User Testing',
        iconName: 'Users',
        description: 'Comprehensive user testing and feedback collection.',
      },
      {
        name: 'Accessibility',
        iconName: 'CheckCircle',
        description: 'WCAG compliant designs for inclusive experiences.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Discovery & Research',
        description:
          'Understand users, business goals, and competitive landscape.',
        duration: '1-2 weeks',
      },
      {
        step: 2,
        title: 'Wireframing & Architecture',
        description:
          'Create information architecture and low-fidelity wireframes.',
        duration: '1-2 weeks',
      },
      {
        step: 3,
        title: 'Visual Design',
        description:
          'High-fidelity designs with branding, colors, and typography.',
        duration: '2-4 weeks',
      },
      {
        step: 4,
        title: 'Prototyping & Testing',
        description: 'Interactive prototypes with user testing and iteration.',
        duration: '1-2 weeks',
      },
    ],

    benefits: [
      'Increased user engagement and satisfaction',
      'Higher conversion rates and sales',
      'Reduced development costs through clear specs',
      'Consistent brand experience across platforms',
      'Better accessibility and inclusivity',
      'Data-driven design decisions',
    ],

    ctaTitle: 'Transform Your User Experience',
    ctaDescription:
      "Let's create designs that your users will love and your business will benefit from.",

    startingPrice: '$3,000',
    deliveryTimeline: '4-8 weeks',
  },

  {
    id: 'consultancy',
    slug: 'consultancy',
    title: 'Technology Consultancy',
    subtitle: 'Strategic Tech Guidance',
    description:
      'Expert technology consulting to help you make informed decisions and accelerate your digital transformation.',
    iconName: 'MessageSquare',

    metadata: {
      title: 'Technology Consultancy Services | KDVLAB',
      description:
        'Expert technology consulting services. Strategic guidance for digital transformation, technology stack selection, and software architecture.',
      keywords: [
        'technology consulting',
        'software consulting',
        'digital transformation',
        'technology strategy',
        'software architecture',
        'tech stack selection',
        'CTO services',
        'technology assessment',
      ],
      ogImage: '/og-consultancy.jpg',
    },

    heroTitle: 'Strategic Technology Guidance',
    heroSubtitle: 'Expert Consultancy',
    heroDescription:
      'Navigate complex technology decisions with confidence. Our experts provide strategic guidance to accelerate your digital transformation.',

    features: [
      {
        title: 'Technology Assessment',
        description:
          'Comprehensive evaluation of your current technology stack and infrastructure.',
        iconName: 'Target',
      },
      {
        title: 'Strategic Planning',
        description:
          'Long-term technology roadmaps aligned with your business objectives.',
        iconName: 'FileText',
      },
      {
        title: 'Architecture Review',
        description:
          'Expert review of software architecture for scalability and maintainability.',
        iconName: 'Layers',
      },
      {
        title: 'Team Guidance',
        description:
          'Mentoring and guidance for your development teams and technical staff.',
        iconName: 'Users',
      },
    ],

    techStack: [
      {
        name: 'Technology Audits',
        iconName: 'Target',
        description:
          'Comprehensive assessment of current technology landscape.',
      },
      {
        name: 'Strategic Planning',
        iconName: 'FileText',
        description: 'Technology roadmaps and strategic recommendations.',
      },
      {
        name: 'Architecture Design',
        iconName: 'Layers',
        description: 'Scalable system architecture and design patterns.',
      },
      {
        name: 'Team Training',
        iconName: 'Users',
        description: 'Knowledge transfer and team development programs.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Current State Analysis',
        description:
          'Evaluate existing technology, processes, and team capabilities.',
        duration: '1-2 weeks',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create comprehensive technology strategy and roadmap.',
        duration: '1-2 weeks',
      },
      {
        step: 3,
        title: 'Implementation Planning',
        description:
          'Detailed implementation plans with timelines and resource allocation.',
        duration: '1 week',
      },
      {
        step: 4,
        title: 'Ongoing Support',
        description:
          'Continuous guidance and support throughout implementation.',
        duration: 'Ongoing',
      },
    ],

    benefits: [
      'Informed technology decisions and strategy',
      'Reduced risk and faster time-to-market',
      'Optimized technology investments and costs',
      'Improved team productivity and capabilities',
      'Scalable architecture for future growth',
      'Expert guidance from industry veterans',
    ],

    ctaTitle: 'Get Expert Technology Guidance',
    ctaDescription:
      "Let's discuss your technology challenges and create a strategic roadmap for success.",

    startingPrice: '$2,500',
    deliveryTimeline: '2-4 weeks',
  },
];

// Helper functions
export const getServiceBySlug = (slug: string): ServiceContent | undefined => {
  return servicesData.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map((service) => service.slug);
};

export const getServiceMetadata = (slug: string) => {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    keywords: service.metadata.keywords,
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      url: `https://kdvlab.com/services/${slug}`,
      type: 'website',
      images: [service.metadata.ogImage],
    },
    alternates: {
      canonical: `https://kdvlab.com/services/${slug}`,
    },
  };
};
