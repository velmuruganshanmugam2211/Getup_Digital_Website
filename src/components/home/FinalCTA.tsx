import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../../lib/constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#008000]/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative max-w-4xl mx-auto text-center space-y-8 bg-neutral-900/60 p-8 sm:p-14 lg:p-16 rounded-3xl border border-[#008000]/30 shadow-2xl backdrop-blur-md">
          {/* Label */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#008000] bg-[#008000]/20 px-4 py-1.5 rounded-full border border-[#008000]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START YOUR GROWTH JOURNEY</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Have an Idea or Project?
          </h2>

          {/* Supporting */}
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Let's turn your idea into a brand people notice. Partner with Getup Digital Solution today.
          </p>

          {/* Hashtag badge */}
          <div className="text-xs font-mono text-[#008000] tracking-wider uppercase">
            {BRAND_INFO.hashtag}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Let's Grow With Getup
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:border-[#008000] hover:text-[#008000]">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
