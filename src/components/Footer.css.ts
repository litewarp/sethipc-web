import { vars, sprinkles } from '@/styles'
import { style } from '@vanilla-extract/css'

export const footer = sprinkles({
  display: 'block',
  boxSizing: 'border-box',
  paddingY: 4
})

export const topDiv = sprinkles({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'center',
  marginBottom: 4
})

export const separator = style({
  selectors: {
    '&[data-orientation="horizontal"]': {
      width: '40%'
    }
  }
})

export const container = style([
  sprinkles({
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingX: 5
  }),
  {
    maxWidth: '1145px'
  }
])

export const containerInner = sprinkles({
  display: 'flex',
  gap: 3,
  justifyContent: 'space-between'
})

export const logoContainer = sprinkles({
  gap: 3,
  display: 'flex'
})
