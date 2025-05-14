
import Hero from '@/components/Hero';

const PrivacyPolicy = () => {
  return (
    <>
      <Hero 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p>Last updated: May 14, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                KDVLAB ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We may collect information about you in various ways, including:
              </p>
              <ul>
                <li>Information you provide directly (e.g., when contacting us or submitting forms)</li>
                <li>Usage information collected automatically when you visit our website</li>
                <li>Information from third-party sources, when applicable</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              
              <h2>5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access your data</li>
                <li>The right to rectify inaccurate data</li>
                <li>The right to erasure (the "right to be forgotten")</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
              
              <h2>6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2>7. Third-Party Disclosure</h2>
              <p>
                We may share your information with third parties in certain situations, such as:
              </p>
              <ul>
                <li>With service providers who perform services for us</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With your consent or at your direction</li>
              </ul>
              
              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@kdvlab.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
