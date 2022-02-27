import * as radix from '@radix-ui/colors'
import type { Mode } from './semantic'

// radix colors
// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
type AccentScales =
  // 15 "Colors" -- "designed for white foreground text at step 9"
  | 'tomato'
  | 'red'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'grass'
  | 'orange'
  | 'brown'

// 5 "Bright Colors" -- "designed for black foreground text at step 9"
type BrightScales = 'sky' | 'mint' | 'lime' | 'yellow' | 'amber'

// 6 "Gray Scales"
type GrayScales = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand'

// 2 Metal Scales
type MetalScales = 'bronze' | 'gold'

// 2 Overlay Scales
type OverlayScales = 'blackA' | 'whiteA'

type ScaleSteps =
  | '1' // app background
  | '2' // subtle background
  | '3' // ui element background
  | '4' // hovered ui element background
  | '5' // active / selected ui element background
  | '6' // subtle borders and separators
  | '7' // ui element border and focus rings
  | '8' // hovered ui element border
  | '9' // solid backgrounds
  | '10' // hovered solid backgrounds
  | '11' // low-contrast text
  | '12' // hi-contrast text

function remapColors<T = Record<string, string>>(obj: T) {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const match = k.match(/(?<=[a-zA-Z]+)/)
    if (!match) return acc
    const num = match[0]
    return { ...acc, [num]: v }
  }, {} as { [key in ScaleSteps]: string })
}

export const accents: {
  [key in Mode]: { [key in AccentScales]: { [key in ScaleSteps]: string } }
} = {
  light: {
    tomato: remapColors<typeof radix.tomato>(radix.tomato),
    red: remapColors<typeof radix.red>(radix.red),
    crimson: remapColors<typeof radix.crimson>(radix.crimson),
    pink: remapColors<typeof radix.pink>(radix.pink),
    plum: remapColors<typeof radix.plum>(radix.plum),
    purple: remapColors<typeof radix.purple>(radix.purple),
    violet: remapColors<typeof radix.violet>(radix.violet),
    indigo: remapColors<typeof radix.indigo>(radix.indigo),
    blue: remapColors<typeof radix.blue>(radix.blue),
    cyan: remapColors<typeof radix.cyan>(radix.cyan),
    teal: remapColors<typeof radix.teal>(radix.teal),
    green: remapColors<typeof radix.green>(radix.green),
    grass: remapColors<typeof radix.grass>(radix.grass),
    orange: remapColors<typeof radix.orange>(radix.orange),
    brown: remapColors<typeof radix.brown>(radix.brown)
  },
  dark: {
    tomato: remapColors<typeof radix.tomatoDark>(radix.tomatoDark),
    red: remapColors<typeof radix.redDark>(radix.redDark),
    crimson: remapColors<typeof radix.crimsonDark>(radix.crimsonDark),
    pink: remapColors<typeof radix.pinkDark>(radix.pinkDark),
    plum: remapColors<typeof radix.plumDark>(radix.plumDark),
    purple: remapColors<typeof radix.purpleDark>(radix.purpleDark),
    violet: remapColors<typeof radix.violetDark>(radix.violetDark),
    indigo: remapColors<typeof radix.indigoDark>(radix.indigoDark),
    blue: remapColors<typeof radix.blueDark>(radix.blueDark),
    cyan: remapColors<typeof radix.cyanDark>(radix.cyanDark),
    teal: remapColors<typeof radix.tealDark>(radix.tealDark),
    green: remapColors<typeof radix.greenDark>(radix.greenDark),
    grass: remapColors<typeof radix.grassDark>(radix.grassDark),
    orange: remapColors<typeof radix.orangeDark>(radix.orangeDark),
    brown: remapColors<typeof radix.brownDark>(radix.brownDark)
  }
}

export const brights: {
  [key in Mode]: { [key in BrightScales]: { [key in ScaleSteps]: string } }
} = {
  light: {
    sky: remapColors<typeof radix.sky>(radix.sky),
    mint: remapColors<typeof radix.mint>(radix.mint),
    lime: remapColors<typeof radix.lime>(radix.lime),
    amber: remapColors<typeof radix.amber>(radix.amber),
    yellow: remapColors<typeof radix.yellow>(radix.yellow)
  },
  dark: {
    sky: remapColors<typeof radix.skyDark>(radix.skyDark),
    mint: remapColors<typeof radix.mintDark>(radix.mintDark),
    lime: remapColors<typeof radix.limeDark>(radix.limeDark),
    amber: remapColors<typeof radix.amberDark>(radix.amberDark),
    yellow: remapColors<typeof radix.yellowDark>(radix.yellowDark)
  }
}

export const grays: {
  [key in Mode]: { [key in GrayScales]: { [key in ScaleSteps]: string } }
} = {
  light: {
    gray: remapColors<typeof radix.gray>(radix.gray),
    mauve: remapColors<typeof radix.mauve>(radix.mauve),
    slate: remapColors<typeof radix.slate>(radix.slate),
    sage: remapColors<typeof radix.sage>(radix.sage),
    olive: remapColors<typeof radix.olive>(radix.olive),
    sand: remapColors<typeof radix.sand>(radix.sand)
  },
  dark: {
    gray: remapColors<typeof radix.grayDark>(radix.grayDark),
    mauve: remapColors<typeof radix.mauveDark>(radix.mauveDark),
    slate: remapColors<typeof radix.slateDark>(radix.slateDark),
    sage: remapColors<typeof radix.sageDark>(radix.sageDark),
    olive: remapColors<typeof radix.oliveDark>(radix.oliveDark),
    sand: remapColors<typeof radix.sandDark>(radix.sandDark)
  }
}

export const metals: {
  [key in Mode]: { [key in MetalScales]: { [key in ScaleSteps]: string } }
} = {
  light: {
    gold: remapColors<typeof radix.gold>(radix.gold),
    bronze: remapColors<typeof radix.bronze>(radix.bronze)
  },
  dark: {
    gold: remapColors<typeof radix.goldDark>(radix.goldDark),
    bronze: remapColors<typeof radix.bronzeDark>(radix.bronzeDark)
  }
}

export const overlays = {
  blackA: remapColors<typeof radix.blackA>(radix.blackA),
  whiteA: remapColors<typeof radix.whiteA>(radix.whiteA)
}

export type Accents = typeof accents
export type Metals = typeof metals
export type Brights = typeof brights
export type Grays = typeof grays
export type Overlays = typeof overlays
