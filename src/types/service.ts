export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  image?: string;
  href: string;
  iconName?: string;
}
