import React from 'react';

export type BadgeVariant =
  | 'green'
  | 'neutral'
  | 'dark'
  | 'outline'
  | 'subtle'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
  dot?: boolean;
  pulseDot?: boolean;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'green',
  size = 'md',
  pill = true,
  dot = false,
  pulseDot = false,
  children,
  className = '',
  ...props
}) => {
  const variantStyles = {
    green:
      'bg-[#008000]/10 text-[#008000] border border-[#008000]/25 dark:bg-[#008000]/20 dark:text-[#4ADE80]',
    neutral:
      'bg-[#F6F7F5] text-[#333333] border border-[#E5E7E5] dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700',
    dark:
      'bg-[#111111] text-white border border-[#222222] dark:bg-black dark:border-neutral-800',
    outline:
      'bg-transparent text-[var(--gds-color-text-primary)] border border-[var(--gds-color-border-strong)]',
    subtle:
      'bg-[var(--gds-color-background-secondary)] text-[var(--gds-color-text-secondary)] border-transparent',
    success:
      'bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
    warning:
      'bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A] dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    error:
      'bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA] dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
    info:
      'bg-[#F0F9FF] text-[#075985] border border-[#BAE6FD] dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
  };

  const dotColors = {
    green: 'bg-[#008000]',
    neutral: 'bg-[#666666]',
    dark: 'bg-white',
    outline: 'bg-[#008000]',
    subtle: 'bg-[#008000]',
    success: 'bg-[#10B981]',
    warning: 'bg-[#F59E0B]',
    error: 'bg-[#EF4444]',
    info: 'bg-[#0284C7]',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2',
  };

  return (
    <span
      className={`
        font-gds inline-flex items-center font-semibold tracking-wide select-none
        ${pill ? 'rounded-full' : 'rounded-[var(--gds-radius-sm)]'}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span className="relative flex items-center justify-center w-2 h-2">
          {pulseDot && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
            />
          )}
          <span className={`relative inline-flex rounded-full w-1.5 h-1.5 ${dotColors[variant]}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
