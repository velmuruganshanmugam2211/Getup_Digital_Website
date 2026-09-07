import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { ClientsHero } from '../components/clients/ClientsHero';
import { ClientGrid } from '../components/clients/ClientGrid';
import { ClientLogoWall } from '../components/clients/ClientLogoWall';
import { ClientResults } from '../components/clients/ClientResults';

export const Clients: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <ClientsHero />
        <ClientGrid />
        <ClientLogoWall />
        <ClientResults />
      </main>
    </PageTransition>
  );
};
