/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Typography Tokens
 * Primary Font: Montserrat
 */

export const fontFamily = {
  sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'].join(', '),
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'].join(', '),
} as const;

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const typography = {
  // Display Sizes (Hero, High-Impact Visuals)
  display: {
    xl: {
      fontSize: '4rem',       // 64px
      lineHeight: '1.1',
      fontWeight: fontWeight.extrabold,
      letterSpacing: '-0.03em',
    },
    lg: {
      fontSize: '3.25rem',    // 52px
      lineHeight: '1.15',
      fontWeight: fontWeight.extrabold,
      letterSpacing: '-0.025em',
    },
    md: {
      fontSize: '2.75rem',    // 44px
      lineHeight: '1.2',
      fontWeight: fontWeight.bold,
      letterSpacing: '-0.02em',
    },
  },

  // Heading Sizes (Sections, Page Headers, Card Titles)
  heading: {
    xl: {
      fontSize: '2.25rem',    // 36px
      lineHeight: '1.25',
      fontWeight: fontWeight.bold,
      letterSpacing: '-0.02em',
    },
    lg: {
      fontSize: '1.875rem',   // 30px
      lineHeight: '1.3',
      fontWeight: fontWeight.bold,
      letterSpacing: '-0.015em',
    },
    md: {
      fontSize: '1.5rem',     // 24px
      lineHeight: '1.35',
      fontWeight: fontWeight.semibold,
      letterSpacing: '-0.01em',
    },
    sm: {
      fontSize: '1.25rem',    // 20px
      lineHeight: '1.4',
      fontWeight: fontWeight.semibold,
      letterSpacing: '-0.005em',
    },
  },

  // Body Copy
  body: {
    lg: {
      fontSize: '1.125rem',   // 18px
      lineHeight: '1.6',
      fontWeight: fontWeight.regular,
      letterSpacing: '0em',
    },
    md: {
      fontSize: '1rem',       // 16px
      lineHeight: '1.55',
      fontWeight: fontWeight.regular,
      letterSpacing: '0em',
    },
    sm: {
      fontSize: '0.875rem',   // 14px
      lineHeight: '1.5',
      fontWeight: fontWeight.regular,
      letterSpacing: '0em',
    },
  },

  // Labels & UI controls
  label: {
    lg: {
      fontSize: '1rem',       // 16px
      lineHeight: '1.4',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0em',
    },
    md: {
      fontSize: '0.875rem',   // 14px
      lineHeight: '1.4',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0em',
    },
    sm: {
      fontSize: '0.75rem',    // 12px
      lineHeight: '1.35',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0.01em',
    },
  },

  // Captions & Microcopy
  caption: {
    fontSize: '0.75rem',      // 12px
    lineHeight: '1.4',
    fontWeight: fontWeight.regular,
    letterSpacing: '0.01em',
  },

  // Overlines & Eyebrows (Category badges, small headers)
  overline: {
    fontSize: '0.6875rem',    // 11px
    lineHeight: '1.3',
    fontWeight: fontWeight.bold,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
  },
} as const;

export type TypographyScale = typeof typography;
