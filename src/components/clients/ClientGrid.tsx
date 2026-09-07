import React from 'react';
import { Container } from '../common/Container';
import { clientData } from '../../data/clientData';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ClientGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-2">
            The 7 Partner Clients Showcase
          </h2>
          <p className="text-sm text-[#6B7280]">
            Detailed view of partner brands, industries, and active digital execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientData.map((client, idx) => (
            <div
              key={client.id}
              className="bg-[#F6F7F5] rounded-2xl p-6 sm:p-8 border border-[#E5E7E5] hover:border-[#008000] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#008000] bg-[#008000]/10 px-3 py-1 rounded-full">
                    CLIENT 0{idx + 1}
                  </span>
                  <span className="text-xs font-medium text-[#6B7280] bg-white px-2.5 py-1 rounded border border-[#E5E7E5]">
                    {client.industry}
                  </span>
                </div>

                {client.hasLogo && client.logo ? (
                  <div className="mb-6 h-20 bg-white rounded-xl p-4 border border-[#E5E7E5] flex items-center justify-center">
                    <img src={client.logo} alt={client.name} className="h-full w-auto object-contain" />
                  </div>
                ) : (
                  <div className="mb-6 h-20 bg-white rounded-xl p-4 border border-[#E5E7E5] flex flex-col items-center justify-center text-center">
                    <span className="text-base font-bold text-[#111111]">{client.name}</span>
                    <span className="text-xs text-[#6B7280]">{client.industry}</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#008000] transition-colors">
                  {client.name}
                </h3>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                  {client.description}
                </p>

                {client.featuredProject && (
                  <div className="p-3 bg-white rounded-xl border border-[#E5E7E5] text-xs text-[#222222] mb-4">
                    <div className="font-bold text-[#008000] mb-0.5">Active Execution:</div>
                    <div>{client.featuredProject}</div>
                  </div>
                )}
              </div>

              {client.id === 'siva-biryani' && (
                <Link
                  to="/case-study/siva-biryani"
                  className="pt-4 border-t border-[#E5E7E5] flex items-center justify-between text-xs font-bold text-[#008000] hover:underline"
                >
                  <span>View Siva Biryani Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
