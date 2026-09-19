import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'flat' | 'glass';
  isInteractive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      isInteractive = false,
      padding = 'lg',
      radius = '2xl',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        'bg-[var(--gds-color-surface)] border border-[var(--gds-color-border)] shadow-xs',
      elevated:
        'bg-[var(--gds-color-surface)] border border-[var(--gds-color-border)] shadow-md',
      outline:
        'bg-transparent border border-[var(--gds-color-border-strong)]',
      flat:
        'bg-[var(--gds-color-background-secondary)] border-transparent',
      glass:
        'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/30 dark:border-neutral-800/40 shadow-xs',
    };

    const paddingStyles = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-7 sm:p-8',
      xl: 'p-8 sm:p-10',
    };

    const radiusStyles = {
      sm: 'rounded-[var(--gds-radius-sm)]',
      md: 'rounded-[var(--gds-radius-md)]',
      lg: 'rounded-[var(--gds-radius-lg)]',
      xl: 'rounded-[var(--gds-radius-xl)]',
      '2xl': 'rounded-[var(--gds-radius-2xl)]',
    };

    const interactiveStyles = isInteractive
      ? 'transition-all duration-300 hover:border-[#008000]/40 hover:shadow-xl hover:-translate-y-1 cursor-pointer group'
      : '';

    return (
      <div
        ref={ref}
        className={`
          font-gds relative overflow-hidden transition-colors
          ${variantStyles[variant]}
          ${paddingStyles[padding]}
          ${radiusStyles[radius]}
          ${interactiveStyles}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'GdsCard';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`flex flex-col space-y-1.5 mb-5 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <h3
    className={`text-xl font-bold tracking-tight text-[var(--gds-color-text-primary)] group-hover:text-[#008000] transition-colors ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <p className={`text-sm text-[var(--gds-color-text-muted)] leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => <div className={`space-y-4 ${className}`} {...props}>{children}</div>;

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`mt-6 pt-5 border-t border-[var(--gds-color-border-subtle)] flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
