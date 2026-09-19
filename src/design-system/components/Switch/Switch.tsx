import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: React.ReactNode;
  description?: string;
  className?: string;
  id?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  description,
  className = '',
  id,
}) => {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    setInternalChecked(next);
    onChange?.(next);
  };

  const sizeClasses = {
    sm: {
      track: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4',
    },
    md: {
      track: 'w-11 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-5',
    },
    lg: {
      track: 'w-14 h-7',
      thumb: 'w-6 h-6',
      translate: 'translate-x-7',
    },
  };

  return (
    <label
      htmlFor={id}
      className={`font-gds inline-flex items-center gap-3 select-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={toggle}
        className={`
          relative inline-flex shrink-0 p-0.5 rounded-full transition-colors duration-200 ease-in-out cursor-pointer
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008000]/40 focus-visible:ring-offset-2
          ${sizeClasses[size].track}
          ${isChecked ? 'bg-[#008000]' : 'bg-neutral-300 dark:bg-neutral-700'}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block rounded-full bg-white shadow-md transform ring-0 transition duration-200 ease-in-out
            ${sizeClasses[size].thumb}
            ${isChecked ? sizeClasses[size].translate : 'translate-x-0'}
          `}
        />
      </button>

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
};
