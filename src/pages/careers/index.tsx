import React from 'react';
import { CareerHero } from '../../components/careers/CareerHero';
import { JobListing } from '../../components/careers/JobListing';
import { CareerApplicationForm } from '../../components/careers/CareerApplicationForm';

export const Careers: React.FC = () => {
  return (
    <main>
      <CareerHero />
      <JobListing />
      <CareerApplicationForm />
    </main>
  );
};

export default Careers;
