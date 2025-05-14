
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="card transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-kdv-blue/10 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-kdv-light/80 mb-6">{description}</p>
        <Link 
          to={link} 
          className="text-kdv-blue hover:text-kdv-purple transition-colors"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
