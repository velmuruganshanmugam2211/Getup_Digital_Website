import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { workData } from "../../data/workData";
import { Button } from "../common/Button";

export const WorksPreview: React.FC = () => {
  const filteredWorks = workData.filter((w) => w.featured).slice(0, 6);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-b border-[#E5E8E5]">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#008000]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-[#008000]/5 blur-[100px]" />

      <Container className="relative z-10">
        {/* Section Header + Interactive Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <SectionHeading
            title="Work That Makes Brands Noticeable."
            description="A glimpse into the high-converting campaigns, brand identities, and creative digital assets we have engineered for growing brands."
          />
        </div>

        {/* Portfolio Cards Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, idx) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col h-full bg-[#F9FAF9] rounded-3xl overflow-hidden border border-[#E5E8E5] hover:border-[#008000] hover:shadow-2xl transition-all duration-500"
              >
                {/* Visual Image Showcase Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-900">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent  group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* Card Content Details */}
                <div className="p-7 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#111111] group-hover:text-[#008000] transition-colors leading-snug mb-2">
                      {work.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2 mb-6">
                      {work.description}
                    </p>
                  </div>
                  {/* Footer Tags & Action Button */}
                  <div className="pt-4 border-t border-[#F0F2F0] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {work.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[12px] font-medium text-[#008000] px-2.5 py-1 rounded-full "
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={work.link || "/works"}
                      className="w-10 h-10 rounded-full bg-[#F4F6F4] group-hover:bg-[#008000] group-hover:text-white transition-all duration-300 flex items-center justify-center text-[#111111] shadow-xs group-hover:shadow-md group-hover:shadow-[#008000]/30"
                      aria-label={`View details for ${work.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Works Action Button */}
        <div className="mt-14 text-center">
          <Button href="/works" variant="outline" size="lg" showArrow className="hover:border-[#008000]">
            View Full Case Studies & Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
};
