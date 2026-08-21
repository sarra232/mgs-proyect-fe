export type CategoryId = 'all' | 'estanterias' | 'muebles' | 'cabanas' | 'estructuras';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: CategoryId;
  tagline: string;
  description: string;
  features: string[];
  materials: string[];
  dimensions?: string;
  imageUrl: string;
  highlighted?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  projectType: string;
  comment: string;
  rating: number;
  location: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
  experienceYears: number;
  completedProjects: number;
  satisfactionRate: number;
}
