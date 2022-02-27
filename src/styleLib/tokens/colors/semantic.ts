/**
 * Inspired by
 * https://seek-oss.github.io/braid-design-system/foundations/tones
 */
export type Mode = 'light' | 'dark'

type ForegroundColors =
  // brand
  | 'brandAccent'
  | 'brandAccentLight'
  // caution -- "you should be aware something is happening or mid-way through a process"
  // could be a risk or an item that needs to be acted upon
  | 'caution'
  | 'cautionLight'
  // critical -- "super imprtant, you need to see this"
  | 'critical'
  | 'criticalLight'
  | 'formAccent'
  | 'formAccentLight'
  // info -- guidance and advice. generally from the ui or business
  // functional, calm, and non-urgent
  | 'info'
  | 'infoLight'
  | 'link'
  | 'linkLight'
  | 'linkHover'
  | 'linkVisited'
  | 'linkLightVisited'
  // neutral - subtle information or historic details. Often already acted upon.
  // no priority due to the lack of importance or change
  | 'neutral'
  | 'neutralInverted'
  // positive -- "good vibes and new things"
  // wants to get the user to act on something or be aware of something good
  | 'positive'
  | 'positiveLight'
  // promote -- Things we wish to make prominent and give more visiblity to.
  // typically used to highlight features, updates, or marketing messages
  | 'promote'
  | 'promoteLight'
  | 'rating'
  | 'secondary'
  | 'secondaryInverted'

export const foreground: {
  [key in Mode]: { [key in ForegroundColors]: string }
} = {
  light: {
    brandAccent: '',
    brandAccentLight: '',
    caution: '',
    cautionLight: '',
    critical: '',
    criticalLight: '',
    formAccent: '',
    formAccentLight: '',
    info: '',
    infoLight: '',
    link: '',
    linkLight: '',
    linkHover: '',
    linkVisited: '',
    linkLightVisited: '',
    neutral: '',
    neutralInverted: '',
    positive: '',
    positiveLight: '',
    promote: '',
    promoteLight: '',
    rating: '',
    secondary: '',
    secondaryInverted: ''
  },
  dark: {
    brandAccent: '',
    brandAccentLight: '',
    caution: '',
    cautionLight: '',
    critical: '',
    criticalLight: '',
    formAccent: '',
    formAccentLight: '',
    info: '',
    infoLight: '',
    link: '',
    linkLight: '',
    linkHover: '',
    linkVisited: '',
    linkLightVisited: '',
    neutral: '',
    neutralInverted: '',
    positive: '',
    positiveLight: '',
    promote: '',
    promoteLight: '',
    rating: '',
    secondary: '',
    secondaryInverted: ''
  }
}

type BackgroundColors =
  | 'body'
  | 'bodyDark'
  | 'brand'
  | 'brandAccent'
  | 'brandAccentActive'
  | 'brandAccentHover'
  | 'brandAccentSoft'
  | 'brandAccentSoftHover'
  | 'caution'
  | 'cautionLight'
  | 'critical'
  | 'criticalLight'
  | 'criticalActive'
  | 'criticalHover'
  | 'criticalSoft'
  | 'criticalSoftActive'
  | 'criticalSoftHover'
  | 'formAccentActive'
  | 'formAccentHover'
  | 'formAccentSoft'
  | 'formAccentSoftActive'
  | 'formAccentSoftHover'
  | 'info'
  | 'infoLight'
  | 'neutral'
  | 'neutralActive'
  | 'neutralHover'
  | 'neutralLight'
  | 'neutralSoft'
  | 'neutralSoftActive'
  | 'neutralSoftHover'
  | 'positive'
  | 'positiveLight'
  | 'promote'
  | 'promoteLight'
  | 'surface'
  | 'surfaceDark'

export const background: {
  [key in Mode]: { [key in BackgroundColors]: string }
} = {
  light: {
    body: '',
    bodyDark: '',
    brand: '',
    brandAccent: '',
    brandAccentActive: '',
    brandAccentHover: '',
    brandAccentSoft: '',
    brandAccentSoftHover: '',
    caution: '',
    cautionLight: '',
    critical: '',
    criticalLight: '',
    criticalActive: '',
    criticalHover: '',
    criticalSoft: '',
    criticalSoftActive: '',
    criticalSoftHover: '',
    formAccentActive: '',
    formAccentHover: '',
    formAccentSoft: '',
    formAccentSoftActive: '',
    formAccentSoftHover: '',
    info: '',
    infoLight: '',
    neutral: '',
    neutralActive: '',
    neutralHover: '',
    neutralLight: '',
    neutralSoft: '',
    neutralSoftActive: '',
    neutralSoftHover: '',
    positive: '',
    positiveLight: '',
    promote: '',
    promoteLight: '',
    surface: '',
    surfaceDark: ''
  },
  dark: {
    body: '',
    bodyDark: '',
    brand: '',
    brandAccent: '',
    brandAccentActive: '',
    brandAccentHover: '',
    brandAccentSoft: '',
    brandAccentSoftHover: '',
    caution: '',
    cautionLight: '',
    critical: '',
    criticalLight: '',
    criticalActive: '',
    criticalHover: '',
    criticalSoft: '',
    criticalSoftActive: '',
    criticalSoftHover: '',
    formAccentActive: '',
    formAccentHover: '',
    formAccentSoft: '',
    formAccentSoftActive: '',
    formAccentSoftHover: '',
    info: '',
    infoLight: '',
    neutral: '',
    neutralActive: '',
    neutralHover: '',
    neutralLight: '',
    neutralSoft: '',
    neutralSoftActive: '',
    neutralSoftHover: '',
    positive: '',
    positiveLight: '',
    promote: '',
    promoteLight: '',
    surface: '',
    surfaceDark: ''
  }
}

export type Foreground = { [key in ForegroundColors]: string }
export type Background = { [key in BackgroundColors]: string }
