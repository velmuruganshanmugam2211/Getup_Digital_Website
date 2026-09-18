import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  CheckCircle2,
  Star,
  MessageCircle,
  Eye,
  Sparkles,
} from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import hero_image from "../../assets/images/hero/Hero_main.png";
import { BRAND_INFO } from "../../lib/constants";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/50 via-[#FAFCFA] to-white border-b border-[#E5E7E5] overflow-hidden font-poppins">
      {/* Background Soft Mesh Ambient Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#008000]/6 rounded-full blur-[150px] -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#008000]/4 rounded-full blur-[120px] -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Copy & Social Proof */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trendy Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md text-[#008000] border border-[#008000]/25 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#008000] animate-ping" />
              <span>ROI-DRIVEN DIGITAL AGENCY • YOUR GROWING PARTNER</span>
            </motion.div>

            {/* Powerful Modern Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-[#111111] leading-[1.1]"
            >
              Digital Marketing That Drives{" "}
              <span className="text-[#008000] relative inline-block">
                Real Growth.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#008000]/25 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q 50 12 100 6"
                    stroke="currentColor"
                    strokeWidth="5"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* High-Impact Human Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed font-normal"
            >
              We engineer high-converting Meta & Google ad funnels, viral short-form video systems, and magnetic brand identities that transform casual followers into paying customers.
            </motion.p>

            {/* Social Proof Star Rating Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center space-x-3 pt-1"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#008000] text-white flex items-center justify-center text-xs font-black border-2 border-white shadow-xs">
                  B
                </div>
                <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs font-black border-2 border-white shadow-xs">
                  V
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00C853] text-white flex items-center justify-center text-xs font-black border-2 border-white shadow-xs">
                  E
                </div>
                <div className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center text-xs font-black border-2 border-white shadow-xs">
                  S
                </div>
              </div>
              <div className="text-xs text-[#444444]">
                <div className="flex items-center text-[#FFB800] space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800]" />
                  ))}
                  <span className="font-bold text-[#111111] ml-1.5 text-xs">4.9/5</span>
                </div>
                <span className="text-neutral-500 font-medium text-[11px]">
                  Trusted by 7+ Active Scaling Brands
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Start a Project
              </Button>
              <Button href="/works" variant="outline" size="lg" showArrow arrowType="up-right">
                Explore Our Work
              </Button>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Getup%20Digital,%20I'd%20like%20to%20discuss%20a%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 border border-[#25D366]/30 px-4 py-3.5 rounded-full text-xs font-bold transition-all duration-200 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>1-Click WhatsApp</span>
              </a>
            </motion.div>

            {/* Real Agency Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#666666] font-medium pt-1"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                <span>Zero Wasted Ad Spend</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                <span>Weekly Transparent Audits</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#008000]" />
                <span>Fast 48-Hour Sprint</span>
              </div>
            </motion.div>

            {/* 4-Card Bento Stat Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-[#E5E7E5] grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
            >
              <div className="bg-white p-3.5 rounded-2xl border border-[#E5E7E5] shadow-2xs">
                <div className="flex items-center space-x-2 text-[#008000] mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">REACH</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#111111]">2.39L+</div>
                <div className="text-[11px] text-[#6B7280]">Campaign Reach</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#E5E7E5] shadow-2xs">
                <div className="flex items-center space-x-2 text-[#008000] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">PEAK ROAS</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#008000]">10.4x</div>
                <div className="text-[11px] text-[#6B7280]">Meta Ads ROAS</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#E5E7E5] shadow-2xs">
                <div className="flex items-center space-x-2 text-[#008000] mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">VIEWS</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#111111]">2.64L+</div>
                <div className="text-[11px] text-[#6B7280]">Video Views</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-[#E5E7E5] shadow-2xs">
                <div className="flex items-center space-x-2 text-[#008000] mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">CLIENTS</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#111111]">7+</div>
                <div className="text-[11px] text-[#6B7280]">Active Brands</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Organic 3D Floating Hero Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Radial Mesh Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-[#008000]/15 via-[#00C853]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-lg lg:max-w-xl mx-auto"
            >
              {/* Organic Floating Transparent Illustration */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img
                  src={hero_image}
                  className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,128,0,0.16)] select-none"
                  alt="Getup Digital Solution Growth & Campaign Showcase"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
