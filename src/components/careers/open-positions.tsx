'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bookmark,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { jobPositions, companies } from '@/data/jobs';
import type { JobPosition } from '@/types/jobs';
import { cn } from '@/lib/utils';

const containerVariants = {
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
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

interface JobCardProps {
  job: JobPosition;
  onClick: () => void;
}

function JobCard({ job, onClick }: JobCardProps) {
  const company = companies[job.company];

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-card border border-border rounded-2xl p-6 cursor-pointer group"
      onClick={onClick}
    >
      {/* Company Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-gilroy-bold"
          style={{
            backgroundColor: company.color,
            color: company.textColor,
          }}
        >
          {company.name.split(' ')[0].charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-rubik font-medium text-sm text-muted-foreground">
            {company.name}
          </h4>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Bookmark className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Job Title */}
      <h3 className="text-heading-sm font-gilroy-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {job.title}
      </h3>

      {/* Location & Type */}
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-4 h-4 text-muted-foreground" />
        <span className="text-body-sm text-muted-foreground">
          {job.location}
        </span>
        <span className="text-muted-foreground">•</span>
        <span className="text-body-sm text-muted-foreground">({job.type})</span>
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-between">
        <div className="text-body-sm text-primary font-medium">
          View Job Details
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

interface OpenPositionsProps {
  onJobClick: (job: JobPosition) => void;
}

export default function OpenPositions({ onJobClick }: OpenPositionsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 6;
  const totalPages = Math.ceil(jobPositions.length / jobsPerPage);

  const currentJobs = jobPositions.slice(
    currentPage * jobsPerPage,
    (currentPage + 1) * jobsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-heading-xl font-gilroy-bold text-gradient mb-6"
          >
            OPEN POSITIONS
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-body-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our current opportunities and find the role that is right for
            you.
          </motion.p>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <button
                onClick={prevPage}
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                disabled={totalPages <= 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-body-sm text-muted-foreground">
                {currentPage + 1} of {totalPages}
              </span>

              <button
                onClick={nextPage}
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                disabled={totalPages <= 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
          ))}
        </motion.div>

        {/* Bottom pagination for mobile */}
        {totalPages > 1 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mt-12 md:hidden"
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  currentPage === i
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
