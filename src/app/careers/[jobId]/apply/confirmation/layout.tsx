import type { Metadata } from 'next';
import { jobPositions, companies } from '@/data/jobs';

interface ConfirmationLayoutProps {
  children: React.ReactNode;
  params: {
    jobId: string;
  };
}

// Generate metadata for the confirmation page
export async function generateMetadata({
  params,
}: {
  params: { jobId: string };
}): Promise<Metadata> {
  const job = jobPositions.find((j) => j.id === params.jobId);

  if (!job) {
    return {
      title: 'Application Confirmation',
      description: 'Your job application has been submitted successfully.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const company = companies[job.company];

  return {
    title: `Application Submitted - ${job.title} at ${company.name}`,
    description: `Your application for ${job.title} at ${company.name} has been successfully submitted. We'll be in touch soon!`,
    robots: {
      index: false, // Don't index confirmation pages
      follow: false,
    },
    openGraph: {
      title: `Application Submitted - ${job.title}`,
      description: `Your application has been submitted successfully. We'll review it and get back to you soon.`,
      type: 'website',
    },
  };
}

export default function ConfirmationLayout({
  children,
  params,
}: ConfirmationLayoutProps) {
  return <>{children}</>;
}
