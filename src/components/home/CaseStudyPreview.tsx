import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { sivaBiryaniCaseStudy } from '../../data/caseStudyData';

export const CaseStudyPreview: React.FC = () => {
  const caseStudy = sivaBiryaniCaseStudy;

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAF8] border-b border-[#E5E7E5] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#008000]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008000]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#E5E7E5] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Narrative, Verified Facts & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#008000] bg-[#EAF5EA] px-3.5 py-1.5 rounded-full border border-[#008000]/20">
                
                <span>FEATURED CASE STUDY</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                  {caseStudy.client} <span className="text-[#008000]">— {caseStudy.location}</span>
                </h2>
                <div className="text-xs sm:text-sm font-semibold text-[#666666] mt-2 flex flex-wrap items-center gap-2">
                  <span>{caseStudy.campaignTitle}</span>
                  <span className="text-neutral-300">•</span>
                  <span>{caseStudy.date}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                "{caseStudy.overview}"
              </p>

              {/* Enhanced 3-Metric Cards Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 my-6">
                <div className="bg-[#F8FAF8] p-3.5 sm:p-4 rounded-2xl border border-[#E5E7E5] text-center sm:text-left hover:border-[#008000]/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
                    2.39L+
                  </div>
                  <div className="text-xs text-[#666666] font-semibold mt-1">
                    Unique Reach
                  </div>
                </div>

                <div className="bg-[#EAF5EA]/60 p-3.5 sm:p-4 rounded-2xl border border-[#008000]/20 text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-[#008000] tracking-tight">
                    2.64L+
                  </div>
                  <div className="text-xs text-[#008000] font-bold mt-1">
                    Total Views
                  </div>
                </div>

                <div className="bg-[#F8FAF8] p-3.5 sm:p-4 rounded-2xl border border-[#E5E7E5] text-center sm:text-left hover:border-[#008000]/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
                    6 Ads
                  </div>
                  <div className="text-xs text-[#666666] font-semibold mt-1">
                    Active Creatives
                  </div>
                </div>
              </div>

              {/* Value Delivered Callout */}
              <div className="p-4 rounded-2xl bg-[#F6F8F6] border border-[#E5E7E5] text-xs sm:text-sm text-[#333333] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#008000] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#111111] font-bold">Outcome Delivered:</strong>{' '}
                  {caseStudy.valueDelivered}
                </div>
              </div>

              <div className="pt-2">
                <Button href={`/case-study/${caseStudy.id}`} variant="primary" size="lg" showArrow>
                  Explore Full Case Study
                </Button>
              </div>
            </div>

            {/* Right Column: Clean Framed Presentation (No text collisions or dark overlays!) */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden border border-[#E5E7E5] shadow-2xl bg-white group"
              >
                {/* Clean Top Browser/Report Header Bar */}
                <div className="bg-[#F6F7F5] px-4 py-3 border-b border-[#E5E7E5] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7E5]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7E5]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7E5]" />
                  </div>
                  <div className="text-[11px] font-mono font-semibold text-[#666666] flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#E5E7E5]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#008000]" />
                    <span>siva_biryani_meta_report.pdf</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#008000]">
                    Verified
                  </div>
                </div>

                {/* Pure, Unobscured Report Artwork */}
                <div className="relative overflow-hidden bg-white p-2">
                  <img
                    src={caseStudy.screenshots[0].src}
                    alt="Siva Biryani Meta Ads Performance Report"
                    className="w-full h-auto object-contain rounded-2xl transition-transform duration-700 group-hover:scale-102"
                  />
                </div>

                {/* Floating Bottom Trust Chip */}
                <div className="px-5 py-3.5 bg-[#F9FAF9] border-t border-[#E5E7E5] flex items-center justify-between text-xs text-[#666666]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse" />
                    <span className="font-semibold text-[#111111]">Audited Meta Campaign Proof</span>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#008000]">100% Transparency</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
