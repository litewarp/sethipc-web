import { sprinkles, vars } from '@/styles'
import { style } from '@vanilla-extract/css'

export const container = sprinkles({
  display: 'block',
  maxWidth: '1145px',
  paddingY: {
    mobile: 7,
    tablet: 8
  },
  paddingX: {
    mobile: 3,
    tablet: 6
  }
})

export const logosContainer = sprinkles({
  display: 'grid',
  marginTop: {
    mobile: 5,
    desktop: 6
  },
  gap: 1,
  gridRows: {
    mobile: 2,
    tablet: 3
  }
})

export const logo = style([
  sprinkles({
    display: 'flex',
    padding: 4
  }),
  {
    backgroundColor: vars.colors.slate.slate2,
    gridColumn: 'span 1 / span 1'
  }
])

export const title = style([
  {
    textAlign: 'center',
    fontWeight: 600,
    color: vars.colors.slate.slate7,
    letterSpacing: '.05em'
  }
])
