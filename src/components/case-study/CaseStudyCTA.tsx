import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const CaseStudyCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111] text-white text-center">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Want Results Like This?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Let's plan, build, and execute a targeted ad campaign for your business.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Let's Talk
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
