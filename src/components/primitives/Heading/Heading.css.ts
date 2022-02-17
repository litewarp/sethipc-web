import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, sprinkles } from '@/styles'
import { style } from '@vanilla-extract/css'

export const headingBase = style([
  sprinkles({
    display: 'block',
    fontWeight: 500
  }),
  {
    margin: 0,
    lineHeight: 1,
    fontVariantNumeric: 'tabular-nums'
  }
])

export const heading = recipe({
  base: headingBase,
  variants: {
    size: {
      1: sprinkles({
        fontSize: {
          mobile: 4,
          tablet: 5
        },
        lineHeight: {
          mobile: '20px',
          tablet: '23px'
        },
        letterSpacing: {
          tablet: '-.015em'
        }
      }),
      2: sprinkles({
        fontSize: {
          mobile: 6,
          tablet: 7
        },
        lineHeight: {
          mobile: '25px',
          tablet: '30px'
        },
        letterSpacing: {
          mobile: '-.016em',
          tablet: '-.031em'
        },
        textIndent: {
          tablet: '-.005em'
        }
      }),
      3: sprinkles({
        fontSize: {
          mobile: 7,
          tablet: 8
        },
        lineHeight: {
          mobile: '33px',
          tablet: '41px'
        },
        letterSpacing: {
          mobile: '-.031em',
          tablet: '-.034em'
        },
        textIndent: {
          mobile: '-.005em',
          tablet: '-.018em'
        }
      }),
      4: sprinkles({
        fontSize: {
          mobile: 8,
          tablet: 9
        },
        lineHeight: {
          mobile: '35px',
          tablet: '55px'
        },
        letterSpacing: {
          mobile: '-.034em',
          tablet: '-.055em'
        },
        textIndent: {
          mobile: '-.018em',
          tablet: '-.025em'
        }
      })
    }
  },
  defaultVariants: {
    size: 3
  }
})

export type HeadingVariants = RecipeVariants<typeof heading>
