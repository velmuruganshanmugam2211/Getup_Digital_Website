import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
  onSearch?: (val: string) => void;
  filterChips?: string[];
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
  showShortcut?: boolean;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search projects, services, documentation...',
  value,
  onChange,
  onSearch,
  filterChips,
  activeFilter,
  onFilterChange,
  showShortcut = true,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState('');
  const searchValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(searchValue);
    }
  };

  const clear = () => {
    setInternalValue('');
    onChange?.('');
  };

  return (
    <div className={`font-gds w-full space-y-3 ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-[var(--gds-color-text-muted)] pointer-events-none">
          <Search className="w-4 h-4" />
        </div>

        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="
            w-full h-11 pl-10 pr-20 text-sm bg-[var(--gds-color-surface)] text-[var(--gds-color-text-primary)]
            border border-[var(--gds-color-border)] rounded-[var(--gds-radius-lg)]
            placeholder:text-[var(--gds-color-text-disabled)]
            outline-none transition-all duration-200
            focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20
          "
        />

        <div className="absolute right-3 flex items-center space-x-1.5">
          {searchValue && (
            <button
              type="button"
              onClick={clear}
              className="p-1 text-[var(--gds-color-text-muted)] hover:text-red-500 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {showShortcut && !searchValue && (
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-[var(--gds-color-text-muted)] bg-[var(--gds-color-background-secondary)] border border-[var(--gds-color-border)] rounded shadow-2xs">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {filterChips && filterChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {filterChips.map((chip) => {
            const isActive = activeFilter === chip;
            return (
              <button
                key={chip}
                type="button"
                onClick={() => onFilterChange?.(chip)}
                className={`
                  text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? 'bg-[#008000] text-white shadow-xs font-semibold'
                      : 'bg-[var(--gds-color-background-secondary)] text-[var(--gds-color-text-secondary)] hover:bg-[#008000]/10 hover:text-[#008000]'
                  }
                `}
              >
                {chip}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
