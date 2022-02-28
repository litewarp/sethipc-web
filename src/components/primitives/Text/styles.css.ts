import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '@/styles'

const variant = {
  extraLarge: style([
    atoms({
      fontSize: 'xl',
      fontWeight: 'medium',
      letterSpacing: 'tight',
      lineHeight: 'xl'
    })
  ]),
  large: style([
    atoms({
      fontSize: 'lg',
      fontWeight: 'normal',
      letterSpacing: 'tight',
      lineHeight: 'lg'
    })
  ]),
  base: atoms({
    fontSize: 'base',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 'base'
  }),
  small: style([
    atoms({
      fontSize: 'sm',
      fontWeight: 'normal',
      letterSpacing: 'normal',
      lineHeight: 'sm'
    })
  ]),
  label: atoms({
    color: 'secondary',
    fontSize: 'xs',
    fontWeight: 'semiBold',
    letterSpacing: 'wide',
    textTransform: 'uppercase'
  })
}

export const variants = recipe({
  variants: {
    variant,
    ellipsis: {
      true: style([
        style({
          textOverflow: 'ellipsis'
        }),
        atoms({
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        })
      ])
    }
  }
})

export type Variants = RecipeVariants<typeof variants>
