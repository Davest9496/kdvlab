import { getIconByName } from '@/lib/icon-mapper';
import type { ServiceContent } from '@/lib/services-data';

interface ServiceFeaturesServerProps {
  service: ServiceContent;
}

export const ServiceFeaturesServer: React.FC<ServiceFeaturesServerProps> = ({
  service,
}) => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg font-heading text-white mb-4">
            What Makes Our {service.title} Different
          </h2>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            We combine cutting-edge technology with proven methodologies to
            deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.features.map((feature, index) => {
            const Icon = getIconByName(feature.iconName);
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-subheading-md font-heading text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-base text-white/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
