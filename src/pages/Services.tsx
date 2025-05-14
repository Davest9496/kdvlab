
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Code, Cloud, Smartphone, Palette, Brain, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions designed to address your specific business challenges and goals. We build software that solves real problems and creates tangible value.",
      icon: <Code className="w-8 h-8 text-kdv-blue" />,
      link: "/services/custom-software",
    },
    {
      title: "Web Applications",
      description: "Scalable, responsive web applications with modern frameworks and exceptional UX. From simple websites to complex enterprise applications, we deliver solutions that work beautifully across all devices.",
      icon: <Globe className="w-8 h-8 text-kdv-blue" />,
      link: "/services/web-applications",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android. We help you reach your users wherever they are with intuitive, high-performance mobile experiences.",
      icon: <Smartphone className="w-8 h-8 text-kdv-blue" />,
      link: "/services/mobile-apps",
    },
    {
      title: "Cloud Services",
      description: "Migration, optimization, and management of cloud infrastructure on AWS, Vercel, and Supabase. We help you leverage the power of the cloud to reduce costs, increase reliability, and enable scalability.",
      icon: <Cloud className="w-8 h-8 text-kdv-blue" />,
      link: "/services/cloud-services",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that delivers intuitive and engaging digital experiences. We blend aesthetics with functionality to create interfaces that users love and that achieve your business goals.",
      icon: <Palette className="w-8 h-8 text-kdv-blue" />,
      link: "/services/design",
    },
    {
      title: "Consultancy",
      description: "Strategic technology advice to help you make informed decisions about your digital future. Our experienced consultants can guide you through digital transformation, technology selection, and more.",
      icon: <Brain className="w-8 h-8 text-kdv-blue" />,
      link: "/services/consultancy",
    },
  ];

  return (
    <>
      <Hero 
        title="Our Services"
        subtitle="End-to-end software development services to help your business thrive in the digital age."
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-kdv-light/80">
              At KDVLAB, we provide a comprehensive range of software development services designed to help businesses leverage 
              technology effectively. Whether you're looking to build a new product, enhance an existing system, or transform your 
              digital infrastructure, our team of experts can help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
      
      <section className="section bg-kdv-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-kdv-light/80">
              We follow a proven development process that ensures high-quality results, transparent communication, and timely delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <div className="text-3xl font-bold text-kdv-blue mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-kdv-light/80">
                We start by deeply understanding your business, users, and goals to ensure our solution addresses your real needs.
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <div className="text-3xl font-bold text-kdv-blue mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-kdv-light/80">
                We create detailed designs and prototypes to visualize the solution before development begins.
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <div className="text-3xl font-bold text-kdv-blue mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-kdv-light/80">
                Our engineers build your solution using modern technologies and best practices, with regular reviews and updates.
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <div className="text-3xl font-bold text-kdv-blue mb-4">04</div>
              <h3 className="text-xl font-semibold mb-3">Deployment & Support</h3>
              <p className="text-kdv-light/80">
                We ensure smooth deployment and provide ongoing support and maintenance to keep your solution running optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-lg text-kdv-light/80">
              We stay at the forefront of technology to deliver modern, scalable, and maintainable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "React", "TypeScript", "Node.js", "Python", "AWS", "Vercel",
              "Supabase", "Next.js", "React Native", "Flutter", "GraphQL", "PostgreSQL"
            ].map((tech) => (
              <div key={tech} className="p-4 bg-kdv-darker rounded-lg flex items-center justify-center">
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-gradient-to-r from-kdv-blue/20 to-kdv-purple/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-kdv-light/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project. We're excited to help you bring your ideas to life.
          </p>
          <a href="/contact" className="btn btn-primary text-lg">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
