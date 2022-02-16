import { createGlobalTheme, createTheme, style } from '@vanilla-extract/css'
import { colors } from './colors.css'

const root = createGlobalTheme(':root', {
  space: {
    auto: 'auto',
    0: '0px',
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
  sizes: {
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
  fontSizes: {
    1: '12px',
    2: '13px',
    3: '15px',
    4: '17px',
    5: '19px',
    6: '21px',
    7: '27px',
    8: '35px',
    9: '59px'
  },
  radii: {
    1: '4px',
    2: '6px',
    3: '8px',
    4: '12px',
    round: '50%',
    pill: '9999px'
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    max: '999'
  },
  fonts: {
    system: 'system-ui',
    brush: 'brush-script-std',
    mono: 'source-code-pro, monospace',
    default: 'proxima-nova, sans-serif'
  }
})

export const vars = { ...root, colors }
