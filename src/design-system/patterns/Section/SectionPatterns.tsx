import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlightText,
  description,
  centered = false,
  dark = false,
  className = '',
}) => {
  return (
    <div
      className={`font-gds max-w-3xl mb-12 sm:mb-16 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#008000] mb-3 bg-[#008000]/10 px-3 py-1 rounded-full border border-[#008000]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#008000] inline-block animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.18] ${
          dark ? 'text-white' : 'text-[var(--gds-color-text-primary)]'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="text-[#008000] relative inline-block">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-neutral-400' : 'text-[var(--gds-color-text-secondary)]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'compact' | 'default' | 'large';
  background?: 'default' | 'secondary' | 'dark';
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  spacing = 'default',
  background = 'default',
  children,
  className = '',
  ...props
}) => {
  const spacingClasses = {
    compact: 'py-12 sm:py-16',
    default: 'py-20 sm:py-28',
    large: 'py-28 sm:py-36',
  };

  const bgClasses = {
    default: 'bg-[var(--gds-color-background)]',
    secondary: 'bg-[var(--gds-color-background-secondary)] border-y border-[var(--gds-color-border)]',
    dark: 'bg-[#0B0F0B] text-white',
  };

  return (
    <section
      className={`font-gds relative overflow-hidden ${spacingClasses[spacing]} ${bgClasses[background]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SectionFaqProps {
  items: FaqItem[];
  className?: string;
}

export const SectionFaq: React.FC<SectionFaqProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`font-gds max-w-3xl mx-auto divide-y divide-[var(--gds-color-border)] ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-5">
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left font-bold text-base sm:text-lg text-[var(--gds-color-text-primary)] hover:text-[#008000] transition-colors"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[var(--gds-color-text-muted)] transition-transform duration-200 shrink-0 ml-4 ${
                  isOpen ? 'rotate-180 text-[#008000]' : ''
                }`}
              />
            </button>
            {isOpen && (
              <p className="mt-3 text-sm sm:text-base text-[var(--gds-color-text-secondary)] leading-relaxed animate-in fade-in duration-200">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
