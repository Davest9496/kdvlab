
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  backgroundClass?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  cta, 
  secondaryCta,
  backgroundClass = "bg-kdv-dark" 
}: HeroProps) => {
  return (
    <div className={`${backgroundClass} pt-24 pb-16 md:py-32`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="gradient-text">{title}</span>
          </h1>
          <p 
            className="text-lg md:text-xl mb-8 text-kdv-light/80 animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            {subtitle}
          </p>
          {(cta || secondaryCta) && (
            <div 
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn"
              style={{ animationDelay: '0.6s' }}
            >
              {cta && (
                <Link to={cta.link} className="btn btn-primary text-lg">
                  {cta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.link} className="btn btn-outline text-lg">
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
