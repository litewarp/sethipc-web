import React from 'react'
import NextLink from 'next/link'
import { Box, Container, Grid, Text, Flex, Separator, Link } from './primitives'
import SethiPCLogo from '@/components/SethiPCLogo'
import { ExternalIcon } from './ExternalIcon'
import { Email, Github, Twitter } from './ContactMethods'

export const Footer = () => {
  return (
    <Box as="footer" css={{ py: '$4' }}>
      <Flex css={{ justifyContent: 'center', mb: '$4' }}>
        <Separator
          css={{
            '&[data-orientation="horizontal"]': {
              width: '40%'
            }
          }}
        />
      </Flex>
      <Container size="3">
        <Flex justify="between">
          <Text>&#169; {new Date().getFullYear()} Sethi P.C.</Text>
          <Flex gap="5">
            <Twitter />
            <Github />
            <Email />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
