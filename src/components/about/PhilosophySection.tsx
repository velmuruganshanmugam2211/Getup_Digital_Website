import React from 'react';
import { Container } from '../common/Container';
import { CheckCircle2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#008000]">
            OUR GROWTH PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
            "Your Growing Partner" Is More Than A Tagline — It's Our Operational Promise.
          </h2>
          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            We don't view digital marketing as one-off transactions. We measure our agency's success by the tangible, compounding commercial success of our clients.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5]">
              <CheckCircle2 className="w-5 h-5 text-[#008000] mb-3" />
              <h3 className="font-bold text-[#111111] mb-1 text-sm">Transparency</h3>
              <p className="text-xs text-[#6B7280]">Open metrics, direct performance reporting, and clear ad spend visibility.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5]">
              <CheckCircle2 className="w-5 h-5 text-[#008000] mb-3" />
              <h3 className="font-bold text-[#111111] mb-1 text-sm">Innovation</h3>
              <p className="text-xs text-[#6B7280]">Pioneering AI visual generation and modern video formats for early adopter advantage.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5]">
              <CheckCircle2 className="w-5 h-5 text-[#008000] mb-3" />
              <h3 className="font-bold text-[#111111] mb-1 text-sm">Reliability</h3>
              <p className="text-xs text-[#6B7280]">Consistent execution deadlines, responsive communication, and dedicated support.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
