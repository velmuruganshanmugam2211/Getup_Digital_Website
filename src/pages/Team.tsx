import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { TeamHero } from '../components/team/TeamHero';
import { TeamGrid } from '../components/team/TeamGrid';
import { ServicesCTA } from '../components/services/ServicesCTA';

export const Team: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <TeamHero />
        <TeamGrid />
        <ServicesCTA />
      </main>
    </PageTransition>
  );
};
