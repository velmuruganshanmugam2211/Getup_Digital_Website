/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Core Color Architecture & Semantic Tokens
 * Brand Primary: Getup Green #008000
 */

export const brandGreen = {
  50: '#F0FDF4',   // Ultra light tint for subtle backgrounds
  100: '#DCFCE7',  // Very light tint for badges and highlights
  200: '#BBF7D0',  // Soft border and light state
  300: '#86EFAC',  // Accent border / secondary accent
  400: '#4ADE80',  // Vibrant mid-tone
  500: '#008000',  // Official Getup Green (Brand core)
  600: '#007300',  // Primary hover state
  700: '#005900',  // Primary active / pressed state
  800: '#004700',  // Deep brand shade
  900: '#003300',  // Very deep green shade
  950: '#001F00',  // Ultra dark green for deep accents
} as const;

export const neutrals = {
  white: '#FFFFFF',
  50: '#F8FAF8',   // Getup subtle warm gray/green tint
  100: '#F0F2F0',  // Divider / pill background
  200: '#E5E7E5',  // Default border
  300: '#CBD5E1',  // Strong border / scrollbar thumb
  400: '#9CA3AF',  // Muted text on dark
  500: '#6B7280',  // Muted body text
  600: '#555555',  // Secondary text
  700: '#333333',  // Dark body text
  800: '#222222',  // Heading secondary
  900: '#111111',  // Primary heading / dark surface
  950: '#0B0F0B',  // Deep dark mode background
  black: '#000000',
} as const;

export const feedbackColors = {
  success: {
    light: '#ECFDF5',
    border: '#A7F3D0',
    text: '#065F46',
    main: '#008000', // Brand green doubles as primary success
    hover: '#006600',
  },
  warning: {
    light: '#FFFBEB',
    border: '#FDE68A',
    text: '#92400E',
    main: '#F59E0B',
    hover: '#D97706',
  },
  error: {
    light: '#FEF2F2',
    border: '#FECACA',
    text: '#991B1B',
    main: '#EF4444',
    hover: '#DC2626',
  },
  info: {
    light: '#F0F9FF',
    border: '#BAE6FD',
    text: '#075985',
    main: '#0284C7',
    hover: '#0369A1',
  },
} as const;

export const semanticTokens = {
  light: {
    // Primary Brand
    'color-primary': brandGreen[500],
    'color-primary-hover': brandGreen[600],
    'color-primary-active': brandGreen[700],
    'color-primary-subtle': brandGreen[50],
    'color-primary-muted': brandGreen[200],

    // Surfaces & Backgrounds
    'color-background': neutrals.white,
    'color-background-secondary': neutrals[50],
    'color-surface': neutrals.white,
    'color-surface-elevated': neutrals.white,
    'color-surface-sunken': neutrals[100],

    // Typography
    'color-text-primary': neutrals[900],
    'color-text-secondary': neutrals[600],
    'color-text-muted': neutrals[500],
    'color-text-disabled': neutrals[400],
    'color-text-inverse': neutrals.white,

    // Borders
    'color-border': neutrals[200],
    'color-border-subtle': neutrals[100],
    'color-border-strong': neutrals[300],

    // Status
    'color-success': feedbackColors.success.main,
    'color-warning': feedbackColors.warning.main,
    'color-error': feedbackColors.error.main,
    'color-info': feedbackColors.info.main,
  },
  dark: {
    // Primary Brand
    'color-primary': '#00A800',
    'color-primary-hover': '#00BF00',
    'color-primary-active': '#008000',
    'color-primary-subtle': 'rgba(0, 128, 0, 0.15)',
    'color-primary-muted': 'rgba(0, 128, 0, 0.35)',

    // Surfaces & Backgrounds
    'color-background': neutrals[950],
    'color-background-secondary': '#111711',
    'color-surface': '#151D15',
    'color-surface-elevated': '#1B241B',
    'color-surface-sunken': '#0B0F0B',

    // Typography
    'color-text-primary': '#F3F4F6',
    'color-text-secondary': '#D1D5DB',
    'color-text-muted': '#9CA3AF',
    'color-text-disabled': '#6B7280',
    'color-text-inverse': neutrals[900],

    // Borders
    'color-border': '#263426',
    'color-border-subtle': '#1B241B',
    'color-border-strong': '#374737',

    // Status
    'color-success': '#10B981',
    'color-warning': '#FBBF24',
    'color-error': '#F87171',
    'color-info': '#38BDF8',
  }
} as const;

export type BrandColor = typeof brandGreen;
export type NeutralColor = typeof neutrals;
export type SemanticColorKey = keyof typeof semanticTokens.light;
