import React from 'react';
import {
  FolderOpen,
  Search,
  Database,
  Briefcase,
  Camera,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '../Button';

export type EmptyStateVariant =
  | 'default'
  | 'no-results'
  | 'no-data'
  | 'no-projects'
  | 'no-photos'
  | 'no-users';

export interface EmptyStateProps {
  variant?: EmptyStateVariant;
  icon?: LucideIcon;
  title: string;
  description?: string;
  primaryActionText?: string;
  onPrimaryAction?: () => void;
  secondaryActionText?: string;
  onSecondaryAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  variant = 'default',
  icon: CustomIcon,
  title,
  description,
  primaryActionText,
  onPrimaryAction,
  secondaryActionText,
  onSecondaryAction,
  className = '',
}) => {
  const variantIcons = {
    default: FolderOpen,
    'no-results': Search,
    'no-data': Database,
    'no-projects': Briefcase,
    'no-photos': Camera,
    'no-users': Users,
  };

  const Icon = CustomIcon || variantIcons[variant];

  return (
    <div
      className={`
        font-gds flex flex-col items-center justify-center text-center p-8 sm:p-12
        border-2 border-dashed border-[var(--gds-color-border)] rounded-[var(--gds-radius-2xl)]
        bg-[var(--gds-color-background-secondary)]/50 ${className}
      `}
    >
      <div className="w-16 h-16 rounded-full bg-[#008000]/10 text-[#008000] flex items-center justify-center mb-5 border border-[#008000]/20 shadow-xs">
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-lg font-bold text-[var(--gds-color-text-primary)] mb-1.5">
        {title}
      </h3>

      {description && (
        <p className="text-xs sm:text-sm text-[var(--gds-color-text-muted)] max-w-sm mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {(primaryActionText || secondaryActionText) && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {primaryActionText && (
            <Button variant="primary" size="sm" onClick={onPrimaryAction}>
              {primaryActionText}
            </Button>
          )}
          {secondaryActionText && (
            <Button variant="outline" size="sm" onClick={onSecondaryAction}>
              {secondaryActionText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
