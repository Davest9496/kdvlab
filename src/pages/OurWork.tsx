
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';

const OurWork = () => {
  return (
    <>
      <Hero 
        title="Our Work"
        subtitle="Innovative solutions for real-world challenges."
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Portfolio is Growing</h2>
            <p className="text-lg text-kdv-light/80">
              While we're building our online portfolio, we'd be happy to share examples of our work directly with you.
              Please contact us to see case studies relevant to your industry and needs.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn btn-primary">
                Contact Us to See Examples
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4">How We Approach Projects</h3>
              <p className="text-kdv-light/80 mb-8">
                Every project we undertake follows a structured approach designed to deliver exceptional results:
              </p>
            </div>
            
            <div className="bg-kdv-darker p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">1. Understand the Problem</h4>
              <p className="text-kdv-light/80">
                We begin by deeply understanding the challenges our clients face, their business context, and their users' needs. This foundation ensures we're solving the right problems in the right way.
              </p>
            </div>
            
            <div className="bg-kdv-darker p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">2. Design the Solution</h4>
              <p className="text-kdv-light/80">
                Based on our understanding, we design comprehensive solutions that address both immediate needs and long-term objectives, balancing technical considerations with business requirements.
              </p>
            </div>
            
            <div className="bg-kdv-darker p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">3. Measure the Outcome</h4>
              <p className="text-kdv-light/80">
                We define clear success metrics for every project and track them rigorously. This data-driven approach ensures our solutions deliver real, measurable value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-kdv-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-lg text-kdv-light/80">
              We've successfully delivered projects across various industries, bringing our technical expertise 
              and innovative approach to each unique challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-kdv-light/80">
                Patient management systems, telemedicine platforms, and healthcare analytics solutions that improve patient care and operational efficiency.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-kdv-light/80">
                Secure, compliant applications for banking, investment management, and financial analysis that handle sensitive data with the utmost care.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-kdv-light/80">
                Scalable, high-performance online stores and marketplaces that deliver exceptional shopping experiences and drive conversions.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-kdv-light/80">
                Learning management systems and educational tools that enhance teaching and learning experiences for students of all ages.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
              <p className="text-kdv-light/80">
                Property management platforms, virtual tour applications, and market analysis tools that modernize real estate operations.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-kdv-neutral/20 bg-kdv-darkest/50">
              <h3 className="text-xl font-semibold mb-3">Transportation & Logistics</h3>
              <p className="text-kdv-light/80">
                Route optimization, fleet management, and supply chain solutions that improve efficiency and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-lg text-kdv-light/80 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your business goals with custom software solutions.
          </p>
          <Link to="/contact" className="btn btn-primary text-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurWork;
