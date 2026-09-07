import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  arrowType?: 'up-right' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  showArrow = false,
  arrowType = 'right',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#008000] focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#008000] text-white hover:bg-[#006600] active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-[#008000]/20',
    secondary: 'bg-[#111111] text-white hover:bg-[#222222] active:scale-[0.98]',
    outline: 'border border-[#E5E7E5] bg-transparent text-[#222222] hover:border-[#008000] hover:text-[#008000] hover:bg-[#F6F7F5]',
    text: 'p-0 bg-transparent text-[#222222] hover:text-[#008000] link-underline'
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 space-x-1.5',
    md: 'text-sm px-5 py-3 space-x-2',
    lg: 'text-base px-7 py-4 space-x-2.5'
  };

  const ArrowIcon = arrowType === 'up-right' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowIcon className={cn(
          'w-4 h-4 transition-transform duration-300',
          arrowType === 'up-right' ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : 'group-hover:translate-x-1'
        )} />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variantStyles[variant], variant !== 'text' && sizeStyles[size], className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        to={href}
        className={cn(baseStyles, variantStyles[variant], variant !== 'text' && sizeStyles[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], variant !== 'text' && sizeStyles[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};
