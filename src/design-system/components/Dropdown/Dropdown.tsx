import React, { useState, useRef, useEffect } from 'react';

export interface DropdownItemProps {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  shortcut?: string;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: (DropdownItemProps | 'divider')[];
  align?: 'left' | 'right';
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  align = 'right',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block font-gds ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`
            absolute z-50 mt-2 min-w-[200px] py-1 bg-[var(--gds-color-surface)]
            border border-[var(--gds-color-border)] rounded-[var(--gds-radius-lg)]
            shadow-xl animate-in fade-in zoom-in-95 duration-150
            ${align === 'right' ? 'right-0' : 'left-0'}
          `}
        >
          {items.map((item, index) => {
            if (item === 'divider') {
              return (
                <div
                  key={index}
                  className="my-1 border-t border-[var(--gds-color-border-subtle)]"
                />
              );
            }

            const { label, icon: Icon, onClick, disabled, destructive, shortcut } = item;

            return (
              <button
                key={index}
                type="button"
                disabled={disabled}
                onClick={() => {
                  if (disabled) return;
                  onClick?.();
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left transition-colors
                  ${
                    disabled
                      ? 'opacity-40 cursor-not-allowed'
                      : destructive
                      ? 'text-[#EF4444] hover:bg-rose-50 dark:hover:bg-rose-950/20'
                      : 'text-[var(--gds-color-text-primary)] hover:bg-[var(--gds-color-background-secondary)] hover:text-[#008000]'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4 shrink-0" />}
                  <span>{label}</span>
                </div>
                {shortcut && (
                  <span className="text-[10px] text-[var(--gds-color-text-disabled)] font-mono">
                    {shortcut}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
