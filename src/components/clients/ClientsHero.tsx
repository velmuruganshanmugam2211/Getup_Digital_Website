import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';

export const ClientsHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F6F7F5] border-b border-[#E5E7E5]">
      <Container>
        <div className="max-w-4xl">
          <Badge variant="green" className="mb-4">
            CLIENT SHOWCASE
          </Badge>
          <div className="flex items-baseline space-x-4 mb-4">
            <span className="text-6xl sm:text-7xl font-black text-[#008000]">7</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1]">
              Brands That Trust Getup.
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-3xl">
            We work with ambitious businesses to build stronger brand identities, run high-converting ad campaigns, and achieve measurable digital growth.
          </p>
        </div>
      </Container>
    </section>
  );
};
