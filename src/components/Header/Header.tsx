import NextLink from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import ThemeToggle from '../ThemeToggle'
import { SethiPCLogo } from '../SethiPCLogo'
import { ScrollArea } from './ScrollArea'
import { IconButton } from '../primitives/IconButton/IconButton'
import { useHeader } from './useHeader'
import { NavHeading, NavItem } from '../primitives/NavItem'
import { useRouter } from 'next/router'
import * as styles from './Header.css'
import { sprinkles } from '@/styles'
import React from 'react'

export function Header() {
  const router = useRouter()
  const { isOpen, toggle, setIsOpen } = useHeader()
  return (
    <div className={styles.navOuterContainer}>
      <ScrollArea>
        <div className={styles.navInnerContainer}>
          <NextLink href="/" passHref>
            <a className={styles.logoContainer}>
              <span className={styles.hiddenSpan}>SethiPC homepage</span>
              <SethiPCLogo />
            </a>
          </NextLink>
          <div className={styles.navItemsContainer}>
            {['law', 'code', 'about'].map((path) => (
              <NavItem
                key={path}
                href={`/${path}`}
                active={router.pathname === `/${path}`}
              >
                <NavHeading>{path}</NavHeading>
              </NavItem>
            ))}
          </div>
          <div className={styles.themeToggle}>
            <ThemeToggle />
          </div>
          <div className={styles.iconButton}>
            <IconButton
              variant="ghost"
              onClick={() => toggle()}
              state={isOpen ? 'active' : undefined}
            >
              <HamburgerMenuIcon height={20} width={20} />
            </IconButton>
          </div>
        </div>
        <div className={sprinkles({ display: isOpen ? 'block' : 'none' })}>
          {['law', 'code', 'about'].map((path) => (
            <div className={styles.dropdownContainer} key={path}>
              <NavItem href={`/${path}`} active={router.pathname === `/${path}`}>
                <NavHeading>{path}</NavHeading>
              </NavItem>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
