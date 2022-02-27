import { accents, brights, metals, grays, overlays } from './radix'
import { foreground, background } from './semantic'

export const colors = {
  base: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
    current: 'currentColor',
    inherit: 'inherit',
    transparent: 'transparent',
    ...overlays
  },
  light: {
    ...accents.light,
    ...brights.light,
    ...metals.light,
    ...grays.light,
    ...foreground.light,
    ...background.light
  },
  dark: {
    ...accents.dark,
    ...brights.dark,
    ...metals.dark,
    ...grays.dark,
    ...foreground.dark,
    ...background.dark
  }
}

export type { Accents, Brights, Grays, Overlays, Metals } from './radix'
export type { Foreground, Background } from './semantic'
export type { Mode } from './semantic'
export type BaseColors = typeof colors['base']
