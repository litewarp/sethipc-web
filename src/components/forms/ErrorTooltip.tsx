import React from 'react'
import { styled, keyframes } from '@/stitches.config'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { violet, blackA } from '@radix-ui/colors'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

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

const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: '$primaryText',
  backgroundColor: '$secondaryBg',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '200ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
})

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white'
})

// Your app...
const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$tomato7',
  boxShadow: `0 2px 10px $colors$blackA7`,
  marginTop: 2,
  '&:hover': { color: '$tomato8' },
  '&:focus': { boxShadow: `0 0 0 2px black` }
})

interface Props {
  error?: string
}

export function ErrorTooltip(props: Props) {
  if (!props.error) return null
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        <IconButton>
          <ExclamationTriangleIcon width={20} height={20} />
        </IconButton>
      </TooltipPrimitive.Trigger>
      <TooltipContent sideOffset={5}>
        {props.error}
        <StyledArrow />
      </TooltipContent>
    </TooltipPrimitive.Root>
  )
}
