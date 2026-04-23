import { StyleSheet } from 'react-native';

// ============ COLORS ============
// TODO: clean this up later
export const colors = {
  brand: {
    950: '#242812',
    900: '#485022',
    800: '#6c7a30',
    700: '#91a43d',
    600: '#b8d148',
    500: '#dfff51',
    400: '#e6ff6b',
    300: '#ecff87',
    200: '#f2ffa3',
    100: '#f7ffc0',
    50: '#fbffde',
  },
  gray: {
    950: '#171717',
    900: '#1c1c1c',
    800: '#262626',
    700: '#333333',
    600: '#5c5c5c',
    500: '#7b7b7b',
    400: '#a3a3a3',
    300: '#d1d1d1',
    200: '#ebebeb',
    100: '#f5f5f5',
    50: '#f7f7f7',
    0: '#ffffff',
  },
  slate: {
    950: '#0e121b',
    900: '#181b25',
    800: '#222530',
    700: '#2b303b',
    600: '#525866',
    500: '#717784',
    400: '#99a0ae',
    300: '#cacfd8',
    200: '#eaecf0',
    100: '#f2f5f8',
    50: '#f5f7fa',
    0: '#ffffff',
  },
  blue: {
    950: '#122368', 900: '#182f8b', 800: '#1f3bad', 700: '#2547d0',
    600: '#3559e9', 500: '#335cff', 400: '#4d82ff', 300: '#97baff',
    200: '#c0d5ff', 100: '#d5e2ff', 50: '#ebf1ff',
  },
  orange: {
    950: '#71330a', 900: '#96440d', 800: '#b75310', 700: '#ce5e12',
    600: '#e16614', 500: '#fa7319', 400: '#ffa468', 300: '#ffc197',
    200: '#ffd9c0', 100: '#ffe6d5', 50: '#fff3eb',
  },
  red: {
    950: '#681219', 900: '#8b1822', 800: '#ad1f2b', 700: '#d02533',
    600: '#e93544', 500: '#fb3748', 400: '#ff6875', 300: '#ff97a0',
    200: '#ffc0c5', 100: '#ffd5d8', 50: '#ffebec',
  },
  green: {
    950: '#0b4627', 900: '#16643b', 800: '#1a7544', 700: '#178c4e',
    600: '#1daf61', 500: '#1fc16b', 400: '#3ee089', 300: '#84ebb4',
    200: '#c2f5da', 100: '#d6f5e8', 50: '#e3f7ec',
  },
  yellow: {
    950: '#624c18', 900: '#86661d', 800: '#a78025', 700: '#c99a2c',
    600: '#e6a819', 500: '#f6b51e', 400: '#ffd268', 300: '#ffe097',
    200: '#ffecc0', 100: '#ffefcc', 50: '#fffaeb',
  },
  purple: {
    950: '#351a75', 900: '#3d1d86', 800: '#4c25a7', 700: '#5b2cc9',
    600: '#693ee0', 500: '#7d52f4', 400: '#8c71f6', 300: '#a897ff',
    200: '#cac0ff', 100: '#dcd5ff', 50: '#efebff',
  },
  sky: {
    950: '#124b68', 900: '#18658b', 800: '#1f7ead', 700: '#2597d0',
    600: '#35ade9', 500: '#47c2ff', 400: '#68cdff', 300: '#97dcff',
    200: '#c0eaff', 100: '#d5f1ff', 50: '#ebf8ff',
  },
  pink: {
    950: '#68123d', 900: '#8b1852', 800: '#ad1f66', 700: '#d0257a',
    600: '#e9358f', 500: '#fb4ba3', 400: '#ff68b3', 300: '#ff97cb',
    200: '#ffc0df', 100: '#ffd5ea', 50: '#ffebf4',
  },
  teal: {
    950: '#0b463e', 900: '#16645a', 800: '#1a7569', 700: '#178c7d',
    600: '#1daf9c', 500: '#22d3bb', 400: '#3fdec9', 300: '#84ebdd',
    200: '#c2f5ee', 100: '#d0fbf5', 50: '#e4fbf8',
  },
  alpha: {
    brand: { alpha24: '#dfff513d', alpha16: '#dfff5129', alpha10: '#dfff511a' },
    gray: { alpha24: '#a3a3a33d', alpha16: '#a3a3a329', alpha10: '#a3a3a31a', alpha0: '#a3a3a300' },
    blue: { alpha24: '#476cff3d', alpha16: '#476cff29', alpha10: '#476cff1a' },
    orange: { alpha24: '#fa73193d', alpha16: '#fa731929', alpha10: '#fa73191a' },
    red: { alpha24: '#fb37483d', alpha16: '#fb374829', alpha10: '#fb37481a' },
    green: { alpha24: '#1fc16b3d', alpha16: '#1fc16b29', alpha10: '#1fc16b1a' },
    yellow: { alpha24: '#fbc64b3d', alpha16: '#fbc64b29', alpha10: '#fbc64b1a' },
    purple: { alpha24: '#784def3d', alpha16: '#784def29', alpha10: '#784def1a' },
    sky: { alpha24: '#47c2ff3d', alpha16: '#47c2ff29', alpha10: '#47c2ff1a' },
    pink: { alpha24: '#fb4ba33d', alpha16: '#fb4ba329', alpha10: '#fb4ba31a' },
    teal: { alpha24: '#22d3bb3d', alpha16: '#22d3bb29', alpha10: '#22d3bb1a' },
    white: { alpha24: '#ffffff3d', alpha16: '#ffffff29', alpha10: '#ffffff1a', alpha0: '#ffffff00' },
    black: { alpha24: '#1717173d', alpha16: '#17171729', alpha10: '#1717171a' },
    shadow: {
      brand: { alpha8: '#dfff5114', alpha6: '#dfff510f', alpha4: '#dfff510a', alpha2: '#dfff5105', alpha0: '#dfff5100' },
      gray: { alpha8: '#17171714', alpha6: '#1717170f', alpha4: '#1717170a', alpha2: '#17171705', alpha0: '#17171700' },
      blue: { alpha8: '#12236814', alpha6: '#1223680f', alpha4: '#1223680a', alpha2: '#12236805', alpha0: '#12236800' },
      purple: { alpha8: '#351a7514', alpha6: '#351a750f', alpha4: '#351a750a', alpha2: '#351a7505', alpha0: '#351a7500' },
      orange: { alpha8: '#71330a14', alpha6: '#71330a0f', alpha4: '#71330a0a', alpha2: '#71330a05', alpha0: '#71330a00' },
      green: { alpha8: '#0b462714', alpha6: '#0b46270f', alpha4: '#0b46270a', alpha2: '#0b462705', alpha0: '#0b462700' },
    },
  },
};

// ============ SEMANTIC / THEME ============
export const bg_base = '#171717';
export const bg_primary = '#1c1c1c';
export const bg_secondary = '#262626';
export const bgDark = '#202020';
export const bg_tertiary = colors.gray[700];
export const backgroundWeak = colors.gray[600];
export const background_weaker = colors.gray[400];
export const BG_OTHER = colors.gray[950];

export const textPrimary = '#ffffff';
export const text_secondary = colors.gray[300];
export const TEXT_TERTIARY = colors.gray[400];
/** Content / text — tertiary (e.g. matchup away code). */
export const content_tertiary = TEXT_TERTIARY;
export const textLight = '#7b7b7b';
export const text_disabled = colors.gray[600];
/** Content / text — disabled (e.g. matchup rest + time). */
export const content_disabled = text_disabled;
export const textOther = colors.gray[950];

export const border_base = colors.gray[950];
export const borderPrimary = '#262626';
export const border_secondary = colors.gray[600];
export const BORDER_TERTIARY = colors.gray[500];
export const borderDark = '#202020';
export const border_inverse = '#ffffff';

export const iconPrimary = '#ffffff';
export const icon_secondary = '#a3a3a3';
export const iconTertiary = colors.gray[500];
export const icon_disabled = colors.gray[600];
export const ICON_OTHER = '#171717';

// states - mixed referencing style on purpose
export const state_faded_dark = colors.gray[300];
export const stateFadedBase = '#7b7b7b';
export const STATE_FADED_LIGHT = colors.alpha.gray.alpha24;
export const state_faded_lighter = colors.alpha.gray.alpha10;

export const stateInfoDark = colors.blue[400];
export const state_info_base = '#335cff';
export const stateInfoLight = colors.alpha.blue.alpha24;

export const stateWarningDark = '#ffa468';
export const state_warning_base = colors.orange[600];

export const stateErrorDark = colors.red[400];
export const state_error_base = '#e93544';
export const stateErrorLight = colors.alpha.red.alpha16;

export const state_success_dark = colors.green[400];
export const stateSuccessBase = colors.green[600];
export const STATE_SUCCESS_LIGHT = '#1fc16b29';
export const state_success_lighter = colors.alpha.green.alpha10;

export const stateAwayDark = colors.yellow[400];
export const state_away_base = colors.yellow[600];
export const stateAwayLight = colors.alpha.yellow.alpha16;

export const stateFeatureDark = colors.purple[400];
export const state_feature_base = colors.purple[500];

export const stateVerifiedDark = colors.sky[400];
export const state_verified_base = colors.sky[600];

export const stateHighlightedDark = colors.pink[400];
export const STATE_HIGHLIGHTED_BASE = '#e9358f';

export const stateStableDark = colors.teal[400];
export const state_stable_base = colors.teal[600];

// theme brand
export const themeBrandDarker = colors.brand[800];
export const theme_brand_dark = colors.brand[600];
export const THEME_BRAND_BASE = '#dfff51';
export const theme_brand_light = colors.brand[100];
export const themeBrandLighter = colors.brand[50];

// primary (duplicates brand basically)
export const primaryDarkest = '#6c7a30';
export const primary_dark = colors.brand[600];
export const primaryBase = colors.brand[500];
export const PRIMARY_LIGHT = colors.brand[100];
export const primary_lighter = '#fbffde';

// ============ SPACING ============
export const SPACING_0 = 0;
export const spacing_2 = 2;
export const spacing4 = 4;
export const SPACING_6 = 6;
export const spacing_8 = 8;
export const spacing10 = 10;
export const SPACING_12 = 12;
export const spacing_14 = 14;
export const spacing16 = 16;
export const SPACING_24 = 24;
export const spacing_32 = 32;
export const spacing40 = 40;
export const SPACING_48 = 48;

/** Odds pill and add control in card footers; matches `monoCompact` line (16) + vertical `spacing4` padding. */
export const footer_odds_control_height = spacing4 + spacing4 + spacing16;

// ============ RADIUS ============
export const radius0 = 0;
export const radius_2 = 2;
export const RADIUS_4 = 4;
export const radius6 = 6;
export const radius_8 = 8;
export const RADIUS_10 = 10;
export const radius12 = 12;
export const radius_16 = 16;
export const RADIUS_20 = 20;
export const radius24 = 24;
export const radius_28 = 28;
export const RADIUS_FULL = 999;

// ============ SHADOWS ============
export const shadow_xsmall = {
  shadowColor: '#0A0D14',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.03,
  shadowRadius: 2,
  elevation: 1,
};

export const shadowMedium = {
  shadowColor: '#0E121B',
  shadowOffset: { width: 0, height: 16 },
  shadowOpacity: 0.1,
  shadowRadius: 32,
  elevation: 4,
};

export const CUSTOM_SHADOW_XSMALL = {
  shadowColor: '#333333',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.06,
  shadowRadius: 8,
  elevation: 2,
};

export const custom_shadow_small = {
  shadowColor: '#333333',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.08,
  shadowRadius: 5,
  elevation: 3,
};

export const customShadowMedium = {
  shadowColor: '#333333',
  shadowOffset: { width: 0, height: 24 },
  shadowOpacity: 0.04,
  shadowRadius: 24,
  elevation: 4,
};

export const CUSTOM_SHADOW_LARGE = {
  shadowColor: '#333333',
  shadowOffset: { width: 0, height: 48 },
  shadowOpacity: 0.04,
  shadowRadius: 48,
  elevation: 6,
};

export const cardShadowLarge = {
  shadowColor: '#262626',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 1.0,
  shadowRadius: 0,
  elevation: 2,
};

// colored shadows
export const coloredShadowGray = { shadowColor: '#333333', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.08, shadowRadius: 16, elevation: 3 };
export const coloredShadowBlue = { shadowColor: '#122368', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 };
export const colored_shadow_purple = { shadowColor: '#351a75', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 };
export const COLORED_SHADOW_ORANGE = { shadowColor: '#71330a', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 };
export const coloredShadowGreen = { shadowColor: '#0b4627', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 };
export const colored_shadow_primary = { shadowColor: '#dfff51', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };

export const tooltipShadow = { shadowColor: '#171717', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.15, shadowRadius: 24, elevation: 5 };
export const selectDropdownShadow = { shadowColor: '#171717', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 16, elevation: 3 };

// ============ TYPOGRAPHY ============
export const HEADER_FONT = 'Manrope';
export const bodyFont = 'Inter';
export const mono_font = 'DM Mono';

export const typographyStyles = StyleSheet.create({
  displayExtraLarge: { fontFamily: 'Manrope', fontSize: 128, lineHeight: 128, letterSpacing: -3.84, fontWeight: '600' },
  displayLarge: { fontFamily: 'Manrope', fontSize: 96, lineHeight: 96, letterSpacing: -2.3, fontWeight: '600' },
  displayMedium: { fontFamily: HEADER_FONT, fontSize: 72, lineHeight: 72, letterSpacing: -1.58, fontWeight: '600' },
  displaySmall: { fontFamily: HEADER_FONT, fontSize: 60, lineHeight: 60, letterSpacing: -1.2, fontWeight: '600' },
  displayTiny: { fontFamily: 'Manrope', fontSize: 48, lineHeight: 48, letterSpacing: -0.96, fontWeight: '600' },

  headingLarge: { fontFamily: HEADER_FONT, fontSize: 36, lineHeight: 40, letterSpacing: -0.07, fontWeight: '600' },
  headingMedium: { fontFamily: 'Manrope', fontSize: 30, lineHeight: 36, letterSpacing: -0.06, fontWeight: '600' },
  headingSmall: { fontFamily: HEADER_FONT, fontSize: 24, lineHeight: 32, letterSpacing: -0.048, fontWeight: '600' },
  headingXSmall: { fontFamily: HEADER_FONT, fontSize: 20, lineHeight: 26, letterSpacing: -0.04, fontWeight: '600' },
  headingTiny: { fontFamily: 'Manrope', fontSize: 14, lineHeight: 16, letterSpacing: -0.028, fontWeight: '600' },

  paragraphXLarge: { fontFamily: bodyFont, fontSize: 24, lineHeight: 32, letterSpacing: 0, fontWeight: '400' },
  paragraphLarge: { fontFamily: 'Inter', fontSize: 18, lineHeight: 24, letterSpacing: 0, fontWeight: '400' },
  paragraphRegular: { fontFamily: bodyFont, fontSize: 16, lineHeight: 24, letterSpacing: 0, fontWeight: '400' },
  paragraphSmall: { fontFamily: 'Inter', fontSize: 14, lineHeight: 20, letterSpacing: 0, fontWeight: '400' },
  paragraphXSmall: { fontFamily: bodyFont, fontSize: 13, lineHeight: 18, letterSpacing: 0, fontWeight: '400' },
  paragraphTiny: { fontFamily: 'Inter', fontSize: 12, lineHeight: 16, letterSpacing: 0, fontWeight: '400' },
  paragraphMini: { fontFamily: bodyFont, fontSize: 10, lineHeight: 12, letterSpacing: 0, fontWeight: '400' },

  labelXLarge: { fontFamily: 'Inter', fontSize: 24, lineHeight: 32, letterSpacing: -0.34, fontWeight: '500' },
  labelLarge: { fontFamily: bodyFont, fontSize: 18, lineHeight: 24, letterSpacing: -0.22, fontWeight: '500' },
  labelRegular: { fontFamily: 'Inter', fontSize: 16, lineHeight: 24, letterSpacing: -0.19, fontWeight: '500' },
  labelSmall: { fontFamily: bodyFont, fontSize: 14, lineHeight: 20, letterSpacing: -0.14, fontWeight: '500' },
  labelXSmall: { fontFamily: 'Inter', fontSize: 13, lineHeight: 18, letterSpacing: -0.13, fontWeight: '500' },
  labelTiny: { fontFamily: bodyFont, fontSize: 12, lineHeight: 16, letterSpacing: -0.096, fontWeight: '500' },
  labelXTiny: { fontFamily: 'Inter', fontSize: 10, lineHeight: 12, letterSpacing: -0.08, fontWeight: '500' },

  subheadingMedium: { fontFamily: bodyFont, fontSize: 16, lineHeight: 24, letterSpacing: 1.92, fontWeight: '500' },
  subheadingSmall: { fontFamily: 'Inter', fontSize: 14, lineHeight: 20, letterSpacing: 1.68, fontWeight: '500' },
  subheadingXSmall: { fontFamily: bodyFont, fontSize: 12, lineHeight: 16, letterSpacing: 1.44, fontWeight: '500' },
  subheadingXXSmall: { fontFamily: 'Inter', fontSize: 11, lineHeight: 12, letterSpacing: 1.32, fontWeight: '500' },

  monoRegular: { fontFamily: 'DM Mono', fontSize: 16, lineHeight: 24, letterSpacing: 0, fontWeight: '500' },
  monoSmall: { fontFamily: 'DM Mono', fontSize: 14, lineHeight: 20, letterSpacing: 0, fontWeight: '500' },
  monoCompact: { fontFamily: 'DM Mono', fontSize: 12, lineHeight: 16, letterSpacing: 0, fontWeight: '500' },
  monoTiny: { fontFamily: mono_font, fontSize: 10, lineHeight: 16, letterSpacing: 0, fontWeight: '500' },
});
