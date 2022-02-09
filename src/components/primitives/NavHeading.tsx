import { Text } from '@/components/primitives'
import React from 'react'

export function NavHeading(props: { children: React.ReactNode }) {
  return (
    <Text
      as="h4"
      size="3"
      css={{ fontWeight: 500, px: '$5', py: '$2', fontFamily: '$default' }}
    >
      {props.children}
    </Text>
  )
}
