import React from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../../lib/constants';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-[#008000] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT CONTACT DETAILS</span>
        </div>
        <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight">
          Let's Build Something Great Together.
        </h2>
        <p className="text-sm text-[#6B7280] leading-relaxed mt-2">
          Whether you need a full digital marketing execution, targeted Meta ad campaigns, or AI catalogue visual creation, we are here to help your brand grow.
        </p>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <a
          href={`mailto:${BRAND_INFO.email}`}
          className="p-6 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5] hover:border-[#008000] hover:shadow-md transition-all flex items-center space-x-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-white text-[#008000] flex items-center justify-center border border-[#E5E7E5] group-hover:bg-[#008000] group-hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Email Us</div>
            <div className="text-base font-bold text-[#111111] group-hover:text-[#008000] transition-colors">{BRAND_INFO.email}</div>
          </div>
        </a>

        {/* Phone */}
        <a
          href={`tel:${BRAND_INFO.phone}`}
          className="p-6 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5] hover:border-[#008000] hover:shadow-md transition-all flex items-center space-x-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-white text-[#008000] flex items-center justify-center border border-[#E5E7E5] group-hover:bg-[#008000] group-hover:text-white transition-colors">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Call / WhatsApp</div>
            <div className="text-base font-bold text-[#111111] group-hover:text-[#008000] transition-colors">{BRAND_INFO.phoneFormatted}</div>
          </div>
        </a>

        {/* Location */}
        <div className="p-6 rounded-2xl bg-[#F6F7F5] border border-[#E5E7E5] flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-white text-[#008000] flex items-center justify-center border border-[#E5E7E5]">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">Agency Location</div>
            <div className="text-base font-bold text-[#111111]">{BRAND_INFO.location}</div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#111111] text-white space-y-2 border border-neutral-800">
        <div className="text-xs font-mono text-[#008000] uppercase font-bold">#YOURGROWINGPARTNER</div>
        <p className="text-xs text-neutral-400">
          "GETUP Digital is a creative digital marketing agency dedicated to helping businesses grow their online presence, attract more customers, and achieve measurable results through innovative marketing strategies."
        </p>
      </div>
    </div>
  );
};
