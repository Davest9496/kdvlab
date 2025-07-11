import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { jobPositions, companies } from '@/data/jobs';
import JobApplicationForm from '@/components/forms/job-application-form';

interface ApplyPageProps {
  params: {
    jobId: string;
  };
  searchParams: {
    confirmed?: string;
  };
}

// Generate static params for all job applications
export async function generateStaticParams() {
  return jobPositions.map((job) => ({
    jobId: job.id,
  }));
}

// Generate metadata for each application page
export async function generateMetadata({
  params,
}: ApplyPageProps): Promise<Metadata> {
  const job = jobPositions.find((j) => j.id === params.jobId);

  if (!job) {
    return {
      title: 'Job Application',
      description: 'Apply for a position at KDVLab.',
    };
  }

  const company = companies[job.company];

  return {
    title: `Apply for ${job.title} at ${company.name} - KDVLab`,
    description: `Submit your application for the ${job.title} position at ${company.name}. Join our team and work with cutting-edge technologies.`,
    keywords: [
      'Apply',
      'Job Application',
      job.title,
      company.name,
      job.location,
      job.type,
      'Career Application',
    ],
    robots: {
      index: false, // Don't index application forms
      follow: false,
    },
    alternates: {
      canonical: `https://kdvlab.com/careers/${job.id}/apply`,
    },
  };
}

export default function JobApplicationPage({
  params,
  searchParams,
}: ApplyPageProps) {
  const job = jobPositions.find((j) => j.id === params.jobId);

  if (!job) {
    notFound();
  }

  // If this is a confirmed submission, redirect to confirmation page
  if (searchParams.confirmed === 'true') {
    redirect(`/careers/${job.id}/apply/confirmation`);
  }

  const company = companies[job.company];

  // Structured data for job application
  const jobApplicationLD = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description.overview,
    identifier: {
      '@type': 'PropertyValue',
      name: company.name,
      value: job.id,
    },
    hiringOrganization: {
      '@type': 'Organization',
      name: company.name,
      sameAs: 'https://kdvlab.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
      },
    },
    applicationDeadline: job.applicationDeadline || '2024-12-31',
    employmentType: 'FULL_TIME',
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobApplicationLD),
        }}
      />

      {/* Application Form */}
      <JobApplicationForm job={job} />
    </>
  );
}
