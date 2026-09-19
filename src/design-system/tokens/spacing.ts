/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Spacing & Layout Tokens
 * Base Grid: 4px increments
 */

export const spacing = {
  'space-0': '0px',
  'space-1': '4px',       // 0.25rem
  'space-2': '8px',       // 0.5rem
  'space-3': '12px',      // 0.75rem
  'space-4': '16px',      // 1rem
  'space-5': '20px',      // 1.25rem
  'space-6': '24px',      // 1.5rem
  'space-8': '32px',      // 2rem
  'space-10': '40px',     // 2.5rem
  'space-12': '48px',     // 3rem
  'space-14': '56px',     // 3.5rem
  'space-16': '64px',     // 4rem
  'space-20': '80px',     // 5rem
  'space-24': '96px',     // 6rem
  'space-30': '120px',    // 7.5rem
  'space-32': '128px',    // 8rem
  'space-40': '160px',    // 10rem
} as const;

export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  full: '100%',
} as const;

export const sectionSpacing = {
  compact: {
    paddingY: '3rem',       // 48px
    paddingYDesktop: '4rem', // 64px
  },
  default: {
    paddingY: '5rem',       // 80px
    paddingYDesktop: '6.5rem', // 104px
  },
  large: {
    paddingY: '7rem',       // 112px
    paddingYDesktop: '9rem',  // 144px
  },
  hero: {
    paddingTop: '8rem',     // 128px
    paddingBottom: '6rem',  // 96px
  },
} as const;

export type SpacingToken = keyof typeof spacing;
export type ContainerToken = keyof typeof containers;
