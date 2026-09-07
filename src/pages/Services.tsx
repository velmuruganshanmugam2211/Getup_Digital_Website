import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServiceList } from '../components/services/ServiceList';
import { ServicesCTA } from '../components/services/ServicesCTA';

export const Services: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <ServicesHero />
        <ServiceList />
        <ServicesCTA />
      </main>
    </PageTransition>
  );
};
