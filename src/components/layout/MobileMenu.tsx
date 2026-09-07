import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '../../lib/constants';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#111111]/90 backdrop-blur-md flex flex-col justify-between p-6 sm:p-8 lg:hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={onClose}>
              <img
                src="/src/assets/brand/logo.svg"
                alt={BRAND_INFO.name}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[#008000] transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto space-y-4 py-8">
            {NAV_LINKS.map((link, idx) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center justify-between text-2xl font-bold transition-colors py-2 border-b border-white/10',
                      isActive ? 'text-[#008000]' : 'text-white hover:text-[#008000]'
                    )}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={cn('w-5 h-5', isActive ? 'text-[#008000]' : 'text-white/40')} />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Contact & CTA */}
          <div className="space-y-6 pt-4 border-t border-white/10">
            <Button href="/contact" variant="primary" size="lg" className="w-full" showArrow>
              Start a Project
            </Button>

            <div className="grid grid-cols-1 gap-2 text-xs text-neutral-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#008000]" />
                <span>{BRAND_INFO.phoneFormatted}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#008000]" />
                <span>{BRAND_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#008000]" />
                <span>{BRAND_INFO.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
