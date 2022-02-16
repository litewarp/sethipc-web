import { vars } from '@/styles'
import { keyframes, style } from '@vanilla-extract/css'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

export const arrow = style({
  fill: 'white'
})

export const content = style({
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: '$primaryText',
  backgroundColor: '$secondaryBg',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animationDuration: '200ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'transform, opacity',
      selectors: {
        '&[data-state="delayed-open"][data-side="top"]': {
          animationName: slideDownAndFade
        },
        '&[data-state="delayed-open"][data-side="right"]': {
          animationName: slideLeftAndFade
        },
        '&[data-state="delayed-open"][data-side="bottom"]': {
          animationName: slideUpAndFade
        },
        '&[data-state="delayed-open"][data-side="left"]': {
          animationName: slideRightAndFade
        }
      }
    }
  }
})

export const errorIcon = style({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.tomato.tomato7,
  boxShadow: `0 2px 10px ${vars.colors.blackA.blackA7}`,
  marginTop: 2,
  selectors: {
    '&:hover': { color: vars.colors.tomato.tomato7 },
    '&:focus': { boxShadow: `0 0 0 2px ${vars.colors.blackA.blackA2}` }
  }
})
