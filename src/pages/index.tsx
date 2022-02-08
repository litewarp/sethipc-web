import { Box, Flex } from '@/components/primitives'
import AppHeader, { HeaderSeparator, paths } from '@/components/Header'
import { MobileSidebar, SidebarToggle } from '@/components/Sidebar'

export default function HomePage() {
  return (
    <Box>
      <Flex
        css={{
          padding: '0.25rem',
          ai: 'center',
          position: 'absolute',
          right: '$2',
          top: '$5',
          '@bp2': { display: 'none' }
        }}
      >
        <SidebarToggle />
      </Flex>
      <MobileSidebar paths={paths.map((path) => ({ ...path, isCurrent: false }))} />
      <AppHeader />
      <HeaderSeparator css={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }} />
    </Box>
  )
}
