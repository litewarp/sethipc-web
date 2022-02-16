import { vars } from '@/styles'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const separator = recipe({
  base: {
    border: 'none',
    margin: 0,
    flexShrink: 0,
    backgroundColor: vars.colors.slate.slate6,
    cursor: 'default'
  },
  variants: {
    size: {
      '1': {
        selectors: {
          '&[data-orientation="horizontal"]': {
            height: '1px',
            width: vars.sizes[3]
          },

          '&[data-orientation="vertical"]': {
            width: '1px',
            height: vars.sizes[3]
          }
        }
      },
      '2': {
        selectors: {
          '&[data-orientation="horizontal"]': {
            height: '1px',
            width: vars.sizes[7]
          },

          '&[data-orientation="vertical"]': {
            width: '1px',
            height: vars.sizes[7]
          }
        }
      },
      '3': {
        selectors: {
          '&[data-orientation="horizontal"]': {
            height: '1px',
            width: vars.sizes[9]
          },

          '&[data-orientation="vertical"]': {
            width: '1px',
            height: vars.sizes[9]
          }
        }
      },
      'w-40': {
        selectors: {
          '&[data-orientation="horizontal"]': {
            height: '1px',
            width: '40%'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
})

export type SeparatorVariants = RecipeVariants<typeof separator>
