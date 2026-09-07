import React from 'react';
import { Container } from '../common/Container';
import { sivaBiryaniCaseStudy } from '../../data/caseStudyData';
import { AlertCircle, Lightbulb } from 'lucide-react';

export const CaseStudyOverview: React.FC = () => {
  const caseStudy = sivaBiryaniCaseStudy;

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 01 Challenge */}
          <div className="lg:col-span-6 space-y-4 p-8 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5]">
            <div className="flex items-center space-x-3 text-xs font-mono font-bold text-[#008000] uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>01 — THE CHALLENGE</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              Rapid Regional Awareness in Karur
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* 03 Creative Direction */}
          <div className="lg:col-span-6 space-y-4 p-8 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5]">
            <div className="flex items-center space-x-3 text-xs font-mono font-bold text-[#008000] uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>03 — CREATIVE DIRECTION</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              Culinary Appeal & Mobile-First Video Format
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              {caseStudy.creativeDirection}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
