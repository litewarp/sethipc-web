import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, sprinkles } from '@/styles'

export const container = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const logoText = recipe({
  base: {
    fontFamily: vars.fonts.brush,
    color: vars.colors.indigo9,
    lineHeight: 0,
    textShadow: `0px 2px 2px ${vars.colors.slate2}`
  },
  variants: {
    size: {
      sm: { fontSize: vars.fontSize.sm },
      md: { fontSize: vars.fontSize.base },
      lg: { fontSize: vars.fontSize.lg },
      xl: { fontSize: vars.fontSize.xl },
      ['3xl']: { fontSize: vars.fontSize['3xl'] },
      ['4xl']: { fontSize: vars.fontSize['4xl'] }
    },
    hover: {
      true: {
        selectors: { '&:hover': { color: vars.colors.indigo10 } }
      },
      false: {
        selectors: { '&:hover': { color: vars.colors.indigo8 } }
      }
    }
  },
  defaultVariants: {
    size: 'lg',
    hover: true
  }
})

export type SethiPCLogoVariants = RecipeVariants<typeof logoText>
