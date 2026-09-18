import React from 'react';
import { Container } from '../common/Container';
import { clientData } from '../../data/clientData';
import { ArrowUpRight, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ClientGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7E5]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E7E5]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#008000] mb-3 bg-[#008000]/10 px-3.5 py-1.5 rounded-full border border-[#008000]/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>THE 7 PARTNER BRANDS SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Brands That Trust Us with Their Growth
            </h2>
            <p className="mt-3 text-base text-[#666666] leading-relaxed">
              From regional hospitality giants to high-ticket interior firms and retail powerhouses, discover how we build scalable digital marketing systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientData.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7E5] hover:border-[#008000]/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Pills */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-[#008000] bg-[#EAF5EA] px-3 py-1 rounded-full border border-[#008000]/20">
                    CLIENT 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-[#555555] bg-[#F6F7F5] px-3 py-1 rounded-full border border-[#E5E7E5]">
                    {client.industry}
                  </span>
                </div>

                {/* Bold, Sized-Up Logo Showcase Banner */}
                <div className="relative h-32 sm:h-36 w-full rounded-2xl bg-gradient-to-b from-[#F9FAF9] to-[#F1F4F1] border border-[#E5E7E5] flex items-center justify-center p-4 mb-6 overflow-hidden group-hover:bg-[#EBF7EB]/40 group-hover:border-[#008000]/30 transition-all duration-300">
                  {client.hasLogo && client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain scale-[2.1] group-hover:scale-[2.3] transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center">
                      <span className="text-xl font-black text-[#111111] tracking-tight">{client.name}</span>
                      <span className="block text-xs font-semibold text-[#008000] mt-0.5">{client.industry}</span>
                    </div>
                  )}
                </div>

                {/* Brand Name */}
                <h3 className="text-2xl font-black text-[#111111] mb-2 group-hover:text-[#008000] transition-colors leading-snug">
                  {client.name}
                </h3>

                {/* Brand Story & Strategy */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                  {client.description}
                </p>

                {/* Key Growth Result Pill */}
                {client.metric && (
                  <div className="bg-[#EAF5EA]/70 border border-[#008000]/20 rounded-2xl p-3.5 flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold text-[#008000] flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#008000]" />
                      <span>Key Growth Result:</span>
                    </div>
                    <div className="text-xs sm:text-sm font-black text-[#111111] tracking-tight">
                      {client.metric}
                    </div>
                  </div>
                )}
              </div>

              {/* Active Execution & Action */}
              <div>
                <div className="p-3.5 bg-[#F8FAF8] rounded-2xl border border-[#E5E7E5] flex items-center justify-between text-xs text-[#333333] group-hover:border-[#008000]/20 transition-colors">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#888888] block mb-0.5">
                      Execution Scope:
                    </span>
                    <span className="font-semibold text-[#111111] line-clamp-1">
                      {client.featuredProject}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E5E7E5] flex items-center justify-center text-[#111111] group-hover:bg-[#008000] group-hover:text-white group-hover:border-[#008000] transition-all shrink-0 ml-2">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {client.id === 'siva-biryani' && (
                  <Link
                    to="/case-study/siva-biryani"
                    className="mt-3 flex items-center justify-between text-xs font-bold text-[#008000] hover:underline px-1"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      View Siva Biryani Case Study
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
