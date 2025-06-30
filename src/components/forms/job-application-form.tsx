'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, FileText, Check } from 'lucide-react';
import Link from 'next/link';
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
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

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

      setSubmitStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
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

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-heading-lg font-gilroy-bold text-foreground mb-4">
            Application Submitted!
          </h2>
          <p className="text-body-base text-muted-foreground mb-8">
            Thank you for your interest in the {job.title} position. We will
            review your application and get back to you soon.
          </p>
          <Link
            href="/careers"
            className="btn-primary px-6 py-3 rounded-lg text-body-base font-medium"
          >
            Back to Careers
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container pt-8">
        <a
          href="/careers"
          className="inline-flex items-center gap-2 text-body-base text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </a>
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
                  {job.title}
                </h1>
                <p className="text-body-base text-muted-foreground">
                  {job.location}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-body-sm font-medium text-foreground mb-2">
                    Name*
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

                {/* Email */}
                <div>
                  <label className="block text-body-sm font-medium text-foreground mb-2">
                    Email*
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

                {/* Phone Number with Dynamic Country Selection */}
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
              {/* Resume Upload */}
              <div>
                <label className="block text-body-sm font-medium text-foreground mb-2">
                  Upload CV*
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
                        {formData.resume ? formData.resume.name : 'Resume.Pdf'}
                      </p>
                      <p className="text-body-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Upload */}
              <div>
                <label className="block text-body-sm font-medium text-foreground mb-2">
                  Additional File*
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
                          : 'Portfolio.Pdf'}
                      </p>
                      <p className="text-body-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-body-sm font-medium text-foreground mb-2">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Write a letter"
                rows={6}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Checkboxes */}
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
                  By submitting this application, I agree that I have read the
                  Privacy Policy and confirm that KDVLAB will store my personal
                  details for this role to process my job application.
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
                  Yes, KDVLAB can contact me directly about specific future job
                  opportunities.
                </span>
              </label>
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
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
