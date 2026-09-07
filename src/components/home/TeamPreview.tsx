import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { teamData } from '../../data/teamData';
import { Button } from '../common/Button';

export const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading
            label="05 — OUR TEAM"
            title="Meet Our Expert Team"
            description="Creative thinkers, operations specialists, and digital marketers dedicated to your growth."
            className="mb-0 max-w-xl"
          />
          <Button href="/team" variant="outline" size="md" showArrow className="mt-6 md:mt-0">
            View Team Profiles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#F6F7F5] rounded-2xl p-6 sm:p-8 border border-[#E5E7E5] hover:border-[#008000] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Member Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center text-xl font-bold border-2 border-[#008000]">
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#008000] bg-[#008000]/10 px-3 py-1 rounded-full">
                    {member.experience}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-[#111111] group-hover:text-[#008000] transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#008000] uppercase tracking-wider mb-4">
                  {member.role}
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">Key Expertise:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white border border-[#E5E7E5] px-2.5 py-1 rounded-md text-[#222222] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7E5] flex items-center justify-between text-xs text-[#6B7280]">
                <span>GETUP TEAM</span>
                <span className="w-2 h-2 rounded-full bg-[#008000]" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
