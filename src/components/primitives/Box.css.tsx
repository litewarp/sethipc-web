import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const box = recipe({
  base: {
    // Reset
    boxSizing: 'border-box'
  },
  variants: {}
})

export type BoxVariants = RecipeVariants<typeof box>
