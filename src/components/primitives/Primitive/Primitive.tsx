// https://discord.com/channels/885877446098964512/885877446891667529/940012012648398859
// implementation comes from https://github.com/radix-ui/primitives/blob/main/packages/react/primitive/src/Primitive.tsx

import React from 'react'
import cx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { sprinkles, isSprinklesProp, getSprinklesProps } from '@/styles'
import { PrimitiveForwardRefComponent, PrimitivePropsWithRef } from './types'

export const NODES = [
  'a',
  'button',
  'div',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'img',
  'li',
  'nav',
  'p',
  'span',
  'svg',
  'ul',
  'label',
  'input',
  'textarea'
] as const

type Primitives = {
  [E in typeof NODES[number]]: PrimitiveForwardRefComponent<E>
}

const Primitive = NODES.reduce((primitive, node) => {
  const NodeComponent = React.forwardRef(
    (
      props: PrimitivePropsWithRef<typeof node>,
      forwardedRef: React.ForwardedRef<typeof node>
    ) => {
      const { asChild, className = '', ...primitiveProps } = props

      const { sprinklesProps, nativeProps } = getSprinklesProps(primitiveProps)

      const sprinklesClasses = sprinkles(sprinklesProps)

      const Component: any = asChild ? Slot : node

      return (
        <Component
          {...nativeProps}
          className={cx(sprinklesClasses, className)}
          ref={forwardedRef}
        />
      )
    }
  )
  NodeComponent.displayName = 'Primitive'
  return {
    ...primitive,
    [node]: NodeComponent
  }
}, {} as Primitives)

const Root = Primitive

type ComponentPropsWithoutRef<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T>

export {
  Primitive,
  //,
  Root
}

export type { ComponentPropsWithoutRef, PrimitivePropsWithRef }
