import { style } from '@vanilla-extract/css'
import { flex } from '@/components/primitives/Flex.css'

export const pageContainer = style([
  flex({
    direction: 'column'
  }),
  {
    minHeight: '100vh'
  }
])

export const childContainer = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '100%',
  width: '100%',
  maxWidth: 1145
})

export const footerContainer = style({
  boxSizing: 'border-box',
  marginTop: 'auto'
})
