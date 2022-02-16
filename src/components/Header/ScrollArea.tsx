import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import React from 'react'

export function ScrollArea(props: { children: React.ReactNode }) {
  return (
    <ScrollAreaPrimitive.Root>
      <ScrollAreaPrimitive.Viewport>{props.children}</ScrollAreaPrimitive.Viewport>
    </ScrollAreaPrimitive.Root>
  )
}
