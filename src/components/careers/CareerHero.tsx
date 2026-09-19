import React from "react";
import { Briefcase, Sparkles, MapPin, Clock } from "lucide-react";

export const CareerHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF8] pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#008000]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#008000]/5 blur-2xl" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#008000]/10 border border-[#008000]/20 text-[#008000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>We are Hiring</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] leading-tight tracking-tight mb-5">
          Build Your Career at <span className="text-[#008000]">Getup Digital</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#555555] leading-relaxed mb-8">
          Join a passionate team of creators, strategists, and storytellers. We build digital
          experiences that make brands grow and we want you to be part of it.
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-[#444444]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#008000]" />Erode, Tamil Nadu
          </span>
          <span className="w-1 h-1 rounded-full bg-[#CCCCCC]" />
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-[#008000]" />Full-time Opportunity
          </span>
          <span className="w-1 h-1 rounded-full bg-[#CCCCCC]" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#008000]" />Open Now
          </span>
        </div>
      </div>
    </section>
  );
};
