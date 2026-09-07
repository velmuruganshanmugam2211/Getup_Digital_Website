export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  skills: string[];
  description: string;
  image?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}
