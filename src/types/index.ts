export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: number;
}

export interface NavItem {
  title: string;
  href: string;
  icon: string;
}