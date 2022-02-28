import { sprinkles, vars } from '@/styles'
import { style, styleVariants } from '@vanilla-extract/css'

export const form = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }),
  {
    all: 'unset',
    rowGap: '.75rem'
  }
])

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
    display: 'inlineFlex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: {
      tablet: 'xl'
    },
    paddingX: 'md',
    fontSize: 'base',
    lineHeight: 'base',
    fontWeight: 'normal',
    borderRadius: 'sm',
    backgroundColor: 'promoteLight',
    color: 'promote'
  })
])

export const errorMessageContainer = style({
  minHeight: '18px'
})
