import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { WorkItem } from '../../types/work';

interface WorkCardProps {
  work: WorkItem;
  index: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({ work, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative flex flex-col h-full bg-white rounded-3xl p-4 sm:p-5 border border-[#E5E8E5] hover:border-[#008000]/50 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Visual Image Showcase Container */}
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
            <span>{work.client}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-tight group-hover:text-[#008000] transition-colors leading-snug mb-2.5 line-clamp-2">
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
                className="text-[11px] font-semibold text-[#333333]  group-hover:bg-[#EAF5EA] group-hover:text-[#008000] px-2.5 py-1 rounded-lg group-hover:border-[#008000]/30 transition-colors"
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
  );
};
