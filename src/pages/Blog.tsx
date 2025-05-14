
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      <Hero 
        title="Insights & Resources"
        subtitle="Expert perspectives on software development, technology, and digital transformation."
        backgroundClass="bg-kdv-darker"
      />
      
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
            <p className="text-lg text-kdv-light/80">
              We're working on bringing you valuable insights, industry news, and thought leadership content.
              Check back soon for articles on software development, technology trends, and more.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn btn-outline">
                Subscribe for Updates
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-kdv-darker rounded-lg overflow-hidden border border-kdv-neutral/20">
                <div className="h-48 bg-kdv-darkest flex items-center justify-center">
                  <span className="text-kdv-neutral">Featured Image Coming Soon</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sample Article Title #{index}</h3>
                  <p className="text-kdv-light/80 mb-4">
                    This is a placeholder for upcoming blog content. Our articles will cover technical insights, industry trends, and practical advice.
                  </p>
                  <div className="flex items-center text-sm text-kdv-neutral-light">
                    <span>Coming Soon</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Topics We'll Cover</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Software Development", "Cloud Migration", "UX Design", "Web Performance",
                "Mobile Development", "API Design", "Security", "DevOps", "AI & ML"
              ].map((topic) => (
                <div key={topic} className="px-4 py-2 bg-kdv-darker rounded-full border border-kdv-neutral/20">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
