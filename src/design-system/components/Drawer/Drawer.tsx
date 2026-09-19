import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  position?: 'right' | 'left' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  position = 'right',
  size = 'md',
  children,
  footer,
  className = '',
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const positionClasses = {
    right: 'inset-y-0 right-0 max-w-full flex pl-10',
    left: 'inset-y-0 left-0 max-w-full flex pr-10',
    top: 'inset-x-0 top-0 max-h-full flex pb-10',
    bottom: 'inset-x-0 bottom-0 max-h-full flex pt-10',
  };

  const sizeWidthClasses = {
    sm: 'w-screen max-w-sm',
    md: 'w-screen max-w-md',
    lg: 'w-screen max-w-xl',
    xl: 'w-screen max-w-2xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-gds">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className={`fixed ${positionClasses[position]}`}>
        <div
          className={`
            w-full ${sizeWidthClasses[size]} bg-[var(--gds-color-surface)] shadow-2xl flex flex-col
            border-l border-[var(--gds-color-border)] animate-in slide-in-from-${position} duration-300
            ${className}
          `}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--gds-color-border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--gds-color-text-primary)]">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-[var(--gds-color-text-muted)] hover:text-[var(--gds-color-text-primary)] hover:bg-[var(--gds-color-background-secondary)]"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="relative flex-1 px-6 py-5 overflow-y-auto">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="px-6 py-4 border-t border-[var(--gds-color-border-subtle)] bg-[var(--gds-color-background-secondary)]">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
