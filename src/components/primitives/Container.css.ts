import { style, styleVariants } from '@vanilla-extract/css'
import { sprinkles } from '@/styles'

const base = style([
  sprinkles({ boxSizing: 'border-box', flexShrink: 0, marginX: 'auto', paddingX: 5 })
])

export const container = styleVariants({
  1: [base, sprinkles({ maxWidth: '430px' })],
  2: [base, sprinkles({ maxWidth: '715px' })],
  3: [base, sprinkles({ maxWidth: '1145px' })],
  4: [base, sprinkles({ maxWidth: 'none' })]
})
