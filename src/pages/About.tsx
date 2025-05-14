
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Hero 
        title="About KDVLAB"
        subtitle="Building innovative software solutions that drive business success."
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-kdv-light/80 mb-4">
                KDVLAB was founded by a team of passionate software engineers and designers who shared a common vision: 
                to create exceptional software that solves real-world problems. We believed that by combining 
                technical excellence with a deep understanding of business needs, we could deliver solutions 
                that truly make a difference.
              </p>
              <p className="text-kdv-light/80 mb-4">
                Today, we work with companies of all sizes, from startups to established enterprises, 
                helping them leverage technology to achieve their goals. Our team has grown, but our 
                commitment to quality, innovation, and client success remains unchanged.
              </p>
              <p className="text-kdv-light/80">
                We're proud of the work we do and the relationships we've built with our clients. 
                We measure our success by their success, and we're dedicated to delivering 
                software that exceeds expectations.
              </p>
            </div>
            <div className="bg-kdv-darker rounded-lg p-8 border border-kdv-neutral/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-kdv-light/80">
                    To empower businesses through innovative software solutions that drive growth, 
                    improve efficiency, and create exceptional user experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-kdv-light/80">
                    To be the trusted technology partner for forward-thinking companies, 
                    known for our technical excellence, client-centered approach, and delivering 
                    solutions that create lasting value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-kdv-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-kdv-light/80">
              These core principles guide everything we do at KDVLAB.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-kdv-light/80">
                We strive for excellence in everything we do, from code quality to client communication. 
                We're never satisfied with "good enough."
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-kdv-light/80">
                We embrace new technologies and approaches, constantly seeking better ways to solve problems 
                and create value for our clients.
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-kdv-light/80">
                We believe the best results come from working closely with our clients and each other, 
                sharing ideas and expertise openly.
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-kdv-light/80">
                We conduct our business with the highest ethical standards, being honest, transparent, 
                and accountable in all our interactions.
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
              <p className="text-kdv-light/80">
                We put our clients' needs first, always seeking to understand their challenges and deliver 
                solutions that create real value.
              </p>
            </div>
            
            <div className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-kdv-light/80">
                We're committed to growing our knowledge and skills, staying at the forefront of technology 
                to better serve our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach to Software Development</h2>
            <p className="max-w-2xl mx-auto text-kdv-light/80">
              We follow a proven methodology that balances structure with flexibility to deliver high-quality software efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Principles</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 text-kdv-blue">●</div>
                  <div>
                    <span className="font-semibold">User-Centered Design:</span> We put users at the heart of our design process, creating solutions that solve real problems effectively.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-blue">●</div>
                  <div>
                    <span className="font-semibold">Agile Development:</span> We work in short, iterative cycles, adapting quickly to feedback and changing requirements.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-blue">●</div>
                  <div>
                    <span className="font-semibold">Quality First:</span> We prioritize quality through automated testing, code reviews, and continuous integration.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-blue">●</div>
                  <div>
                    <span className="font-semibold">Continuous Improvement:</span> We constantly refine our processes and embrace new technologies to deliver better results.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-blue">●</div>
                  <div>
                    <span className="font-semibold">Security by Design:</span> We build security into every layer of our solutions from the ground up.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Practices</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 text-kdv-purple">●</div>
                  <div>
                    <span className="font-semibold">Collaborative Planning:</span> We work closely with clients to define clear objectives and success criteria.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-purple">●</div>
                  <div>
                    <span className="font-semibold">Rapid Prototyping:</span> We build functional prototypes early to validate concepts and gather feedback.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-purple">●</div>
                  <div>
                    <span className="font-semibold">Automated Testing:</span> Our comprehensive testing approach ensures reliability and performance.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-purple">●</div>
                  <div>
                    <span className="font-semibold">Continuous Delivery:</span> We use CI/CD pipelines to release new features safely and frequently.
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-kdv-purple">●</div>
                  <div>
                    <span className="font-semibold">Knowledge Transfer:</span> We ensure clients fully understand their systems through documentation and training.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gradient-to-r from-kdv-blue/20 to-kdv-purple/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Work With Us</h2>
          <p className="text-lg text-kdv-light/80 max-w-2xl mx-auto mb-8">
            Whether you're looking to build a new product, enhance an existing system, or explore how technology can help your business, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn btn-primary text-lg">
              Start a Project
            </Link>
            <Link to="/careers" className="btn btn-outline text-lg">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
