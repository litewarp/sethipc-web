import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
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
        backgroundColor: '$slate4',
        color: '$slate11',
        selectors: {
          '&:hover': {
            backgroundColor: '$slate5'
          },
          '&:active': {
            backgroundColor: '$slate6'
          },
          '&:focus': {
            boxShadow: '0 0 0 1px $colors$slate8, inset 0 0 0 1px $colors$slate8'
          }
        }
      },
      grass: {
        backgroundColor: '$grass4',
        color: '$grass11',
        selectors: {
          '&:hover': {
            backgroundColor: '$grass5'
          },
          '&:active': {
            backgroundColor: '$grass6'
          },
          '&:focus': {
            boxShadow: '0 0 0 1px $colors$grass8, inset 0 0 0 1px $colors$grass8'
          }
        }
      },

      indigo: {
        backgroundColor: '$indigo4',
        color: '$indigo11',
        selectors: {
          '&:hover': {
            backgroundColor: '$indigo5'
          },
          '&:active': {
            backgroundColor: '$indigo6'
          },
          '&:focus': {
            boxShadow: '0 0 0 1px $colors$indigo8, inset 0 0 0 1px $colors$indigo8'
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
