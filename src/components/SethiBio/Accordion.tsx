import React from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as styles from './Accordion.css'

type AccordionTriggerProps = {
  children: React.ReactNode
} & Omit<React.HTMLProps<HTMLButtonElement>, 'type'>

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger
        className={styles.trigger}
        {...props}
        ref={forwardedRef}
      >
        <>
          {children}
          <ChevronDownIcon aria-hidden className={styles.icon} />
        </>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = 'AccordionTrigger'

type AccordionContentProps = {
  children: React.ReactNode
} & React.HTMLProps<HTMLDivElement>

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <AccordionPrimitive.Content
        className={styles.content}
        {...props}
        ref={forwardedRef}
      >
        <div className={styles.text}>{children}</div>
      </AccordionPrimitive.Content>
    )
  }
)
AccordionContent.displayName = 'AccordionContent'

export const Accordion = AccordionPrimitive.Root

type AccordionItemProps = {
  value: string
  children: React.ReactNode
  label: string
}

export function AccordionItem(props: AccordionItemProps) {
  const { value, children, label } = props
  return (
    <AccordionPrimitive.Item value={value} className={styles.item}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionPrimitive.Item>
  )
}
