import React from 'react';

export interface ProgressProps {
  value?: number; // 0 to 100
  max?: number;
  isIndeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  isIndeterminate = false,
  size = 'md',
  color = 'primary',
  showLabel = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const colorClasses = {
    primary: 'bg-[#008000]',
    success: 'bg-[#10B981]',
    warning: 'bg-[#F59E0B]',
    error: 'bg-[#EF4444]',
  };

  return (
    <div className={`w-full font-gds ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1 text-xs font-semibold text-[var(--gds-color-text-secondary)]">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}

      <div
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`w-full bg-[var(--gds-color-background-secondary)] border border-[var(--gds-color-border-subtle)] rounded-full overflow-hidden ${sizeClasses[size]}`}
      >
        {isIndeterminate ? (
          <div className={`h-full w-1/3 rounded-full animate-[marquee_1.5s_infinite_linear] ${colorClasses[color]}`} />
        ) : (
          <div
            className={`h-full rounded-full transition-all duration-300 ease-out ${colorClasses[color]}`}
            style={{ width: `${percentage}%` }}
          />
        )}
      </div>
    </div>
  );
};

export interface CircularProgressProps {
  value?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  isIndeterminate?: boolean;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  size = 48,
  strokeWidth = 4,
  color = '#008000',
  isIndeterminate = false,
  className = '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = Math.min(Math.max(value, 0), 100);
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center font-gds ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={isIndeterminate ? 'animate-spin' : 'transform -rotate-90'}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-[var(--gds-color-border)] fill-none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={isIndeterminate ? circumference * 0.75 : strokeDashoffset}
          strokeLinecap="round"
          className="fill-none transition-all duration-300 ease-out"
        />
      </svg>
      {!isIndeterminate && (
        <span className="absolute text-[10px] font-bold text-[var(--gds-color-text-primary)]">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};
