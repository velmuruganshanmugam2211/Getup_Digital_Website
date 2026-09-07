import React from 'react';
import { Container } from '../common/Container';
import { teamData } from '../../data/teamData';
import { TeamMemberCard } from './TeamMemberCard';
import { Button } from '../common/Button';

export const TeamGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamData.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Team CTA */}
        <div className="bg-[#111111] text-white p-10 sm:p-14 rounded-3xl text-center max-w-4xl mx-auto border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#008000]/20 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-3xl font-extrabold mb-4">Want to Work with Our Team?</h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Get direct strategy alignment, custom campaign execution, and creative visual output from Rohit, Dhanush, Velmurugan and our creative team.
          </p>
          <Button href="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation Today
          </Button>
        </div>
      </Container>
    </section>
  );
};
