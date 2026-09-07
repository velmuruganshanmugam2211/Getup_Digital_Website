import React from 'react';
import { Container } from '../common/Container';
import { servicesData } from '../../data/serviceData';
import { ServiceDetail } from './ServiceDetail';

export const ServiceList: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <ServiceDetail key={service.id} service={service} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </Container>
    </section>
  );
};
