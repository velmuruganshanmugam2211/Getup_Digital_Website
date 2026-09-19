import React from 'react';
import { Check, Minus } from 'lucide-react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
  description?: string;
  isIndeterminate?: boolean;
  checkboxSize?: 'sm' | 'md' | 'lg';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      isIndeterminate = false,
      checkboxSize = 'md',
      disabled = false,
      checked = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (typeof label === 'string' ? `cb-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    const sizeBoxClasses = {
      sm: 'w-4 h-4 rounded-[var(--gds-radius-xs)]',
      md: 'w-5 h-5 rounded-[var(--gds-radius-sm)]',
      lg: 'w-6 h-6 rounded-[var(--gds-radius-md)]',
    };

    const sizeIconClasses = {
      sm: 'w-3 h-3',
      md: 'w-3.5 h-3.5',
      lg: 'w-4 h-4',
    };

    const isCheckedOrIndeterminate = checked || isIndeterminate;

    return (
      <label
        htmlFor={inputId}
        className={`font-gds inline-flex items-start gap-3 select-none ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } ${className}`}
      >
        <div className="relative flex items-center mt-0.5">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={`
              flex items-center justify-center border transition-all duration-200
              ${sizeBoxClasses[checkboxSize]}
              ${
                isCheckedOrIndeterminate
                  ? 'bg-[#008000] border-[#008000] text-white shadow-xs'
                  : 'bg-[var(--gds-color-surface)] border-[var(--gds-color-border-strong)] hover:border-[#008000]'
              }
              peer-focus-visible:ring-2 peer-focus-visible:ring-[#008000]/30 peer-focus-visible:ring-offset-1
            `}
          >
            {isIndeterminate ? (
              <Minus className={`${sizeIconClasses[checkboxSize]} stroke-[3]`} />
            ) : checked ? (
              <Check className={`${sizeIconClasses[checkboxSize]} stroke-[3]`} />
            ) : null}
          </div>
        </div>

        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className="text-sm font-medium text-[var(--gds-color-text-primary)]">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-[var(--gds-color-text-muted)] mt-0.5">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'GdsCheckbox';
