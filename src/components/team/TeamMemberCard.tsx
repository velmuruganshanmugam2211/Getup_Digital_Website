import React from "react";
import { motion } from "framer-motion";
import type { TeamMember } from "../../types/team";
import { ArrowUpRight } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7E5] shadow-sm hover:border-[#008000]/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
    >
      <div>
        {/* Large Founder Portrait Frame */}
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#F2F4F2] to-[#E5E9E5] border border-[#E5E7E5] shadow-xs group-hover:shadow-md transition-all duration-300">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-[#111111] text-white flex items-center justify-center text-5xl font-black">
              {member.name.charAt(0)}
            </div>
          )}

          {/* Dark Glassmorphic Founder Badge */}
          <div className="absolute top-3.5 left-3.5 bg-[#111111]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse" />
            <span>Getup Lead</span>
          </div>

          {/* Experience Pill */}
          <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md text-[#111111] text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/80 shadow-md">
            {member.experience}
          </div>
        </div>

        {/* Member Name & Role */}
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-[#111111] tracking-tight group-hover:text-[#008000] transition-colors">
              {member.name}
            </h3>
            <div className="w-8 h-8 rounded-full bg-[#F6F7F5] border border-[#E5E7E5] flex items-center justify-center text-[#111111] group-hover:bg-[#008000] group-hover:text-white group-hover:border-[#008000] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xs font-bold text-[#008000] uppercase tracking-wider mt-1">
            {member.role}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-1">
          {member.description}
        </p>

        {/* Core Competencies */}
        <div className="space-y-2.5 pt-4 border-[#E5E7E5]">
          <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
            <span>Core Competencies:</span>
          </h4>
          <div className="space-y-2">
            {member.skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center text-xs text-[#222222] font-medium p-2.5 rounded-xl group-hover:bg-white transition-all shadow-2xs"
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Executive Badge */}
      {/* <div className="pt-4 mt-6 border-t border-[#E5E7E5] flex items-center justify-between text-[11px] font-bold text-[#6B7280]">
        <span>GETUP EXECUTIVE LEAD</span>
        <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse" />
      </div> */}
    </motion.div>
  );
};
