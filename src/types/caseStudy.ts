export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface CaseStudyData {
  id: string;
  client: string;
  location: string;
  campaignTitle: string;
  date: string;
  overview: string;
  valueDelivered: string;
  agencyFee: string;
  metrics: MetricItem[];
  challenge: string;
  strategy: string[];
  creativeDirection: string;
  execution: string[];
  screenshots: {
    src: string;
    caption: string;
  }[];
}
