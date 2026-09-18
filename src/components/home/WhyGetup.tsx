import React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import { Button } from "../common/Button";

export const WhyGetup: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7E5]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E7E5]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#008000] mb-3 bg-[#008000]/10 px-3.5 py-1 rounded-full border border-[#008000]/20">
              
              <span>THE GETUP ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Built Different. <span className="text-[#008000]">Engineered for Growth.</span>
            </h2>
            <p className="mt-3 text-base text-[#666666] leading-relaxed">
              We eliminate traditional agency bloat. No generic templates, no hidden fees, and no vanity metrics without bottom-line revenue.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Button href="/contact" variant="outline" size="md" showArrow>
              Why Partner With Us
            </Button>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento 1: Creative Excellence (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-[#F8FAF8] border border-[#E5E7E5] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#008000]/40 transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#008000]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008000] bg-[#008000]/10 border border-[#008000]/20 px-3.5 py-1 rounded-full">
                  CREATIVE EXCELLENCE
                </span>
                <span className="font-mono text-xs font-bold text-[#888888]">01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-3 leading-snug">
                Arresting Brand Visuals & Viral Formats
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-xl mb-6">
                In a crowded feed, average creatives are invisible. We engineer thumb-stopping ad visuals, high-production commercial Reels, and coherent brand identities that command instant respect and trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E7E5] shadow-2xs">
                  <div className="text-xs font-bold text-[#111111]">Viral Video Systems</div>
                  <div className="text-[11px] text-[#777777] mt-0.5">High-retention Reels & Shorts</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E7E5] shadow-2xs">
                  <div className="text-xs font-bold text-[#111111]">Ad Creative Testing</div>
                  <div className="text-[11px] text-[#777777] mt-0.5">Multi-hook iterative design</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E5E7E5] shadow-2xs">
                  <div className="text-xs font-bold text-[#111111]">Visual Authority</div>
                  <div className="text-[11px] text-[#777777] mt-0.5">Cohesive luxury brand kits</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7E5] flex items-center justify-between text-xs text-[#555555] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                Deliverables tailored to your unique audience persona
              </span>
            </div>
          </motion.div>

          {/* Bento 2: Performance Ad Funnels (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-[#111111] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#008000] border border-neutral-800 transition-all duration-300 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#008000]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] bg-[#008000]/20 border border-[#008000]/30 px-3.5 py-1 rounded-full">
                  PRECISION TARGETING
                </span>
                <span className="font-mono text-xs font-bold text-neutral-500">02</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Zero Wasted Ad Spend
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                We manage performance ad spend with ruthless discipline. Continuous A/B split testing of hooks, audiences, and post-click funnels to maximize return on ad spend.
              </p>

              <div className="space-y-2.5">
                <div className="flex items-center text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853] mr-2 shrink-0" />
                  <span>Meta Pixel & Conversion API setup</span>
                </div>
                <div className="flex items-center text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853] mr-2 shrink-0" />
                  <span>High-intent lookalike & retargeting clusters</span>
                </div>
                <div className="flex items-center text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853] mr-2 shrink-0" />
                  <span>Real-time CAC & ROAS monitoring</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-semibold text-[#00C853]">10.4x Peak Client ROAS</span>
              <span>Data-Backed ROI</span>
            </div>
          </motion.div>

          {/* Bento 3: Rapid Delivery Sprint (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 bg-[#F8FAF8] border border-[#E5E7E5] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#008000]/40 transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008000] bg-[#008000]/10 border border-[#008000]/20 px-3.5 py-1 rounded-full">
                  AGILE TURNAROUND
                </span>
                <span className="font-mono text-xs font-bold text-[#888888]">03</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111111] mb-3">
                48-Hour Campaign Launches
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed mb-6">
                Speed matters. Our streamlined production pipelines allow you to launch new seasonal promotions, product teasers, and ads in 48 hours without administrative lag.
              </p>

              <div className="bg-white p-4 rounded-2xl border border-[#E5E7E5] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#111111]">Average Onboarding</span>
                  <span className="font-semibold text-[#008000]">Under 2 Days</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#111111]">Direct WhatsApp Access</span>
                  <span className="font-semibold text-[#008000]">Yes (Dedicated Lead)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7E5] flex items-center text-xs text-[#666666]">
              <Clock className="w-4 h-4 text-[#008000] mr-2" />
              <span>Prompt communication with zero agency bureaucracy</span>
            </div>
          </motion.div>

          {/* Bento 4: Dedicated Long-Term Partner (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7 bg-[#F8FAF8] border border-[#E5E7E5] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#008000]/40 transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008000] bg-[#008000]/10 border border-[#008000]/20 px-3.5 py-1 rounded-full">
                  GROWTH PARTNERSHIP
                </span>
                <span className="font-mono text-xs font-bold text-[#888888]">04</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-3 leading-snug">
                Continuous Compounding Scale
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-xl mb-6">
                We don't abandon you after campaign launch. We operate as your fractional growth team — analyzing drop-offs, testing new hooks weekly, and scaling winning ad sets month over month.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-[#E5E7E5]">
                  <ShieldCheck className="w-5 h-5 text-[#008000] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#111111]">Transparent Audits</div>
                    <div className="text-[11px] text-[#777777]">Weekly performance calls & live dashboards</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-[#E5E7E5]">
                  <TrendingUp className="w-5 h-5 text-[#008000] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#111111]">Compounding Results</div>
                    <div className="text-[11px] text-[#777777]">Ad audiences become cheaper as pixels mature</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7E5] flex items-center justify-between text-xs text-[#555555] font-medium">
              <span>Dedicated Account Strategist Assigned on Day 1</span>
              <span className="font-bold text-[#008000]">Long-Term Focus</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
