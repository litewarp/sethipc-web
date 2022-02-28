import { vars } from '../vars.css'

const { colors } = vars
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
  [key in ForegroundColors]: string
} = {
  brandAccent: colors.cyan11,
  brandAccentLight: colors.cyan4,
  caution: colors.yellow11,
  cautionLight: colors.yellow4,
  critical: colors.tomato11,
  criticalLight: colors.tomato4,
  formAccent: colors.sky11,
  formAccentLight: colors.sky4,
  info: colors.blue11,
  infoLight: colors.blue4,
  link: colors.blue11,
  linkLight: colors.blue4,
  linkHover: colors.indigo11,
  linkVisited: colors.indigo8,
  linkLightVisited: colors.violet4,
  neutral: colors.slate12,
  neutralInverted: colors.slate1,
  positive: colors.green11,
  positiveLight: colors.green4,
  promote: colors.violet11,
  promoteLight: colors.violet4,
  rating: colors.orange11,
  secondary: colors.gray11,
  secondaryInverted: colors.gray2
}

type BackgroundColors =
  | 'body'
  | 'bodyDark'
  | 'brand'
  | 'brandAccent'
  | 'brandAccentActive'
  | 'brandAccentHover'
  | 'brandAccentSoft'
  | 'brandAccentSoftActive'
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
  | 'formAccent'
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

export const background: { [key in BackgroundColors]: string } = {
  body: colors.bgPrimary,
  bodyDark: colors.bgSecondary,
  brand: colors.indigo9,
  brandAccent: colors.cyan8,
  brandAccentActive: colors.cyan10,
  brandAccentHover: colors.cyan9,
  brandAccentSoft: colors.slate3,
  brandAccentSoftActive: colors.slate5,
  brandAccentSoftHover: colors.slate4,
  caution: colors.yellow8,
  cautionLight: colors.yellow3,
  critical: colors.tomato8,
  criticalLight: colors.tomato3,
  criticalActive: colors.tomato10,
  criticalHover: colors.tomato9,
  criticalSoft: colors.tomato4,
  criticalSoftActive: colors.tomato6,
  criticalSoftHover: colors.tomato5,
  formAccent: colors.sky8,
  formAccentActive: colors.sky10,
  formAccentHover: colors.sky9,
  formAccentSoft: colors.sky4,
  formAccentSoftActive: colors.sky5,
  formAccentSoftHover: colors.sky6,
  info: colors.blue8,
  infoLight: colors.blue4,
  neutral: colors.slate8,
  neutralActive: colors.slate10,
  neutralHover: colors.slate9,
  neutralLight: colors.slate3,
  neutralSoft: colors.slate4,
  neutralSoftActive: colors.slate6,
  neutralSoftHover: colors.slate5,
  positive: colors.green8,
  positiveLight: colors.green3,
  promote: colors.violet8,
  promoteLight: colors.violet3,
  surface: colors.bgDimmed
}

export type Foreground = { [key in ForegroundColors]: string }
export type Background = { [key in BackgroundColors]: string }
