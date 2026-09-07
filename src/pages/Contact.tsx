import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactCTA } from '../components/contact/ContactCTA';
import { Container } from '../components/common/Container';

export const Contact: React.FC = () => {
  return (
    <PageTransition>
      <main>
        <ContactHero />
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
        <ContactCTA />
      </main>
    </PageTransition>
  );
};
