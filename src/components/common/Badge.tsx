import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'neutral' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className
}) => {
  const variants = {
    green: 'bg-[#008000]/10 text-[#008000] border-[#008000]/20',
    neutral: 'bg-[#F6F7F5] text-[#222222] border-[#E5E7E5]',
    dark: 'bg-[#111111] text-white border-[#222222]'
  };

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full transition-colors',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
