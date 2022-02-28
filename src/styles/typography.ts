import { getCapHeight, FontMetrics } from '@capsizecss/core'
import { precomputeValues } from '@capsizecss/vanilla-extract'
import { Breakpoint } from './breakpoints'
import { style, styleVariants } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { responsiveStyle } from './responsiveStyle'
import { vars } from './vars.css'

type TextBreakpoint = Exclude<Breakpoint, 'desktop' | 'wide'>

type FontSizeText = {
  fontSize: number
  rows: number
}

type TextDefinition = Record<TextBreakpoint, FontSizeText>

export function fontSizeToCapHeight(
  grid: number,
  definition: TextDefinition,
  fontMetrics: FontMetrics
) {
  const { mobile, tablet } = definition

  const mobileCapHeight = getCapHeight({
    fontSize: mobile.fontSize,
    fontMetrics
  })

  const tabletCapHeight = getCapHeight({
    fontSize: tablet.fontSize,
    fontMetrics
  })

  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobileTrims
  } = precomputeValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics
  })

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tabletTrims
  } = precomputeValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics
  })

  return {
    mobile: {
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight,
      capHeight: `${mobileCapHeight}px`,
      capSizeTrims: { ...mobileTrims }
    },
    tablet: {
      fontSize: tabletFontSize,
      lineHeight: tabletLineHeight,
      capHeight: `${tabletCapHeight}px`,
      capSizeTrims: { ...tabletTrims }
    }
  }
}

const calculateForBreakpoint = (breakpoint: keyof typeof vars.textSize.standard) => {
  const type = vars.textSize.standard[breakpoint]
  const padding = calc(type.lineHeight).subtract(type.capHeight).divide(2).toString()

  return {
    paddingTop: padding,
    paddingBottom: padding
  }
}

export const textAlignedToIcon = {
  standard: style(
    responsiveStyle({
      mobile: calculateForBreakpoint('mobile'),
      tablet: calculateForBreakpoint('tablet')
    })
  )
}

export const lineHeightContainer = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: { height: mobile.lineHeight },
    tablet: { height: tablet.lineHeight }
  })
)
