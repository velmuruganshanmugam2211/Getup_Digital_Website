import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Loader2 } from 'lucide-react';
import type { ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      fullWidth = false,
      iconStart: IconStart,
      iconEnd: IconEnd,
      showArrow = false,
      arrowType = 'right',
      href,
      isExternal = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    // Base button styles using GDS design tokens
    const baseClasses = [
      'inline-flex items-center justify-center font-medium font-gds transition-all duration-200 select-none cursor-pointer',
      'rounded-[var(--gds-radius-md)] active:scale-[0.98]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gds-color-primary)] focus-visible:ring-offset-2',
      fullWidth ? 'w-full' : '',
      isDisabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : '',
    ].filter(Boolean).join(' ');

    // Variant mappings
    const variantClasses = {
      primary:
        'bg-[#008000] text-white hover:bg-[#007300] active:bg-[#005900] shadow-[0_2px_8px_rgba(0,128,0,0.25)] hover:shadow-[0_4px_14px_rgba(0,128,0,0.35)]',
      secondary:
        'bg-[#111111] text-white hover:bg-[#222222] active:bg-black dark:bg-neutral-800 dark:hover:bg-neutral-700 shadow-sm',
      outline:
        'border border-[var(--gds-color-border)] bg-transparent text-[var(--gds-color-text-primary)] hover:border-[#008000] hover:text-[#008000] hover:bg-[#F0FDF4] dark:hover:bg-[#008000]/10',
      ghost:
        'bg-transparent text-[var(--gds-color-text-primary)] hover:bg-[var(--gds-color-background-secondary)] hover:text-[#008000]',
      text:
        'bg-transparent text-[var(--gds-color-text-primary)] hover:text-[#008000] p-0 underline-offset-4 hover:underline active:scale-100',
      danger:
        'bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C] shadow-sm',
      success:
        'bg-[#10B981] text-white hover:bg-[#059669] active:bg-[#047857] shadow-sm',
    };

    // Size mappings
    const sizeClasses = {
      xs: 'text-xs px-2.5 py-1 gap-1.5 min-h-[28px]',
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[34px]',
      md: 'text-sm px-5 py-2.5 gap-2 min-h-[42px]',
      lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[48px]',
      xl: 'text-lg px-8 py-4 gap-3 min-h-[56px]',
    };

    // Arrow icon selection
    const ArrowIcon = arrowType === 'up-right' ? ArrowUpRight : ArrowRight;

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : IconStart ? (
          <IconStart className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
        ) : null}

        <span className="truncate">{children}</span>

        {!isLoading && IconEnd && (
          <IconEnd className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
        )}

        {!isLoading && showArrow && (
          <ArrowIcon
            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
              arrowType === 'up-right'
                ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                : 'group-hover:translate-x-1'
            }`}
          />
        )}
      </>
    );

    const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${
      variant !== 'text' ? sizeClasses[size] : ''
    } group ${className}`.trim();

    if (href) {
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={href}
          className={combinedClassName}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={props.type || 'button'}
        disabled={isDisabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'GdsButton';
