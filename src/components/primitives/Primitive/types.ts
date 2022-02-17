import React from 'react'
import { Sprinkles } from '@/styles'

export type PrimitivePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean
  } & Sprinkles

export interface PrimitiveForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}
