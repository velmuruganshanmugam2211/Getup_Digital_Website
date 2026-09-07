import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const ClientResults: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111] text-white text-center">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Become Client #08?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Let's build a custom digital marketing campaign that delivers exceptional brand visibility and measurable customer growth.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Become Our Next Success Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
