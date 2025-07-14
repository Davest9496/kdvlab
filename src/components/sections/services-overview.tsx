// src/components/sections/services-overview.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getIconByName } from '@/lib/icon-mapper';
import { servicesData } from '@/lib/services-data';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-heading-lg text-white">
            Transform Your Business with Expert Development
          </h2>
          <p className="mx-auto max-w-3xl text-body-lg text-white/70">
            We deliver cutting-edge software solutions that drive growth,
            improve efficiency, and give you a competitive edge in today&apos;s
            digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {servicesData.map((service, index) => {
            const Icon = getIconByName(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    'block rounded-2xl bg-white/[0.02] p-8 backdrop-blur-sm',
                    'border border-white/[0.08] hover:border-white/[0.16]',
                    'transition-all duration-300 hover:bg-white/[0.04]',
                    'hover:shadow-lg hover:shadow-primary/10',
                    'hover:scale-[1.02]'
                  )}
                >
                  {/* Service Header */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-3">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 font-heading text-subheading-lg text-white">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-body-base text-white/70">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                          <span>From {service.startingPrice}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                          <span>{service.deliveryTimeline}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/40 transition-colors duration-300 group-hover:text-primary" />
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    {service.features.slice(0, 3).map(feature => (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-body-sm text-white/80">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-6 border-t border-white/[0.08] pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm text-white/60">
                        Learn more about {service.title.toLowerCase()}
                      </span>
                      <div className="flex items-center gap-2 text-primary transition-all duration-300 group-hover:gap-3">
                        <span className="text-sm font-medium">
                          View Details
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-blue-500/5 p-8 md:p-12"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-heading-lg text-white">
              Why Choose KDVLAB?
            </h2>
            <p className="mx-auto max-w-2xl text-body-lg text-white/70">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Expert Team',
                description:
                  'Skilled developers with years of experience in cutting-edge technologies.',
                icon: '👨‍💻',
              },
              {
                title: 'Proven Process',
                description:
                  'Battle-tested methodologies that ensure successful project delivery.',
                icon: '⚡',
              },
              {
                title: 'Long-term Partnership',
                description:
                  'Ongoing support and maintenance to keep your solutions running smoothly.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-3 font-heading text-subheading-md text-white">
                  {item.title}
                </h3>
                <p className="text-body-base text-white/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-12 font-heading text-heading-lg text-white">
            Trusted by Businesses Worldwide
          </h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-gradient mb-2 font-heading text-hero-md">
                  {stat.number}
                </div>
                <div className="text-body-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 font-heading text-heading-lg text-white">
            Our Development Process
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-body-lg text-white/70">
            From initial consultation to final deployment, we follow a proven
            methodology that ensures success.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'Understanding your business requirements and goals.',
              },
              {
                step: '02',
                title: 'Planning',
                description:
                  'Creating detailed project roadmaps and timelines.',
              },
              {
                step: '03',
                title: 'Development',
                description:
                  'Building your solution with cutting-edge technologies.',
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploying and supporting your project long-term.',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="mb-4 font-heading text-6xl text-primary/20">
                  {phase.step}
                </div>
                <h3 className="mb-3 font-heading text-subheading-md text-white">
                  {phase.title}
                </h3>
                <p className="text-body-base text-white/70">
                  {phase.description}
                </p>

                {/* Connector line */}
                {index < 3 && (
                  <div className="absolute left-full top-8 hidden h-px w-full bg-gradient-to-r from-primary/30 to-transparent md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NOTE: The CTA section is now handled by UnifiedCTA in the parent page */}
      </div>
    </section>
  );
};
