import React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Lightbulb, Target, Zap, Handshake, CheckCircle2 } from "lucide-react";

export const WhyGetup: React.FC = () => {
  const reasons = [
    {
      number: "01",
      title: "Creative Thinking",
      description: "Modern and premium brand execution.",
      icon: Lightbulb,
      detail:
        "We design visually arresting visual assets and brand positioning that elevate your business beyond standard competitors.",
      highlights: ["High-Impact Visuals", "Brand Identity System", "Trendy Content Creation"],
      badge: "Creative Excellence",
    },
    {
      number: "02",
      title: "Strategic Execution",
      description: "Marketing built around business goals.",
      icon: Target,
      detail:
        "No vanity metrics without substance. Every campaign, creative, and ad dollar is deployed with targeted business objectives.",
      highlights: ["Performance Ads", "Precision Targeting", "Funnel Optimization"],
      badge: "Result Oriented",
    },
    {
      number: "03",
      title: "Fast Delivery",
      description: "Efficient communication and execution.",
      icon: Zap,
      detail:
        "Agile workflows and rapid turnaround times ensure your campaigns launch promptly without administrative lag.",
      highlights: ["Rapid Turnaround", "Dedicated Account Lead", "Real-Time Updates"],
      badge: "Speed & Precision",
    },
    {
      number: "04",
      title: "Long-Term Partnership",
      description: "Focused on sustainable growth.",
      icon: Handshake,
      detail:
        "We act as your dedicated growth partner, continuously optimizing performance for continuous, compounding returns.",
      highlights: ["Monthly Scaling", "Strategic Audits", "Dedicated Team"],
      badge: "Growth Partner",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAF8] border-y border-[#E5E8E5]">
      <Container>
        <div className="mb-14">
          <SectionHeading
            title="Built Different. Designed for Growth."
            description="We combine creative innovation with strategic discipline to deliver digital marketing that makes brands stand out and scale reliably."
            className="mb-0 max-w-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[#E5E8E5] shadow-xs hover:border-[#008000] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#008000] bg-[#008000]/10 px-3 py-1 rounded-full border border-[#008000]/20">
                      {reason.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F4F6F4] flex items-center justify-center text-[#111111]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-2 leading-snug">
                    {reason.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#008000] mb-3">
                    "{reason.description}"
                  </p>

                  <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                    {reason.detail}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#F0F2F0]">
                    {reason.highlights.map((item, i) => (
                      <div key={i} className="flex items-center text-xs font-medium text-[#333333]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008000] mr-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
