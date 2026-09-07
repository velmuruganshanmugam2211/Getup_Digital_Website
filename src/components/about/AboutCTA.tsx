import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const AboutCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111] text-white text-center">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something That Grows.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Ready to elevate your digital presence and turn campaign impressions into measurable business outcomes?
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Start a Conversation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
