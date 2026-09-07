import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import hero_image from "../../assets/images/hero/Hero_main.png";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFCFA] border-b border-[#E5E7E5] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#008000]/6 rounded-full blur-[140px] -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Authentic Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Real Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-[#008000]/10 text-[#008000] border border-[#008000]/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-[#008000] animate-pulse" />
              <span>GETUP DIGITAL SOLUTION — YOUR GROWING PARTNER</span>
            </motion.div>

            {/* Clean Real Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.1]"
            >
              Digital Marketing That Drives{" "}
              <span className="text-[#008000]">Real Growth.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed font-normal"
            >
              Building brands, reaching the right audience, and turning digital presence into measurable revenue & long-term brand authority.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Start a Project
              </Button>
              <Button href="/works" variant="outline" size="lg" showArrow arrowType="up-right">
                Explore Our Work
              </Button>
            </motion.div>

            {/* Authentic Counter Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-[#E5E7E5] grid grid-cols-3 gap-6 max-w-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#008000]/10 flex items-center justify-center text-[#008000] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#111111]">2.39L+</div>
                  <div className="text-xs text-[#6B7280]">Campaign Reach</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#008000]/10 flex items-center justify-center text-[#008000] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#008000]">7+</div>
                  <div className="text-xs text-[#6B7280]">Active Clients</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#008000]/10 flex items-center justify-center text-[#008000] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#111111]">2.64L+</div>
                  <div className="text-xs text-[#6B7280]">Video Views</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Clean Graphic Mockup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-2xl lg:max-w-3xl"
            >
              <div className="rounded-2xl">
                <img
                  src={hero_image}
                  className="w-[150%] h-auto rounded-xl object-cover"
                  alt="Getup Digital Solution Showcase"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
