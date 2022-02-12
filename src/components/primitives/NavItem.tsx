import { Box, Link } from '.'
import NextLink from 'next/link'
interface NavItemProps {
  children: React.ReactNode
  active?: boolean
  href: string
  [key: string]: unknown
}

export function NavItem(props: NavItemProps) {
  const { children, active, href, ...rest } = props
  const isExternal = href.startsWith('http')
  return (
    <Box
      as={isExternal ? 'span' : NextLink}
      {...(isExternal ? {} : { href, passHref: true })}
    >
      <Box
        {...rest}
        {...(isExternal ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
        as="a"
        css={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: '$primaryBg',
          borderRadius: 4,
          py: '$2',
          px: '$5',
          backgroundColor: active ? '$indigo5' : 'transparent',
          userSelect: 'none',
          minHeight: '2.5rem',
          transition: 'background-color 50ms linear',
          '&:hover': {
            backgroundColor: active ? '$indigo5' : '$indigo4'
          }
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
