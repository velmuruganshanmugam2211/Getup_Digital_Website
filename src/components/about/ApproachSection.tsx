import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Search, Compass, Palette, BarChart2 } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your target market, current digital touchpoints, and growth targets.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategic Blueprint',
      description: 'We construct a customized campaign architecture mapped to your specific revenue goals.',
      icon: Compass
    },
    {
      step: '03',
      title: 'Creative Execution',
      description: 'Our team produces modern visuals, video reels, ad copy, and AI content assets.',
      icon: Palette
    },
    {
      step: '04',
      title: 'Performance & Optimization',
      description: 'We launch campaigns, monitor live metrics, and optimize bids and ad spend continuously.',
      icon: BarChart2
    }
  ];

  return (
    <section className="py-20 bg-[#F6F7F5] border-y border-[#E5E7E5]">
      <Container>
        <SectionHeading
          label="HOW WE WORK"
          title="Our 4-Step Growth Blueprint"
          description="A disciplined execution framework designed for clarity, speed, and consistent results."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="bg-white p-6 rounded-2xl border border-[#E5E7E5] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono font-bold text-[#008000] bg-[#008000]/10 px-3 py-1 rounded-full">
                      STEP {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-[#6B7280]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
