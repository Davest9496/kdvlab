'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MessageSquare, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getIconByName } from '@/lib/icon-mapper';
import { servicesData } from '@/lib/services-data';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-lg font-heading text-white mb-4">
            Transform Your Business with Expert Development
          </h2>
          <p className="text-body-lg text-white/70 max-w-3xl mx-auto">
            We deliver cutting-edge software solutions that drive growth,
            improve efficiency, and give you a competitive edge in today&apos;s
            digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
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
                    'block p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm',
                    'border border-white/[0.08] hover:border-white/[0.16]',
                    'transition-all duration-300 hover:bg-white/[0.04]',
                    'hover:shadow-lg hover:shadow-primary/10',
                    'hover:scale-[1.02]'
                  )}
                >
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-subheading-lg font-heading text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-body-base text-white/70 mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>From {service.startingPrice}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span>{service.deliveryTimeline}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    {service.features.slice(0, 3).map((feature) => (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-body-sm text-white/80">
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm text-white/60">
                        Learn more about {service.title.toLowerCase()}
                      </span>
                      <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                        <span className="text-sm font-medium">
                          View Details
                        </span>
                        <ArrowRight className="w-4 h-4" />
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
          className="bg-gradient-to-br from-primary/5 via-background to-blue-500/5 rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-heading-lg font-heading text-white mb-4">
              Why Choose KDVLAB?
            </h2>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-subheading-md font-heading text-white mb-3">
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
          className="text-center mb-20"
        >
          <h2 className="text-heading-lg font-heading text-white mb-12">
            Trusted by Businesses Worldwide
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <div className="text-hero-md font-heading text-gradient mb-2">
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
          className="text-center mb-20"
        >
          <h2 className="text-heading-lg font-heading text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mb-12">
            From initial consultation to final deployment, we follow a proven
            methodology that ensures success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <div className="text-6xl font-heading text-primary/20 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-subheading-md font-heading text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-body-base text-white/70">
                  {phase.description}
                </p>

                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary/5 via-background to-blue-500/5 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-heading-lg font-heading text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-body-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and create a solution that drives
            your business forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 rounded-lg',
                  'bg-primary text-primary-foreground font-semibold',
                  'hover:bg-primary/90 transition-all duration-300',
                  'shadow-lg hover:shadow-xl hover:shadow-primary/25'
                )}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 rounded-lg',
                  'bg-white/[0.08] text-white font-semibold backdrop-blur-sm',
                  'border border-white/[0.16] hover:bg-white/[0.12]',
                  'transition-all duration-300'
                )}
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Meeting</span>
              </Link>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Quick response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Expert guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
