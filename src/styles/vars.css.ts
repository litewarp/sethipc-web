import { createGlobalTheme, createTheme, style } from '@vanilla-extract/css'
import { colors } from './colors.css'
import { mapValues } from 'lodash'

const fontFamily =
  '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const root = createGlobalTheme(':root', {
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    round: '50%'
  },
  borderWidth: {
    sm: '1px',
    md: '2px',
    lg: '3px'
  },
  grid: '4px',
  space: {
    gutter: '24px',
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '20px',
    lg: '32px',
    xl: '44px',
    xxl: '60px'
  },
  sizes: {
    auto: 'auto',
    1: '5px',
    2: '10px',
    3: '15px',
    4: '20px',
    5: '25px',
    6: '35px',
    7: '45px',
    8: '65px',
    9: '80px'
  },
  fontSize: {
    xs: '12px',
    sm: '13px',
    base: '15px',
    lg: '17px',
    xl: '19px',
    ['2xl']: '21px',
    ['3xl']: '27px',
    ['4xl']: '35px',
    ['5xl']: '48px',
    ['6xl']: '59px'
  },
  lineHeight: {
    xs: '1rem',
    sm: '1.25rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    ['2xl']: '2rem',
    ['3xl']: '2.25rem',
    ['4xl']: '2.5rem',
    ['5xl']: '1',
    ['6xl']: '1'
  },
  letterSpacing: {
    tighter: '-.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semiBold: '550',
    bold: '650'
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    max: '999'
  },
  contentWidth: mapValues(
    {
      xsmall: 400,
      small: 660,
      medium: 940,
      large: 1308
    },
    (val) => `${val}px`
  ),
  fonts: {
    system: 'system-ui',
    brush: 'brush-script-std',
    mono: 'source-code-pro, monospace',
    default: 'proxima-nova, sans-serif'
  },
  fontFamily,
  focusRingSize: '3px',
  shadows: {
    small: `0 2px 4px 0px ${colors.slate4}, 0 2px 2px -2px ${colors.slate4}, 0 4px 4px -4px ${colors.slate7}`,
    medium: `0 2px 4px 0px ${colors.slate4}, 0 8px 8px -4px ${colors.slate4}, 0 12px 12px -8px ${colors.slate7}`,
    large: `0 2px 4px 0px ${colors.slate4}, 0 12px 12px -4px ${colors.slate4}, 0 20px 20px -12px ${colors.slate7}`
  },
  transform: {
    touchable: 'scale(0.97)'
  },
  transition: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)'
  }
})

export const vars = { ...root, colors }
