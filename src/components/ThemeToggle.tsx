import { styled, css, CSS, VariantProps } from '../stitches.config'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { useThemeToggle } from '../hooks/useThemeToggle'
import { IconButton } from './primitives'

type IconButtonVariants = VariantProps<typeof IconButton>

type ThemeToggleProps = IconButtonVariants & { css?: CSS; as?: any }

export default function ThemeToggle(props: ThemeToggleProps) {
  const { isMounted, toggleTheme, resolvedTheme } = useThemeToggle()

  // delay rendering to avoid hydration mismatch
  if (!isMounted) return null

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => toggleTheme()}
      variant="ghost"
      {...(props.css ? { css: props.css } : {})}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon height={20} width={20} />
      ) : (
        <MoonIcon height={20} width={20} />
      )}
    </IconButton>
  )
}
