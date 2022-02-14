import { styled } from '@/stitches.config'
import { Flex, Box, Text } from '@/components/primitives'

interface Logos {
  src: string
  alt: string
}

export const logos: Logos[] = [
  {
    src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
    alt: 'Workcation'
  },
  {
    src: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    alt: 'StaticKit'
  },
  {
    src: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    alt: 'Mirage'
  },
  {
    src: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
    alt: 'Tuple'
  },
  {
    src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
    alt: 'Workcation'
  },
  {
    src: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    alt: 'StaticKit'
  }
]

export interface Props {
  logos: Logos[]
  title: string
}

const Image = styled('img', {
  maxHeight: '3rem'
})

export function LogoCloud(props: Props) {
  const { logos, title } = props
  return (
    <Box>
      <Box
        css={{
          maxWidth: '80rem',
          mx: 'auto',
          py: '3rem',
          px: '1rem',
          '@bp1': {
            px: '1.5rem'
          },
          '@bp2': {
            py: '4rem',
            px: '2rem'
          }
        }}
      >
        <Text
          as="p"
          css={{
            textAlign: 'center',
            fontWeight: 600,
            color: '$slate7',
            letterSpacing: '.05em'
          }}
        >
          {title.toUpperCase()}
        </Text>
        <Box
          css={{
            display: 'grid',
            marginTop: '1.5rem',
            gap: '0.125rem',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            '@bp2': {
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
            },
            '@bp3': {
              marginTop: '2rem'
            }
          }}
        >
          {logos.map((logo) => (
            <Flex
              justify="center"
              css={{
                gridColumn: 'span 1 / span 1',
                padding: '2rem',
                backgroundColor: '$slate2'
              }}
              key={logo.alt}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src={logo.src} alt={logo.alt} />
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
