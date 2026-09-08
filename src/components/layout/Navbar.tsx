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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-header py-3.5 border-b border-[#E5E7E5] shadow-xs'
            : 'bg-white/70 backdrop-blur-xs py-5 border-b border-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={logoDark}
                alt={BRAND_INFO.name}
                className="h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* <span className="hidden sm:inline-block text-[10px] tracking-wider uppercase font-semibold text-[#008000] border-l border-[#E5E7E5] pl-3">
                {BRAND_INFO.tagline}
              </span> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'px-4 py-1.5 text-base font-medium rounded-full transition-all duration-200 relative',
                      isActive
                        ? 'text-[#008000] font-bold text-md bg-white shadow-xs'
                        : 'text-[#222222]  hover:text-[#008000]'
                    )}
                  >
                    {link.name}

                  </Link>
                );
              })}
            </nav>

            {/* Right Side CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button href="/contact" variant="primary" size="md" showArrow arrowType="up-right">
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#222222] hover:text-[#008000] hover:bg-[#F6F7F5] transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
