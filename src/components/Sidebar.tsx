import { styled, keyframes, css } from '@/stitches.config'
import Link from 'next/link'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { blackA } from '@radix-ui/colors'
import create from 'zustand'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Box, Flex } from './primitives'

/**
 * Types
 */
interface Path {
  href: string
  label: string
  isCurrent: boolean
  icon?: React.ElementType<any>
}

export interface Props {
  paths: Path[]
}

/**
 * Styled Components
 */
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

const srOnly = css({
  position: 'absolute',
  width: '1px',
  height: '1px',
  p: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0
})

const DialogRoot = styled(DialogPrimitive.Root, {
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

const DialogOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

const DialogTrigger = styled(DialogPrimitive.Trigger, {})
const DialogContent = styled(DialogPrimitive.Content, {
  height: '100%',
  width: '16rem',
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
const DialogClose = styled(DialogPrimitive.Close, {})
const DialogTitle = styled(DialogPrimitive.Title, {
  display: 'flex',
  alignItems: 'center'
})

const anchorIcon = css({
  mr: '$3',
  flexShrink: 0,
  size: '$6',
  variants: {
    current: {
      true: {
        color: '$slate12'
      },
      false: {
        color: '$slate11',
        '&:hover': {
          color: '$slate12'
        }
      }
    }
  }
})

const icon = css({})

const Image = styled('img', {
  height: '$8',
  width: '100%'
})

const NavAnchor = styled('a', {
  display: 'flex',
  ai: 'center',
  p: '$2',
  fontSize: '$sm',
  fontWeight: 600,
  borderRadius: '$sm',
  variants: {
    current: {
      true: {
        color: '$slate12',
        bc: '$slate1'
      },
      false: {
        color: '$slate11',
        bc: '$slate2',
        '&:hover': {
          color: '$slate1',
          bc: '$slate3'
        }
      }
    }
  }
})

const Heading = styled('h2', {
  color: '$slate11',
  marginLeft: '$8',
  fontWeight: 800,
  fontSize: '$2xl'
})

const StaticSidebarContainer = styled(Flex, {
  position: 'fixed',
  inset: '0',
  flexDirection: 'column',
  width: '$64',
  variants: {
    hidden: {
      false: {
        display: 'flex'
      },
      true: {
        display: 'none'
      }
    }
  }
})

/**
 * State
 */

interface SidebarStore {
  isOpen: boolean
  setIsOpen: (b: boolean) => void
  toggleOpen: () => void
}

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (b) => set({ isOpen: b }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))

/**
 * Exported Components
 */
export function DesktopSidebar({ paths }: Props) {
  return (
    <StaticSidebarContainer hidden={{ '@initial': true, '@bp2': false }}>
      <Flex
        css={{ flex: '1 1 0%', flexDirection: 'column', minHeight: 0, bc: '$slate2' }}
      >
        <Flex
          align="center"
          css={{ height: '$16', flexShrink: 0, px: '$4', bc: '$slate2' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src="https://pluscriber.com/assets/logo.png" alt="Pluscriber" />
          <Heading>Sethi P.C.</Heading>
          <Flex direction="column" css={{ flex: '1 1 0%', overflowY: 'auto' }}>
            <Flex as="nav" css={{ flex: '1 1 0%', px: '$2', py: '$4', gap: '$1' }}>
              {paths.map((path) => (
                <Link href={path.href} passHref key={path.label}>
                  <NavAnchor className="group" current={path.isCurrent}>
                    {path.icon ? <path.icon aria-hidden="true" /> : null}
                    {path.label}
                  </NavAnchor>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </StaticSidebarContainer>
  )
}

export function MobileSidebar({ paths }: Props) {
  const isOpen = useSidebarStore((s) => s.isOpen)
  const setIsOpen = useSidebarStore((s) => s.setIsOpen)
  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={setIsOpen}
      hidden={{
        '@initial': false,
        '@bp2': true
      }}
    >
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogContent>
          <Flex
            css={{
              flex: '1 1 0%',
              width: '100%',
              pt: '$5',
              pb: '$4',
              bc: '$slate11',
              height: '100%',
              maxWidth: '20rem'
            }}
            direction="column"
          >
            <DialogTitle>
              <Flex css={{ position: 'absolute', top: 0, right: 0, pt: '$2' }}>
                <DialogClose asChild>
                  <Flex
                    as="button"
                    align="center"
                    justify="center"
                    css={{
                      ml: '$1',
                      size: '$10',
                      borderRadius: '$full',
                      '&:focus': {
                        boxShadow: '0 0 0 3px $slate1'
                      }
                    }}
                  >
                    <span>Close Sidebar</span>
                    <Cross2Icon
                      className={anchorIcon()}
                      aria-hidden="true"
                      color="$slate1"
                    />
                  </Flex>
                </DialogClose>
              </Flex>
              <Flex css={{ flexShrink: 0, px: '$4' }} align="center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  css={{ height: '$8', width: 'auto' }}
                  src="https://pluscriber.com/assets/logo.png"
                  alt="Pluscriber"
                />
                <Heading css={{ fontSize: '$xl2' }}>Sethi P.C.</Heading>
              </Flex>
            </DialogTitle>
            <Flex css={{ mt: '$5', flex: '1', height: '0', overflowY: 'auto' }}>
              <Box as="nav" css={{ px: '$2', gap: '$1' }}>
                {paths.map((path) => (
                  <NavAnchor key={path.label} current={path.isCurrent}>
                    {path.icon ? <path.icon aria-hidden="true" /> : null}
                    {path.label}
                  </NavAnchor>
                ))}
              </Box>
            </Flex>
          </Flex>
        </DialogContent>
      </DialogPrimitive.Portal>
    </DialogRoot>
  )
}

const Button = styled('button', {
  px: '$4',
  '&:focus': {
    outline: '2px solid transparent',
    outlineOffset: '2px',
    boxShadow: '0 0 0 2px $mauve5'
  },
  variants: {
    hidden: {
      true: {
        display: 'none'
      },
      false: { display: 'block' }
    }
  }
})

export function SidebarToggle() {
  const toggleSidebar = useSidebarStore((s) => s.toggleOpen)
  return (
    <Button type="button" name="Toggle Sidebar" onClick={() => toggleSidebar()}>
      <span className={srOnly()}>Toggle Sidebar</span>
      <HamburgerMenuIcon className={icon({ color: '$slate12', fontSize: '$2xl' })} />
    </Button>
  )
}

export function Sidebar(props: Props) {
  return (
    <>
      <DesktopSidebar paths={props.paths} />
      <MobileSidebar paths={props.paths} />
    </>
  )
}
