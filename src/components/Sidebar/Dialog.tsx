import { keyframes, styled } from '@/stitches.config'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const slideIn = keyframes({
  from: { transform: `translateX(0px)`, opacity: 1 },
  to: { transform: `translateX(-300px)`, opacity: 0 }
})

const slideOut = keyframes({
  from: { transform: `translateX(-300px)`, opacity: 0 },
  to: { transform: `translateX(0px)`, opacity: 1 }
})

export const DialogRoot = styled(DialogPrimitive.Root, {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  zIndex: '$4',
  variants: {
    hidden: {
      true: { display: 'none' }
    }
  }
})

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$blackA9',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

export const DialogTrigger = styled(DialogPrimitive.Trigger, {})
export const DialogContent = styled(DialogPrimitive.Content, {
  height: '100%',
  width: '24rem',
  position: 'fixed',
  left: '0%',
  top: '0%',
  '&[data-state="open"]': {
    animation: `${slideOut} 300ms ease-out`
  },
  '&[data-state="closed"]': {
    animation: `${slideIn} 300ms ease-out`
  }
})
export const DialogClose = styled(DialogPrimitive.Close, {})
export const DialogTitle = styled(DialogPrimitive.Title, {
  display: 'flex',
  alignItems: 'center'
})
