import React from 'react'
import { box, BoxVariants } from './Box.css'

type Props = BoxVariants & React.HTMLProps<HTMLDivElement> & { children: React.ReactNode }

export function Box(props: Props) {
  return <div className={box()}>{props.children}</div>
}
