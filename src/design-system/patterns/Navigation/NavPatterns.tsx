import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

export interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
  icon?: LucideIcon;
}

export interface HeaderProps {
  logo: React.ReactNode;
  links: NavLinkItem[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  statusBadge?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  links,
  ctaText = "Let's Talk",
  ctaHref = '/contact',
  onCtaClick,
  statusBadge = 'Taking New Clients',
  className = '',
}) => {
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
  }, [location.pathname]);

  return (
    <>
      <header
        className={`
          font-gds fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${
            isScrolled
              ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md py-3 border-b border-[var(--gds-color-border)] shadow-xs'
              : 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md py-4 sm:py-5 border-b border-neutral-100 dark:border-neutral-800'
          }
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Status */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              {logo}
            </Link>

            {statusBadge && (
              <div className="hidden xl:inline-flex">
                <Badge variant="green" size="sm" pulseDot dot>
                  {statusBadge}
                </Badge>
              </div>
            )}
          </div>

          {/* Desktop Clean Pill Navigation */}
          <nav className="hidden lg:flex items-center p-1.5 bg-[#F6F7F5] dark:bg-neutral-800/70 border border-[#E5E7E5] dark:border-neutral-700 rounded-full shadow-inner space-x-1">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`
                    px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap
                    ${
                      isActive
                        ? 'bg-white dark:bg-neutral-900 text-[#008000] font-semibold shadow-xs border border-[#E5E7E5] dark:border-neutral-700'
                        : 'text-[var(--gds-color-text-secondary)] hover:text-[#008000] hover:bg-white/60 dark:hover:bg-neutral-700/50'
                    }
                  `}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1.5 text-[10px] bg-[#008000]/10 text-[#008000] px-1.5 py-0.5 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              href={ctaHref}
              onClick={onCtaClick}
              variant="primary"
              size="md"
              showArrow
              arrowType="up-right"
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden space-x-2">
            <Button
              href={ctaHref}
              onClick={onCtaClick}
              variant="primary"
              size="sm"
              className="!px-3 !py-1 text-xs"
            >
              {ctaText}
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[var(--gds-color-text-primary)] hover:text-[#008000] hover:bg-[var(--gds-color-background-secondary)] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden font-gds">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[var(--gds-color-surface)] shadow-2xl p-6 flex flex-col justify-between border-l border-[var(--gds-color-border)] animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--gds-color-border-subtle)]">
                <span className="font-bold text-lg text-[var(--gds-color-text-primary)]">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-[var(--gds-color-text-muted)]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 text-base font-semibold text-[var(--gds-color-text-primary)] hover:text-[#008000] hover:bg-[var(--gds-color-background-secondary)] rounded-[var(--gds-radius-md)] transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-xs bg-[#008000]/10 text-[#008000] px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--gds-color-border-subtle)]">
              <Button
                href={ctaHref}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCtaClick?.();
                }}
                variant="primary"
                fullWidth
                size="md"
                showArrow
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
