import { styled } from '../../stitches.config'
import NextLink from 'next/link'
import { HamburgerMenuIcon, TargetIcon } from '@radix-ui/react-icons'
import { Text, Link, Box, Flex } from '../primitives'
import ThemeToggle from '../ThemeToggle'
import SethiPCLogo from '../SethiPCLogo'
import { Email, Github, Twitter } from '../ContactMethods'
import { ScrollArea } from './ScrollArea'
import { IconButton } from '../primitives/IconButton'
import { useHeader } from './useHeader'
import { NavHeading } from '../primitives/NavHeading'
import { NavItem } from '../primitives/NavItem'
import { useRouter } from 'next/router'

export const PageContainer = styled(Flex, {
  flexDirection: 'column'
})

export const NavContainer = styled(Box, {
  width: '100%',
  maxHeight: 'auto',
  borderBottom: '1px solid',
  borderColor: '$slate6',
  WebkitOverflowScrolling: 'touch',
  overFlowX: 'hidden'
})

export function Header() {
  const router = useRouter()
  const { isOpen, toggle, setIsOpen } = useHeader()
  return (
    <NavContainer>
      <ScrollArea>
        <Flex css={{ alignItems: 'center', px: '$4', py: '$3', '@bp2': { py: '$2' } }}>
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
          <Flex
            align="center"
            css={{
              ml: 'auto',
              display: 'none',
              '@bp2': { display: 'inline-flex' },
              gap: '$3',
              marginRight: '$3'
            }}
          >
            {['law', 'code', 'about'].map((path) => (
              <NavItem
                key={path}
                href={`/${path}`}
                active={router.pathname === `/${path}`}
              >
                <NavHeading>{path[0].toUpperCase() + path.slice(1)}</NavHeading>
              </NavItem>
            ))}
          </Flex>
          <Box css={{ width: 35, ml: 'auto', '@bp2': { ml: '$0' } }}>
            <ThemeToggle />
          </Box>
          <Box css={{ ml: '$2', '@bp2': { display: 'none' } }}>
            <IconButton
              variant="ghost"
              onClick={() => toggle()}
              state={isOpen ? 'active' : undefined}
            >
              <HamburgerMenuIcon height={20} width={20} />
            </IconButton>
          </Box>
        </Flex>
        <Box css={{ display: isOpen ? 'block' : 'none' }}>
          {['law', 'code', 'about'].map((path) => {
            return (
              <Box key={path} css={{ mb: '$4' }}>
                <NavItem href={`/${path}`} active={router.pathname === `/${path}`}>
                  <NavHeading>{path[0].toUpperCase() + path.slice(1)}</NavHeading>
                </NavItem>
              </Box>
            )
          })}
        </Box>
      </ScrollArea>
    </NavContainer>
  )
}
