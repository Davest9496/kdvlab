'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Building,
  TrendingUp,
  Briefcase,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { companies } from '@/data/jobs';
import type { JobPosition } from '@/types/jobs';
import { cn } from '@/lib/utils';

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transition: {
      duration: 0.3,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

interface JobModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

const tabs = [
  { id: 'description', label: 'Job Description' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'overview', label: 'Overview' },
];

export default function JobModal({ job, isOpen, onClose }: JobModalProps) {
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('description'); // Reset to first tab when opening
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!job) return null;

  const company = companies[job.company];
  const formatSalary = (job: JobPosition) => {
    const { min, max, currency, period } = job.salary;
    const periodText =
      period === 'yearly'
        ? 'Per/YI'
        : period === 'monthly'
          ? 'Per/MI'
          : 'Per/HI';
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
    return `${symbol}${min.toLocaleString()} - ${symbol}${max.toLocaleString()} ${periodText}`;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="space-y-8">
            <div>
              <h4 className="text-subheading-md font-gilroy-bold text-foreground mb-4">
                What will make your journey with us unique?
              </h4>
              <ul className="space-y-3">
                {job.description.uniqueJourney.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-body-base text-muted-foreground">
                    {item}
                  </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-subheading-md font-gilroy-bold text-foreground mb-4">
                What will you do
              </h4>
              <p className="text-body-base text-muted-foreground leading-relaxed">
                {job.description.whatYoullDo}
              </p>
            </div>

            <div>
              <h4 className="text-subheading-md font-gilroy-bold text-foreground mb-4">
                What You will Bring
              </h4>
              <ul className="space-y-3">
                {job.description.whatYoullBring.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-body-base text-muted-foreground">
                    {item}
                  </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'requirements':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-subheading-md font-gilroy-bold text-foreground mb-4">
                Requirements
              </h4>
              <ul className="space-y-3">
                {job.description.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-body-base text-muted-foreground">
                    {req}
                  </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'benefits':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-subheading-md font-gilroy-bold text-foreground mb-2">
                Base Pay Range
              </h4>
              <p className="text-body-lg font-gilroy-bold text-primary mb-6">
                {formatSalary(job)}
              </p>
            </div>

            <div>
              <h4 className="text-subheading-md font-gilroy-bold text-foreground mb-4">
                What is in it for you?
              </h4>
              <ul className="space-y-3">
                {job.description.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-body-base text-muted-foreground">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-body-sm text-muted-foreground">Size</p>
                    <p className="text-body-base font-medium text-foreground">
                      {job.companyInfo.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-body-sm text-muted-foreground">
                      Founded
                    </p>
                    <p className="text-body-base font-medium text-foreground">
                      {job.companyInfo.founded}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-body-sm text-muted-foreground">Type</p>
                    <p className="text-body-base font-medium text-foreground">
                      Company - Private
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-body-sm text-muted-foreground">
                      Industry
                    </p>
                    <p className="text-body-base font-medium text-foreground">
                      {job.companyInfo.industry}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-body-sm text-muted-foreground">
                      Revenue
                    </p>
                    <p className="text-body-base font-medium text-foreground">
                      {job.companyInfo.revenue}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-body-sm text-muted-foreground">Sector</p>
                    <p className="text-body-base font-medium text-foreground">
                      {job.companyInfo.sector}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Images Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-muted rounded-lg overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20" />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-gilroy-bold"
                  style={{
                    backgroundColor: company.color,
                    color: company.textColor,
                  }}
                >
                  {company.name.split(' ')[0].charAt(0)}
                </div>
                <div>
                  <h3 className="text-heading-sm font-gilroy-bold text-foreground">
                    {job.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">
                    {company.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href={`/careers/${job.id}/apply`}
                  className="btn-primary px-6 py-2 rounded-lg text-body-sm font-medium"
                >
                  Submit Resume
                </Link>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Job Info Bar */}
            <div className="px-6 py-4 bg-muted/30 border-b border-border">
              <div className="flex items-center gap-6 text-body-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Where you will do it: {job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>The Interview Process: {job.description.overview}</span>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-2 text-body-sm text-muted-foreground">
                <span>Tools: Figma</span>
                <span>Reporting to: Design Manager, Bruno Mota</span>
                <span>
                  Your team: You will mainly be part of a UX Designer&apos;s team,
                  working with cross-functional teams and a wider group of UX
                  department
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-6 py-4 border-b border-border">
              <div className="flex gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'text-body-base font-medium pb-2 border-b-2 transition-all duration-300',
                      activeTab === tab.id
                        ? 'text-foreground border-primary'
                        : 'text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground/50'
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="p-6 overflow-y-auto max-h-[50vh]"
            >
              <motion.div variants={itemVariants}>
                {renderTabContent()}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
