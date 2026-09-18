import type { ClientItem } from '../types/client';
import balajiCateringLogo from '../assets/images/works/Balaji_Catering.svg';
import vigneshwaraInteriorsLogo from '../assets/images/works/Vigneshwara_interiors.svg';
import exterimeGymLogo from '../assets/images/works/Exterime_Gym.svg';
import senthurLogo from '../assets/images/works/Senthur.svg';
import shivaniLogo from '../assets/images/works/Shivani.svg';
import vevLogo from '../assets/images/works/VEV.svg';

export const clientData: ClientItem[] = [
  {
    id: 'balaji-catering',
    name: 'Balaji Catering',
    industry: 'Catering & Food',
    logo: balajiCateringLogo,
    hasLogo: true,
    featuredProject: 'Brand Identity & Event Marketing',
    metric: 'Full Visual Suite',
    description: 'Comprehensive branding, event promotional collateral, and high-converting creative suite for luxury weddings & corporate banquets.'
  },
  {
    id: 'vigneshwara-interiors',
    name: 'Vigneshwara Interiors',
    industry: 'Interior Architecture & Design',
    logo: vigneshwaraInteriorsLogo,
    hasLogo: true,
    featuredProject: 'High-Ticket Lead Generation',
    metric: '4.2x Client Inquiries',
    description: 'Meta ad campaigns showcasing luxury interior portfolios and targeted home-owner lead generation funnels.'
  },
  {
    id: 'exterime-gym',
    name: 'Exterime Gym',
    industry: 'Fitness & Performance',
    logo: exterimeGymLogo,
    hasLogo: true,
    featuredProject: 'Gym Membership Growth Engine',
    metric: '+180 Members Added',
    description: 'Viral Reels production, local geo-targeted membership ads, and high-energy transformation showcase videos.'
  },
  {
    id: 'senthur-group',
    name: 'Senthur Agency',
    industry: 'Ice Cream & Desserts',
    logo: senthurLogo,
    hasLogo: true,
    featuredProject: 'Festival Seasonal Campaigns',
    metric: '2.8L+ Festive Reach',
    description: 'Multi-platform festive promo campaigns, influencer collaborations, and high-converting catalog promotions.'
  },
  {
    id: 'shivani-creations',
    name: 'Shivani Boutique',
    industry: 'Apparel & Lifestyle',
    logo: shivaniLogo,
    hasLogo: true,
    featuredProject: 'Social Commerce & D2C Scaling',
    metric: '320+ Orders Generated',
    description: 'Instagram shop curation, organic viral reels, and targeted ad funnels driving repeat orders.'
  },
  {
    id: 'vsv-interiors',
    name: 'VSV Interiors',
    industry: 'Interior Architecture & Design',
    logo: vevLogo,
    hasLogo: true,
    featuredProject: 'Corporate Identity & Digital Footprint',
    metric: 'B2B Lead Pipeline',
    description: 'Corporate brand overhaul, LinkedIn B2B campaign execution, and high-conversion landing page design.'
  }
];
