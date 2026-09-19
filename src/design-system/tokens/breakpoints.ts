/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Responsive Breakpoints Tokens
 */

export const breakpoints = {
  xs: '320px',     // Small mobile
  smMobile: '375px', // Standard mobile
  mobile: '390px',   // Modern mobile (iPhone 14/15)
  lgMobile: '430px', // Large mobile (Max/Plus)
  md: '768px',     // Tablet / iPad portrait
  lg: '1024px',    // Desktop small / iPad landscape
  xl: '1280px',    // Standard desktop
  '2xl': '1440px', // Large desktop display
  wide: '1920px',  // Ultra-wide display
} as const;

export type BreakpointKey = keyof typeof breakpoints;
