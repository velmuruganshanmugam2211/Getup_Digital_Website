/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Border Radius Tokens
 * Balanced curvature preserving Getup brand identity
 */

export const radius = {
  'radius-none': '0px',
  'radius-xs': '4px',    // Mini chips, subtle micro-elements
  'radius-sm': '6px',    // Small tags, tooltips
  'radius-md': '8px',    // Standard buttons, form inputs
  'radius-lg': '12px',   // Cards, nested panels, modals
  'radius-xl': '16px',   // Feature containers, alert banners
  'radius-2xl': '24px',  // Getup signature service/project cards
  'radius-full': '9999px', // Pill badges, circular buttons, avatars
} as const;

export type RadiusToken = keyof typeof radius;
