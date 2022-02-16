import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles, vars } from '@/styles'

export const navAnchor = recipe({
  base: [
    {
      borderRadius: 4,
      color: vars.colors.text.primary,
      backgroundColor: 'transparent',
      userSelect: 'none',
      minHeight: '2.5rem',
      transition: 'background-color 50ms linear',
      selectors: {
        '&:hover': {
          backgroundColor: vars.colors.indigo.indigo4
        }
      },
      textDecoration: 'none'
    },
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      paddingY: 2,
      paddingX: 5
    })
  ],
  variants: {
    state: {
      active: {
        backgroundColor: vars.colors.indigo.indigo5,
        '&:hover': {
          backgroundColor: vars.colors.indigo.indigo5
        }
      }
    }
  }
})

export type NavItemVariants = RecipeVariants<typeof navAnchor>

export const navHeading = style({
  fontSize: vars.sizes[3],
  fontWeight: 500,
  padding: `${vars.sizes[2]} ${vars.sizes[5]}`
})
