import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { sivaBiryaniCaseStudy } from '../../data/caseStudyData';
import { Calendar, MapPin, Target } from 'lucide-react';

export const CaseStudyHero: React.FC = () => {
  const caseStudy = sivaBiryaniCaseStudy;

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#111111] text-white border-b border-neutral-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008000]/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl space-y-6">
          <Badge variant="green" className="bg-[#008000]/20 text-[#008000] border-[#008000]/40">
            CASE STUDY SPOTLIGHT
          </Badge>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#008000]">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{caseStudy.location}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{caseStudy.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Target className="w-3.5 h-3.5" />
              <span>{caseStudy.campaignTitle}</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {caseStudy.client} — <span className="text-[#008000]">Karur Meta Ads Campaign</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
            "{caseStudy.overview}"
          </p>

          <div className="p-4 rounded-xl bg-neutral-900 border border-[#008000]/30 text-xs text-neutral-200">
            <strong className="text-[#008000]">Value Delivered:</strong> {caseStudy.valueDelivered}
          </div>
        </div>
      </Container>
    </section>
  );
};
