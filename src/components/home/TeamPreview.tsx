import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { teamData } from '../../data/teamData';
import { Button } from '../common/Button';
import { Users, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7E5] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#008000]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#008000]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E7E5]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#008000] mb-3 bg-[#008000]/10 px-3.5 py-1.5 rounded-full border border-[#008000]/20">
             
              <span>THE LEADERSHIP & CREATORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Meet the Strategists Behind Your Growth
            </h2>
            <p className="mt-3 text-base text-[#666666] leading-relaxed">
              Hands-on founders and growth operators dedicated to executing your brand vision with speed, creativity, and measurable ROI.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Button href="/team" variant="outline" size="md" showArrow arrowType="up-right">
              View All Leadership Profiles
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7E5] hover:border-[#008000]/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Large Hero Portrait Showcase */}
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
                    <span>Founder</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md text-[#111111] text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/80 shadow-md">
                    {member.experience}
                  </div>
                </div>

                {/* Name & Role */}
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

                {/* Bio Description */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Core Specialties */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#008000]" />
                    <span>Core Specialties:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#F8FAF8] border border-[#E5E7E5] px-3 py-1.5 rounded-xl text-[#222222] font-medium shadow-2xs group-hover:border-[#008000]/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Lead Status */}
              <div className="pt-4 border-t border-[#E5E7E5] flex items-center justify-between text-xs text-[#777777]">
                <span className="flex items-center gap-1.5 font-semibold text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                  Dedicated Account Lead
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008000]">
                  Active Sprint
                  <span className="w-2 h-2 rounded-full bg-[#008000]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
