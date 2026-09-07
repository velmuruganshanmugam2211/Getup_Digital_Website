import React from 'react';
import { Container } from '../common/Container';
import { sivaBiryaniCaseStudy } from '../../data/caseStudyData';
import { Users, Eye, Layers, Clock } from 'lucide-react';

export const CaseStudyMetrics: React.FC = () => {
  const caseStudy = sivaBiryaniCaseStudy;
  const icons = [Users, Eye, Layers, Clock];

  return (
    <section className="py-16 bg-[#F6F7F5] border-b border-[#E5E7E5]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {caseStudy.metrics.map((metric, idx) => {
            const Icon = icons[idx] || Users;
            return (
              <div
                key={metric.label}
                className="bg-white p-6 rounded-2xl border border-[#E5E7E5] shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#008000]/10 text-[#008000] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#6B7280]">FACTUAL METRIC</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-[#008000] mt-1">{metric.label}</div>
                {metric.subtext && <div className="text-[11px] text-[#6B7280] mt-0.5">{metric.subtext}</div>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
