import React from 'react';
import { Container } from '../common/Container';
import { clientData } from '../../data/clientData';

export const ClientLogoWall: React.FC = () => {
  return (
    <section className="py-16 bg-[#F6F7F5] border-y border-[#E5E7E5]">
      <Container>
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#008000] mb-2">
            INDUSTRY REACH
          </h3>
          <h2 className="text-2xl font-bold text-[#111111]">
            Serving Diverse Regional & Commercial Sectors
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {clientData.map((client) => (
            <div
              key={client.id}
              className="px-5 py-3 bg-white rounded-full border border-[#E5E7E5] text-xs font-semibold text-[#111111] hover:border-[#008000] hover:text-[#008000] transition-colors"
            >
              {client.name} — <span className="text-[#6B7280] font-normal">{client.industry}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
