import { Container } from "../common/Container";
import { clientData } from "../../data/clientData";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const TrustSection: React.FC = () => {
  // Double client data for seamless infinite marquee loop
  const marqueeClients = [...clientData, ...clientData];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAF8] border-b border-[#E5E7E5] overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E7E5]">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#008000] mb-2 bg-[#008000]/10 px-3 py-1 rounded-full border border-[#008000]/20">
            
              <span>PROVEN CLIENT TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Trusted by Ambitious Brands Across Key Industries
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#666666] max-w-xl">
              From local culinary landmarks to corporate B2B enterprises, we build the marketing engines that drive repeatable revenue.
            </p>
          </div>

          <Link
            to="/clients"
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#008000] hover:text-[#006600] mt-4 md:mt-0 transition-colors group"
          >
            <span>View All Client Case Studies</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>

      {/* Infinite Smooth Logo Marquee Strip */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-marquee flex items-center space-x-6 sm:space-x-8">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="group flex items-center space-x-4 bg-white border border-[#E5E7E5] rounded-2xl px-6 py-4 shadow-xs hover:border-[#008000]/40 hover:shadow-md transition-all duration-300 shrink-0 w-64 sm:w-72"
            >
              <div className="w-20 h-20 rounded-xl bg-[#F8FAF8] border border-neutral-100 flex items-center justify-center p-2 shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-bold text-[#111111] truncate group-hover:text-[#008000] transition-colors">
                  {client.name}
                </div>
                <div className="text-xs text-[#777777] truncate font-medium">
                  {client.industry}
                </div>
                <div className="text-[11px] font-semibold text-[#008000] mt-0.5">
                  {client.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
