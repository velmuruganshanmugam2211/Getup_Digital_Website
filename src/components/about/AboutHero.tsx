import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';

export const AboutHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F6F7F5] border-b border-[#E5E7E5] relative overflow-hidden">
      <Container>
        <div className="max-w-4xl">
          <Badge variant="green" className="mb-4">
            ABOUT GETUP DIGITAL SOLUTION
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1] mb-6">
            Building Brands.{' '}
            <span className="text-[#008000]">Creating Growth.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed max-w-3xl">
            GETUP Digital is a creative digital marketing agency dedicated to helping businesses grow their online presence, attract more customers, and achieve measurable results through innovative marketing strategies.
          </p>
        </div>
      </Container>
    </section>
  );
};
