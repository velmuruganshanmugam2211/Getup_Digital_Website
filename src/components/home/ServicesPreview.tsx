import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Palette,
  Target,
  Users,
  Video,
  Sparkles,
  Bot,
  Globe,
  Zap,
  CheckCircle2,
} from "lucide-react";

import { Container } from "../common/Container";
import { servicesData } from "../../data/serviceData";
import { Button } from "../common/Button";

export const ServicesPreview: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const getServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case "Share2": return Share2;
      case "Palette": return Palette;
      case "Target": return Target;
      case "Users": return Users;
      case "Video": return Video;
      case "Sparkles": return Sparkles;
      case "Bot": return Bot;
      case "Globe": return Globe;
      case "Zap": return Zap;
      default: return Sparkles;
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scrollContainerRef.current.scrollBy({
            left: 380,
            behavior: "smooth",
          });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative bg-[#FAFCFA] py-20 sm:py-28 overflow-hidden border-b border-[#E5E7E5]">
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#008000]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-[400px] w-[400px] rounded-full bg-[#008000]/5 blur-3xl" />

      <Container>
        {/* Header Row with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#E5E7E5]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#008000] mb-3 bg-[#008000]/10 px-3.5 py-1 rounded-full border border-[#008000]/20">
              
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Full-Stack Digital Growth Services
            </h2>
            <p className="mt-3 text-base text-[#666666] leading-relaxed">
              We engineer strategy, high-conversion creative assets, and targeted performance campaigns into one accountable growth engine.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-[#E5E7E5] bg-white text-[#111111] hover:border-[#008000] hover:bg-[#008000] hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-[#E5E7E5] bg-white text-[#111111] hover:border-[#008000] hover:bg-[#008000] hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 px-1 no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {servicesData.map((service, index) => {
            const Icon = getServiceIcon(service.iconName);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="w-[320px] sm:w-[360px] md:w-[380px] shrink-0 snap-start bg-white rounded-3xl p-7 border border-[#E5E7E5] shadow-xs hover:border-[#008000]/40 hover:shadow-xl transition-all duration-400 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F6F7F5] group-hover:bg-[#008000] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#111111] border border-neutral-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#888888] bg-[#F6F7F5] px-2.5 py-1 rounded-full">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] group-hover:text-[#008000] transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables with checkmarks */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                      Key Deliverables:
                    </div>
                    <div className="space-y-2">
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <div
                          key={i}
                          className="flex items-center text-xs text-[#333333] font-medium bg-[#F8FAF8] p-2.5 rounded-xl border border-neutral-100"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#008000] mr-2 shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#E5E7E5]">
                  <Button
                    href={`/services#${service.id}`}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                    showArrow
                    arrowType="up-right"
                  >
                    Explore Service
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-8 flex items-center justify-between text-xs text-[#666666] pt-4 border-t border-[#E5E7E5]">
          <span>Custom scope tailored for high-growth businesses</span>
          <Button href="/services" variant="text" showArrow arrowType="up-right">
            View All 8 Core Services
          </Button>
        </div>
      </Container>
    </section>
  );
};