import { LucideIcon } from 'lucide-react';

/**
 * Base service configuration
 */
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  slug?: string;
  category?: ServiceCategory;
  priority?: number;
}

/**
 * Service categories for filtering and organization
 */
export type ServiceCategory =
  | 'development'
  | 'design'
  | 'cloud'
  | 'consultancy'
  | 'mobile'
  | 'web';

/**
 * Why choose us item structure
 */
export interface WhyChooseItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  order?: number;
}

/**
 * Service page metadata for SEO
 */
export interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

/**
 * Service with extended details for individual service pages
 */
export interface DetailedService extends Service {
  metadata: ServiceMetadata;
  longDescription: string;
  process?: ServiceProcess[];
  technologies?: Technology[];
  caseStudies?: CaseStudy[];
  pricing?: PricingInfo;
}

/**
 * Service process steps
 */
export interface ServiceProcess {
  id: string;
  step: number;
  title: string;
  description: string;
  duration?: string;
  deliverables?: string[];
}

/**
 * Technology stack information
 */
export interface Technology {
  id: string;
  name: string;
  icon?: string;
  category: TechnologyCategory;
  proficiency: ProficiencyLevel;
}

export type TechnologyCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'mobile'
  | 'design'
  | 'devops';

export type ProficiencyLevel =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

/**
 * Case study information
 */
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: number;
  imageUrl?: string;
  slug: string;
}

/**
 * Pricing information
 */
export interface PricingInfo {
  startingPrice?: number;
  currency: string;
  billingType: 'hourly' | 'project' | 'monthly' | 'custom';
  features: PricingFeature[];
  customPricing: boolean;
}

export interface PricingFeature {
  name: string;
  included: boolean;
  description?: string;
}

/**
 * Service request form data
 */
export interface ServiceInquiry {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceIds: string[];
  projectType: ProjectType;
  budget?: BudgetRange;
  timeline?: TimelineRange;
  description: string;
  requirements?: string;
  additionalInfo?: string;
}

export type ProjectType =
  | 'new-project'
  | 'existing-project'
  | 'consultation'
  | 'maintenance'
  | 'migration';

export type BudgetRange =
  | 'under-10k'
  | '10k-25k'
  | '25k-50k'
  | '50k-100k'
  | 'over-100k'
  | 'discuss';

export type TimelineRange =
  | 'asap'
  | '1-3months'
  | '3-6months'
  | '6-12months'
  | 'flexible';

/**
 * Component props interfaces
 */
export interface ServiceCardProps {
  service: Service;
  index: number;
  variant?: 'default' | 'compact' | 'detailed';
  showFeatures?: boolean;
  className?: string;
}

export interface WhyChooseCardProps {
  item: WhyChooseItem;
  index: number;
  variant?: 'default' | 'compact';
  className?: string;
}

export interface ServicesSectionProps {
  services?: Service[];
  whyChooseItems?: WhyChooseItem[];
  showAllServices?: boolean;
  maxServices?: number;
  className?: string;
  variant?: 'default' | 'compact';
}

/**
 * Animation and interaction types
 */
export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string | number[];
  stagger?: number;
}

export interface HoverEffect {
  scale?: number;
  y?: number;
  rotateX?: number;
  rotateY?: number;
  opacity?: number;
}

/**
 * SEO and performance types
 */
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: Record<string, any>;
}

export interface PerformanceMetrics {
  loadTime: number;
  interactionDelay: number;
  cumulativeLayoutShift: number;
  largestContentfulPaint: number;
}

/**
 * API response types
 */
export interface ServicesResponse {
  services: Service[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ServiceDetailsResponse {
  service: DetailedService;
  relatedServices: Service[];
  testimonials?: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  serviceId: string;
  imageUrl?: string;
  date: string;
}

/**
 * Filter and search types
 */
export interface ServiceFilters {
  categories?: ServiceCategory[];
  technologies?: string[];
  priceRange?: [number, number];
  duration?: TimelineRange[];
  searchQuery?: string;
}

export interface ServiceSearchResult {
  services: Service[];
  totalResults: number;
  searchTime: number;
  suggestions?: string[];
  filters: ServiceFilters;
}

/**
 * Analytics and tracking
 */
export interface ServiceAnalytics {
  serviceId: string;
  views: number;
  inquiries: number;
  conversions: number;
  averageEngagementTime: number;
  topReferrers: string[];
  conversionRate: number;
}

/**
 * Content management types
 */
export interface ServiceContent {
  id: string;
  serviceId: string;
  type: 'hero' | 'feature' | 'benefit' | 'process' | 'testimonial';
  title: string;
  content: string;
  order: number;
  published: boolean;
  lastUpdated: string;
}

/**
 * Validation schemas (for use with zod or similar)
 */
export interface ServiceValidationRules {
  title: {
    minLength: number;
    maxLength: number;
    required: boolean;
  };
  description: {
    minLength: number;
    maxLength: number;
    required: boolean;
  };
  features: {
    maxItems: number;
    minItems: number;
  };
}


export {};
