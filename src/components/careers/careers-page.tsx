'use client';
import { useState } from 'react';
import WhyWorkWithUs from './why-work-with-us';
import OpenPositions from './open-positions';
import JobModal from './job-modal';
import type { JobPosition } from '@/types/jobs';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJobClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing the job to allow exit animation to complete
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <>
      <WhyWorkWithUs />
      <OpenPositions onJobClick={handleJobClick} />
      <JobModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
