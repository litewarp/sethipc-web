import { styled } from '@/stitches.config'
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon
} from '@radix-ui/react-icons'
import { IconButton } from './primitives'
import NextLink from 'next/link'

export function Github() {
  return (
    <IconButton
      as="a"
      href="https://github.com/litewarp"
      target="_blank"
      rel="noreferrer"
      title="Github"
    >
      <GitHubLogoIcon />
    </IconButton>
  )
}

export function Twitter() {
  return (
    <IconButton
      as="a"
      href="https://twitter.com/litewarp"
      target="_blank"
      rel="noreferrer"
      title="Github"
    >
      <TwitterLogoIcon />
    </IconButton>
  )
}

export function Email() {
  return (
    <NextLink href="/contact" passHref>
      <IconButton
        as="a"
        href="mailto:nick@sethipc.com"
        target="_blank"
        rel="noreferrer"
        title="Email"
      >
        <EnvelopeClosedIcon className="mail" />
      </IconButton>
    </NextLink>
  )
}
