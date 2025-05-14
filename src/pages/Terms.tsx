
import Hero from '@/components/Hero';

const Terms = () => {
  return (
    <>
      <Hero 
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p>Last updated: May 14, 2025</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the website, services, and products provided by KDVLAB ("we", "our", or "us"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2>2. Intellectual Property Rights</h2>
              <p>
                The Service and its original content, features, and functionality are owned by KDVLAB and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              
              <h2>3. User Representations</h2>
              <p>
                By using the Service, you represent and warrant that:
              </p>
              <ul>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the Service through automated or non-human means</li>
                <li>You will not use the Service for any illegal or unauthorized purpose</li>
              </ul>
              
              <h2>4. Prohibited Activities</h2>
              <p>
                You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              
              <h2>5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall KDVLAB, or its suppliers, be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your use or inability to use the Service.
              </p>
              
              <h2>6. Termination</h2>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <h2>7. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
              </p>
              
              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@kdvlab.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
