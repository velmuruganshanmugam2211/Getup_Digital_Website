import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, X, AlertCircle } from 'lucide-react';
import type { MultiSelectProps } from './Select.types';

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  value,
  defaultValue = [],
  placeholder = 'Select options...',
  onChange,
  helperText,
  errorMessage,
  isRequired = false,
  disabled = false,
  state = 'default',
  fullWidth = true,
  className = '',
}) => {
  const [internalValues, setInternalValues] = useState<string[]>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValues = value !== undefined ? value : internalValues;
  const currentState = errorMessage ? 'error' : state;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (val: string) => {
    if (disabled) return;
    const newValues = selectedValues.includes(val)
      ? selectedValues.filter((v) => v !== val)
      : [...selectedValues, val];
    setInternalValues(newValues);
    onChange?.(newValues);
  };

  const removeValue = (e: React.MouseEvent, val: string) => {
    e.stopPropagation();
    if (disabled) return;
    const newValues = selectedValues.filter((v) => v !== val);
    setInternalValues(newValues);
    onChange?.(newValues);
  };

  const stateBorderClass =
    currentState === 'error'
      ? 'border-[#EF4444]'
      : currentState === 'success'
      ? 'border-[#10B981]'
      : 'border-[var(--gds-color-border)]';

  return (
    <div
      ref={containerRef}
      className={`font-gds relative ${fullWidth ? 'w-full' : 'inline-block'}`}
    >
      {label && (
        <label className="block text-xs font-semibold text-[var(--gds-color-text-primary)] mb-1.5">
          {label}
          {isRequired && <span className="text-[#EF4444] ml-1">*</span>}
        </label>
      )}

      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          min-h-[44px] px-3 py-1.5 flex flex-wrap items-center justify-between gap-1.5
          bg-[var(--gds-color-surface)] text-[var(--gds-color-text-primary)]
          border ${stateBorderClass} rounded-[var(--gds-radius-md)]
          cursor-pointer transition-all duration-200
          ${isOpen ? 'border-[#008000] ring-2 ring-[#008000]/20' : ''}
          ${disabled ? 'opacity-60 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800' : ''}
          ${className}
        `}
      >
        <div className="flex flex-wrap items-center gap-1.5 flex-1">
          {selectedValues.length === 0 ? (
            <span className="text-sm text-[var(--gds-color-text-disabled)] px-1">
              {placeholder}
            </span>
          ) : (
            selectedValues.map((val) => {
              const opt = options.find((o) => o.value === val);
              return (
                <span
                  key={val}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#008000]/10 text-[#008000] border border-[#008000]/20"
                >
                  <span>{opt?.label || val}</span>
                  <button
                    type="button"
                    onClick={(e) => removeValue(e, val)}
                    className="hover:text-red-500 focus:outline-none"
                    aria-label={`Remove ${opt?.label || val}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              );
            })
          )}
        </div>

        <ChevronDown
          className={`w-4 h-4 text-[var(--gds-color-text-muted)] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#008000]' : ''
          }`}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-1.5 py-1 bg-[var(--gds-color-surface)] border border-[var(--gds-color-border)] rounded-[var(--gds-radius-md)] shadow-lg max-h-60 overflow-auto focus:outline-none">
          {options.map((opt) => {
            const isSelected = selectedValues.includes(opt.value);
            return (
              <li
                key={opt.value}
                onClick={() => !opt.disabled && toggleOption(opt.value)}
                className={`
                  flex items-center justify-between px-3.5 py-2.5 text-sm cursor-pointer transition-colors
                  ${
                    opt.disabled
                      ? 'opacity-40 cursor-not-allowed'
                      : isSelected
                      ? 'bg-[#F0FDF4] text-[#008000] font-semibold dark:bg-[#008000]/15'
                      : 'text-[var(--gds-color-text-primary)] hover:bg-[var(--gds-color-background-secondary)]'
                  }
                `}
              >
                <span>{opt.label}</span>
                {isSelected && <Check className="w-4 h-4 text-[#008000]" />}
              </li>
            );
          })}
        </ul>
      )}

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
};
