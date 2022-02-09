import { styled, css } from '../stitches.config'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { useThemeToggle } from '../hooks/useThemeToggle'

const StyledToggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  backgroundColor: 'transparent',
  color: '$primaryText',
  height: 35,
  width: 35,
  borderRadius: 4,
  borderWidth: 0,
  boxSizing: 'border-box',
  outline: 'none',
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 10px $blackA7',
  border: '1px solid $slate7',
  '@hover': {
    '&:hover': {
      backgroundColor: '$slateA3'
    }
  },
  '&:active': {
    backgroundColor: '$slateA4'
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slateA8, 0 0 0 1px $slateA8'
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$slate6'
  }
  // '&:hover': { backgroundColor: '$mauve3' },
  // // "&[data-state=on]": { backgroundColor: "$tomato2", color: "$tomato9" },
  // '&:focus': { borderColor: '$slate8', boxShadow: `0 0 0 2px $slate8` }
})

export default function ThemeToggle() {
  const { isMounted, toggleTheme, resolvedTheme } = useThemeToggle()

  // delay rendering to avoid hydration mismatch
  if (!isMounted) return null

  return (
    <StyledToggle
      aria-label="Toggle dark mode"
      pressed={resolvedTheme === 'dark'}
      onPressedChange={() => toggleTheme()}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon height={20} width={20} />
      ) : (
        <MoonIcon height={20} width={20} />
      )}
    </StyledToggle>
  )
}
