import React from "react";
import { Video, Clock, MapPin, Briefcase, CheckCircle2, ArrowRight, Star } from "lucide-react";

const RESPONSIBILITIES = [
  "Edit short-form and long-form video content for social media (Reels, YouTube, Ads)",
  "Apply motion graphics, transitions, colour grading, and sound design",
  "Collaborate with the creative team on campaign storylines and brand guidelines",
  "Export and deliver files in required formats within agreed timelines",
  "Assist in building video templates and reusable editing workflows",
  "Stay updated with trending video formats and platform algorithm changes",
];

const REQUIREMENTS = [
  "Fresher / 0-1 year experience - recent graduates welcome!",
  "Working knowledge of Adobe Premiere Pro or DaVinci Resolve (or CapCut Pro)",
  "Basic understanding of video composition, pacing, and storytelling",
  "Interest in digital marketing, branding, and social media content",
  "Ability to meet deadlines and adapt to creative direction",
  "Portfolio / demo reel (personal projects, college work, or freelance samples)",
];

const PERKS = [
  "Hands-on mentoring from experienced creatives",
  "Exposure to real client campaigns from Day 1",
  "Stipend during probation + full-time conversion",
  "Flexible creative environment",
];

export const JobListing: React.FC = () => {
  const handleApply = () => {
    const form = document.getElementById("career-form");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#008000] mb-3">Open Position</p>
        <div className="border border-[#E5E7E5] rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-[#111111] px-8 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#008000] rounded-2xl flex items-center justify-center shrink-0">
                <Video className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#008000]/20 text-[#00C853] border border-[#008000]/30 px-2.5 py-0.5 rounded-full">Fresher</span>
                  <span className="text-xs font-semibold text-white/50">Job ID: GDS-VE-001</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Video Editor</h2>
                <p className="text-sm text-white/60 mt-0.5">Creative Team - Getup Digital Solution</p>
              </div>
            </div>
            <button onClick={handleApply} className="inline-flex items-center gap-2 bg-[#008000] hover:bg-[#006800] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shrink-0 cursor-pointer">
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-[#F8FAF8] border-b border-[#E5E7E5] px-8 py-4 flex flex-wrap gap-6 text-sm text-[#444444]">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#008000]" />Erode, Tamil Nadu (On-site)</span>
            <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-[#008000]" />Full-time / Internship-to-Hire</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#008000]" />Immediate Joining</span>
          </div>
          <div className="px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-black uppercase tracking-wide text-[#111111] mb-5 flex items-center gap-2">
                <Star className="w-4 h-4 text-[#008000]" />What You Will Do
              </h3>
              <ul className="space-y-3">
                {RESPONSIBILITIES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#008000] shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-black uppercase tracking-wide text-[#111111] mb-5 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#008000]" />What We Are Looking For
                </h3>
                <ul className="space-y-3">
                  {REQUIREMENTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#444444]">
                      <CheckCircle2 className="w-4 h-4 text-[#008000] shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F0FDF4] border border-[#008000]/20 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase tracking-wide text-[#008000] mb-4">Perks and Benefits</h3>
                <ul className="space-y-2">
                  {PERKS.map((perk, i) => (
                    <li key={i} className="text-sm text-[#333333] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008000] shrink-0" />{perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
