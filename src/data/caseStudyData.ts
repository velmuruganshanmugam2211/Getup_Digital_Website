import type { CaseStudyData } from '../types/caseStudy';

export const sivaBiryaniCaseStudy: CaseStudyData = {
  id: 'siva-biryani',
  client: 'Siva Biryani',
  location: 'Karur',
  campaignTitle: 'Brand Awareness Campaign',
  date: 'June 24–26, 2026',
  overview: 'A 2-day Meta brand-awareness campaign across 6 ad creatives, planned, launched, and optimized end-to-end by our team.',
  valueDelivered: 'Over 2.39 lakh people reached for ₹15,000 agency fee — exceptional brand visibility for Siva Biryani in the Karur region.',
  agencyFee: '₹24,999 (Total Package Fee)',
  metrics: [
    {
      value: '2.39L+',
      label: 'Total Reach',
      subtext: 'Unique People Reached'
    },
    {
      value: '2.64L+',
      label: 'Total Views',
      subtext: 'Total Campaign Impressions'
    },
    {
      value: '6',
      label: 'Ads Run',
      subtext: 'Optimized Ad Creatives'
    },
    {
      value: '2 Days',
      label: 'Duration',
      subtext: 'June 24–26, 2026'
    }
  ],
  challenge: 'Siva Biryani needed rapid regional brand dominance and maximum customer awareness in the Karur area within a focused multi-day promotional window.',
  strategy: [
    'Hyper-targeted geographic audience segmentation focused exclusively on Karur and surrounding high-density zones.',
    'Creation of 6 distinct visual and video ad formats targeting culinary appeal, urgency, and brand recollection.',
    'Real-time Meta ad budget bidding optimization to maximize impression velocity while maintaining low cost per thousand impressions (CPM).'
  ],
  creativeDirection: 'Vibrant, appetizing visual food framing combined with clear promotional calls-to-action, high-contrast brand colors, and mobile-first short video creatives.',
  execution: [
    'Audience Research & Demographic Mapping for Karur food lovers.',
    'Production of 6 custom ad creatives (Static & Video Motion).',
    'Meta Ads Manager Campaign Setup & Pixel Configuration.',
    '24/7 Live Monitoring and Bid Tuning over the 2-day campaign window.',
    'Comprehensive Post-Campaign Reporting & Analytics Breakdown.'
  ],
  screenshots: [
    {
      src: '/src/assets/images/case-studies/siva_biryani_report.png',
      caption: 'Official Meta Ads Performance Report — Siva Biryani Karur'
    },
    {
      src: '/src/assets/images/case-studies/siva_biryani_proof.png',
      caption: 'Ad-Wise Performance Breakdown & Campaign Results Proof'
    }
  ]
};
