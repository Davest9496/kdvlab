
import { Code, Cloud, Smartphone, Palette, Brain, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your specific business challenges and goals.",
      icon: <Code className="w-8 h-8 text-kdv-blue" />,
      link: "/services/custom-software",
    },
    {
      title: "Web Applications",
      description: "Scalable, responsive web applications with modern frameworks and exceptional UX.",
      icon: <Globe className="w-8 h-8 text-kdv-blue" />,
      link: "/services/web-applications",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="w-8 h-8 text-kdv-blue" />,
      link: "/services/mobile-apps",
    },
    {
      title: "Cloud Services",
      description: "Migration, optimization, and management of cloud infrastructure on AWS, Vercel, and Supabase.",
      icon: <Cloud className="w-8 h-8 text-kdv-blue" />,
      link: "/services/cloud-services",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that delivers intuitive and engaging digital experiences.",
      icon: <Palette className="w-8 h-8 text-kdv-blue" />,
      link: "/services/design",
    },
    {
      title: "Consultancy",
      description: "Strategic technology advice to help you make informed decisions about your digital future.",
      icon: <Brain className="w-8 h-8 text-kdv-blue" />,
      link: "/services/consultancy",
    },
  ];

  return (
    <>
      <Hero 
        title="Innovative Software Solutions for Modern Businesses"
        subtitle="We build custom software that transforms how businesses operate, connecting people with technology that works for them."
        cta={{ text: "Get in Touch", link: "/contact" }}
        secondaryCta={{ text: "Our Services", link: "/services" }}
        backgroundClass="bg-gradient-to-br from-kdv-dark to-kdv-darker"
      />
      
      {/* Services Section */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-kdv-light/80">
              We offer end-to-end software development services, from ideation to deployment and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                {...service}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-kdv-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose KDVLAB</h2>
            <p className="max-w-2xl mx-auto text-kdv-light/80">
              We combine technical expertise with a deep understanding of business to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
              <p className="text-kdv-light/80">
                Our team of experienced developers, designers, and architects use the latest technologies and best practices.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Collaborative Approach</h3>
              <p className="text-kdv-light/80">
                We work closely with you, ensuring your vision is realized and your goals are achieved.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Business Focus</h3>
              <p className="text-kdv-light/80">
                We understand that technology must serve business objectives, not the other way around.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Transparent Communication</h3>
              <p className="text-kdv-light/80">
                Regular updates and clear communication ensure you're always informed about project progress.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Future-Proof Solutions</h3>
              <p className="text-kdv-light/80">
                We build scalable, maintainable systems designed to grow with your business.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Continued Support</h3>
              <p className="text-kdv-light/80">
                Our relationship doesn't end at launch. We provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Placeholder */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Innovative Companies</h2>
            <p className="max-w-2xl mx-auto text-kdv-light/80">
              Placeholder for client logos and testimonials.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-16 bg-kdv-darker rounded-md flex items-center justify-center">
                <span className="text-kdv-neutral">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-kdv-blue/20 to-kdv-purple/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-kdv-light/80">
              Let's discuss how we can help you achieve your goals with custom software solutions.
            </p>
            <Link to="/contact" className="btn btn-primary text-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
