import { calc } from '@vanilla-extract/css-utils'
import { vars } from '..'
import { foreground, background } from './colors'

export const space = {
  ...vars.space,
  none: 0
}

export const negativeSpace = {
  ['-px']: `${calc(1).negate()}`,
  ['-gutter']: `${calc(vars.space.gutter).negate()}`,
  ['-xxs']: `${calc(vars.space.xxs).negate()}`,
  ['-xs']: `${calc(vars.space.xs).negate()}`,
  ['-sm']: `${calc(vars.space.sm).negate()}`,
  ['-md']: `${calc(vars.space.md).negate()}`,
  ['-lg']: `${calc(vars.space.lg).negate()}`,
  ['-xl']: `${calc(vars.space.xl).negate()}`,
  ['-xxl']: `${calc(vars.space.xxl).negate()}`
}

const margin = {
  ...space,
  ...negativeSpace
}

const boxShadow = {
  ...vars.shadows,
  borderBrandAccentLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.brandAccent}`,
  borderBrandAccentLightLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.brandAccentLight}`,
  borderCaution: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.caution}`,
  borderCautionLight: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.cautionLight}`,
  borderCritical: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.critical}`,
  borderCriticalLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.critical}`,
  borderCriticalLight: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.criticalLight}`,
  borderCriticalLightLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.criticalLight}`,
  borderField: `inset 0 0 0 ${vars.borderWidth.sm} ${background.neutral}`,
  borderFormAccent: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.formAccent}`,
  borderFormAccentLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.formAccent}`,
  borderFormAccentLight: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.formAccentLight}`,
  borderFormAccentLightLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.formAccentLight}`,
  borderInfo: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.info}`,
  borderInfoLight: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.infoLight}`,
  borderNeutral: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.neutral}`,
  borderNeutralLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.neutral}`,
  borderNeutralInverted: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.neutralInverted}`,
  borderNeutralInvertedLarge: `inset 0 0 0 ${vars.borderWidth.md} ${foreground.neutralInverted}`,
  borderNeutralLight: `inset 0 0 0 ${vars.borderWidth.sm} ${background.neutralLight}`,
  borderPositive: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.positive}`,
  borderPositiveLight: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.positiveLight}`,
  borderPromote: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.promote}`,
  borderPromoteLight: `inset 0 0 0 ${vars.borderWidth.sm} ${foreground.promoteLight}`,
  outlineFocus: `0 0 0 ${vars.focusRingSize} ${vars.colors.sky9}`
}

export type BoxShadow = keyof typeof boxShadow

export const pseudoProperties = {
  backgroundColor: background,
  boxShadow,
  color: foreground
}

export type PseudoProperties = keyof typeof pseudoProperties

const tenths = [
  '0%',
  '10%',
  '20%',
  '30%',
  '40%',
  '50%',
  '60%',
  '70%',
  '80%',
  '90%',
  '100%'
]

export const unresponsiveProperties = {
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0, 50, 100],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400
  },
  cursor: ['default', 'pointer'],
  fontFamily: vars.fonts,
  objectFit: ['contain', 'cover'],
  pointerEvents: ['none'],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
  height: vars.sizes,
  width: vars.sizes,
  minWidth: {
    0: '0%'
  },
  maxWidth: vars.contentWidth,
  transition: vars.transition,
  textTransforms: ['capitalize', 'lowercase', 'uppercase'],
  visibility: ['hidden', 'visible']
} as const

export type UnresponsiveProperties = keyof typeof unresponsiveProperties

export const colorProperties = {
  background: background,
  boxShadow
} as const

export type Background = keyof typeof background

export type ColorProperties = keyof typeof colorProperties

export const responsiveProperties = {
  boxSizing: ['border-box', 'content-box'],
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex'
  },
  position: ['relative', 'absolute', 'fixed'],
  borderRadius: {
    none: '0px',
    full: '9999px',
    ...vars.borderRadius
  },
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: margin,
  marginBottom: margin,
  marginRight: margin,
  marginLeft: margin,
  flex: {
    1: '1 1 0%',
    auto: '1 1 auto',
    initial: '0 1 auto',
    none: 'none'
  },
  alignItems: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end'
  },
  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between'
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse'
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap'
  },
  fontSize: vars.fontSize,
  letterSpacing: vars.letterSpacing,
  fontWeight: vars.fontWeight,
  lineHeight: vars.lineHeight,
  height: [...tenths, '100vh'],
  width: [...tenths, '100vw'],
  flexShrink: [0, 1],
  flexGrow: [0, 1],
  textAlign: ['left', 'center', 'right'],
  maxWidth: vars.contentWidth,
  top: vars.space,
  right: vars.space,
  left: vars.space,
  bottom: vars.space,
  overflow: ['auto', 'hidden', 'scroll'],
  whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit'],
  textTransform: ['capitalize', 'lowercase', 'uppercase']
} as const

export type ResponsiveProperties = keyof typeof responsiveProperties
