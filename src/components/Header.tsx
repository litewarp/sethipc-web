import { styled } from '../stitches.config'
import NextLink from 'next/link'
import { TargetIcon } from '@radix-ui/react-icons'
import { Text, Link, Box, Flex } from './primitives'
import ThemeToggle from './ThemeToggle'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import SethiPCLogo from './SethiPCLogo'
import { Email, Github, Twitter } from './ContactMethods'

interface Path {
  href: string
  label: string
  icon?: React.ReactElement
}

export const paths = [
  {
    href: '/law',
    label: 'Law'
  },
  {
    href: '/code',
    label: 'Code'
  }
]

export const HeaderSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$indigo3',
  '&[data-orientation=horizontal]': { height: 1, width: '98%', mx: 'auto' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 }
})

export default function AppHeader() {
  return (
    <Flex
      as="header"
      align="center"
      css={{
        py: '$4',
        px: '$4',
        jc: 'space-between',
        position: 'relative',
        zIndex: '1'
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            '&:focus': {
              boxShadow: 'none'
            },
            textDecoration: 'none'
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0
            }}
          >
            SethiPC homepage
          </span>
          <SethiPCLogo />
        </Box>
      </NextLink>
      <Flex as="nav" css={{ ai: 'center', minHeight: 30 }}>
        <Flex css={{ ai: 'center', display: 'none', '@bp2': { display: 'flex' } }}>
          {paths.map((path) => (
            <NextLink href={path.href} passHref key={path.label}>
              <Link variant="subtle" css={{ mr: '$7', '@bp2': { mr: '$10' } }}>
                <Text>{path.label}</Text>
              </Link>
            </NextLink>
          ))}
        </Flex>
        <Flex
          css={{ ai: 'center', gap: '$2', display: 'none', '@bp2': { display: 'flex' } }}
        >
          <Github />
          <Twitter />
          <Email />
          <ThemeToggle />
        </Flex>
      </Flex>
    </Flex>
  )
}
