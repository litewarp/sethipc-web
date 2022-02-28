import { atoms } from '@/styles'
import { globalStyle, style } from '@vanilla-extract/css'

export const container = style([
  atoms({
    marginX: 'auto',
    paddingX: 'lg',
    paddingY: {
      mobile: 'md',
      tablet: 'lg'
    },
    width: {
      mobile: '90%',
      tablet: '80%',
      desktop: '100%'
    }
  })
])

export const success = style([
  atoms({
    maxWidth: 'large',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    marginX: 'auto',
    paddingX: 'lg'
  })
])

globalStyle(`.${success}:not(:first-child) &`, {
  marginTop: '1.5em'
})
