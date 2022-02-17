import { vars } from '@/styles'
import { keyframes, style } from '@vanilla-extract/css'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' }
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 }
})

export const root = style({
  borderRadius: 6,
  width: '100%',
  boxShadow: `0 2px 10px ${vars.colors.blackA4}`
})

export const item = style({
  overflow: 'hidden',
  marginTop: '1px',
  selectors: {
    '&:first-child': {
      marginTop: 0,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },

    '&:last-child': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4
    },

    '&:focus-within': {
      position: 'relative',
      zIndex: 1,
      boxShadow: `0 0 0 2px ${vars.colors.mauve11}`
    }
  }
})

export const header = style({
  all: 'unset',
  display: 'flex'
})

export const trigger = style({
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 600,
  color: vars.colors.textPrimary,
  boxShadow: `0 1px 0 ${vars.colors.mauve6}`,
  selectors: {
    '&[data-state="closed"]': { backgroundColor: vars.colors.indigo5 },
    '&[data-state="open"]': { backgroundColor: vars.colors.indigo6 },
    '&:hover': { backgroundColor: vars.colors.mauve7 }
  }
})

export const content = style({
  overflow: 'hidden',
  fontSize: 15,
  color: vars.colors.textPrimary,
  backgroundColor: vars.colors.bgDimmed,
  selectors: {
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
    }
  }
})

export const text = style({
  padding: '15px 20px'
})

export const icon = style({
  color: vars.colors.violet10,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  selectors: {
    '[data-state="open"] &': {
      transform: 'rotate(180deg)'
    }
  }
})
