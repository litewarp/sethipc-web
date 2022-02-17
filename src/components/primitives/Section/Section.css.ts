import { style, styleVariants } from '@vanilla-extract/css'
import { sprinkles } from '@/styles'
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
      1: sprinkles({ paddingY: 3 }),
      2: sprinkles({ paddingY: 5 }),
      3: sprinkles({ paddingY: 9 })
    }
  },
  defaultVariants: {
    size: 3
  }
})

export type SectionVariant = RecipeVariants<typeof section>
