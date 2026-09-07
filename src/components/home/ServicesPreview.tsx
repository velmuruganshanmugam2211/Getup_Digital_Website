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
} from "lucide-react";

import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { servicesData } from "../../data/serviceData";
import { Button } from "../common/Button";

export const ServicesPreview: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Map icon names to Lucide icons
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

  // Auto-scroll mechanism
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Check if reaching near the end
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
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative bg-[#FAFCFA] py-20 sm:py-28 overflow-hidden border-y border-[#E5E7E5]">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#008000]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-[400px] w-[400px] rounded-full bg-[#008000]/5 blur-3xl" />

      <Container>
        {/* Top Header Row with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            title="From Strategy to Execution, We Build Digital Growth."
            description="We bring strategy, creative execution, and targeted performance advertising together into one seamless growth partnership."
            className=" "
          />

          {/* Side Scroll Control Buttons */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-[#E5E7E5] bg-white text-[#111111] hover:border-[#008000] hover:bg-[#008000] hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[#E5E7E5] bg-white text-[#111111] hover:border-[#008000] hover:bg-[#008000] hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Side Scroll Carousel Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 px-1 no-scrollbar scrollbar-none"
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
                className="w-[320px] sm:w-[360px] md:w-[380px] shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7E5] shadow-sm hover:border-[#008000] hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#F6F7F5] group-hover:bg-[#008000] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#111111]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] group-hover:text-[#008000] transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Visual Image Banner (if available) */}
                  {/* {service.image && (
                    <div className="relative h-44 mb-6 rounded-2xl overflow-hidden border border-[#E5E7E5] bg-neutral-900">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#111111]">
                        {service.title}
                      </div>
                    </div>
                  )} */}

                  {/* Core Deliverables / Capabilities List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1">
                      Deliverables:
                    </div>
                    <div className="space-y-1.5">
                      {service.capabilities.slice(0, 3).map((cap, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-[#222222] font-medium  p-2.5 rounded-xl"
                        >
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                {/* <div className="pt-4 border-t border-[#E5E7E5]">
                  <Button
                    href={service.href}
                    variant="outline"
                    size="md"
                    className="w-full justify-center group-hover:bg-[#008000] group-hover:text-white group-hover:border-[#008000] transition-all"
                    showArrow
                  >
                    Explore Service
                  </Button>
                </div> */}
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicator Footer */}
        <div className="mt-4 flex items-center justify-end text-xs text-[#6B7280]">
          
          <Button href="/services" variant="text" showArrow>
            View All Capabilities
          </Button>
        </div>
      </Container>
    </section>
  );
};