import React from 'react';
import { Container } from '../common/Container';
import { sivaBiryaniCaseStudy } from '../../data/caseStudyData';
import { CheckCircle2 } from 'lucide-react';

export const CaseStudyStrategy: React.FC = () => {
  const caseStudy = sivaBiryaniCaseStudy;

  return (
    <section className="py-20 bg-[#F6F7F5] border-y border-[#E5E7E5]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Strategy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#008000] uppercase tracking-wider block mb-2">
                02 — STRATEGY & ARCHITECTURE
              </span>
              <h3 className="text-2xl font-bold text-[#111111]">
                Targeted Audience & Meta Ad Optimization
              </h3>
            </div>
            <div className="space-y-4">
              {caseStudy.strategy.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-[#E5E7E5]">
                  <CheckCircle2 className="w-5 h-5 text-[#008000] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#222222] font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Execution */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#008000] uppercase tracking-wider block mb-2">
                04 — END-TO-END EXECUTION
              </span>
              <h3 className="text-2xl font-bold text-[#111111]">
                Planned, Launched, & Optimized in 2 Days
              </h3>
            </div>
            <div className="space-y-3">
              {caseStudy.execution.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-[#E5E7E5]">
                  <span className="w-6 h-6 rounded-full bg-[#008000]/10 text-[#008000] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-[#222222] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
