import { styled } from '@/stitches.config'
import { ArrowRightIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { HomepageButton } from './HomePageButton'
import { Box, Flex, Heading, Section, Paragraph, Container } from './primitives'
import NextLink from 'next/link'
import { ExternalIcon } from './ExternalIcon'

interface HeroProps {
  title: string
  subtitle: string
}

export function Hero(props: HeroProps) {
  return (
    <Section
      size={{ '@initial': '2', '@bp1': '3' }}
      css={{ pt: '$3', '@bp2': { pt: '$6' } }}
    >
      <Container size="3">
        <Heading
          size="4"
          css={{
            mb: '$3',
            '@bp2': { px: 180, ta: 'center' },
            '@bp3': { px: 200 }
          }}
        >
          {props.title}
        </Heading>
        <Paragraph
          size="2"
          css={{
            mb: '$6',
            '@bp2': {
              mx: 230,
              ta: 'center',
              mb: '$7'
            }
          }}
        >
          {props.subtitle}
        </Paragraph>
        <Flex css={{ '@bp2': { jc: 'center', my: '$7', gap: '$5' } }}>
          <NextLink href="/about" passHref>
            <HomepageButton as="a" color="indigo" css={{ mr: '$3' }}>
              Learn More
              <Box css={{ ml: '$1' }}>
                <ArrowRightIcon />
              </Box>
            </HomepageButton>
          </NextLink>
          <NextLink href="/contact" passHref>
            <HomepageButton as="a" color="gray" css={{ mr: '$3' }}>
              Contact
              <Box css={{ ml: '$2' }}>
                <ExternalIcon />
              </Box>
            </HomepageButton>
          </NextLink>
        </Flex>
      </Container>
    </Section>
  )
}
