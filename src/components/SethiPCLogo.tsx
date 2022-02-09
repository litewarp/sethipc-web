import { css, styled } from '@/stitches.config'
import { Flex } from './primitives'

export interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const logoText = css({
  fontFamily: '$brush',
  color: '$indigo11',
  lineHeight: '0',
  textShadow: '0px 2px 2px $hiContrast',
  variants: {
    size: {
      sm: {
        fontSize: 24
      },
      md: {
        fontSize: 36
      },
      lg: {
        fontSize: 48
      }
    },
    hover: {
      true: {
        '&:hover': {
          color: '$indigo10'
        }
      },
      false: {
        '&:hover': {}
      }
    }
  },
  defaultVariants: {
    size: 'md',
    hover: true
  }
})

export default function SethiPCLogo(props: Props) {
  return (
    <Flex align="center" justify="center">
      <text className={logoText()}>Sethi P.C.</text>
    </Flex>
  )
}
