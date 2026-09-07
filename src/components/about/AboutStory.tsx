import React from 'react';
import { Container } from '../common/Container';
import { TrendingUp, Target, Shield } from 'lucide-react';

export const AboutStory: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-bold text-[#008000] uppercase tracking-widest">
              WHO WE ARE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-snug">
              We Don't Just Execute Campaigns — We Build Brand Equity.
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Founded on the principle that digital marketing should be both highly creative and strictly accountable for performance, Getup Digital Solution provides a comprehensive growth platform for modern businesses.
            </p>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Based in Erode, Tamil Nadu, we partner with local, regional, and national brands across food & beverage, retail, services, apparel, and corporate sectors to turn digital channels into dependable growth engines.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5]">
                <div className="text-2xl font-bold text-[#008000]">7 Clients</div>
                <div className="text-xs text-[#6B7280] font-medium">Scalable Partner Brands</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5]">
                <div className="text-2xl font-bold text-[#111111]">2.39L+</div>
                <div className="text-xs text-[#6B7280] font-medium">Campaign Audience Reach</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#111111] text-white p-8 rounded-3xl border border-neutral-800 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#008000]/20 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-6">
                What We Believe
              </h3>
              <div className="space-y-6 text-sm text-neutral-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-[#008000]/20 text-[#008000] flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Clarity over Complexity</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Marketing strategies should be clear, transparent, and aligned directly with measurable business metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-[#008000]/20 text-[#008000] flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Creative Rigor</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      High-converting visual content requires both artistic quality and psychological consumer resonance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-[#008000]/20 text-[#008000] flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Long-Term Accountability</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      We treat every client budget as an investment, optimizing continuously for sustainable returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
