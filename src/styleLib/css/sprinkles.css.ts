/**
 * Inspired by
 * https://github.com/mirror-xyz/degen/blob/main/components/src/css/sprinkles.css.ts
 */
import {
  ConditionalValue,
  RequiredConditionalValue,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties
} from '@vanilla-extract/sprinkles'
import { createVar, fallbackVar } from '@vanilla-extract/css'
import { negativeSpace, extendedSpace } from '../tokens/space'

import { vars } from './vars.css'
import { Breakpoint, breakpointNames, breakpoints } from './breakpoints'

// Ensure reset has lowest specificity
/* DO NOT MOVE THIS LINE */
import './reset.css'
/* DO NOT MOVE THIS LINE */

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

const flexibility = [0, 1, 2, 3, 4] as const

const space = vars.space

const margins = {
  ...space,
  ...negativeSpace
}

const responsiveProperties = defineProperties({
  defaultCondition: 'xs',
  conditions: {
    xs: {},
    sm: { '@media': `(min-width: ${breakpoints.sm}px)` },
    md: { '@media': `(min-width: ${breakpoints.md}px)` },
    lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
    xl: { '@media': `(min-width: ${breakpoints.xl}px)` },
    '2xl': { '@media': `(min-width: ${breakpoints['2xl']}px)` }
  },
  properties: {
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    borderWidth: vars.borderWidths,
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    bottom: vars.space,
    display: ['block', 'flex', 'grid', 'inline-block', 'none'],
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexBasis: {
      ...vars.space,
      ...extendedSpace
    },
    flexDirection: ['column', 'row'],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ['wrap', 'nowrap'],
    fontSize: {
      ...vars.fontSizes,
      inherit: 'inherit'
    },
    fontWeight: vars.fontWeights,
    gap: vars.space,
    height: vars.space,
    inset: vars.space,
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    justifySelf: flexAlignment,
    left: vars.space,
    letterSpacing: vars.letterSpacings,
    lineHeight: vars.lineHeights,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    marginTop: margins,
    maxHeight: vars.space,
    maxWidth: {
      ...vars.space,
      ...extendedSpace,
      none: 'none'
    },
    minHeight: vars.space,
    minWidth: vars.space,
    overflow: ['auto', 'hidden', 'scroll', 'unset'],
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    right: vars.space,
    textAlign: ['center', 'left', 'right'],
    top: vars.space,
    width: {
      ...vars.space,
      ...extendedSpace
    }
  },
  shorthands: {
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom']
  }
})

const unresponsiveProperties = defineProperties({
  properties: {
    aspectRatio: {
      auto: 'auto',
      '1/1': '1 / 1',
      '2/1': '2 / 1',
      '4/1': '4 / 1',
      '4/3': '4 / 3',
      '16/9': '16 / 9'
    },
    cursor: ['default', 'pointer', 'not-allowed'],
    fontFamily: vars.fonts,
    isolation: ['isolate'],
    objectFit: ['contain', 'cover'],
    opacity: vars.opacity,
    pointerEvents: ['none'],
    strokeWidth: vars.borderWidths,
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    transitionProperty: {
      none: 'none',
      all: 'all',
      default:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform'
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.42, 0, 0.58, 1)'
    },
    visibility: ['hidden', 'visible'],
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit'],
    wordBreak: ['break-word'],
    wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '75': 75,
      '100': 100,
      auto: 'auto'
    }
  }
})

const boxShadowColorVar = createVar()
const boxShadowInsetVar = createVar()
const boxShadowOffsetWidthVar = createVar()

function createRing(size: number) {
  const inset = fallbackVar(boxShadowInsetVar, '')
  const offset = fallbackVar(boxShadowOffsetWidthVar, '0')
  const color = fallbackVar(boxShadowColorVar, vars.overlays.blackA['7'])

  return `${inset} 0 0 0 calc(${size}px + ${offset}) ${color}`
}

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' }
  },
  defaultCondition: 'base',
  properties: {
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    boxShadow: {
      sm: vars.shadows.sm,
      base: vars.shadows.base,
      md: vars.shadows.md,
      lg: vars.shadows.lg,
      xl: vars.shadows.xl,
      '2xl': vars.shadows['2xl'],
      inner: vars.shadows.inner,
      none: vars.shadows.none,
      ring0: {
        boxShadow: createRing(0)
      },
      ring1: {
        boxShadow: createRing(1)
      },
      ring2: {
        boxShadow: createRing(2)
      },
      ring: {
        boxShadow: createRing(3)
      },
      ring4: {
        boxShadow: createRing(4)
      },
      ring8: {
        boxShadow: createRing(8)
      }
    },
    boxShadowColor: {
      foregroundSecondary: {
        vars: { [boxShadowColorVar]: vars.colors.foregroundSecondary }
      },
      transparent: {
        vars: { [boxShadowColorVar]: vars.colors.transparent }
      }
    },
    color: vars.colors,
    outlineColor: vars.colors
  }
})

const motionSafeProperties = defineProperties({
  conditions: {
    base: { '@media': '(prefers-reduced-motion: no-preference)' }
  },
  defaultCondition: 'base',
  properties: {
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    }
  }
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  selectorProperties,
  motionSafeProperties
)
export type Sprinkles = Parameters<typeof sprinkles>[0]

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>
export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveProperties, Value>

export type OptionalResponsiveObject<Value> = Value | Partial<Record<Breakpoint, Value>>
export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> &
  Record<typeof breakpointNames[0], Value>

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveProperties)
export const mapResponsiveValue = createMapValueFn(responsiveProperties)
