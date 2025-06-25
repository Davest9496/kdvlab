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
  Icon: React.FC<IconProps>; // Changed from iconPath to Icon component
}

// Tab data - easily configurable and extensible
const tabsData: TabContent[] = [
  {
    id: 'mission',
    label: 'Our Mission',
    title: 'Our Mission',
    description:
      'To empower businesses through innovative software solutions that drive growth, improve efficiency, and create exceptional user experiences.',
    imagePath: '/images/word-our-mission-written-on-260nw-1993327142.webp',
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
    imagePath: '/images/word-our-mission-written-on-260nw-1993327142.webp',
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
    imagePath: '/images/word-our-mission-written-on-260nw-1993327142.webp',
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
    tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <section
      className={cn(
        'relative bg-background text-foreground py-16 md:py-24 lg:py-32',
        className
      )}
      aria-labelledby="mission-vision-heading"
    >
      <div>
        {/* Tab Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16"
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
                  'relative px-6 py-3 rounded-lg font-rubik font-medium text-sm md:text-base',
                  'transition-all duration-300 ease-out',
                  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
                  'hover:scale-105 active:scale-95',
                  'flex items-center gap-2', // Added flex layout for icon and text
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
                    className="absolute inset-0 bg-primary rounded-lg"
                    style={{ zIndex: -1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Render SVG icon - automatically inherits text color */}
                <Icon
                  className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                  aria-hidden={true}
                />

                {/* Tab label */}
                <span className="whitespace-nowrap">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeTab}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6 w-full"
              role="tabpanel"
              id={`panel-${currentContent.id}`}
              aria-labelledby={`tab-${currentContent.id}`}
            >
              <motion.h3
                className="text-heading-md font-gilroy-bold"
                variants={contentVariants}
              >
                {currentContent.title}
              </motion.h3>

              <motion.p
                className="text-body-lg text-muted-foreground leading-relaxed"
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
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted/20">
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
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
