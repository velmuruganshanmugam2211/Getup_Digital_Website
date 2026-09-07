import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { CaseStudyHero } from '../components/case-study/CaseStudyHero';
import { CaseStudyMetrics } from '../components/case-study/CaseStudyMetrics';
import { CaseStudyOverview } from '../components/case-study/CaseStudyOverview';
import { CaseStudyStrategy } from '../components/case-study/CaseStudyStrategy';
import { CaseStudyGallery } from '../components/case-study/CaseStudyGallery';
import { CaseStudyCTA } from '../components/case-study/CaseStudyCTA';

export const SivaBiryaniCaseStudy: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <CaseStudyHero />
        <CaseStudyMetrics />
        <CaseStudyOverview />
        <CaseStudyStrategy />
        <CaseStudyGallery />
        <CaseStudyCTA />
      </main>
    </PageTransition>
  );
};
