
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full Time",
      description: "We're looking for an experienced frontend developer with expertise in React, TypeScript, and modern web technologies to join our growing team.",
    },
    {
      title: "Backend Engineer",
      location: "San Francisco, CA",
      type: "Full Time",
      description: "Join us as a backend engineer working with Node.js, Python, and cloud technologies to build scalable and resilient systems.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full Time",
      description: "Help us create intuitive, engaging user experiences for web and mobile applications as part of our design team.",
    },
  ];

  return (
    <>
      <Hero 
        title="Join Our Team"
        subtitle="Build your career with us and work on exciting projects that make a difference."
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
              <p className="text-kdv-light/80 mb-4">
                At KDVLAB, we believe that our people are our greatest asset. We're building a team of talented, 
                passionate individuals who are excited about creating exceptional software and making a difference 
                for our clients.
              </p>
              <p className="text-kdv-light/80">
                We offer a supportive, collaborative environment where you can grow professionally, 
                take on meaningful challenges, and work with cutting-edge technologies. Our culture values 
                innovation, continuous learning, and work-life balance.
              </p>
            </div>
            <div className="bg-kdv-darker rounded-lg p-8 border border-kdv-neutral/20">
              <h3 className="text-xl font-bold mb-4">What We Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-kdv-blue">★</div>
                  <div>Competitive salary and benefits package</div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-kdv-blue">★</div>
                  <div>Flexible working arrangements</div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-kdv-blue">★</div>
                  <div>Professional development opportunities</div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-kdv-blue">★</div>
                  <div>Challenging, varied projects across industries</div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-kdv-blue">★</div>
                  <div>Collaborative, supportive team culture</div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-kdv-blue">★</div>
                  <div>Opportunity to work with the latest technologies</div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-kdv-blue">★</div>
                  <div>Regular team events and activities</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-kdv-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>
            <p className="text-lg text-kdv-light/80 text-center">
              Explore our current opportunities and find the role that's right for you.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-kdv-darkest/50 p-6 rounded-lg border border-kdv-neutral/20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-kdv-blue/20 text-kdv-blue">
                      {position.location}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-kdv-purple/20 text-kdv-purple">
                      {position.type}
                    </span>
                  </div>
                </div>
                <p className="text-kdv-light/80 mb-4">
                  {position.description}
                </p>
                <button className="btn btn-outline">
                  View Details
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              Don't see a role that matches your skills? We're always looking for talented individuals to join our team.
            </p>
            <Link to="#general-application" className="btn btn-primary">
              Submit General Application
            </Link>
          </div>
        </div>
      </section>
      
      <section id="general-application" className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Express Your Interest</h2>
            <p className="text-lg text-kdv-light/80 text-center mb-8">
              Tell us about yourself and why you'd like to join KDVLAB. We'll keep your information on file and contact you when a suitable position becomes available.
            </p>
            
            <div className="bg-kdv-darker rounded-lg p-8 border border-kdv-neutral/20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
