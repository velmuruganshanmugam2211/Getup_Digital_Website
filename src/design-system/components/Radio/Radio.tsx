import React from 'react';

export interface RadioOption {
  label: React.ReactNode;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
  description?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, disabled = false, checked = false, className = '', id, ...props }, ref) => {
    const inputId = id || (typeof label === 'string' ? `radio-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

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
            type="radio"
            checked={checked}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={`
              w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200
              ${
                checked
                  ? 'border-[#008000] bg-white dark:bg-neutral-900 shadow-xs'
                  : 'border-[var(--gds-color-border-strong)] bg-[var(--gds-color-surface)] hover:border-[#008000]'
              }
              peer-focus-visible:ring-2 peer-focus-visible:ring-[#008000]/30 peer-focus-visible:ring-offset-1
            `}
          >
            {checked && <div className="w-2.5 h-2.5 rounded-full bg-[#008000]" />}
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

Radio.displayName = 'GdsRadio';

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  defaultValue,
  onChange,
  label,
  direction = 'vertical',
  disabled = false,
  className = '',
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  const selectedValue = value !== undefined ? value : internalValue;

  const handleChange = (val: string) => {
    if (disabled) return;
    setInternalValue(val);
    onChange?.(val);
  };

  return (
    <div className={`font-gds ${className}`} role="radiogroup" aria-label={label}>
      {label && (
        <span className="block text-xs font-semibold text-[var(--gds-color-text-primary)] mb-2">
          {label}
        </span>
      )}
      <div
        className={`flex ${
          direction === 'vertical' ? 'flex-col space-y-3' : 'flex-wrap gap-4'
        }`}
      >
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name={name}
            value={opt.value}
            checked={selectedValue === opt.value}
            disabled={disabled || opt.disabled}
            onChange={() => handleChange(opt.value)}
            label={opt.label}
            description={opt.description}
          />
        ))}
      </div>
    </div>
  );
};
