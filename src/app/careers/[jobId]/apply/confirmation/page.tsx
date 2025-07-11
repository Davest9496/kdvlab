'use client';

import { useEffect, useState } from 'react';
import { notFound, useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { jobPositions, companies } from '@/data/jobs';

// Animation variants for smooth entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.25, 0, 1],
      delay: 0.5,
    },
  },
};

export default function ApplicationConfirmationPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const jobId = params?.jobId as string;
  const applicationId = searchParams?.get('applicationId');
  const submittedAt = searchParams?.get('submittedAt');

  // Set document title
  useEffect(() => {
    const job = jobPositions.find((j) => j.id === jobId);
    if (job) {
      const company = companies[job.company];
      document.title = `Application Submitted - ${job.title} at ${company.name}`;
    }
    setIsLoading(false);
  }, [jobId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const job = jobPositions.find((j) => j.id === jobId);

  if (!job) {
    notFound();
  }

  const company = companies[job.company];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background gradient overlay similar to the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Icon */}
        <motion.div variants={iconVariants} className="mb-12">
          <div className="inline-flex items-center justify-center">
            <Image
              src="/images/Pi7_sending-message@4x.png"
              alt="Message sent successfully"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-light mb-4">
            Your Application Has Been
          </h1>
          <h2 className="text-primary text-4xl md:text-5xl font-light">
            Submitted!
          </h2>
        </motion.div>

        {/* Status Messages */}
        <motion.div variants={itemVariants} className="space-y-6 mb-12">
          {/* Email Confirmation */}
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-lg">
              You will get an email confirmation at{' '}
              <span className="text-white font-medium">careers@kdvlab.com</span>
            </span>
          </div>

          {/* Response Time */}
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-lg">
              This employer typically responds to applications within 1 day
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </motion.div>

        {/* Keep Track Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-gray-300 text-xl font-light mb-4">
            Keep track of your applications
          </h3>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto">
            You will receive a status update in an email from KDVLAB within a
            few weeks of submitting your application.
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white text-lg font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go back to Careers Page
          </Link>
        </motion.div>

        {/* Additional Info - Job Details */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm">
            <span>Applied for:</span>
            <span className="text-white font-medium">{job.title}</span>
            <span>at</span>
            <span className="text-white font-medium">{company.name}</span>
          </div>
          {applicationId && (
            <div className="mt-2 text-gray-500 text-xs font-mono">
              Application ID: {applicationId}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
