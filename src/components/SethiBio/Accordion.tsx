import React from 'react'
import { violet, blackA, mauve } from '@radix-ui/colors'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as styles from './Accordion.css'

type AccordionTriggerProps = {
  children: React.ReactNode
} & Omit<React.HTMLProps<HTMLButtonElement>, 'type'>

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className={styles.header}>
    <AccordionPrimitive.Trigger className={styles.trigger} {...props} ref={forwardedRef}>
      <>
        {children}
        <ChevronDownIcon aria-hidden className={styles.icon} />
      </>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

type AccordionContentProps = {
  children: React.ReactNode
} & React.HTMLProps<HTMLDivElement>

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content className={styles.content} {...props} ref={forwardedRef}>
      <div className={styles.text}>{children}</div>
    </AccordionPrimitive.Content>
  )
)
AccordionContent.displayName = 'AccordionContent'

// Your app...
export function BioAccordion() {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue="item-1"
      collapsible
      className={styles.root}
    >
      <AccordionPrimitive.Item value="item-1" className={styles.item}>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARAI design pattern.
        </AccordionContent>
      </AccordionPrimitive.Item>

      <AccordionPrimitive.Item value="item-2" className={styles.item}>
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
      </AccordionPrimitive.Item>

      <AccordionPrimitive.Item value="item-3" className={styles.item}>
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  )
}
