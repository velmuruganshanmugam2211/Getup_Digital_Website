import type { LucideIcon } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'text'
  | 'danger'
  | 'success';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  iconStart?: LucideIcon;
  iconEnd?: LucideIcon;
  showArrow?: boolean;
  arrowType?: 'right' | 'up-right';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}
