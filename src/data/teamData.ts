import type { TeamMember } from '../types/team';
import rohitImg from '../assets/images/team/rohit.jpg';
import dhanushImg from '../assets/images/team/dhanush.jpg';
import velmuruganImg from '../assets/images/team/velmurugan.jpg';

export const teamData: TeamMember[] = [
  {
    id: 'rohit',
    name: 'Rohit',
    role: 'Networking Lead & Influencer',
    experience: '5 Years Experience',
    skills: [
      'Influencer Marketing',
      'Video Advertising & Editing',
      'AI Related Content'
    ],
    description: 'Content creator and Instagram influencer with over 5 years of experience producing viral digital content. Specializes in creator outreach, entertaining promotional videos, and AI-driven content strategy.',
    image: rohitImg
  },
  {
    id: 'dhanush',
    name: 'Dhanush',
    role: 'Operations & Marketing Lead',
    experience: '1.5 Yrs Operations | 1 Yr Digital Marketing',
    skills: [
      'Process & Campaign Management',
      'AI Content Poster Specialist',
      'Digital Marketing Strategy'
    ],
    description: 'Brings strong operational precision and campaign execution discipline. Oversees campaign workflows, project delivery timelines, and AI poster visual production.',
    image: dhanushImg
  },
  {
    id: 'velmurugan',
    name: 'Velmurugan',
    role: 'Creative & Design Lead',
    experience: '2 Years Experience',
    skills: [
      'UI/UX Design',
      'Graphic Design',
      'AI Content Poster & Video Specialist'
    ],
    description: 'Drives the artistic direction and user interface aesthetics for Getup Digital. Combines UI/UX design fundamentals with modern AI video and poster creative tools.',
    image: velmuruganImg
  }
];
