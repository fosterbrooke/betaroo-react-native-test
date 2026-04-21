// Raw design primitives — no semantic meaning, no component coupling.
// These values come from the Betaroo design system palette.

export const colors = {
  brand: {
    950: '#242812', 900: '#485022', 800: '#6c7a30', 700: '#91a43d',
    600: '#b8d148', 500: '#dfff51', 400: '#e6ff6b', 300: '#ecff87',
    200: '#f2ffa3', 100: '#f7ffc0', 50: '#fbffde',
  },
  gray: {
    950: '#171717', 900: '#1c1c1c', 800: '#262626', 700: '#333333',
    600: '#5c5c5c', 500: '#7b7b7b', 400: '#a3a3a3', 300: '#d1d1d1',
    200: '#ebebeb', 100: '#f5f5f5', 50: '#f7f7f7', 0: '#ffffff',
  },
  slate: {
    950: '#0e121b', 900: '#181b25', 800: '#222530', 700: '#2b303b',
    600: '#525866', 500: '#717784', 400: '#99a0ae', 300: '#cacfd8',
    200: '#eaecf0', 100: '#f2f5f8', 50: '#f5f7fa', 0: '#ffffff',
  },
  blue: {
    950: '#122368', 900: '#182f8b', 800: '#1f3bad', 700: '#2547d0',
    600: '#3559e9', 500: '#335cff', 400: '#4d82ff', 300: '#97baff',
    200: '#c0d5ff', 100: '#d5e2ff', 50: '#ebf1ff',
  },
  green: {
    950: '#0b4627', 900: '#16643b', 800: '#1a7544', 700: '#178c4e',
    600: '#1daf61', 500: '#1fc16b', 400: '#3ee089', 300: '#84ebb4',
    200: '#c2f5da', 100: '#d6f5e8', 50: '#e3f7ec',
  },
  pink: {
    950: '#68123d', 900: '#8b1852', 800: '#ad1f66', 700: '#d0257a',
    600: '#e9358f', 500: '#fb4ba3', 400: '#ff68b3', 300: '#ff97cb',
    200: '#ffc0df', 100: '#ffd5ea', 50: '#ffebf4',
  },
  red: {
    950: '#681219', 900: '#8b1822', 800: '#ad1f2b', 700: '#d02533',
    600: '#e93544', 500: '#fb3748', 400: '#ff6875', 300: '#ff97a0',
    200: '#ffc0c5', 100: '#ffd5d8', 50: '#ffebec',
  },
  orange: {
    950: '#71330a', 900: '#96440d', 800: '#b75310', 700: '#ce5e12',
    600: '#e16614', 500: '#fa7319', 400: '#ffa468', 300: '#ffc197',
    200: '#ffd9c0', 100: '#ffe6d5', 50: '#fff3eb',
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
  teal: {
    950: '#0b463e', 900: '#16645a', 800: '#1a7569', 700: '#178c7d',
    600: '#1daf9c', 500: '#22d3bb', 400: '#3fdec9', 300: '#84ebdd',
    200: '#c2f5ee', 100: '#d0fbf5', 50: '#e4fbf8',
  },
  alpha: {
    green: {
      alpha24: '#1fc16b3d',
      alpha16: '#1fc16b29',
      alpha10: '#1fc16b1a',
    },
    pink: {
      alpha24: '#fb4ba33d',
      alpha16: '#fb4ba329',
      alpha10: '#fb4ba31a',
    },
    gray: {
      alpha24: '#a3a3a33d',
      alpha16: '#a3a3a329',
      alpha10: '#a3a3a31a',
      alpha0: '#a3a3a300',
    },
    white: {
      alpha24: '#ffffff3d',
      alpha16: '#ffffff29',
      alpha10: '#ffffff1a',
      alpha0: '#ffffff00',
    },
    black: {
      alpha24: '#1717173d',
      alpha16: '#17171729',
      alpha10: '#1717171a',
    },
  },
} as const;

export const spacing = {
  0: 0,
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  14: 14,
  16: 16,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
} as const;

export const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 999,
} as const;

export const shadow = {
  xs: {
    shadowColor: '#0A0D14',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#0E121B',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 4,
  },
  card: {
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1.0,
    shadowRadius: 0,
    elevation: 2,
  },
  dropdown: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 3,
  },
  green: {
    shadowColor: '#0b4627',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
} as const;

export const fontFamily = {
  heading: 'Manrope',
  body: 'Inter',
  mono: 'DM Mono',
} as const;

export const fontSize = {
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  30: 30,
  36: 36,
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
} as const;
