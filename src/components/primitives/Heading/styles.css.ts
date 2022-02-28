import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '@/styles'

const level = {
  '1': style([
    atoms({
      fontSize: '7xl',
      fontWeight: 'semiBold',
      letterSpacing: 'tight',
      lineHeight: '7xl'
    })
  ]),
  '2': style([
    atoms({
      fontSize: '5xl',
      fontWeight: 'semiBold',
      letterSpacing: 'tight',
      lineHeight: '5xl'
    })
  ]),
  '3': style([
    atoms({
      fontSize: '3xl',
      fontWeight: 'semiBold',
      letterSpacing: 'tight',
      lineHeight: '3xl'
    })
  ])
}

export const variants = recipe({
  variants: {
    level,
    responsive: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      variants: {
        level: '1',
        responsive: true
      },
      style: atoms({
        fontSize: { mobile: '3xl', tablet: '5xl' }
      })
    },
    {
      variants: {
        level: '2',
        responsive: true
      },
      style: atoms({
        fontSize: { mobile: 'xl', tablet: '3xl' },
        letterSpacing: { mobile: 'normal', tablet: 'tight' }
      })
    }
  ]
})

export type Variants = RecipeVariants<typeof variants>
