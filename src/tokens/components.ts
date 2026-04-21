// Component tokens — encode design decisions scoped to a specific component.
// Values reference semantic tokens only; never reach into primitives directly.

import { background, text, border, state, spacing, radius, shadow, fontSize, fontWeight } from './semantic';

export const card = {
  background: background.primary,
  borderRadius: radius.lg,
  padding: spacing[16],
  avatarSize: 52,
  avatarRadius: radius.full,
  avatarBackground: background.tertiary,
  ...shadow.card,
} as const;

export const badge = {
  elite: {
    background: state.highlighted.base,
    text: text.primary,
    fontSize: fontSize[10],
    fontWeight: fontWeight.bold,
    paddingHorizontal: spacing[6],
    paddingVertical: 0,
    borderRadius: radius.sm,
    letterSpacing: 0.5,
    height: 15,
  },
  strong: {
    background: state.success.lighter,
    text: state.success.dark,
    fontSize: fontSize[10],
    fontWeight: fontWeight.bold,
    paddingHorizontal: spacing[6],
    paddingVertical: 0,
    borderRadius: radius.sm,
    letterSpacing: 0.5,
    height: 15,
  },
} as const;

export const statPill = {
  background: state.success.lighter,
  text: state.success.dark,
  borderRadius: radius.full,
  height: 16,
  paddingHorizontal: spacing[6],
  paddingVertical: 0,
  fontSize: fontSize[10],
  windowFontWeight: fontWeight.regular,
  valueFontWeight: fontWeight.semibold,
  gap: spacing[2],
} as const;

export const oddsDisplay = {
  background: background.secondary,
  text: text.primary,
  height: 16,
  fontSize: fontSize[11],
  fontWeight: fontWeight.bold,
  gap: spacing[2],
  paddingHorizontal: spacing[6],
  paddingVertical: 0,
  borderRadius: radius.full,
  iconSize: 9,
} as const;

export const addButton = {
  background: background.secondary,
  size: 16,
  borderWidth: 0,
  borderColor: 'transparent' as const,
  iconColor: text.primary,
  fontSize: 12,
  iconSize: 14,
} as const;

export const positionBadge = {
  background: background.tertiary,
  text: text.secondary,
  fontSize: fontSize[11],
  fontWeight: fontWeight.medium,
  borderRadius: radius.sm,
  paddingHorizontal: spacing[6],
  paddingVertical: spacing[2],
} as const;

export const leagueSelect = {
  background: background.base,
  borderRadius: radius.md,
  height: 36,
  paddingHorizontal: spacing[16],
  paddingVertical: 0,
  itemHeight: 36,
  text: text.primary,
  placeholderText: text.primary,
  ...shadow.dropdown,
  counterPill: {
    background: state.success.base,
    text: text.primary,
    fontSize: fontSize[12],
    fontWeight: fontWeight.bold,
    borderRadius: radius.full,
    minWidth: 22,
    height: 22,
    paddingHorizontal: spacing[4],
  },
  item: {
    selectedBackground: state.success.lighter,
    defaultBackground: 'transparent' as const,
    text: text.primary,
    iconColor: text.secondary,
    fontSize: fontSize[14],
    fontWeight: fontWeight.medium,
    borderRadius: radius.sm,
    paddingHorizontal: spacing[16],
    height: 36,
  },
} as const;

export const tabBar = {
  background: background.primary,
  borderColor: border.subtle,
  activeColor: state.success.dark,
  inactiveColor: text.secondary,
} as const;
