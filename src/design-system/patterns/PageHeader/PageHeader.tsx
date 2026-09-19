import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Badge } from '../../components/Badge';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  breadcrumbs,
  badge,
  title,
  description,
  actions,
  className = '',
}) => {
  return (
    <div
      className={`font-gds pt-28 pb-12 sm:pt-36 sm:pb-16 bg-[var(--gds-color-background-secondary)] border-b border-[var(--gds-color-border)] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs text-[var(--gds-color-text-muted)] mb-4 select-none">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {crumb.href && !isLast ? (
                    <Link
                      to={crumb.href}
                      className="hover:text-[#008000] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-[var(--gds-color-text-primary)] font-semibold' : ''}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {badge && (
              <div className="mb-3">
                <Badge variant="green" size="sm">
                  {badge}
                </Badge>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--gds-color-text-primary)] tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-base sm:text-lg text-[var(--gds-color-text-secondary)] leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
        </div>
      </div>
    </div>
  );
};
