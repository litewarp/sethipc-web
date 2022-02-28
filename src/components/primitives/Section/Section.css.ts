import { style, styleVariants } from '@vanilla-extract/css'
import { atoms } from '@/styles'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const sectionBase = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  selectors: {
    '&::before': {
      boxSizing: 'border-box',
      content: '""'
    },
    '&::after': {
      boxSizing: 'border-box',
      content: '""'
    }
  }
})

export const section = recipe({
  base: sectionBase,
  variants: {
    size: {
      1: atoms({ paddingY: 'md' }),
      2: atoms({ paddingY: 'lg' }),
      3: atoms({ paddingY: 'xl' })
    }
  },
  defaultVariants: {
    size: 3
  }
})

export type SectionVariant = RecipeVariants<typeof section>
