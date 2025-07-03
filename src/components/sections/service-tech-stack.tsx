'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getIconByName } from '@/lib/icon-mapper';
import type { ServiceContent } from '@/lib/services-data';

interface ServiceTechStackProps {
  service: ServiceContent;
  className?: string;
}

export const ServiceTechStack: React.FC<ServiceTechStackProps> = ({
  service,
  className,
}) => {
  return (
    <section className={cn('py-20 bg-muted/5', className)}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-lg font-heading text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            We use industry-leading technologies to build robust, scalable
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.techStack.map((tech, index) => {
            const Icon = getIconByName(tech.iconName);
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  'group p-6 rounded-xl bg-background/50 backdrop-blur-sm',
                  'border border-white/[0.08] hover:border-primary/30',
                  'transition-all duration-300 hover:bg-background/80',
                  'hover:shadow-lg hover:shadow-primary/10'
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-subheading-sm font-heading text-white">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-body-sm text-white/70">{tech.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
