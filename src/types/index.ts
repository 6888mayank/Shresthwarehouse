export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  benefits: string[];
  idealFor: string;
}

export interface LeadershipMember {
  name: string;
  designation: string;
  education?: string;
  experience: string;
  location?: string;
  profile: string;
  initials: string;
}

export interface RoadmapGoal {
  year: string;
  phase: string;
  title: string;
  items: string[];
  status: 'In Progress' | 'Planned' | 'Upcoming Vision';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface IndustryItem {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface EnquiryFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  monthlyOrderVolume: string;
  message: string;
}
