import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '../../lib/constants';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';
import { MobileMenu } from './MobileMenu';
import logoDark from '../../assets/brand/logo-dark.svg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-header py-3 border-b border-[#E5E7E5] shadow-xs'
            : 'bg-white/90 backdrop-blur-md py-4 sm:py-5 border-b border-neutral-100'
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity & Live Status */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 group">
                <img
                  src={logoDark}
                  alt={BRAND_INFO.name}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Live Project Availability Badge */}
              <div className="hidden xl:inline-flex items-center space-x-1.5 bg-[#008000]/8 border border-[#008000]/20 px-2.5 py-1 rounded-full text-[11px] font-medium text-[#008000]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008000] animate-pulse" />
                <span>Taking New Clients</span>
              </div>
            </div>

            {/* Center: Clean Pill Navigation */}
            <nav className="hidden lg:flex items-center p-1.5 bg-[#F6F7F5] border border-[#E5E7E5] rounded-full shadow-inner space-x-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 relative whitespace-nowrap',
                      isActive
                        ? 'bg-white text-[#008000] font-semibold shadow-xs border border-[#E5E7E5]'
                        : 'text-[#333333] hover:text-[#008000] hover:bg-white/60'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Primary Call to Action */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button href="/contact" variant="primary" size="md" showArrow arrowType="up-right">
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center lg:hidden space-x-2">
              <Button href="/contact" variant="primary" size="sm" className="!px-3 !py-1.5 text-xs">
                Contact
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#222222] hover:text-[#008000] hover:bg-[#F6F7F5] border border-transparent hover:border-[#E5E7E5] transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
