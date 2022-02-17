import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, sprinkles } from '@/styles'

export const button = recipe({
  base: [
    {
      appearance: 'none',
      border: '0',
      outline: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: 'transparent',
      borderRadius: '9999px',
      lineHeight: 1,
      fontWeight: 600,
      textDecoration: 'none',
      fontSize: vars.fontSizes[3],
      height: vars.sizes[6],
      transition: 'background-color 75ms ease',
      userSelect: 'none'
    },
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      paddingX: 3
    })
  ],
  variants: {
    color: {
      gray: {
        backgroundColor: vars.colors.slate4,
        color: vars.colors.slate11,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.slate5
          },
          '&:active': {
            backgroundColor: vars.colors.slate6
          },
          '&:focus': {
            boxShadow: `0 0 0 1px ${vars.colors.slate8}, inset 0 0 0 1px ${vars.colors.slate8}`
          }
        }
      },
      grass: {
        backgroundColor: vars.colors.grass8,
        color: vars.colors.grass11,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.grass5
          },
          '&:active': {
            backgroundColor: vars.colors.grass6
          },
          '&:focus': {
            boxShadow: `0 0 0 1px ${vars.colors.grass8}, inset 0 0 0 1px ${vars.colors.grass8}`
          }
        }
      },

      indigo: {
        backgroundColor: vars.colors.indigo8,
        color: vars.colors.indigo12,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.indigo5
          },
          '&:active': {
            backgroundColor: vars.colors.indigo6
          },
          '&:focus': {
            boxShadow: `0 0 0 1px ${vars.colors.indigo8}, inset 0 0 0 1px ${vars.colors.indigo8}`
          }
        }
      }
    }
  },
  defaultVariants: {
    color: 'gray'
  }
})

export type HomePageButtonVariants = RecipeVariants<typeof button>
