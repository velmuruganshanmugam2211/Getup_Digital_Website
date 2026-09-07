import React from 'react';
import { Container } from '../common/Container';
import { sivaBiryaniCaseStudy } from '../../data/caseStudyData';
import { FileCheck, ShieldCheck } from 'lucide-react';

export const CaseStudyGallery: React.FC = () => {
  const caseStudy = sivaBiryaniCaseStudy;

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#008000] uppercase tracking-widest bg-[#008000]/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>05 & 06 — PROOF & REPORTING</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight">
            Campaign Performance Proof & Screenshots
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            Authentic reporting documents and Meta ad manager result verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudy.screenshots.map((img, idx) => (
            <div
              key={idx}
              className="bg-[#F6F7F5] rounded-2xl overflow-hidden border border-[#E5E7E5] shadow-lg group"
            >
              <div className="overflow-hidden bg-neutral-900">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E5E7E5] flex items-center justify-between">
                <span className="text-xs font-bold text-[#111111]">{img.caption}</span>
                <FileCheck className="w-4 h-4 text-[#008000]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
