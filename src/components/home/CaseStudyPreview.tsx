import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { sivaBiryaniCaseStudy } from '../../data/caseStudyData';

export const CaseStudyPreview: React.FC = () => {
  const caseStudy = sivaBiryaniCaseStudy;

  return (
    <section className="py-20 sm:py-28 bg-[#F6F7F5] border-y border-[#E5E7E5] relative">
      <Container>
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E5E7E5] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Case Study Facts */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#008000] bg-[#008000]/10 px-3.5 py-1 rounded-full">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>FEATURED CASE STUDY</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                  {caseStudy.client} — <span className="text-[#008000]">{caseStudy.location}</span>
                </h2>
                <div className="text-sm font-semibold text-[#6B7280] mt-1">
                  {caseStudy.campaignTitle} • {caseStudy.date}
                </div>
              </div>

              <p className="text-base text-[#6B7280] leading-relaxed">
                "{caseStudy.overview}"
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#E5E7E5]">
                {caseStudy.metrics.slice(0, 3).map((m, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                      {m.value}
                    </div>
                    <div className="text-xs text-[#6B7280] font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#F6F7F5] border border-[#E5E7E5] text-xs text-[#222222] font-medium flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#008000] shrink-0 mt-0.5" />
                <span>
                  <strong>Value Delivered:</strong> {caseStudy.valueDelivered}
                </span>
              </div>

              <div className="pt-2">
                <Button href={`/case-study/${caseStudy.id}`} variant="primary" size="lg" showArrow>
                  View Case Study
                </Button>
              </div>
            </div>

            {/* Right Column: High Quality Report Artwork Visual */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden border border-[#E5E7E5] shadow-2xl bg-neutral-900 group"
              >
                <img
                  src={caseStudy.screenshots[0].src}
                  alt="Siva Biryani Meta Ads Performance Report"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-mono text-[#008000] uppercase tracking-wider block mb-1">REAL CAMPAIGN REPORT</span>
                    <h4 className="text-lg font-bold">Meta Ads Performance Breakdown — Karur Region</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
