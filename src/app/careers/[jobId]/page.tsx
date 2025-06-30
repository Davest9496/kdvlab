import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { jobPositions, companies } from '@/data/jobs';
import JobModal from '@/components/careers/job-modal';

interface JobPageProps {
  params: {
    jobId: string;
  };
}

// Generate static params for all job positions (for static generation)
export async function generateStaticParams() {
  return jobPositions.map((job) => ({
    jobId: job.id,
  }));
}

// Generate metadata for each job page
export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const job = jobPositions.find((j) => j.id === params.jobId);
  
  if (!job) {
    return {
      title: 'Job Not Found',
      description: 'The requested job position could not be found.',
    };
  }

  const company = companies[job.company];
  
  return {
    title: `${job.title} at ${company.name} - KDVLab Careers`,
    description: `Join ${company.name} as a ${job.title} in ${job.location}. ${job.description.overview}`,
    keywords: [
      job.title,
      company.name,
      job.location,
      job.type,
      job.category,
      ...job.tags,
    ],
    openGraph: {
      title: `${job.title} at ${company.name}`,
      description: `Join ${company.name} as a ${job.title} in ${job.location}. Apply now!`,
      type: 'website',
      images: [
        {
          url: '/images/career.jpg',
          width: 1200,
          height: 630,
          alt: `${job.title} position at ${company.name}`,
        },
      ],
    },
    alternates: {
      canonical: `https://kdvlab.com/careers/${job.id}`,
    },
  };
}

export default function JobPage({ params }: JobPageProps) {
  const job = jobPositions.find((j) => j.id === params.jobId);

  if (!job) {
    notFound();
  }

  const company = companies[job.company];

  // Structured data for job posting
  const jobPostingLD = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description.overview,
    identifier: {
      '@type': 'PropertyValue',
      name: company.name,
      value: job.id
    },
    datePosted: job.postedDate,
    validThrough: job.applicationDeadline || '2024-12-31',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: company.name,
      sameAs: 'https://kdvlab.com'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: job.location.includes('Portugal') ? 'PT' : 
                       job.location.includes('Italy') ? 'IT' : 
                       job.location.includes('Germany') ? 'DE' : 
                       job.location.includes('London') ? 'GB' : 'Remote'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.salary.currency,
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: job.salary.period.toUpperCase()
      }
    },
    workHours: job.type === 'Remote' ? 'Flexible' : 'Full-time',
    skills: job.tags,
    responsibilities: job.description.requirements,
    qualifications: job.description.whatYoullBring,
    benefits: job.description.benefits
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingLD)
        }}
      />

      {/* Page Content */}
      <div className="min-h-screen bg-background pt-8">
        <div className="container">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-body-base text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </div>

          {/* Job Details in Modal-like Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-gilroy-bold"
                    style={{ 
                      backgroundColor: company.color, 
                      color: company.textColor 
                    }}
                  >
                    {company.name.split(' ')[0].charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-heading-lg font-gilroy-bold text-foreground">
                      {job.title}
                    </h1>
                    <p className="text-body-base text-muted-foreground">
                      {company.name}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/careers/${job.id}/apply`}
                  className="btn-primary px-6 py-3 rounded-lg text-body-base font-medium"
                >
                  Apply Now
                </Link>
              </div>

              {/* Content using JobModal component logic but as a static page */}
              <div className="p-6">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-heading-md font-gilroy-bold text-foreground mb-4">
                      Job Overview
                    </h2>
                    <p className="text-body-base text-muted-foreground">
                      {job.description.overview}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-heading-md font-gilroy-bold text-foreground mb-4">
                      What You will Do
                    </h2>
                    <p className="text-body-base text-muted-foreground leading-relaxed">
                      {job.description.whatYoullDo}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-heading-md font-gilroy-bold text-foreground mb-4">
                      Requirements
                    </h2>
                    <ul className="space-y-3">
                      {job.description.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-body-base text-muted-foreground">{req}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-heading-md font-gilroy-bold text-foreground mb-4">
                      What We Offer
                    </h2>
                    <ul className="space-y-3">
                      {job.description.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-body-base text-muted-foreground">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company Information */}
                  <div>
                    <h2 className="text-heading-md font-gilroy-bold text-foreground mb-6">
                      About {company.name}
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-body-sm text-muted-foreground">Company Size</p>
                          <p className="text-body-base font-medium text-foreground">{job.companyInfo.size}</p>
                        </div>
                        
                        <div>
                          <p className="text-body-sm text-muted-foreground">Founded</p>
                          <p className="text-body-base font-medium text-foreground">{job.companyInfo.founded}</p>
                        </div>
                        
                        <div>
                          <p className="text-body-sm text-muted-foreground">Industry</p>
                          <p className="text-body-base font-medium text-foreground">{job.companyInfo.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-body-sm text-muted-foreground">Revenue</p>
                          <p className="text-body-base font-medium text-foreground">{job.companyInfo.revenue}</p>
                        </div>
                        
                        <div>
                          <p className="text-body-sm text-muted-foreground">Sector</p>
                          <p className="text-body-base font-medium text-foreground">{job.companyInfo.sector}</p>
                        </div>
                        
                        <div>
                          <p className="text-body-sm text-muted-foreground">Location</p>
                          <p className="text-body-base font-medium text-foreground">{job.location} ({job.type})</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Salary Information */}
                  <div className="bg-muted/30 rounded-xl p-6">
                    <h2 className="text-heading-md font-gilroy-bold text-foreground mb-4">
                      Compensation
                    </h2>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-body-sm text-muted-foreground mb-1">Base Salary Range</p>
                        <p className="text-subheading-lg font-gilroy-bold text-primary">
                          {job.salary.currency === 'USD' ? '$' : job.salary.currency === 'EUR' ? '€' : '£'}
                          {job.salary.min.toLocaleString()} - {job.salary.currency === 'USD' ? '$' : job.salary.currency === 'EUR' ? '€' : '£'}
                          {job.salary.max.toLocaleString()}
                        </p>
                        <p className="text-body-sm text-muted-foreground">
                          Per {job.salary.period === 'yearly' ? 'Year' : job.salary.period === 'monthly' ? 'Month' : 'Hour'}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-body-sm text-muted-foreground mb-1">Job Type</p>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-body-sm rounded-full">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-body-sm rounded-full">
                            {job.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div id="apply" className="text-center pt-8 border-t border-border">
                    <h2 className="text-heading-md font-gilroy-bold text-foreground mb-4">
                      Ready to Apply?
                    </h2>
                    <p className="text-body-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Join {company.name} and be part of an innovative team that is shaping the future of {job.category.toLowerCase()}. 
                      We can&apos;t wait to hear from you!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href={`/careers/${job.id}/apply`}
                        className="btn-primary px-8 py-3 rounded-lg text-body-base font-medium"
                      >
                        Submit Application
                      </Link>
                      <Link
                        href="/careers"
                        className="btn-secondary px-8 py-3 rounded-lg text-body-base font-medium"
                      >
                        View Other Positions
                      </Link>
                    </div>
                    
                    <p className="text-body-sm text-muted-foreground mt-4">
                      Questions about this role? Contact us at{' '}
                      <a href="mailto:careers@kdvlab.com" className="text-primary hover:underline">
                        careers@kdvlab.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}