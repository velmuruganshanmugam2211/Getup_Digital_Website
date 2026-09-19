import type { ServiceItem } from '../types/service';
import smImage from '../assets/images/works/SM.jpg';
import socialMediaStackImage from '../assets/images/works/social_media_stack.png';
import sivaBiryaniReportImage from '../assets/images/case-studies/siva_biryani_report.png';
import influencerMarketingImage from '../assets/images/works/influencer_marketing.png';
import aiVideosImage from '../assets/images/works/ai_videos.png';
import balajiCateringImage from '../assets/images/works/balaji_catering.png';
import aiContentCatalogueImage from '../assets/images/works/ai_content_catalogue.png';
import dashboardMetricsImage from '../assets/images/hero/dashboard_metrics.png';

export const servicesData: ServiceItem[] = [
  {
    id: 'social-media-marketing',
    number: '01',
    title: 'Social Media Marketing',
    shortDescription: 'Build a consistent digital presence, engage your audience, and create content that keeps your brand relevant.',
    fullDescription: 'We help brands dominate social media channels with tailored content strategies, proactive audience engagement, and community growth tactics that turn followers into brand advocates.',
    capabilities: [
      'Content Calendar & Planning',
      'Community Management',
      'Audience Engagement & Growth',
      'Platform Optimization (Instagram, Facebook, LinkedIn)'
    ],
    image: smImage,
    href: '/services#social-media-marketing',
    iconName: 'Share2'
  },
  {
    id: 'social-media-design',
    number: '02',
    title: 'Social Media Design',
    shortDescription: 'Create premium social media creatives that strengthen your visual identity and make your brand stand out.',
    fullDescription: 'High-impact graphics, carousel posts, brand overlays, and visual storytelling tailored to your brand aesthetic to command attention in crowded feeds.',
    capabilities: [
      'Custom Carousel Designs',
      'Brand Aesthetic Kits',
      'Promotional Banners & Stories',
      'Visual Identity Alignment'
    ],
    image: socialMediaStackImage,
    href: '/services#social-media-design',
    iconName: 'Palette'
  },
  {
    id: 'paid-advertising',
    number: '03',
    title: 'Paid Advertising',
    shortDescription: 'Reach the right audience with strategic paid campaigns designed around measurable business goals.',
    fullDescription: 'End-to-end Meta & Google ad management from ad creative production and audience targeting to continuous A/B testing and performance optimization.',
    capabilities: [
      'Meta Ads (Instagram & Facebook)',
      'Brand Awareness Campaigns',
      'Target Audience Segmentation',
      'Performance Tracking & Optimization'
    ],
    image: sivaBiryaniReportImage,
    href: '/services#paid-advertising',
    iconName: 'Target'
  },
  {
    id: 'influencer-marketing',
    number: '04',
    title: 'Influencer Marketing',
    shortDescription: 'Connect brands with relevant creators and audiences to increase reach, awareness, and trust.',
    fullDescription: 'Leverage creator networks to deliver authentic product integration, brand endorsements, and viral promotional content that resonates with target demographics.',
    capabilities: [
      'Creator Identification & Outreach',
      'Campaign Scripting & Management',
      'Product Integration & Promotions',
      'Performance Analytics'
    ],
    image: influencerMarketingImage,
    href: '/services#influencer-marketing',
    iconName: 'Users'
  },
  {
    id: 'video-reels',
    number: '05',
    title: 'Video Strategy & Reels',
    shortDescription: 'Create short-form video content designed to capture attention and dramatically increase engagement.',
    fullDescription: 'High-converting Instagram Reels, YouTube Shorts, brand intro videos, and promotional edits crafted to hooks viewers within the first 3 seconds.',
    capabilities: [
      'Short-Form Video Production',
      'Reels & Shorts Editing',
      'Scripting & Storyboarding',
      'Trend-Driven Content'
    ],
    image: aiVideosImage,
    href: '/services#video-reels',
    iconName: 'Video'
  },
  {
    id: 'branding-advertising',
    number: '06',
    title: 'Branding & Advertising Strategy',
    shortDescription: 'Build a clear visual and marketing direction that makes your brand recognizable and memorable.',
    fullDescription: 'From brand positioning and logo design to comprehensive brand guidelines, we build meaningful digital identities that command authority.',
    capabilities: [
      'Brand Positioning & Messaging',
      'Visual Identity Systems',
      'Advertising Campaign Strategy',
      'Market & Competitor Analysis'
    ],
    image: balajiCateringImage,
    href: '/services#branding-advertising',
    iconName: 'Sparkles'
  },
  {
    id: 'ai-content-catalogue',
    number: '07',
    title: 'AI Content & Catalogue',
    shortDescription: 'Next-generation AI-powered visual creation including posters, reels, logos, product catalogues, and festival creatives.',
    fullDescription: 'Cutting-edge AI generative workflows for ultra-fast, high-definition creative output across product catalogues, promotional graphics, and video production.',
    capabilities: [
      'AI Posters & AI Reels',
      'AI Product Catalogues',
      'AI Logos & Brand Visuals',
      'Festival & Seasonal Graphics'
    ],
    image: aiContentCatalogueImage,
    href: '/services#ai-content-catalogue',
    iconName: 'Bot'
  },
  {
    id: 'website-web-app',
    number: '08',
    title: 'Website & Web App Development',
    shortDescription: 'Design and develop high-speed responsive websites, e-commerce stores, and custom full-stack web applications.',
    fullDescription: 'From high-converting corporate websites to full-stack web applications and client portals, we build high-performance digital platforms using modern web technologies optimized for speed, security, and conversion.',
    capabilities: [
      'Full-Stack Web App Development',
      'High-Converting Corporate Websites',
      'E-Commerce & Online Storefronts',
      'UI/UX Prototyping & SEO Tuning'
    ],
    image: dashboardMetricsImage,
    href: '/services#website-web-app',
    iconName: 'Code'
  },
  {
    id: 'wedding-video-photo',
    number: '09',
    title: 'Wedding Video & Photography',
    shortDescription: 'Cinematic 4K wedding films, candid photography, and timeless celebration capture that tells your love story.',
    fullDescription: 'From grand celebrations to intimate traditional moments, our cinema and photography team captures every emotion with 4K multi-camera setups, drone cinematography, candid portraiture, and heirloom album design.',
    capabilities: [
      'Cinematic Wedding Films & Teasers',
      'Candid & Traditional Photography',
      'Pre-Wedding & Couple Portraits',
      'Drone Aerial Coverage & 4K Edits'
    ],
    image: balajiCateringImage,
    href: '/services#wedding-video-photo',
    iconName: 'Camera'
  },
  {
    id: 'video-editing-production',
    number: '10',
    title: 'Video Editing & Production',
    shortDescription: 'Commercial-grade video post-production, high-retention editing, color grading, and dynamic motion graphics.',
    fullDescription: 'Transform raw footage into polished commercial masterpieces. We specialize in fast-paced storytelling, sound design, Hollywood-standard color grading, and motion graphics for brands, creators, and commercial campaigns.',
    capabilities: [
      'Commercial & Brand Video Editing',
      'Color Grading & Audio Mastering',
      'Motion Graphics & Title Animations',
      'High-Retention YouTube & Ad Edits'
    ],
    image: aiVideosImage,
    href: '/services#video-editing-production',
    iconName: 'Film'
  },
  {
    id: 'complete-digital-marketing',
    number: '11',
    title: 'Complete Digital Marketing',
    shortDescription: 'Bring strategy, creative, advertising, content, and digital execution together through one growth-focused partner.',
    fullDescription: 'Full-service digital growth execution. We become your extended marketing team, managing every touchpoint from organic content to paid acquisitions.',
    capabilities: [
      'End-to-End Growth Management',
      'Cross-Channel Strategy',
      'Monthly Analytics & Reporting',
      'Dedicated Account Management'
    ],
    image: socialMediaStackImage,
    href: '/services#complete-digital-marketing',
    iconName: 'Zap'
  },
  {
    id: 'performance-marketing-seo',
    number: '12',
    title: 'Performance Marketing & SEO',
    shortDescription: 'Data-driven search engine optimization and conversion rate optimization to scale organic revenue.',
    fullDescription: 'Dominate search rankings and turn clicks into loyal customers with technical SEO audits, high-intent keyword strategies, and conversion funnel optimization.',
    capabilities: [
      'Technical & On-Page SEO Audits',
      'High-Intent Keyword Dominance',
      'Conversion Rate Optimization (CRO)',
      'ROI & Attribution Analytics'
    ],
    image: sivaBiryaniReportImage,
    href: '/services#performance-marketing-seo',
    iconName: 'TrendingUp'
  }
];
