import React, { ReactNode } from 'react'
import { VariantProps, CSS } from '@/stitches.config'
import * as styles from './Heading.css'

const DEFAULT_TAG = 'h1'

type PrimitiveProps = React.HTMLProps<HTMLHeadingElement> & {
  children: ReactNode
} & styles.HeadingVariants

const components = {
  h1: function ({ children, size, ...props }: PrimitiveProps) {
    return (
      <h1 className={styles.heading({ size })} {...props}>
        {children}
      </h1>
    )
  },
  h2: function ({ children, size, ...props }: PrimitiveProps) {
    return (
      <h2 className={styles.heading({ size })} {...props}>
        {children}
      </h2>
    )
  },
  h3: function ({ children, size, ...props }: PrimitiveProps) {
    return (
      <h3 className={styles.heading({ size })} {...props}>
        {children}
      </h3>
    )
  },
  h4: function ({ children, size, ...props }: PrimitiveProps) {
    return (
      <h4 className={styles.heading({ size })} {...props}>
        {children}
      </h4>
    )
  }
}

type Props = PrimitiveProps & {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function Heading(props: Props) {
  const { as = 'h1', children, ...rest } = props
  const Component = components[as]
  if (!Component) {
    console.error(`tag not found for ${as}`)
    return null
  }
  return <Component {...rest}>{children}</Component>
}
