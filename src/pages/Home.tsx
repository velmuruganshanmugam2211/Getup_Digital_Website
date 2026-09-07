import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Hero } from '../components/home/Hero';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyGetup } from '../components/home/WhyGetup';
import { WorksPreview } from '../components/home/WorksPreview';
import { ResultsSection } from '../components/home/ResultsSection';
import { CaseStudyPreview } from '../components/home/CaseStudyPreview';
import { TeamPreview } from '../components/home/TeamPreview';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <Hero />
        <TrustSection />
        <ServicesPreview />
        <WhyGetup />
        <WorksPreview />
        <ResultsSection />
        <CaseStudyPreview />
        <TeamPreview />
        <FinalCTA />
      </main>
    </PageTransition>
  );
};
