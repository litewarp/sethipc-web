import { styled } from '@/stitches.config'
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon
} from '@radix-ui/react-icons'

const IconButton = styled('a', {
  all: 'unset',
  backgroundColor: '$primaryBg',
  color: '$primaryText',
  height: 35,
  width: 35,
  borderRadius: 4,
  display: 'flex',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  boxShadow: '0 2px 10px $blackA7',
  '&:hover': { backgroundColor: '$mauve3' },
  '&:focus': { boxShadow: '0 0 0 2px $mauve4' },
  '& svg': {
    width: 20,
    height: 20
  },
  '& svg.mail': {
    width: 18,
    height: 18
  }
})

export function Github() {
  return (
    <IconButton
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
    <IconButton
      href="mailto:nick@sethipc.com"
      target="_blank"
      rel="noreferrer"
      title="Email"
    >
      <EnvelopeClosedIcon className="mail" />
    </IconButton>
  )
}
