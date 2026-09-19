/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Shadow & Elevation Tokens
 * Subtle, modern elevations with optional brand-tinted ambient glow
 */

export const shadows = {
  'shadow-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'shadow-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
  'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
  'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
  'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
  
  // Custom Getup Product Shadows
  'shadow-card': '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
  'shadow-card-hover': '0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
  'shadow-primary': '0 4px 14px 0 rgba(0, 128, 0, 0.25)',
  'shadow-primary-hover': '0 6px 20px 0 rgba(0, 128, 0, 0.35)',
  'shadow-floating': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  'shadow-modal': '0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
} as const;

export type ShadowToken = keyof typeof shadows;
