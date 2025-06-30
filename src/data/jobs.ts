import { JobPosition, Company } from "@/types/jobs";

export const companies: Record<string, Company> = {
    meta: {
        name: 'Meta Company',
        logo: '/images/companies/meta.png',
        color: '#1877F2',
        textColor: '#FFFFFF',
    },
    nasma: {
        name: 'NASMA Company',
        logo: '/images/companies/nasma.png',
        color: '#6366F1',
        textColor: '#FFFFFF',
    },
    hdm: {
        name: 'HDM Company',
        logo: '/images/companies/hdm.png',
        color: '#10B981',
        textColor: '#FFFFFF',
    },
    fatima: {
        name: 'FATIMA Company',
        logo: '/images/companies/fatima.png',
        color: '#F59E0B',
        textColor: '#000000',
    },
    eli: {
        name: 'ELI Company',
        logo: '/images/companies/eli.png',
        color: '#8B5CF6',
        textColor: '#FFFFFF',
    },
    mitra: {
        name: 'MITRA Company',
        logo: '/images/companies/mitra.png',
        color: '#EF4444',
        textColor: '#FFFFFF',
    },
};

export const jobPositions: JobPosition[] = [
  {
    id: 'product-designer-meta',
    title: 'Product Designer',
    company: 'meta',
    location: 'Porto, Portugal',
    type: 'On site',
    category: 'Design',
    description: {
      overview:
        'Nova - The Interview Process: It will have 2 stages that include a 45 min HR chat + 1h Cultural/Technical chat',
      whatYoullDo: `As a UX Designer on our team, you will shape user experiences by leading the design of key features and projects. Your responsibilities include defining user experience flows, developing new product concepts, and crafting user stories. You'll design detailed UI layouts, create benchmarks, and develop high-fidelity prototypes while documenting UX and UI strategies. Collaborating with technical teams, you will transform designs into achievable solutions by adopting project constraints. This role combines creativity and problem-solving to create meaningful user experiences. Your journey with us is an opportunity to drive innovation and make a significant impact.`,
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        '3+ years of product design experience',
        'Proficiency in Figma, Sketch, and prototyping tools',
        'Strong portfolio demonstrating end-to-end design process',
        'Experience with design systems and component libraries',
      ],
      benefits: [
        'Embrace work-life balance with hybrid/remote roles and flexible hours',
        'Enjoy 22 days + Birthday + Carnival Tuesday',
        'Participate in team-building activities and events',
        'Utilize the best tools and technology for work',
        'Stay covered with comprehensive health insurance',
        'A huge team of UX designers to learn from',
      ],
      uniqueJourney: [
        'A supportive manager who cares about your well-being and is invested in your professional growth',
        'A culture of continuous learning with clear targets and feedback',
        'A global company with over 2400 employees located in more than 25 countries, including offices in 3 countries',
      ],
      whatYoullBring: [
        'Showcase proficiency in collaborative design environments',
        'Demonstrated ability to work independently, think critically, and maintain meticulous attention to detail',
        'Solid grasp of interactive elements, micro-interactions, and animations, contributing to a seamless user experience',
        'Clear understanding of the entire UX lifecycle, coupled with a track record of designing successful apps and products',
        'Deep passion for digital process development and an unwavering commitment to achieving excellence',
      ],
    },
    salary: {
      min: 50000,
      max: 65000,
      currency: 'EUR',
      period: 'yearly',
    },
    companyInfo: {
      size: '500 to 1000 Employees',
      founded: '1999',
      industry: 'Financial Transaction',
      revenue: '$5 to $25 million',
      sector: 'Financial Service',
    },
    tags: ['Design', 'UX/UI', 'Figma', 'Remote'],
    featured: true,
    postedDate: '2024-01-15',
  },
  {
    id: 'ui-ux-designer-nasma',
    title: 'UI/UX Designer',
    company: 'nasma',
    location: 'Porto, Portugal',
    type: 'On site',
    category: 'Design',
    description: {
      overview:
        'Join our dynamic design team to create exceptional user experiences for our growing platform.',
      whatYoullDo:
        'Lead the design of user interfaces and experiences, conduct user research, create wireframes and prototypes, and collaborate with development teams to implement designs.',
      requirements: [
        '2+ years of UI/UX design experience',
        'Proficiency in design tools (Figma, Adobe Creative Suite)',
        'Understanding of user research methodologies',
        'Knowledge of responsive design principles',
      ],
      benefits: [
        'Competitive salary package',
        'Health and dental insurance',
        'Professional development budget',
        'Flexible working hours',
      ],
      uniqueJourney: [
        'Work with cutting-edge technologies',
        'Collaborative and innovative team environment',
        'Opportunity for career growth and advancement',
      ],
      whatYoullBring: [
        'Strong portfolio showcasing UI/UX work',
        'Excellent communication skills',
        'Attention to detail and creative problem-solving',
        'Ability to work in fast-paced environment',
      ],
    },
    salary: {
      min: 45000,
      max: 60000,
      currency: 'EUR',
      period: 'yearly',
    },
    companyInfo: {
      size: '100 to 500 Employees',
      founded: '2015',
      industry: 'Technology',
      revenue: '$10 to $50 million',
      sector: 'Software Development',
    },
    tags: ['UI/UX', 'Design', 'Research', 'Prototyping'],
    postedDate: '2024-01-10',
  },
  {
    id: 'game-designer-hdm',
    title: 'Game Designer',
    company: 'hdm',
    location: 'Rome, Italy',
    type: 'On site',
    category: 'Design',
    description: {
      overview:
        'Create engaging game experiences for our upcoming mobile and console titles.',
      whatYoullDo:
        'Design game mechanics, create level designs, balance gameplay systems, and work with artists and programmers to bring concepts to life.',
      requirements: [
        'Experience in game design or related field',
        'Understanding of game mechanics and player psychology',
        'Familiarity with game engines (Unity, Unreal)',
        'Strong analytical and creative thinking skills',
      ],
      benefits: [
        'Work on exciting game projects',
        'Creative and collaborative environment',
        'Access to latest gaming technology',
        'Team events and game nights',
      ],
      uniqueJourney: [
        'Shape the future of gaming',
        'Work with talented artists and developers',
        'Opportunity to work on multiple game genres',
      ],
      whatYoullBring: [
        'Passion for games and interactive media',
        'Strong communication and teamwork skills',
        'Creative problem-solving abilities',
        'Understanding of current gaming trends',
      ],
    },
    salary: {
      min: 40000,
      max: 55000,
      currency: 'EUR',
      period: 'yearly',
    },
    companyInfo: {
      size: '50 to 200 Employees',
      founded: '2018',
      industry: 'Gaming',
      revenue: '$5 to $20 million',
      sector: 'Entertainment',
    },
    tags: ['Game Design', 'Unity', 'Level Design', 'Mobile Games'],
    postedDate: '2024-01-12',
  },
  {
    id: 'motion-designer-fatima',
    title: 'Motion Designer',
    company: 'fatima',
    location: 'Remote',
    type: 'Remote',
    category: 'Design',
    description: {
      overview:
        'Create stunning motion graphics and animations for digital marketing campaigns.',
      whatYoullDo:
        'Design and animate graphics for video content, create motion graphics for web and mobile applications, and collaborate with marketing teams on visual campaigns.',
      requirements: [
        'Proficiency in After Effects, Cinema 4D, or similar tools',
        '2+ years of motion graphics experience',
        'Strong understanding of animation principles',
        'Portfolio demonstrating motion design skills',
      ],
      benefits: [
        'Fully remote position',
        'Flexible working hours',
        'Creative freedom on projects',
        'Professional development opportunities',
      ],
      uniqueJourney: [
        'Work with global brands',
        'Creative and supportive team',
        'Cutting-edge motion design projects',
      ],
      whatYoullBring: [
        'Strong portfolio of motion graphics work',
        'Creativity and attention to detail',
        'Ability to work independently',
        'Understanding of brand guidelines',
      ],
    },
    salary: {
      min: 38000,
      max: 52000,
      currency: 'EUR',
      period: 'yearly',
    },
    companyInfo: {
      size: '20 to 100 Employees',
      founded: '2020',
      industry: 'Digital Marketing',
      revenue: '$2 to $10 million',
      sector: 'Creative Services',
    },
    tags: ['Motion Graphics', 'After Effects', 'Animation', 'Remote'],
    postedDate: '2024-01-08',
  },
  {
    id: 'graphic-designer-eli',
    title: 'Graphic Designer',
    company: 'eli',
    location: 'Germany',
    type: 'Hybrid',
    category: 'Design',
    description: {
      overview: 'Create compelling visual designs for print and digital media.',
      whatYoullDo:
        'Design marketing materials, create brand assets, develop visual concepts for campaigns, and maintain brand consistency across all touchpoints.',
      requirements: [
        "Bachelor's degree in Graphic Design or related field",
        '3+ years of graphic design experience',
        'Proficiency in Adobe Creative Suite',
        'Strong typography and layout skills',
      ],
      benefits: [
        'Hybrid working model',
        'Creative team environment',
        'Access to design resources',
        'Career development programs',
      ],
      uniqueJourney: [
        'Work on diverse design projects',
        'Collaborative international team',
        'Opportunity to shape brand identity',
      ],
      whatYoullBring: [
        'Strong design portfolio',
        'Understanding of print and digital design',
        'Excellent time management skills',
        'Passion for visual storytelling',
      ],
    },
    salary: {
      min: 42000,
      max: 58000,
      currency: 'EUR',
      period: 'yearly',
    },
    companyInfo: {
      size: '200 to 500 Employees',
      founded: '2012',
      industry: 'Advertising',
      revenue: '$20 to $50 million',
      sector: 'Marketing & Advertising',
    },
    tags: ['Graphic Design', 'Branding', 'Adobe', 'Hybrid'],
    postedDate: '2024-01-05',
  },
  {
    id: 'service-designer-mitra',
    title: 'Service Designer',
    company: 'mitra',
    location: 'London',
    type: 'On site',
    category: 'Design',
    description: {
      overview:
        'Design end-to-end service experiences that delight customers and drive business value.',
      whatYoullDo:
        'Map customer journeys, design service blueprints, conduct service design research, and collaborate with cross-functional teams to implement service improvements.',
      requirements: [
        'Experience in service design or customer experience',
        'Knowledge of service design methodologies',
        'Skills in customer journey mapping',
        'Experience with design thinking processes',
      ],
      benefits: [
        'Central London location',
        'Comprehensive benefits package',
        'Learning and development budget',
        'Collaborative work environment',
      ],
      uniqueJourney: [
        'Impact millions of customer interactions',
        'Work with innovative service design tools',
        'Shape the future of customer experience',
      ],
      whatYoullBring: [
        'Strong analytical and empathy skills',
        'Experience with service design tools',
        'Excellent facilitation abilities',
        'Systems thinking approach',
      ],
    },
    salary: {
      min: 48000,
      max: 65000,
      currency: 'GBP',
      period: 'yearly',
    },
    companyInfo: {
      size: '500 to 1000 Employees',
      founded: '2008',
      industry: 'Financial Services',
      revenue: '$100 to $500 million',
      sector: 'Banking',
    },
    tags: [
      'Service Design',
      'Customer Experience',
      'Journey Mapping',
      'Research',
    ],
    postedDate: '2024-01-14',
  },
];
