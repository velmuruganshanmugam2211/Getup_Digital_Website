import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { TrendingUp, Users, Eye, Layers, Award } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const metrics = [
    {
      value: '2.39L+',
      label: 'Total Reach',
      description: 'Unique people reached in targeted Meta campaigns.',
      icon: Users,
      highlight: true
    },
    {
      value: '2.64L+',
      label: 'Total Views',
      description: 'Impressions across promotional video & ad content.',
      icon: Eye,
      highlight: false
    },
    {
      value: '6',
      label: 'Meta Ad Creatives',
      description: 'High-performing ad variants optimized end-to-end.',
      icon: Layers,
      highlight: false
    },
    {
      value: '7',
      label: 'Partner Clients',
      description: 'Ambitious businesses scaling their digital footprint.',
      icon: Award,
      highlight: true
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#008000]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#008000] mb-3 bg-[#008000]/10 px-3.5 py-1 rounded-full border border-[#008000]/30">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>04 — RESULTS & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Creative Work.{' '}
            <span className="text-[#008000]">Measurable Results.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Real campaign proof and data-backed performance delivered for our clients.
          </p>
        </div>

        {/* Big Dominant Metrics Grid */}
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
                className={`p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  metric.highlight
                    ? 'bg-neutral-900/90 border-[#008000]/50 shadow-lg shadow-[#008000]/10'
                    : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Top Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 group-hover:bg-[#008000] group-hover:text-white transition-colors flex items-center justify-center text-[#008000]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-neutral-500">PROVEN DATA</span>
                </div>

                {/* Big Number */}
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-[#008000] transition-colors">
                  {metric.value}
                </div>

                {/* Label */}
                <h3 className="text-base font-bold text-neutral-200 mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {metric.description}
                </p>

                {/* Green accent bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#008000] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
