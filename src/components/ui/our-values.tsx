import React from 'react';

// SVG Icons as React components for optimal performance and styling control
const ExcellenceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
  </svg>
);

const InnovationIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.973 7.818 14.441 10.25 15.622C10.81 15.87 11.189 16.427 11.189 17.054V19C11.189 19.552 11.637 20 12.189 20H11.811C12.363 20 12.811 19.552 12.811 19V17.054C12.811 16.427 13.19 15.87 13.75 15.622C16.182 14.441 18 11.973 18 9C18 5.68629 15.3137 3 12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CollaborationIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 8C21 6.89543 20.1046 6 19 6H16.5C15.3954 6 14.5 6.89543 14.5 8V10C14.5 11.1046 15.3954 12 16.5 12H19C20.1046 12 21 11.1046 21 10V8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9.5 8C9.5 6.89543 8.60457 6 7.5 6H5C3.89543 6 3 6.89543 3 8V10C3 11.1046 3.89543 12 5 12H7.5C8.60457 12 9.5 11.1046 9.5 10V8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14.5 9H12.5C11.9477 9 11.5 9.44772 11.5 10C11.5 10.5523 11.9477 11 12.5 11H14.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 12V14C5 15.1046 5.89543 16 7 16H17C18.1046 16 19 15.1046 19 14V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IntegrityIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L3 7L12 12L21 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 17L12 22L21 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12L12 17L21 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClientFocusIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
    <circle
      cx="12"
      cy="12"
      r="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
    />
  </svg>
);

const ContinuousLearningIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="8"
      y="8"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="8"
      y1="12"
      x2="16"
      y2="12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="12"
      y1="8"
      x2="12"
      y2="16"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// TypeScript interfaces for type safety
interface ValueItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ComponentType<{ className?: string }>;
}

interface ValuesProps {
  readonly className?: string;
  readonly variant?: 'default' | 'compact' | 'expanded';
}

// Values data with strict typing
const valuesData: readonly ValueItem[] = [
  {
    id: 'excellence',
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from code quality to client communication. We\'re never satisfied with "good enough".',
    icon: ExcellenceIcon,
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'We embrace new technologies and approaches, constantly seeking better ways to solve problems and create value for our clients.',
    icon: InnovationIcon,
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description:
      'We believe the best results come from working closely with our clients and each other, sharing ideas and expertise openly.',
    icon: CollaborationIcon,
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description:
      'We conduct our business with the highest ethical standards, being honest, transparent, and accountable in all our interactions.',
    icon: IntegrityIcon,
  },
  {
    id: 'client-focus',
    title: 'Client Focus',
    description:
      "We put our clients' needs first, always seeking to understand their challenges and deliver solutions that create real value.",
    icon: ClientFocusIcon,
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description:
      "We're committed to growing our knowledge and skills, staying at the forefront of technology to better serve our clients.",
    icon: ContinuousLearningIcon,
  },
] as const;

const OurValues: React.FC<ValuesProps> = ({
  className = '',
  variant = 'default',
}) => {
  return (
    <section
      className={`bg-background py-16 md:py-24 lg:py-32 ${className}`}
      aria-labelledby="values-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            id="values-heading"
            className="text-heading-xl font-gilroy-bold text-foreground mb-4"
          >
            Our Values
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do at KDVLAB.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valuesData.map((value) => {
            const IconComponent = value.icon;

            return (
              <article key={value.id} className="relative">
                {/* Card Background with Glassmorphism Effect */}
                <div
                  className="
                  bg-card/40 backdrop-blur-xl border border-border/50
                  rounded-2xl p-8 h-full
                "
                >
                  {/* Icon Container */}
                  <div
                    className="
                    w-16 h-16 mb-6
                    bg-gradient-to-br from-primary/20 to-primary/10
                    rounded-2xl
                    flex items-center justify-center
                    border border-primary/20
                  "
                  >
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-heading-sm font-gilroy-bold text-foreground">
                      {value.title}
                    </h3>

                    <p className="text-body-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;