import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// SVG Icon Components with proper TypeScript typing
interface IconProps {
  className?: string;
  'aria-hidden'?: boolean;
}

// Mission Icon - Target/Bullseye representing focus and goals
const MissionIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// Vision Icon - Eye representing sight and foresight
const VisionIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Principles Icon - Shield representing values and protection
const PrinciplesIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// Practices Icon - Cog/Settings representing processes and methodology
const PracticesIcon: React.FC<IconProps> = ({
  className = 'w-5 h-5',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m1.05 9 1.732 1" />
    <path d="m22.95 9-1.732 1" />
    <path d="m8 12-1.732-1" />
    <path d="m16 12 1.732-1" />
    <path d="m1.05 15 1.732-1" />
    <path d="m22.95 15-1.732-1" />
  </svg>
);

// Define the tab data structure with proper TypeScript typing
interface TabContent {
  id: string;
  label: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  Icon: React.FC<IconProps>;
}

// Tab data - easily configurable and extensible
const tabsData: TabContent[] = [
  {
    id: 'mission',
    label: 'Our Mission',
    title: 'Our Mission',
    description:
      'To empower businesses through innovative software solutions that drive growth, improve efficiency, and create exceptional user experiences.',
    imagePath: '/images/mission.png',
    imageAlt:
      'Our Mission - Empowering businesses through innovative software solutions',
    Icon: MissionIcon,
  },
  {
    id: 'vision',
    label: 'Our Vision',
    title: 'Our Vision',
    description:
      'To become the leading provider of cutting-edge technology solutions that transform how businesses operate and succeed in the digital age.',
    imagePath: '/images/vision.png',
    imageAlt:
      'Our Vision - Leading provider of cutting-edge technology solutions',
    Icon: VisionIcon,
  },
  {
    id: 'principles',
    label: 'Our Principles',
    title: 'Our Principles',
    description:
      'We believe in transparency, innovation, quality, and client-centric approaches that deliver measurable results and long-term partnerships.',
    imagePath: '/images/principles.png',
    imageAlt:
      'Our Principles - Transparency, innovation, and quality-driven approach',
    Icon: PrinciplesIcon,
  },
  {
    id: 'practices',
    label: 'Our Practices',
    title: 'Our Practices',
    description:
      'We follow industry best practices, agile methodologies, and continuous improvement to ensure reliable, scalable, and maintainable solutions.',
    imagePath: '/images/word-our-mission-written-on-260nw-1993327142.webp',
    imageAlt: 'Our Practices - Industry best practices and agile methodologies',
    Icon: PracticesIcon,
  },
];

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    rotateY: 5,
    transition: {
      duration: 0.4,
    },
  },
};

interface MissionVisionTabsProps {
  className?: string;
  defaultTab?: string;
}

export default function MissionVisionTabs({
  className = '',
  defaultTab = 'mission',
}: MissionVisionTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  // Get current tab content with type safety
  const currentContent =
    tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <section
      className={cn(
        'bg-backlgroung relative py-16 text-foreground md:py-24 lg:py-32',
        className
      )}
      aria-labelledby="mission-vision-heading"
    >
      <div className="container">
        {/* Tab Navigation - Single Line with Responsive Sizing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mb-12 md:mb-16"
        >
          {/* Tab container with reduced gaps and responsive sizing */}
          <div
            className="flex justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4"
            role="tablist"
            aria-label="Mission, Vision, Principles, and Practices"
          >
            {tabsData.map((tab, index) => {
              const { Icon } = tab;

              return (
                <motion.button
                  key={tab.id}
                  variants={contentVariants}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    'relative flex-shrink-0', // Prevent button shrinking
                    // Aggressive responsive padding - scales down significantly on mobile
                    'px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3',
                    'rounded-md font-rubik font-medium sm:rounded-lg',
                    // More aggressive text scaling
                    'text-[10px] xs:text-xs sm:text-sm md:text-base',
                    'transition-all duration-300 ease-out',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
                    'hover:scale-105 active:scale-95',
                    // Minimal gap between icon and text
                    'flex items-center gap-1 xs:gap-1.5 sm:gap-2',
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  tabIndex={activeTab === tab.id ? 0 : -1}
                >
                  {/* Active tab indicator */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-md bg-primary sm:rounded-lg"
                      style={{ zIndex: -1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Render SVG icon with aggressive responsive sizing */}
                  <Icon
                    className="h-2.5 w-2.5 flex-shrink-0 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                    aria-hidden={true}
                  />

                  {/* Tab label with smart truncation and responsive display */}
                  <span className="whitespace-nowrap">
                    {/* Progressive text revelation based on screen size */}
                    <span className="hidden sm:inline">Our </span>
                    <span className="inline sm:hidden">
                      {/* Ultra-short versions for tiny screens */}
                      {tab.id === 'mission' && 'Mission'}
                      {tab.id === 'vision' && 'Vision'}
                      {tab.id === 'principles' && 'Values'}
                      {tab.id === 'practices' && 'Methods'}
                    </span>
                    <span className="hidden sm:inline">
                      {tab.label.replace('Our ', '')}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="flex flex-col-reverse items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeTab}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full space-y-6"
              role="tabpanel"
              id={`panel-${currentContent.id}`}
              aria-labelledby={`tab-${currentContent.id}`}
            >
              <motion.h3
                className="font-gilroy-bold text-heading-md"
                variants={contentVariants}
              >
                {currentContent.title}
              </motion.h3>

              <motion.p
                className="text-body-lg leading-relaxed text-muted-foreground"
                variants={contentVariants}
              >
                {currentContent.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Image Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activeTab}`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted/20">
                <Image
                  src={currentContent.imagePath}
                  alt={currentContent.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  priority={activeTab === 'mission'} // Prioritize first image
                  quality={90}
                />

                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
    </section>
  );
}
