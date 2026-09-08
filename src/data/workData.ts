import type { WorkItem } from '../types/work';
import sivaBiryaniReportImage from '../assets/images/case-studies/siva_biryani_report.png';
import balajiCateringImage from '../assets/images/works/balaji_catering.png';
import socialMediaStackImage from '../assets/images/works/social_media_stack.png';
import aiContentCatalogueImage from '../assets/images/works/ai_content_catalogue.png';
import aiVideosImage from '../assets/images/works/ai_videos.png';
import influencerMarketingImage from '../assets/images/works/influencer_marketing.png';
import sivaBiryaniProofImage from '../assets/images/case-studies/siva_biryani_proof.png';
import aiPostersImage from '../assets/images/works/ai_posters.png';
import productCatalogueImage from '../assets/images/works/product_catalogue.png';

export const workData: WorkItem[] = [
  {
    id: 'siva-biryani-meta-ads',
    title: 'Siva Biryani — Meta Brand Awareness',
    category: 'Paid Ads',
    image: sivaBiryaniReportImage,
    description: 'A 2-day targeted Meta ad campaign across 6 custom ad creatives delivering over 2.39 Lakh reach in Karur.',
    client: 'Siva Biryani (Karur)',
    year: '2026',
    tags: ['Meta Ads', 'Paid Campaign', 'Brand Awareness', 'Karur'],
    link: '/case-study/siva-biryani',
    featured: true
  },
  {
    id: 'balaji-catering-branding',
    title: 'Balaji Catering — Identity & Collateral',
    category: 'Branding',
    image: balajiCateringImage,
    description: 'Complete brand positioning, visual collateral, and catering service promotional designs.',
    client: 'Balaji Catering (Erode)',
    year: '2026',
    tags: ['Branding', 'Print & Digital', 'Event Marketing'],
    featured: true
  },
  {
    id: 'getup-social-stack',
    title: 'Brand Growth Social Media Creatives',
    category: 'Social Media',
    image: socialMediaStackImage,
    description: 'Editorial social media designs focusing on brand building, business strategies, and audience engagement.',
    client: 'Getup Digital Showcase',
    year: '2026',
    tags: ['Social Media Design', 'Content Strategy', 'Brand Identity'],
    featured: true
  },
  {
    id: 'ai-content-suite',
    title: 'AI Content & Product Catalogues',
    category: 'AI Content',
    image: aiContentCatalogueImage,
    description: 'Next-gen AI generated posters, catalogues, and promotional visual designs.',
    client: 'Commercial Partners',
    year: '2026',
    tags: ['AI Content', 'Product Catalogue', 'AI Design'],
    featured: true
  },
  {
    id: 'ai-video-reels',
    title: 'AI Video Strategy & Reels Production',
    category: 'Video',
    image: aiVideosImage,
    description: 'High-impact short form AI videos for brand intros, website launches, and product showcases.',
    client: 'Getup Creative Studio',
    year: '2026',
    tags: ['AI Reels', 'Video Editing', 'Short-form Content'],
    featured: true
  },
  {
    id: 'influencer-reach-campaign',
    title: 'Influencer Creator Network Reach',
    category: 'Social Media',
    image: influencerMarketingImage,
    description: 'Creator-led video strategy connecting local and regional audiences with authentic brand content.',
    client: 'Getup Creator Network',
    year: '2026',
    tags: ['Influencer Marketing', 'Content Creator', 'Regional Reach'],
    featured: true
  },
  {
    id: 'siva-biryani-proof-suite',
    title: 'Siva Biryani — Campaign Performance Proof',
    category: 'Paid Ads',
    image: sivaBiryaniProofImage,
    description: 'Ad-wise performance breakdown showing 2.64L+ total views and exceptional ROI.',
    client: 'Siva Biryani',
    year: '2026',
    tags: ['Analytics', 'Meta Ads Proof', 'Campaign Results'],
    link: '/case-study/siva-biryani',
    featured: false
  },
  {
    id: 'ai-posters-showcase',
    title: 'AI Poster Design Series',
    category: 'AI Content',
    image: aiPostersImage,
    description: 'Custom AI generated festival, promotional, and commercial posters.',
    client: 'Getup AI Studio',
    year: '2026',
    tags: ['AI Posters', 'Graphic Design', 'Visual Art'],
    featured: false
  },
  {
    id: 'product-catalogue-design',
    title: 'Commercial Product Catalogue',
    category: 'Branding',
    image: productCatalogueImage,
    description: 'Modern product layout and visual catalogue design for commercial branding.',
    client: 'Enterprise Client',
    year: '2026',
    tags: ['Product Catalogue', 'Print & Digital', 'E-commerce'],
    featured: false
  }
];
