import { style, styleVariants } from '@vanilla-extract/css'
import { atoms } from '@/styles'

const base = style([
  atoms({ boxSizing: 'border-box', flexShrink: 0, marginX: 'auto', paddingX: 'lg' })
])

export const container = styleVariants({
  1: [base, atoms({ maxWidth: 'xsmall' })],
  2: [base, atoms({ maxWidth: 'small' })],
  3: [base, atoms({ maxWidth: 'medium' })],
  4: [base, atoms({ maxWidth: 'large' })],
  5: [base, { maxWidth: 'none' }]
})
