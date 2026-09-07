import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { AboutHero } from '../components/about/AboutHero';
import { AboutStory } from '../components/about/AboutStory';
import { ApproachSection } from '../components/about/ApproachSection';
import { PhilosophySection } from '../components/about/PhilosophySection';
import { AboutCTA } from '../components/about/AboutCTA';

export const About: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <AboutHero />
        <AboutStory />
        <ApproachSection />
        <PhilosophySection />
        <AboutCTA />
      </main>
    </PageTransition>
  );
};
