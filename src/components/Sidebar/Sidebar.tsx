import Link from 'next/link'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import create from 'zustand'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Box, Flex } from '../primitives'
import { SethiPCLogo } from '../SethiPCLogo'
import {
  DialogRoot,
  DialogOverlay,
  DialogTitle,
  DialogContent,
  DialogClose
} from './Dialog'
import { Heading, NavAnchor, StaticSidebarContainer, anchorIcon } from './styles'
import { srOnly } from '@/styles/tailwind'

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

interface SidebarStore {
  isOpen: boolean
  setIsOpen: (b: boolean) => void
  toggleOpen: () => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (b) => set({ isOpen: b }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))

/**
 * Static Sidebar
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
          <SethiPCLogo />
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

/**
 * Responsive Mobile Sidebar
 */
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
              width: '100%',
              pt: '$8',
              pb: '$4',
              bc: '$slate1',
              height: '100%'
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
                      mr: '$3',
                      width: 35,
                      height: 35,
                      borderRadius: '$full',
                      '&:focus': {
                        boxShadow: '0 0 0 3px $slate1'
                      }
                    }}
                  >
                    <span className={srOnly()}>Close Sidebar</span>
                    <Cross2Icon
                      className={anchorIcon({ color: '$slate1', height: 20, width: 20 })}
                      aria-hidden="true"
                    />
                  </Flex>
                </DialogClose>
              </Flex>
              <Flex css={{ flexShrink: 0, px: '$4' }} align="center">
                <SethiPCLogo size="sm" />
              </Flex>
            </DialogTitle>
            <Flex css={{ marginTop: '$10', flex: '1', height: '0', overflowY: 'auto' }}>
              <Flex
                as="nav"
                direction="column"
                css={{ px: '$4', gap: '$4', width: '100%', borderRadius: 6 }}
              >
                {paths.map((path) => (
                  <NavAnchor key={path.label} current={path.isCurrent}>
                    {path.icon ? <path.icon aria-hidden="true" /> : null}
                    {path.label}
                  </NavAnchor>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </DialogContent>
      </DialogPrimitive.Portal>
    </DialogRoot>
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
