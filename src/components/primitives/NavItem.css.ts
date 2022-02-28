import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { atoms, vars } from '@/styles'

export const navAnchor = recipe({
  base: [
    {
      borderRadius: 4,
      color: vars.colors.textPrimary,
      backgroundColor: 'transparent',
      userSelect: 'none',
      minHeight: '2.5rem',
      transition: 'background-color 50ms linear',
      selectors: {
        '&:hover': {
          backgroundColor: vars.colors.indigo4
        }
      },
      textDecoration: 'none'
    },
    atoms({
      display: 'flex',
      alignItems: 'center',
      paddingY: 'sm',
      paddingX: 'lg'
    })
  ],
  variants: {
    state: {
      active: {
        backgroundColor: vars.colors.indigo5,
        '&:hover': {
          backgroundColor: vars.colors.indigo5
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
