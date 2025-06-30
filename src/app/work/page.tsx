import React from 'react';
import { PageHero } from '@/components/ui/page-hero';
import { GetInTouchButtonPill } from '@/components/ui/get-in-touch-button';
import { pageConfigs } from '@/lib/page-configs';
import {
  Lightbulb,
  Palette,
  BarChart3,
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Home,
  Truck,
} from 'lucide-react';
import CTASection from '@/components/features/cta';

// TypeScript interfaces for type safety and better developer experience
interface ProjectApproachStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly color: 'blue' | 'primary' | 'secondary';
}

interface Industry {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ComponentType<{ className?: string }>;
}

// Project approach data - matches your three-step process from the image
const projectApproachSteps: readonly ProjectApproachStep[] = [
  {
    id: 'understand',
    title: 'Understand the Problem',
    description:
      'We begin by deeply understanding the challenges our clients face, their business context, and their users&apos; needs. This foundation ensures we&apos;re solving the right problems in the right way.',
    icon: Lightbulb,
    color: 'secondary',
  },
  {
    id: 'design',
    title: 'Design the Solution',
    description:
      'Based on our understanding, we design comprehensive solutions that address both immediate needs and long-term objectives. Balancing technical considerations with business requirements.',
    icon: Palette,
    color: 'primary',
  },
  {
    id: 'measure',
    title: 'Measure the Outcome',
    description:
      'We define clear success metrics for every project and track them rigorously. This data-driven approach ensures our solutions deliver real, measurable value to our clients.',
    icon: BarChart3,
    color: 'secondary',
  },
] as const;

// Industries data - using the same card style as Our Values
const industriesData: readonly Industry[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Patient management systems, telemedicine platforms, and healthcare analytics solutions that improve patient care and operational efficiency.',
    icon: Heart,
  },
  {
    id: 'financial',
    title: 'Financial Services',
    description:
      'Secure, compliant applications for banking, investment management, and financial analysis that handle sensitive data with the utmost care.',
    icon: DollarSign,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description:
      'Scalable, high-performance online stores and marketplaces that deliver exceptional shopping experiences and drive conversions.',
    icon: ShoppingCart,
  },
  {
    id: 'education',
    title: 'Education',
    description:
      'Learning management systems and educational tools that enhance teaching and learning experiences for students of all ages.',
    icon: GraduationCap,
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description:
      'Property management platforms, virtual tour applications, and market analysis tools that modernize real estate operations.',
    icon: Home,
  },
  {
    id: 'logistics',
    title: 'Transportation & Logistics',
    description:
      'Route optimization, fleet management, and supply chain solutions that improve efficiency and reduce costs.',
    icon: Truck,
  },
] as const;

// Component for the project approach steps
const ProjectApproachCard: React.FC<{
  step: ProjectApproachStep;
  index: number;
}> = ({ step, index }) => {
  const IconComponent = step.icon;

  return (
    <div className="relative">
      {/* Card Background - All cards use the same styling */}
      <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full">
        {/* Icon Container */}
        <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-heading-sm font-gilroy-bold text-foreground">
            {step.title}
          </h3>

          <p className="text-body-base leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Component for industry cards - reusing the exact style from Our Values
const IndustryCard: React.FC<{ industry: Industry }> = ({ industry }) => {
  const IconComponent = industry.icon;

  return (
    <article className="relative">
      {/* Card Background with Glassmorphism Effect - Same as Our Values */}
      <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full">
        {/* Icon Container */}
        <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-heading-sm font-gilroy-bold text-foreground">
            {industry.title}
          </h3>

          <p className="text-body-base text-muted-foreground leading-relaxed">
            {industry.description}
          </p>
        </div>
      </div>
    </article>
  );
};

// Main Our Work Page Component
export default function OurWorkPage() {
  const workConfig = pageConfigs.work;

  return (
    <main>
      {/* Page Hero */}
      <PageHero
        title={workConfig.title}
        subtitle={workConfig.subtitle}
        breadcrumbs={[...workConfig.breadcrumbs]}
      />

      {/* Portfolio Growing Section - Matches your image exactly */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-hero-lg font-gilroy-bold text-foreground mb-8 leading-tight">
              OUR PORTFOLIO IS GROWING
            </h2>

            {/* Description */}
            <p className="text-body-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              While we&apos;re building our online portfolio, we&apos;d be happy
              to share examples of our work directly with you. Please contact us
              to see case studies relevant to your industry and needs.
            </p>

            {/* CTA Button */}
            <GetInTouchButtonPill href="/contact">
              Contact Us to See Examples
            </GetInTouchButtonPill>
          </div>
        </div>
      </section>

      {/* How We Approach Projects Section */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-gilroy-bold text-foreground mb-4">
              How We Approach Projects
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Every project we undertake follows a structured approach designed
              to deliver exceptional results.
            </p>
          </div>

          {/* Project Approach Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectApproachSteps.map((step, index) => (
              <ProjectApproachCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-heading-xl font-gilroy-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve successfully delivered projects across various
              industries, bringing our technical expertise and innovative
              approach to each unique challenge.
            </p>
          </div>

          {/* Industries Grid - Same layout as Our Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industriesData.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Expertise Section (Optional - can be expanded) */}
      <section className="bg-muted/30 py-16 md:py-24 lg:py-32">
        <CTASection />
      </section>
    </main>
  );
}
