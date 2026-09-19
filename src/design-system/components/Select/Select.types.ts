export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  disabled?: boolean;
  state?: 'default' | 'error' | 'success';
  fullWidth?: boolean;
  className?: string;
}

export interface MultiSelectProps {
  label?: string;
  options: SelectOption[];
  value?: string[];
  defaultValue?: string[];
  placeholder?: string;
  onChange?: (values: string[]) => void;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  disabled?: boolean;
  state?: 'default' | 'error' | 'success';
  fullWidth?: boolean;
  className?: string;
}
