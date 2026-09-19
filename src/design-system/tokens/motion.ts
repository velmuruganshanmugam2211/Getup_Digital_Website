/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Motion & Animation Tokens
 * Subtle, purposeful micro-interactions
 */

export const duration = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  deliberate: '500ms',
} as const;

export const easing = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const transitions = {
  hover: `all ${duration.normal} ${easing.default}`,
  focus: `box-shadow ${duration.fast} ${easing.out}, border-color ${duration.fast} ${easing.out}`,
  dropdown: `transform ${duration.normal} ${easing.spring}, opacity ${duration.normal} ${easing.default}`,
  modal: `transform ${duration.slow} ${easing.spring}, opacity ${duration.normal} ${easing.default}`,
  drawer: `transform ${duration.slow} ${easing.spring}`,
  card: `transform ${duration.normal} ${easing.spring}, box-shadow ${duration.normal} ${easing.default}, border-color ${duration.normal} ${easing.default}`,
  button: `all ${duration.fast} ${easing.default}`,
  navigation: `all ${duration.normal} ${easing.default}`,
} as const;

export type DurationKey = keyof typeof duration;
export type EasingKey = keyof typeof easing;
export type TransitionKey = keyof typeof transitions;
