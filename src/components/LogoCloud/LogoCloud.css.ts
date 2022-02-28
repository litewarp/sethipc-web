import { sprinkles, vars } from '@/styles'
import { responsiveStyle } from '@/styles/responsiveStyle'
import { style } from '@vanilla-extract/css'

export const container = sprinkles({
  display: 'block',
  maxWidth: 'large',
  paddingY: {
    mobile: 'xl',
    tablet: 'xxl'
  },
  paddingX: {
    mobile: 'sm',
    tablet: 'lg'
  }
})

export const logosContainer = style([
  {
    display: 'grid',
    gap: 1,
    ...responsiveStyle({
      mobile: {
        marginTop: vars.space.lg,
        gridTemplateRows: 'repeat(2, minmax(0, 1fr))'
      },
      tablet: {
        marginTop: vars.space.xl,
        gridTemplateRows: 'repeat(3, minmax(0, 1fr))'
      }
    })
  }
])

export const logo = style([
  sprinkles({
    display: 'flex',
    padding: 'md'
  }),
  {
    backgroundColor: vars.colors.slate2,
    gridColumn: 'span 1 / span 1'
  }
])

export const title = style([
  {
    textAlign: 'center',
    fontWeight: 600,
    color: vars.colors.slate7,
    letterSpacing: '.05em'
  }
])

export const image = style({
  maxHeight: '3rem'
})
