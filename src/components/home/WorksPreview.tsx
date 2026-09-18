import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { workData } from "../../data/workData";
import { Button } from "../common/Button";
import type { WorkCategory } from "../../types/work";

const PREVIEW_CATEGORIES: (WorkCategory | 'All')[] = [
  'All',
  'Paid Ads',
  'Branding',
  'Social Media',
  'AI Content'
];

export const WorksPreview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | 'All'>('All');

  const filteredWorks = workData
    .filter((w) => (selectedCategory === 'All' ? w.featured : w.category === selectedCategory))
    .slice(0, 6);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-b border-[#E5E8E5]">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#008000]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-[#008000]/5 blur-[100px]" />

      <Container className="relative z-10">
        {/* Section Header + Interactive Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 pb-6 border-b border-[#E5E8E5]">
          <SectionHeading
            title="Work That Makes Brands Noticeable."
            description="A glimpse into the high-converting campaigns, brand identities, and creative digital assets we have engineered for growing brands."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {PREVIEW_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'bg-[#F6F7F5] text-[#555555] border border-[#E5E7E5] hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, idx) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex flex-col h-full bg-white rounded-3xl p-4 sm:p-5 border border-[#E5E8E5] hover:border-[#008000]/50 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Visual Image Showcase Container (Clean, no dark muddy gradient!) */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#F4F6F4] border border-[#EBECEB] mb-5">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Clean Floating Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#111111] text-[11px] font-bold px-3 py-1 rounded-full border border-white/80 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#008000]" />
                    <span>{work.category}</span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 bg-[#111111]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                    {work.year || '2026'}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="px-2 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Client Name */}
                    <div className="text-xs font-mono font-bold text-[#008000] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#008000]" />
                      <span>{work.client}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight group-hover:text-[#008000] transition-colors leading-snug mb-2.5 line-clamp-2">
                      {work.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-2 mb-6 font-normal">
                      {work.description}
                    </p>
                  </div>

                  {/* Footer Tags & Action Button */}
                  <div className="pt-4 border-t border-[#F0F2F0] flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {work.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold text-[#333333] bg-[#F6F7F5] group-hover:bg-[#EAF5EA] group-hover:text-[#008000] px-2.5 py-1 rounded-lg border border-[#E5E7E5] group-hover:border-[#008000]/30 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={work.link || "/works"}
                      className="w-10 h-10 rounded-full bg-[#111111] text-white group-hover:bg-[#008000] group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-sm shrink-0"
                      aria-label={`View details for ${work.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Works Action Button */}
        <div className="mt-14 text-center">
          <Button href="/works" variant="outline" size="lg" showArrow className="hover:border-[#008000]">
            View Full Case Studies & Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
};
