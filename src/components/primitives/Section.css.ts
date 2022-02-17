import { style, styleVariants } from '@vanilla-extract/css'
import { sprinkles } from '@/styles'

export const sectionBase = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  selectors: {
    '&::before': {
      boxSizing: 'border-box',
      content: '""'
    },
    '&::after': {
      boxSizing: 'border-box',
      content: '""'
    }
  }
})

export const section = styleVariants({
  1: [sectionBase, sprinkles({ paddingY: 3 })],
  2: [sectionBase, sprinkles({ paddingY: 5 })],
  3: [sectionBase, sprinkles({ paddingY: 9 })]
})
