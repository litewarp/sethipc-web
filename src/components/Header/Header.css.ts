import { style } from '@vanilla-extract/css'
import { flex } from '@/components/primitives/Flex.css'
import { vars } from '@/styles'
import { sprinkles } from '@/styles'

export const navOuterContainer = style({
  width: '100%',
  maxHeight: 'auto',
  borderBottom: `1px solid ${vars.colors.slate.slate3}`,
  borderColor: '$slate6',
  WebkitOverflowScrolling: 'touch',
  overflowX: 'hidden'
})

export const navInnerContainer = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingX: 4,
    paddingY: {
      mobile: 3,
      tablet: 2
    },
    marginLeft: 'auto',
    marginRight: 'auto'
  }),
  { maxWidth: 1145 }
])

export const logoContainer = style({
  boxShadow: 'border-box',
  color: vars.colors.hiContrast,
  display: 'inline-flex',
  textDecoration: 'none',
  ':focus': {
    boxShadow: 'none'
  }
})

export const hiddenSpan = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0
})

export const navItemsContainer = style([
  sprinkles({
    display: {
      mobile: 'none',
      tablet: 'inline-flex'
    }
  }),
  { marginLeft: 'auto', gap: vars.sizes[3], marginRight: vars.sizes[3] }
])

export const themeToggle = style([
  sprinkles({
    display: 'block',
    marginLeft: {
      mobile: 'auto',
      tablet: 0
    }
  }),
  { width: 35 }
])

export const iconButton = sprinkles({
  marginLeft: 2,
  display: {
    mobile: 'inline-block',
    tablet: 'none'
  }
})

export const dropdownContainer = style({
  display: 'block',
  marginBottom: 4
})
