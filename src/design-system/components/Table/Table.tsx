import React from 'react';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T, index: number) => string | number;
  emptyMessage?: string;
  isStriped?: boolean;
  isHoverable?: boolean;
  isLoading?: boolean;
  className?: string;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  emptyMessage = 'No data available',
  isStriped = false,
  isHoverable = true,
  isLoading = false,
  className = '',
}: TableProps<T>) {
  return (
    <div className={`font-gds w-full overflow-x-auto rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] shadow-xs ${className}`}>
      <table className="w-full text-left border-collapse text-sm">
        {/* Table Header */}
        <thead className="bg-[var(--gds-color-background-secondary)] border-b border-[var(--gds-color-border)] text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-secondary)]">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={`py-3.5 px-4 font-semibold text-${col.align || 'left'} ${col.className || ''}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-[var(--gds-color-border-subtle)] bg-[var(--gds-color-surface)]">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="py-12 text-center text-xs text-[var(--gds-color-text-muted)]">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#008000] animate-ping" />
                  <span>Loading table records...</span>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="py-12 text-center text-sm text-[var(--gds-color-text-muted)]">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={keyExtractor(row, rowIndex)}
                className={`
                  transition-colors
                  ${isStriped && rowIndex % 2 === 1 ? 'bg-[var(--gds-color-background-secondary)]' : ''}
                  ${isHoverable ? 'hover:bg-[#F0FDF4]/50 dark:hover:bg-[#008000]/5' : ''}
                `}
              >
                {columns.map((col, colIndex) => {
                  const content =
                    typeof col.accessor === 'function'
                      ? col.accessor(row)
                      : (row[col.accessor] as unknown as React.ReactNode);

                  return (
                    <td
                      key={colIndex}
                      className={`py-3.5 px-4 text-xs sm:text-sm text-${col.align || 'left'} text-[var(--gds-color-text-primary)] ${col.className || ''}`}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
