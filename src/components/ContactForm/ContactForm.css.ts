import { sprinkles, vars } from '@/styles'
import { style, styleVariants } from '@vanilla-extract/css'

export const form = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[3],
  all: 'unset',
  width: '100%'
})

const errorMessageBase = style({
  lineHeight: 1,
  fontSize: 15,
  color: vars.colors.tomato7
})

export const errorMessage = styleVariants({
  error: [errorMessageBase, { display: 'block' }],
  none: [errorMessageBase, { display: 'none' }]
})

export const submitButton = style([
  {
    height: 35,
    width: 150,
    boxShadow: `0 2px 10px ${vars.colors.blackA7}`,
    selectors: {
      '&:hover': { backgroundColor: vars.colors.indigo5 },
      '&:focus': { boxShadow: `0 0 0 2px ${vars.colors.indigo7}` }
    }
  },
  sprinkles({
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: {
      tablet: 7
    },
    paddingX: 3,
    fontSize: 3,
    lineHeight: '20px',
    fontWeight: 500,
    borderRadius: 1,
    bg: vars.colors.indigo4,
    color: vars.colors.indigo11
  })
])

export const errorMessageContainer = style({
  minHeight: '18px'
})
