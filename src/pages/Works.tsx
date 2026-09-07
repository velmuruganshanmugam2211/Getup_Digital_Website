import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { WorksHero } from '../components/works/WorksHero';
import { WorksGrid } from '../components/works/WorksGrid';
import { ServicesCTA } from '../components/services/ServicesCTA';

export const Works: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <WorksHero />
        <WorksGrid />
        <ServicesCTA />
      </main>
    </PageTransition>
  );
};
