import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon
} from '@radix-ui/react-icons'
import { IconAnchor } from './primitives'
import NextLink from 'next/link'

export function Github() {
  return (
    <IconAnchor
      href="https://github.com/litewarp"
      target="_blank"
      rel="noreferrer"
      title="Github"
    >
      <GitHubLogoIcon />
    </IconAnchor>
  )
}

export function Twitter() {
  return (
    <IconAnchor
      href="https://twitter.com/litewarp"
      target="_blank"
      rel="noreferrer"
      title="Github"
    >
      <TwitterLogoIcon />
    </IconAnchor>
  )
}

export function Email() {
  return (
    <NextLink href="/contact" passHref>
      <IconAnchor title="Email">
        <EnvelopeClosedIcon className="mail" />
      </IconAnchor>
    </NextLink>
  )
}
