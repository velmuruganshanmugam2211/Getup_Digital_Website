import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, AlertCircle } from 'lucide-react';
import type { SelectProps } from './Select.types';

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  defaultValue = '',
  placeholder = 'Select an option...',
  onChange,
  helperText,
  errorMessage,
  isRequired = false,
  disabled = false,
  state = 'default',
  fullWidth = true,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValue = value !== undefined ? value : internalValue;
  const selectedOption = options.find((opt) => opt.value === selectedValue);

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

  const handleSelect = (val: string) => {
    if (disabled) return;
    setInternalValue(val);
    onChange?.(val);
    setIsOpen(false);
  };

  const stateClasses = {
    default:
      'border-[var(--gds-color-border)] focus-visible:border-[#008000] focus-visible:ring-2 focus-visible:ring-[#008000]/20',
    error: 'border-[#EF4444] text-[#EF4444] focus-visible:ring-2 focus-visible:ring-[#EF4444]/20',
    success: 'border-[#10B981] focus-visible:ring-2 focus-visible:ring-[#10B981]/20',
  };

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

      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full h-11 px-3.5 flex items-center justify-between text-left text-sm
          bg-[var(--gds-color-surface)] text-[var(--gds-color-text-primary)]
          border rounded-[var(--gds-radius-md)] transition-all duration-200 cursor-pointer
          ${stateClasses[currentState]}
          ${disabled ? 'opacity-60 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800' : ''}
          ${className}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? '' : 'text-[var(--gds-color-text-disabled)]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--gds-color-text-muted)] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#008000]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-50 w-full mt-1.5 py-1 bg-[var(--gds-color-surface)] border border-[var(--gds-color-border)] rounded-[var(--gds-radius-md)] shadow-lg max-h-60 overflow-auto focus:outline-none"
        >
          {options.map((opt) => {
            const isSelected = opt.value === selectedValue;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => !opt.disabled && handleSelect(opt.value)}
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
