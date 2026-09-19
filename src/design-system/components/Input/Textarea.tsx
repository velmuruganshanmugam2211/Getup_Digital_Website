import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { TextareaProps } from './Input.types';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      state = 'default',
      isRequired = false,
      isReadOnly = false,
      disabled = false,
      rows = 4,
      fullWidth = true,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const currentState = errorMessage ? 'error' : state;

    const stateClasses = {
      default:
        'border-[var(--gds-color-border)] focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20 dark:border-neutral-700',
      error:
        'border-[#EF4444] text-[#EF4444] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20',
      success:
        'border-[#10B981] focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20',
    };

    return (
      <div className={`font-gds ${fullWidth ? 'w-full' : 'inline-block'}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-[var(--gds-color-text-primary)] mb-1.5"
          >
            {label}
            {isRequired && <span className="text-[#EF4444] ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <textarea
            ref={ref}
            id={inputId}
            rows={rows}
            disabled={disabled}
            readOnly={isReadOnly}
            className={`
              w-full p-3 text-sm bg-[var(--gds-color-surface)] text-[var(--gds-color-text-primary)]
              placeholder:text-[var(--gds-color-text-disabled)]
              border rounded-[var(--gds-radius-md)] outline-none transition-all duration-200 resize-y
              ${stateClasses[currentState]}
              ${disabled ? 'opacity-60 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800' : ''}
              ${isReadOnly ? 'bg-neutral-50 cursor-default' : ''}
              ${className}
            `}
            {...props}
          />
        </div>

        {errorMessage ? (
          <p className="mt-1 text-xs text-[#EF4444] flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errorMessage}</span>
          </p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-[var(--gds-color-text-muted)]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'GdsTextarea';
