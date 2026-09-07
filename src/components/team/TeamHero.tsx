import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';

export const TeamHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F6F7F5] border-b border-[#E5E7E5]">
      <Container>
        <div className="max-w-4xl">
          <Badge variant="green" className="mb-4">
            GETUP DIGITAL LEADERSHIP
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1] mb-6">
            Meet Our Expert <span className="text-[#008000]">Team.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-3xl">
            Passionate creative directors, digital marketing leads, and campaign operation specialists working together to drive brand growth.
          </p>
        </div>
      </Container>
    </section>
  );
};
