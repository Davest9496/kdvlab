'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { companies } from '@/data/jobs';
import type { JobPosition } from '@/types/jobs';
import type { Country } from '@/data/countries';
import PhoneInput from '@/components/ui/phone-input';
import { cn } from '@/lib/utils';

interface JobApplicationFormProps {
  job: JobPosition;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountry: Country | null;
  phoneValid: boolean;
  coverLetter: string;
  resume: File | null;
  portfolio: File | null;
  agreeToPrivacy: boolean;
  agreeToContact: boolean;
}

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

export default function JobApplicationForm({ job }: JobApplicationFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCountry: null,
    phoneValid: false,
    coverLetter: '',
    resume: null,
    portfolio: null,
    agreeToPrivacy: false,
    agreeToContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle');

  const company = companies[job.company];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePhoneChange = (
    phoneValue: string,
    isValid: boolean,
    country: Country
  ) => {
    setFormData((prev) => ({
      ...prev,
      phone: phoneValue,
      phoneValid: isValid,
      phoneCountry: country,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'resume' | 'portfolio'
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);

      // Generate application ID and submission timestamp
      const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      const submittedAt = new Date().toISOString();

      // Redirect to confirmation page with application details
      router.push(
        `/careers/${job.id}/apply/confirmation?applicationId=${applicationId}&submittedAt=${submittedAt}`
      );
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phoneValid &&
    formData.resume &&
    formData.agreeToPrivacy;

  // Show error state if submission failed
  if (submitStatus === 'error') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-heading-lg font-gilroy-bold text-foreground mb-4">
            Submission Failed
          </h2>
          <p className="text-body-base text-muted-foreground mb-8">
            We encountered an error while submitting your application. Please
            try again.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSubmitStatus('idle')}
              className="btn-primary px-6 py-3 rounded-lg text-body-base font-medium"
            >
              Try Again
            </button>
            <Link
              href="/careers"
              className="btn-secondary px-6 py-3 rounded-lg text-body-base font-medium"
            >
              Back to Careers
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container pt-8">
        <Link
          href={`/careers/${job.id}`}
          className="inline-flex items-center gap-2 text-body-base text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Job Details
        </Link>
      </div>

      {/* Form Container */}
      <div className="container py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-4 mb-6">
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
                <h1 className="text-heading-lg font-gilroy-bold text-foreground">
                  Apply for {job.title}
                </h1>
                <p className="text-body-base text-muted-foreground">
                  {company.name} • {job.location}
                </p>
              </div>
            </div>

            <div className="h-px bg-border mb-8" />
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Personal Information */}
            <div>
              <h2 className="text-heading-md font-gilroy-bold text-foreground mb-6">
                Personal Information
              </h2>

              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-body-sm font-medium text-foreground mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-body-sm font-medium text-foreground mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-body-sm font-medium text-foreground mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Phone Number - Side by Side on Large Screens */}
                <div>
                  <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    defaultCountry="GB"
                    placeholder="965 090 2468"
                    required
                    name="phone"
                  />
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div className="space-y-6">
              <h2 className="text-heading-md font-gilroy-bold text-foreground">
                Documents
              </h2>

              {/* Resume Upload */}
              <div>
                <label className="block text-body-sm font-medium text-foreground mb-2">
                  Upload Resume/CV*
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'resume')}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                  <div className="flex items-center justify-center w-full px-4 py-8 bg-muted border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors duration-200">
                    <div className="text-center">
                      <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-body-base text-foreground font-medium">
                        {formData.resume
                          ? formData.resume.name
                          : 'Choose your resume'}
                      </p>
                      <p className="text-body-sm text-muted-foreground">
                        PDF, DOC, or DOCX (max 10MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Upload (Optional) */}
              <div>
                <label className="block text-body-sm font-medium text-foreground mb-2">
                  Portfolio or Additional Documents
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'portfolio')}
                    accept=".pdf,.doc,.docx,.zip"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center w-full px-4 py-8 bg-muted border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors duration-200">
                    <div className="text-center">
                      <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-body-base text-foreground font-medium">
                        {formData.portfolio
                          ? formData.portfolio.name
                          : 'Choose additional files (optional)'}
                      </p>
                      <p className="text-body-sm text-muted-foreground">
                        Portfolio, work samples, or other relevant documents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <h2 className="text-heading-md font-gilroy-bold text-foreground mb-4">
                Cover Letter
              </h2>
              <label className="block text-body-sm font-medium text-foreground mb-2">
                Tell us why you're interested in this position (optional)
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Share your motivation, relevant experience, and what excites you about this opportunity..."
                rows={6}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Legal Agreements */}
            <div className="space-y-4">
              <h2 className="text-heading-md font-gilroy-bold text-foreground">
                Privacy & Consent
              </h2>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToPrivacy"
                    checked={formData.agreeToPrivacy}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-primary bg-muted border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-body-sm text-muted-foreground">
                    I agree to the{' '}
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </a>{' '}
                    and confirm that KDVLAB may store my personal information to
                    process this job application.*
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary bg-muted border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-body-sm text-muted-foreground">
                    I consent to KDVLAB contacting me about future job
                    opportunities that may be relevant to my profile.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={cn(
                  'w-full px-8 py-4 rounded-lg text-body-base font-medium transition-all duration-300',
                  isFormValid && !isSubmitting
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Submitting Application...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>

              {!isFormValid && (
                <p className="text-body-sm text-muted-foreground text-center mt-3">
                  Please fill in all required fields to submit your application.
                </p>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
