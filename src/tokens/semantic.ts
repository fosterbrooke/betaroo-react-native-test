// Semantic tokens — named by purpose, not by appearance.
// All values reference primitives. Swap this file to change the theme.

import { colors, spacing, radius, shadow, fontFamily, fontSize, fontWeight } from './primitives';

// ─── Backgrounds ─────────────────────────────────────────────────────────────
export const background = {
  base: colors.slate[950],       // app/screen background
  primary: colors.slate[900],    // main surface (e.g. modals)
  secondary: colors.slate[800],  // cards, panels
  tertiary: colors.slate[700],   // elevated elements, pressed states
  inverse: colors.gray[0],
} as const;

// ─── Text ─────────────────────────────────────────────────────────────────────
export const text = {
  primary: colors.gray[0],
  secondary: colors.slate[400],
  tertiary: colors.slate[500],
  disabled: colors.slate[600],
  inverse: colors.slate[950],
  accent: colors.green[400],
} as const;

// ─── Borders ──────────────────────────────────────────────────────────────────
export const border = {
  subtle: colors.slate[800],
  default: colors.slate[700],
  strong: colors.slate[600],
  inverse: colors.gray[0],
} as const;

// ─── Icons ────────────────────────────────────────────────────────────────────
export const icon = {
  primary: colors.gray[0],
  secondary: colors.slate[400],
  tertiary: colors.slate[500],
  disabled: colors.slate[600],
} as const;

// ─── State colours ────────────────────────────────────────────────────────────
export const state = {
  success: {
    dark: colors.green[400],
    base: colors.green[600],
    light: colors.alpha.green.alpha24,
    lighter: colors.alpha.green.alpha10,
  },
  error: {
    dark: colors.red[400],
    base: colors.red[600],
    light: colors.alpha.green.alpha24,
  },
  info: {
    dark: colors.blue[400],
    base: colors.blue[600],
  },
  highlighted: {
    dark: colors.pink[400],
    base: colors.pink[600],    // ELITE badge
    light: colors.alpha.pink.alpha10,
  },
  faded: {
    dark: colors.gray[300],
    base: colors.gray[500],
    light: colors.alpha.gray.alpha24,
    lighter: colors.alpha.gray.alpha10,
  },
} as const;

// ─── Brand ────────────────────────────────────────────────────────────────────
export const brand = {
  dark: colors.brand[600],
  base: colors.brand[500],
  light: colors.brand[100],
} as const;

// ─── Re-export layout primitives under a unified namespace ────────────────────
export { spacing, radius, shadow, fontFamily, fontSize, fontWeight };
