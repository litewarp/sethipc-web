import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useThemeToggle } from '../hooks/useThemeToggle'
import { IconButton } from './primitives'

export default function ThemeToggle() {
  const { isMounted, toggleTheme, resolvedTheme } = useThemeToggle()

  // delay rendering to avoid hydration mismatch
  if (!isMounted) return null

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => toggleTheme()}
      variant="ghost"
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon height={20} width={20} />
      ) : (
        <MoonIcon height={20} width={20} />
      )}
    </IconButton>
  )
}
