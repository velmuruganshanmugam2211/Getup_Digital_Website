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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col h-full bg-[#F6F7F5] rounded-2xl overflow-hidden border border-[#E5E7E5] hover:border-[#008000] hover:shadow-xl transition-all duration-300"
    >
      {/* Image Showcase */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#111111]/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
            {work.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="text-xs text-[#6B7280] font-mono mb-1">{work.client} ({work.year})</div>
          <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#008000] transition-colors leading-snug mb-2">
            {work.title}
          </h3>
          <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
            {work.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E5E7E5] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {work.tags.map((tag, i) => (
              <span key={i} className="text-[10px] text-[#6B7280] bg-[#F6F7F5] px-2.5 py-0.5 rounded font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <Link
            to={work.link || '/works'}
            className="w-9 h-9 rounded-full bg-[#F6F7F5] group-hover:bg-[#008000] group-hover:text-white transition-all flex items-center justify-center text-[#111111] shrink-0 ml-2"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
