import { sprinkles, vars } from '@/styles'
import { style, styleVariants } from '@vanilla-extract/css'

export const form = style([
  {
    all: 'unset',
    width: '100%'
  },
  sprinkles({ display: 'flex', flexDirection: 'column', gap: vars.space[3] })
])

const errorMessageBase = style({
  lineHeight: 1,
  fontSize: 15,
  color: vars.colors.tomato.tomato7
})

export const errorMessage = styleVariants({
  error: [errorMessageBase, { display: 'block' }],
  none: [errorMessageBase, { display: 'none' }]
})

export const submitButton = style([
  {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    width: 150,
    backgroundColor: vars.colors.indigo.indigo4,
    color: vars.colors.indigo.indigo11,
    boxShadow: `0 2px 10px ${vars.colors.blackA.blackA7}`,
    selectors: {
      '&:hover': { backgroundColor: vars.colors.indigo.indigo5 },
      '&:focus': { boxShadow: `0 0 0 2px ${vars.colors.indigo.indigo7}` }
    }
  },
  sprinkles({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: {
      tablet: 7
    }
  })
])

export const errorMessageContainer = style({
  minHeight: '18px'
})
