import React from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  description,
  action,
  onDismiss,
  className = '',
}) => {
  const icons = {
    info: Info,
    success: CheckCircle2,
    warning: AlertTriangle,
    error: AlertCircle,
  };

  const variantStyles = {
    info: 'bg-[#F0F9FF] border-[#BAE6FD] text-[#075985] dark:bg-sky-950/30 dark:border-sky-800 dark:text-sky-300',
    success: 'bg-[#F0FDF4] border-[#BBF7D0] text-[#065F46] dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300',
    warning: 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E] dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-300',
    error: 'bg-[#FEF2F2] border-[#FECACA] text-[#991B1B] dark:bg-rose-950/30 dark:border-rose-800 dark:text-rose-300',
  };

  const iconColors = {
    info: 'text-[#0284C7]',
    success: 'text-[#008000]',
    warning: 'text-[#F59E0B]',
    error: 'text-[#EF4444]',
  };

  const Icon = icons[variant];

  return (
    <div
      role="alert"
      className={`
        font-gds flex items-start gap-3 p-4 rounded-[var(--gds-radius-lg)] border
        ${variantStyles[variant]}
        ${className}
      `}
    >
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColors[variant]}`} />

      <div className="flex-1">
        <h5 className="text-sm font-bold leading-tight">{title}</h5>
        {description && (
          <div className="mt-1 text-xs opacity-90 leading-relaxed font-medium">
            {description}
          </div>
        )}
        {action && <div className="mt-3">{action}</div>}
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="p-1 -mr-1 rounded-md opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
