import { styled } from '@/stitches.config'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import React from 'react'

const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root, {})

const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {})

const ScrollAreaScrollBar = styled(ScrollAreaPrimitive.Scrollbar, {})

const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {})

const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner, {})

export function ScrollArea(props: { children: React.ReactNode }) {
  return (
    <ScrollAreaRoot>
      <ScrollAreaViewport>{props.children}</ScrollAreaViewport>
    </ScrollAreaRoot>
  )
}
