import { vars, sprinkles } from '@/styles'
import { style } from '@vanilla-extract/css'

export const fieldset = sprinkles({
  display: 'flex',
  flexDirection: {
    mobile: 'column',
    tablet: 'row'
  },
  gap: {
    mobile: 2,
    tablet: 4
  },
  marginBottom: {
    mobile: 2,
    tablet: 3
  },
  alignItems: {
    tablet: 'center'
  }
})

export const label = style([
  sprinkles({
    textAlign: {
      mobile: 'left',
      tablet: 'right'
    }
  }),
  {
    fontSize: 15,
    color: vars.colors.indigo11,
    width: '90px'
  }
])

export const input = style({
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: vars.colors.slate11,
  boxShadow: `0 0 0 1px ${vars.colors.indigo7}`,
  height: 35,
  minHeight: 35,
  selectors: {
    '&:focus': { boxShadow: `0 0 0 2px ${vars.colors.indigo8}` }
  }
})

export const textArea = style({
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '10px',
  fontSize: 15,
  lineHeight: 1,
  color: vars.colors.slate11,
  boxShadow: `0 0 0 1px ${vars.colors.indigo7}`,
  height: 'auto',
  resize: 'vertical',
  selectors: {
    '&:focus': { boxShadow: `0 0 0 2px ${vars.colors.indigo8}` }
  }
})

export const inputContainer = style([
  { height: 25 },
  sprinkles({
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  })
])

export const tooltipSpanMobile = style([
  {
    top: 0,
    width: 35,
    left: '-35px'
  },
  sprinkles({
    position: 'absolute',
    alignItems: 'center',
    display: {
      mobile: 'flex',
      tablet: 'none'
    }
  })
])

export const tooltipSpanTablet = style([
  {
    width: 35
  },
  sprinkles({ display: { mobile: 'none', tablet: 'block' } })
])
