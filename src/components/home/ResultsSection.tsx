import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { TrendingUp, Users, Eye, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const ResultsSection: React.FC = () => {
  const metrics = [
    {
      value: '2.39L+',
      label: 'Targeted Reach',
      description: 'Unique people reached across focused hyper-local & regional Meta campaigns.',
      icon: Users,
      highlight: true
    },
    {
      value: '2.64L+',
      label: 'Engaged Views',
      description: 'High-retention impressions on promotional brand reels & direct ad creatives.',
      icon: Eye,
      highlight: false
    },
    {
      value: '10.4x',
      label: 'Peak Campaign ROAS',
      description: 'Return on ad spend generated for targeted food & retail promotional spikes.',
      icon: TrendingUp,
      highlight: true
    },
    {
      value: '7+',
      label: 'Active Brand Partners',
      description: 'Growing businesses relying on Getup Digital for consistent monthly scale.',
      icon: Award,
      highlight: false
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008000]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#008000]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#00C853] mb-3/20 px-3.5 py-1 rounded-full ">
              <TrendingUp className="w-8 h-8" />
              <span>DATA-BACKED IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Real Campaign Proof.{' '}
              <span className="text-[#00C853]">Measurable Revenue.</span>
            </h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed">
              We track real business outcomes — foot traffic, inquiries, purchases, and brand recall — not vanity metrics.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Button href="/case-study/siva-biryani" variant="outline" size="md" className="!border-neutral-700 !text-white hover:!border-[#008000]" showArrow arrowType="up-right">
              View Detailed Proof Case
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border transition-all duration-300 relative group overflow-hidden flex flex-col justify-between ${
                  metric.highlight
                    ? 'bg-neutral-900/95 border-[#008000]/50 shadow-xl shadow-[#008000]/10 hover:border-[#00C853]'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-800 group-hover:bg-[#008000] group-hover:text-white transition-colors flex items-center justify-center text-[#00C853] border border-neutral-700">
                      <Icon className="w-6 h-6" />
                    </div>
                  
                  </div>

                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#00C853] transition-colors">
                    {metric.value}
                  </div>

                  <h3 className="text-base font-bold text-neutral-200 mb-2">
                    {metric.label}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center text-[11px] text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] mr-1.5 shrink-0" />
                  <span>Meta Ads Manager Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
