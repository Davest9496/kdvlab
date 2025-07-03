'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceContent } from '@/lib/services-data';

interface ServiceBenefitsProps {
  service: ServiceContent;
  className?: string;
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  service,
  className,
}) => {
  return (
    <section className={cn('py-20 bg-muted/5', className)}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-lg font-heading text-white mb-6">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-body-lg text-white/70 mb-8">
              Our {service.title.toLowerCase()} services deliver measurable
              results and long-term value for your business.
            </p>

            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-body-base text-white/80">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-subheading-lg font-heading text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-body-base text-white/70 mb-6">
                  {service.ctaDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Starting from {service.startingPrice}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Delivery in {service.deliveryTimeline}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
