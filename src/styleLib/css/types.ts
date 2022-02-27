import type {
  BaseColors,
  Accents,
  Grays,
  Metals,
  Brights,
  Tokens,
  Foreground,
  Background
} from '../tokens'

type ThemeColors = BaseColors &
  Accents &
  Grays &
  Brights &
  Metals &
  Foreground &
  Background

type ThemeMode = {
  colors: Tokens['colors']['light']
}

export type Theme = {
  borderStyles: Tokens['borderStyles']
  borderWidths: Tokens['borderWidths']
  colors: ThemeColors
  fonts: Tokens['fonts']
  fontSizes: Tokens['fontSizes']
  fontWeights: Tokens['fontWeights']
  letterSpacings: Tokens['letterSpacings']
  lineHeights: Tokens['lineHeights']
  opacity: Tokens['opacity']
  mode: ThemeMode
  radii: Tokens['radii']
  shadows: Tokens['shadows']
  space: Tokens['space']
}
