import type React from 'react';
import type { LucideIcon } from 'lucide-react';

export type InputState = 'default' | 'error' | 'success';

export interface BaseInputProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  state?: InputState;
  isRequired?: boolean;
  isReadOnly?: boolean;
  disabled?: boolean;
  iconStart?: LucideIcon;
  iconEnd?: LucideIcon;
  onClear?: () => void;
  fullWidth?: boolean;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    BaseInputProps {
  inputSize?: 'sm' | 'md' | 'lg';
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseInputProps {
  rows?: number;
}
