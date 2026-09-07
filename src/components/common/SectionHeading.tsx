import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlightText?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlightText,
  description,
  centered = false,
  className,
  dark = false
}) => {
  return (
    <div className={cn('max-w-3xl mb-12 sm:mb-16', centered && 'mx-auto text-center', className)}>
      {label && (
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#008000] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#008000] inline-block animate-pulse"></span>
          <span>{label}</span>
        </div>
      )}
      <h2 className={cn(
        'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]',
        dark ? 'text-white' : 'text-[#111111]'
      )}>
        {title}{' '}
        {highlightText && (
          <span className="text-[#008000] relative inline-block">
            {highlightText}
          </span>
        )}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-base sm:text-lg leading-relaxed font-normal',
          dark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
