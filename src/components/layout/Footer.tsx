import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Copy,
  Check,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { BRAND_INFO, NAV_LINKS } from '../../lib/constants';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import logoLight from '../../assets/brand/logo.svg';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(BRAND_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLinks = [
    { name: 'Social Media Marketing', href: '/services#social-media-marketing' },
    { name: 'Paid Meta & Google Ads', href: '/services#paid-advertising' },
    { name: 'Influencer Marketing', href: '/services#influencer-marketing' },
    { name: 'Social Media Design Suite', href: '/services#social-media-design' },
    { name: 'Commercial Video & Viral Reels', href: '/services#video-reels' },
    { name: 'Brand Identity & Strategy', href: '/services#branding-advertising' },
    { name: 'AI Content Studio & Catalogues', href: '/services#ai-content-catalogue' },
    { name: 'High-Converting Web Architecture', href: '/services#website-design' },
  ];

  return (
    <footer className="bg-[#0c0d0c] text-white pt-20 pb-12 border-t border-neutral-800/80 relative overflow-hidden font-poppins">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#008000]/8 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Top Pre-Footer Callout Box */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900/90 via-[#111611]/90 to-neutral-900/90 border border-[#008000]/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#00C853] bg-[#008000]/20 border border-[#008000]/30 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSFORM YOUR DIGITAL FOOTPRINT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your Brand’s Real Growth?
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Partner with Getup Digital Solution to unlock scalable customer acquisition, viral social reach, and high-ROI ad performance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Get Free Strategy Proposal
            </Button>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Getup%20Digital,%20I'd%20like%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 border border-[#25D366]/30 px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Main 12-Column Responsive Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 pb-16 border-b border-neutral-800/80">
          {/* Col 1: Brand & Agency Identity (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logoLight}
                alt={BRAND_INFO.name}
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Getup Digital Solution is an outcome-obsessed creative agency helping ambitious businesses build commanding digital brands, reach high-intent customers, and scale revenue predictably.
            </p>

            <div className="space-y-3">
              {/* Live Project Availability Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#008000]/15 border border-[#008000]/30 text-[#00C853] text-xs font-semibold rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
                <span>Taking New Client Projects</span>
              </div>

              {/* Location & Timezone */}
              <div className="flex items-center space-x-2 text-xs text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                <span>{BRAND_INFO.location} • Mon–Sat 9:30 AM–7:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-[#00C853] transition-colors inline-flex items-center space-x-1.5 group font-medium"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Capabilities (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-5">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-neutral-400 hover:text-[#00C853] transition-colors block py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact Bento Cards (Col span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-5">
              Direct Contact
            </h4>

            {/* Email Card - FULL VISIBILITY & NO TRUNCATION */}
            <div className="group relative bg-neutral-900/90 border border-neutral-800 hover:border-[#008000]/50 rounded-2xl p-4 transition-all duration-300 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-400">
                  <div className="w-8 h-8 rounded-xl bg-neutral-800 group-hover:bg-[#008000] transition-colors flex items-center justify-center text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Official Email</span>
                </div>

                {/* 1-Click Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
                  title="Copy email address"
                  type="button"
                >
                  {copied ? (
                    <span className="flex items-center text-[#00C853] text-[10px] font-bold">
                      <Check className="w-3 h-3 mr-0.5" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email Address Link: 100% Fully Visible */}
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="block text-sm font-semibold text-white group-hover:text-[#00C853] transition-colors break-all select-all mt-1"
              >
                {BRAND_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="group flex items-center space-x-3.5 bg-neutral-900/90 border border-neutral-800 hover:border-[#008000]/50 rounded-2xl p-3.5 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-800 group-hover:bg-[#008000] transition-colors flex items-center justify-center text-white shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-neutral-400">Call Strategy Lead</div>
                <div className="text-sm font-bold text-white group-hover:text-[#00C853] transition-colors">
                  {BRAND_INFO.phoneFormatted}
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3.5 bg-neutral-900/90 border border-neutral-800 hover:border-[#25D366]/50 rounded-2xl p-3.5 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-800 group-hover:bg-[#25D366] transition-colors flex items-center justify-center text-white shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="flex-grow">
                <div className="text-[11px] font-medium text-neutral-400">Instant Chat</div>
                <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors flex items-center justify-between">
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#25D366] transition-colors" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Big Stylized Typographic Brand Watermark (Trendy Agency Style) */}
        <div className="py-8 select-none pointer-events-none overflow-hidden text-center opacity-10">
          <span className="font-black text-4xl sm:text-6xl md:text-8xl tracking-tight text-white uppercase whitespace-nowrap">
            GETUP DIGITAL SOLUTION
          </span>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="text-neutral-400 font-medium">"{BRAND_INFO.tagline}"</span>
            <span className="text-neutral-600">•</span>
            <Link to="/contact" className="text-[#00C853] hover:underline font-semibold flex items-center space-x-1">
              <span>Start Growing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-full cursor-pointer hover:border-neutral-700"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00C853]" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
