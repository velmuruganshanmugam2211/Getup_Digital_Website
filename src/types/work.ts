export type WorkCategory = 'All' | 'Social Media' | 'Branding' | 'Paid Ads' | 'AI Content' | 'Video' | 'Web';

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  image: string;
  description: string;
  client: string;
  year: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}
