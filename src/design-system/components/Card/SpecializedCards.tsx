import type { LucideIcon } from 'lucide-react';
import { Card } from './Card';
import { Badge } from '../Badge';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  index?: number;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  badge,
  index,
  className = '',
}) => {
  return (
    <Card isInteractive padding="lg" radius="2xl" className={`flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-[#F6F7F5] dark:bg-neutral-800 text-[#111111] dark:text-white flex items-center justify-center border border-neutral-200/60 dark:border-neutral-700 group-hover:bg-[#008000] group-hover:text-white group-hover:border-[#008000] transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>

          {index !== undefined ? (
            <span className="font-mono text-xs font-bold text-[var(--gds-color-text-muted)] bg-[var(--gds-color-background-secondary)] px-2.5 py-1 rounded-full">
              0{index + 1}
            </span>
          ) : badge ? (
            <Badge variant="green" size="sm">{badge}</Badge>
          ) : null}
        </div>

        <h3 className="text-xl font-extrabold text-[var(--gds-color-text-primary)] group-hover:text-[#008000] transition-colors leading-snug mb-3">
          {title}
        </h3>
        <p className="text-sm text-[var(--gds-color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--gds-color-border-subtle)] flex items-center text-xs font-semibold text-[#008000] group-hover:translate-x-1 transition-transform">
        <span>Explore details</span>
        <span className="ml-1">→</span>
      </div>
    </Card>
  );
};

export interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subtext?: string;
  icon?: LucideIcon;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  isPositive = true,
  subtext,
  icon: Icon,
  className = '',
}) => {
  return (
    <Card padding="md" radius="xl" className={className}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gds-color-text-muted)]">
          {label}
        </span>
        {Icon && (
          <div className="p-2 rounded-xl bg-[var(--gds-color-background-secondary)] text-[#008000]">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="flex items-baseline space-x-3">
        <div className="text-3xl font-extrabold tracking-tight text-[var(--gds-color-text-primary)]">
          {value}
        </div>
        {change && (
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full ${
              isPositive
                ? 'bg-[#008000]/10 text-[#008000]'
                : 'bg-[#EF4444]/10 text-[#EF4444]'
            }`}
          >
            {change}
          </span>
        )}
      </div>

      {subtext && (
        <p className="mt-2 text-xs text-[var(--gds-color-text-muted)]">
          {subtext}
        </p>
      )}
    </Card>
  );
};
