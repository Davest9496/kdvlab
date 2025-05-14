
import { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    referralSource: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // In a real application, send data to your backend
      console.log('Form submitted:', formData);
      toast.success('Message sent! We\'ll be in touch soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        referralSource: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-kdv-darker border border-kdv-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-kdv-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-kdv-darker border border-kdv-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-kdv-blue"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-kdv-darker border border-kdv-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-kdv-blue"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-kdv-darker border border-kdv-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-kdv-blue"
        />
      </div>
      <div>
        <label htmlFor="referralSource" className="block text-sm font-medium mb-2">
          How did you hear about us?
        </label>
        <select
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-kdv-darker border border-kdv-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-kdv-blue"
        >
          <option value="">Please select</option>
          <option value="search">Search Engine</option>
          <option value="social">Social Media</option>
          <option value="recommendation">Recommendation</option>
          <option value="event">Event</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto btn btn-primary"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
