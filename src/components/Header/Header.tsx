import { styled } from '../../stitches.config'
import NextLink from 'next/link'
import { TargetIcon } from '@radix-ui/react-icons'
import { Text, Link, Box, Flex } from '../primitives'
import ThemeToggle from '../ThemeToggle'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import SethiPCLogo from '../SethiPCLogo'
import { Email, Github, Twitter } from '../ContactMethods'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const PageContainer = styled(Flex, {
  flexDirection: 'column'
})

export const NavContainer = styled(Box, {
  width: '100%',
  maxHeight: 'auto',
  borderBottom: '1px solid',
  borderColor: '$slate6',
  WebkitOverflowScrolling: 'touch',
  overFlowX: 'hidden'
})
