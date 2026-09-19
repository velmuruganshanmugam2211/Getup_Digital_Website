import React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
  variant?: 'line' | 'pill' | 'enclosed';
  fullWidth?: boolean;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = 'line',
  fullWidth = false,
  className = '',
}) => {
  const containerClasses = {
    line: 'border-b border-[var(--gds-color-border)] gap-6',
    pill: 'p-1.5 bg-[var(--gds-color-background-secondary)] border border-[var(--gds-color-border)] rounded-full gap-1',
    enclosed: 'p-1 bg-[var(--gds-color-background-secondary)] rounded-[var(--gds-radius-lg)] gap-1',
  };

  const getTabClasses = (tab: TabItem) => {
    const isActive = activeTab === tab.value;
    const base = 'inline-flex items-center justify-center font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none';
    const width = fullWidth ? 'flex-1' : '';
    const disabled = tab.disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '';

    if (variant === 'line') {
      return `
        ${base} ${width} ${disabled} pb-3.5 pt-2 px-1 relative -mb-px
        ${
          isActive
            ? 'text-[#008000] border-b-2 border-[#008000]'
            : 'text-[var(--gds-color-text-muted)] hover:text-[var(--gds-color-text-primary)] border-b-2 border-transparent'
        }
      `;
    }

    if (variant === 'pill') {
      return `
        ${base} ${width} ${disabled} px-4 py-1.5 rounded-full
        ${
          isActive
            ? 'bg-white text-[#008000] shadow-xs border border-[var(--gds-color-border)] dark:bg-neutral-800'
            : 'text-[var(--gds-color-text-secondary)] hover:text-[#008000] hover:bg-white/60'
        }
      `;
    }

    // enclosed
    return `
      ${base} ${width} ${disabled} px-4 py-2 rounded-[var(--gds-radius-md)]
      ${
        isActive
          ? 'bg-white text-[var(--gds-color-text-primary)] shadow-xs dark:bg-neutral-800 font-bold'
          : 'text-[var(--gds-color-text-secondary)] hover:text-[var(--gds-color-text-primary)]'
      }
    `;
  };

  return (
    <div
      role="tablist"
      className={`font-gds flex items-center overflow-x-auto no-scrollbar ${containerClasses[variant]} ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          type="button"
          aria-selected={activeTab === tab.value}
          disabled={tab.disabled}
          onClick={() => onChange(tab.value)}
          className={getTabClasses(tab)}
        >
          <span>{tab.label}</span>
          {tab.badge && <span className="ml-2">{tab.badge}</span>}
        </button>
      ))}
    </div>
  );
};
