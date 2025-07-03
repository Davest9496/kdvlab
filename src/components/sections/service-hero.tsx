import { getIconByName } from '@/lib/icon-mapper';
import type { ServiceContent } from '@/lib/services-data';

interface ServiceHeroServerProps {
  service: ServiceContent;
}

// Server Component - no 'use client'
export const ServiceHeroServer: React.FC<ServiceHeroServerProps> = ({
  service,
}) => {
  const Icon = getIconByName(service.iconName);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/95 py-20 md:py-24 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/dark-background-abstract-with-light-effect-vector.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <Icon className="w-12 h-12 text-primary" />
              </div>
            </div>

            <h1 className="text-hero-lg font-heading text-white mb-4">
              {service.heroTitle}
            </h1>

            <p className="text-body-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {service.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60">
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
      </div>
    </section>
  );
};
