import React, { useState } from 'react';
import { Eye, EyeOff, XCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import type { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      state = 'default',
      isRequired = false,
      isReadOnly = false,
      disabled = false,
      inputSize = 'md',
      type = 'text',
      iconStart: IconStart,
      iconEnd: IconEnd,
      onClear,
      fullWidth = true,
      className = '',
      id,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
    const isPassword = type === 'password';
    const computedType = isPassword ? (showPassword ? 'text' : 'password') : type;

    // Derived visual state
    const currentState = errorMessage ? 'error' : state;

    const sizeClasses = {
      sm: 'h-9 px-3 text-xs',
      md: 'h-11 px-3.5 text-sm',
      lg: 'h-13 px-4 text-base',
    };

    const stateClasses = {
      default:
        'border-[var(--gds-color-border)] focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20 dark:border-neutral-700 dark:focus:border-[#008000]',
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

        <div className="relative flex items-center">
          {IconStart && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-[var(--gds-color-text-muted)]">
              <IconStart className="w-4 h-4" />
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={computedType}
            disabled={disabled}
            readOnly={isReadOnly}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            className={`
              w-full bg-[var(--gds-color-surface)] text-[var(--gds-color-text-primary)]
              placeholder:text-[var(--gds-color-text-disabled)]
              border rounded-[var(--gds-radius-md)] outline-none transition-all duration-200
              ${sizeClasses[inputSize]}
              ${stateClasses[currentState]}
              ${IconStart ? 'pl-10' : ''}
              ${IconEnd || isPassword || onClear || currentState !== 'default' ? 'pr-10' : ''}
              ${disabled ? 'opacity-60 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800' : ''}
              ${isReadOnly ? 'bg-neutral-50 cursor-default' : ''}
              ${className}
            `}
            {...props}
          />

          {/* Suffix / Action Icons */}
          <div className="absolute right-3 flex items-center space-x-1.5 text-[var(--gds-color-text-muted)]">
            {isPassword && !disabled && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1 hover:text-[var(--gds-color-text-primary)] focus:outline-none"
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            )}

            {onClear && value && !disabled && (
              <button
                type="button"
                onClick={onClear}
                className="p-1 hover:text-[#EF4444] focus:outline-none"
                tabIndex={-1}
                aria-label="Clear input"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}

            {currentState === 'error' && !isPassword && (
              <AlertCircle className="w-4 h-4 text-[#EF4444]" />
            )}

            {currentState === 'success' && !isPassword && (
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            )}

            {IconEnd && !isPassword && currentState === 'default' && (
              <IconEnd className="w-4 h-4" />
            )}
          </div>
        </div>

        {/* Feedback / Helper Text */}
        {errorMessage ? (
          <p className="mt-1 text-xs text-[#EF4444] flex items-center gap-1 font-medium">
            <span>{errorMessage}</span>
          </p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-[var(--gds-color-text-muted)]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'GdsInput';
