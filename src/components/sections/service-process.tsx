'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ServiceContent } from '@/lib/services-data';

interface ServiceProcessProps {
  service: ServiceContent;
  className?: string;
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({
  service,
  className,
}) => {
  return (
    <section className={cn('py-20 bg-background', className)}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-lg font-heading text-white mb-4">
            Our Process
          </h2>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery and
            client satisfaction.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  'flex items-start gap-6 p-6 rounded-xl',
                  'bg-white/[0.02] backdrop-blur-sm border border-white/[0.08]',
                  'hover:bg-white/[0.04] transition-all duration-300'
                )}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border border-primary/30">
                    <span className="text-primary font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-subheading-md font-heading text-white">
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-body-base text-white/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
