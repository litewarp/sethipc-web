import { styled } from '@/stitches.config'
import { useSidebarStore } from './Sidebar'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { srOnly } from '@/styles/tailwind'

const Button = styled('button', {
  zIndex: '$1',
  px: '$4',
  bc: 'transparent',
  '&:focus': {}
})

export function SidebarToggle() {
  const toggleSidebar = useSidebarStore((s) => s.toggleOpen)
  return (
    <Button type="button" name="Toggle Sidebar" onClick={() => toggleSidebar()}>
      <span className={srOnly()}>Toggle Sidebar</span>
      <HamburgerMenuIcon width={20} height={20} />
    </Button>
  )
}
