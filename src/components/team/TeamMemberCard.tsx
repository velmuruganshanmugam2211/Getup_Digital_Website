import React from "react";
import { motion } from "framer-motion";
import type { TeamMember } from "../../types/team";
import { CheckCircle2 } from "lucide-react";

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
      className="bg-white rounded-3xl p-7 border border-[#E5E7E5] shadow-lg hover:border-[#008000] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
    >
      <div>
        {/* Member Photo & Experience Pill */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#008000] shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#F4F6F4]">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-[#111111] text-white flex items-center justify-center text-3xl font-black">
                {member.name.charAt(0)}
              </div>
            )}
          </div>

          <span className="text-[10px] font-mono font-bold text-[#008000] bg-[#008000]/10 px-3 py-1.5 rounded-full border border-[#008000]/20 max-w-[150px] text-right truncate">
            {member.experience}
          </span>
        </div>

        {/* Member Name & Role */}
        <h3 className="text-2xl font-extrabold text-[#111111] mb-1 group-hover:text-[#008000] transition-colors">
          {member.name}
        </h3>
        <div className="text-xs font-bold text-[#008000] uppercase tracking-wider mb-4">
          {member.role}
        </div>

        {/* Description */}
        <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
          {member.description}
        </p>

        {/* Core Competencies */}
        <div className="space-y-2.5 pt-4 border-t border-[#E5E7E5]">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
            Core Competencies:
          </h4>
          <div className="space-y-1.5">
            {member.skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center text-xs text-[#222222] font-medium bg-[#F6F7F5] p-2 rounded-xl border border-[#E5E7E5] group-hover:bg-white transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#008000] mr-2 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Executive Badge */}
      <div className="pt-4 mt-6 border-t border-[#E5E7E5] flex items-center justify-between text-[10px] font-bold text-[#6B7280]">
        <span>GETUP EXECUTIVE LEAD</span>
        <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse" />
      </div>
    </motion.div>
  );
};
