import type { ServiceContent } from '@/lib/services-data';
import { MessageSquare, Calendar, ArrowRight } from 'lucide-react';

interface ServiceCtaServerProps {
  service: ServiceContent;
}

export const ServiceCtaServer: React.FC<ServiceCtaServerProps> = ({
  service,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-lg font-heading text-white mb-4">
            {service.ctaTitle}
          </h2>
          <p className="text-body-lg text-white/70 mb-12 max-w-2xl mx-auto">
            {service.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/[0.08] text-white font-semibold backdrop-blur-sm border border-white/[0.16] hover:bg-white/[0.12] transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Meeting</span>
            </a>
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
          </div>
        </div>
      </div>
    </section>
  );
};
