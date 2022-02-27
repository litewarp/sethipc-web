import { colors } from './colors'
import { borderStyles, borderWidths, radii } from './border'
import { shadows } from './shadows'
import { opacity } from './opacity'
import { space } from './space'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'

export const tokens = {
  borderStyles,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  shadows,
  space
}

export type {
  Mode,
  Accents,
  Brights,
  Grays,
  Metals,
  BaseColors,
  Foreground,
  Background
} from './colors'

export type Tokens = typeof tokens
