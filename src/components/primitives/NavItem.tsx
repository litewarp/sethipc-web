import NextLink from 'next/link'
import * as styles from './NavItem.css'

type NavItemProps = {
  children: React.ReactNode
  active?: boolean
  href: string
  [key: string]: unknown
}

export function NavItem(props: NavItemProps) {
  const { active, href, children, ...rest } = props
  const isExternal = href.startsWith('http')
  return (
    <>
      {isExternal ? (
        <span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...rest}
            className={styles.navAnchor({ state: active ? 'active' : undefined })}
          >
            {children}
          </a>
        </span>
      ) : (
        <NextLink href={href} passHref>
          <a className={styles.navAnchor({ state: active ? 'active' : undefined })}>
            {children}
          </a>
        </NextLink>
      )}
    </>
  )
}

export function NavHeading(props: { children: string }) {
  return (
    <h4 className={styles.navHeading}>
      {props.children[0].toUpperCase() + props.children.slice(1)}
    </h4>
  )
}
