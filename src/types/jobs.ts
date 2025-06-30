export interface JobPosition {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'On site' | 'Remote' | 'Hybrid';
  category: 'Design' | 'Engineering' | 'Marketing' | 'Operations';
  description: {
    overview: string;
    whatYoullDo: string;
    requirements: string[];
    benefits: string[];
    uniqueJourney: string[];
    whatYoullBring: string[];
  };
  salary: {
    min: number;
    max: number;
    currency: string;
    period: 'yearly' | 'monthly' | 'hourly';
  };
  companyInfo: {
    size: string;
    founded: string;
    industry: string;
    revenue: string;
    sector: string;
  };
  tags: string[];
  featured?: boolean;
  postedDate: string;
  applicationDeadline?: string;
}

export interface Company {
  name: string;
  logo: string;
  color: string;
  textColor: string;
}
