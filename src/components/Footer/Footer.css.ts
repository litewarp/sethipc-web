import { vars, atoms } from '@/styles'
import { style } from '@vanilla-extract/css'

export const footer = style([
  atoms({
    display: 'block',
    boxSizing: 'border-box',
    paddingY: 'sm'
  })
])

export const topDiv = atoms({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'center',
  marginBottom: 'lg'
})

export const separator = style({
  selectors: {
    '&[data-orientation="horizontal"]': {
      width: '40%'
    }
  }
})

export const container = style([
  atoms({
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingX: 'lg',
    maxWidth: 'large'
  })
])

export const containerInner = style([
  atoms({
    display: 'flex',
    justifyContent: 'spaceBetween'
  }),
  {
    gap: '3px'
  }
])

export const logoContainer = style([
  atoms({
    display: 'flex'
  }),
  {
    gap: 3
  }
])
