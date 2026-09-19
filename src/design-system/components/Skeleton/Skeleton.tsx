import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circle' | 'rectangle';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangle',
  width,
  height,
  className = '',
  style,
  ...props
}) => {
  const variantStyles = {
    text: 'h-4 w-full rounded-[var(--gds-radius-xs)]',
    circle: 'rounded-full',
    rectangle: 'rounded-[var(--gds-radius-md)]',
  };

  const computedStyle: React.CSSProperties = {
    ...style,
    width: width !== undefined ? width : undefined,
    height: height !== undefined ? height : undefined,
  };

  return (
    <div
      className={`
        animate-pulse bg-neutral-200 dark:bg-neutral-800
        ${variantStyles[variant]}
        ${className}
      `}
      style={computedStyle}
      {...props}
    />
  );
};

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-6 border border-[var(--gds-color-border)] rounded-[var(--gds-radius-2xl)] bg-[var(--gds-color-surface)] space-y-4 ${className}`}>
    <div className="flex items-center space-x-3">
      <Skeleton variant="circle" width={44} height={44} />
      <div className="space-y-2 flex-1">
        <Skeleton variant="text" width="60%" height={14} />
        <Skeleton variant="text" width="40%" height={12} />
      </div>
    </div>
    <Skeleton variant="rectangle" height={120} className="w-full" />
    <div className="space-y-2 pt-2">
      <Skeleton variant="text" width="100%" height={12} />
      <Skeleton variant="text" width="80%" height={12} />
    </div>
  </div>
);
