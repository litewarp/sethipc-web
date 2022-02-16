import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as styles from './ErrorTooltip.css'

interface Props {
  error?: string
}

export function ErrorTooltip(props: Props) {
  if (!props.error) return null
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        <button className={styles.errorIcon}>
          <ExclamationTriangleIcon width={20} height={20} />
        </button>
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content sideOffset={5} className={styles.content}>
        {props.error}
        <TooltipPrimitive.Arrow className={styles.arrow} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  )
}
