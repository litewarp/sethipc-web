import React from 'react'
import * as styles from './HomePageButton.css'

type Props = styles.HomePageButtonVariants &
  Omit<React.HTMLProps<HTMLButtonElement>, 'type'> & {
    type?: 'submit' | 'button'
    children: React.ReactNode
  }

export function HomePageButton(props: Props) {
  const { color, children, ...rest } = props
  return (
    <button {...rest} className={styles.button({ color })}>
      {children}
    </button>
  )
}

type AnchorProps = styles.HomePageButtonVariants &
  React.HTMLProps<HTMLAnchorElement> & { children: React.ReactNode }

export function HomePageAnchor(props: AnchorProps) {
  const { color, children, ...rest } = props
  return (
    <a {...rest} className={styles.button({ color })}>
      {children}
    </a>
  )
}
