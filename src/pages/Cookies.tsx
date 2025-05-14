
import Hero from '@/components/Hero';

const Cookies = () => {
  return (
    <>
      <Hero 
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies"
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p>Last updated: May 14, 2025</p>
              
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small pieces of text sent to your web browser when you visit a website. A cookie file is stored in your web browser and allows the Service or a third party to recognize you and make your next visit easier and the Service more useful to you.
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies for various purposes, including:
              </p>
              <ul>
                <li>To facilitate and improve your experience using our website</li>
                <li>To enable certain functions of the Service</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
              </ul>
              
              <h2>3. Types of Cookies We Use</h2>
              <p>
                Our website uses the following types of cookies:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.</li>
                <li><strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.</li>
                <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
                <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
              </ul>
              
              <h2>4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service.
              </p>
              
              <h2>5. How to Manage Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings.
              </p>
              
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, please contact us at:
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

export default Cookies;
