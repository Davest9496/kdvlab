import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { jobPositions, companies } from '@/data/jobs';
import JobApplicationForm from '@/components/forms/job-application-form';
import { PageHero } from '@/components/ui/page-hero';

interface JobApplicationPageProps {
  params: {
    jobId: string;
  };
}

// Generate static params for all job applications
export async function generateStaticParams() {
  return jobPositions.map((job) => ({
    jobId: job.id,
  }));
}

// Generate metadata for each job application page
export async function generateMetadata({
  params,
}: JobApplicationPageProps): Promise<Metadata> {
  const job = jobPositions.find((j) => j.id === params.jobId);

  if (!job) {
    return {
      title: 'Job Application Not Found',
      description: 'The requested job application could not be found.',
    };
  }

  const company = companies[job.company];

  return {
    title: `Apply for ${job.title} at ${company.name} - KDVLab`,
    description: `Submit your application for the ${job.title} position at ${company.name}. Join our team in ${job.location}.`,
    robots: {
      index: false, // Prevent indexing of application forms
      follow: true,
    },
    alternates: {
      canonical: `https://kdvlab.com/careers/${job.id}/apply`,
    },
  };
}

export default function JobApplicationPage({
  params,
}: JobApplicationPageProps) {
  const job = jobPositions.find((j) => j.id === params.jobId);

  if (!job) {
    notFound();
  }

  const company = companies[job.company];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Upload Resume"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
        ]}
        variant="compact"
      />

      {/* Application Form */}
      <JobApplicationForm job={job} />
    </>
  );
}
