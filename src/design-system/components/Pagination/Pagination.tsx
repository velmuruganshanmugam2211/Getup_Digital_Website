import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav
      className={`font-gds flex items-center justify-center space-x-1.5 select-none ${className}`}
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-9 h-9 flex items-center justify-center rounded-[var(--gds-radius-md)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] text-[var(--gds-color-text-primary)] hover:border-[#008000] hover:text-[#008000] disabled:opacity-40 disabled:pointer-events-none transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPageNumbers().map((p, idx) => {
        if (p === '...') {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="w-9 h-9 flex items-center justify-center text-xs text-[var(--gds-color-text-muted)]"
            >
              ...
            </span>
          );
        }

        const pageNum = p as number;
        const isCurrent = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            className={`
              w-9 h-9 flex items-center justify-center rounded-[var(--gds-radius-md)] text-xs font-semibold transition-all
              ${
                isCurrent
                  ? 'bg-[#008000] text-white shadow-xs font-bold'
                  : 'bg-[var(--gds-color-surface)] border border-[var(--gds-color-border)] text-[var(--gds-color-text-primary)] hover:border-[#008000] hover:text-[#008000]'
              }
            `}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-9 h-9 flex items-center justify-center rounded-[var(--gds-radius-md)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] text-[var(--gds-color-text-primary)] hover:border-[#008000] hover:text-[#008000] disabled:opacity-40 disabled:pointer-events-none transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
