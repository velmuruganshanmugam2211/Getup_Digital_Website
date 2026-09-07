import React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { clientData } from "../../data/clientData";
import { SectionHeading } from "../common/SectionHeading";

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F6F7F5] border-y border-[#E5E7E5]">
      <Container>
        <div className="flex flex-col items-center  md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E7E5]">
          <div>
            <SectionHeading
            title="Trusted to Build, Grow & Scale Brands across the 7 Clients"
            description="Working with ambitious businesses to create stronger digital identities and measurable growth."
          />
          </div>
          {/* <p className="text-sm text-[#6B7280] max-w-sm mt-3 md:mt-0 leading-relaxed">
            Working with ambitious businesses to create stronger digital identities and measurable growth.
          </p> */}
        </div>

        {/* 7-Client Showcase Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clientData.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="
    group
    aspect-square
    w-40
    rounded-full
    bg-white
    border border-slate-200
    flex items-center justify-center
    p-7
    transition-all duration-500
    hover:scale-105
    hover:border-[#008000]/40
    hover:shadow-[0_12px_35px_rgba(0,128,0,0.15)]
  "
            >
              {client.hasLogo && client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="
                    max-w-full
                    max-h-full
                    object-contain
                    grayscale
                    group-hover:grayscale-0
                    transition-all duration-500
                  "
                />
              ) : (
                <div className="text-center p-2">
                  <span className="text-xs font-bold text-[#111111] group-hover:text-[#008000] transition-colors line-clamp-2">
                    {client.name}
                  </span>
                  <span className="text-[9px] text-[#6B7280] block mt-0.5">{client.industry}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-8 text-center">
          <Link
            to="/clients"
            className="inline-flex items-center text-xs font-semibold text-[#111111] hover:text-[#008000] transition-colors"
          >
            <span>Explore all 7 partner clients & results</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#008000]" />
          </Link>
        </div> */}
      </Container>
    </section>
  );
};
