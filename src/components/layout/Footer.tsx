import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS } from '../../lib/constants';
import { Container } from '../common/Container';
import logoLight from '../../assets/brand/logo.svg';

export const Footer: React.FC = () => {
  const serviceLinks = [
    { name: 'Social Media Marketing', href: '/services#social-media-marketing' },
    { name: 'Paid Advertising', href: '/services#paid-advertising' },
    { name: 'Influencer Marketing', href: '/services#influencer-marketing' },
    { name: 'Social Media Design', href: '/services#social-media-design' },
    { name: 'Video & Reels', href: '/services#video-reels' },
    { name: 'Branding & Strategy', href: '/services#branding-advertising' },
    { name: 'AI Content & Catalogue', href: '/services#ai-content-catalogue' },
    { name: 'Website Design', href: '/services#website-design' }
  ];

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logoLight}
                alt={BRAND_INFO.name}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              {BRAND_INFO.description}
            </p>
            <div className="inline-block px-3 py-1 bg-[#008000]/20 border border-[#008000]/40 text-[#008000] text-xs font-semibold rounded-full">
              {BRAND_INFO.hashtag}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-300 hover:text-[#008000] transition-colors inline-flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-neutral-300 hover:text-[#008000] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center space-x-3 text-neutral-300 hover:text-[#008000] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-[#008000] transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span>{BRAND_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center space-x-3 text-neutral-300 hover:text-[#008000] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-[#008000] transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="truncate max-w-[180px]">{BRAND_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-neutral-300">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#008000]" />
                </div>
                <span>{BRAND_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <p>© 2026 {BRAND_INFO.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-neutral-400">"{BRAND_INFO.tagline}"</span>
            <Link to="/contact" className="text-[#008000] hover:underline flex items-center space-x-1">
              <span>Start Growing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
