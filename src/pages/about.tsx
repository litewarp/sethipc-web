import { Layout } from '@/components/Layout/Layout'
import { Box, Grid, Heading, Flex } from '@/components/primitives'
import { styled } from '@/stitches.config'
import { PersonIcon } from '@radix-ui/react-icons'
import { BioAccordion } from '@/components/SethiBio'
import { sprinkles } from '@/styles'

interface Props {}

const GridItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  variants: {
    variant: {
      title: {
        gridColumn: '1 / span 4',
        gridRow: '1 / span 1'
      },
      bioLeft: {
        gridColumn: '1 / span 4',
        gridRow: '2 / span 1',
        '@bp2': {
          gridColumn: '1 / span 2',
          gridRow: '2 / span 2'
        }
      },
      bioRight: {
        gridColumn: '1 / span 4',
        gridRow: '3 / span 1',
        '@bp2': {
          gridColumn: '3 / span 2',
          gridRow: '2 / 4'
        }
      },
      bottom: {
        gridColumn: '1 / span 4',
        gridRow: '4 / 4'
      }
    }
  }
})

export default function AboutPage(props: Props) {
  return (
    <Layout>
      <div className={sprinkles({ padding: 6 })}>
        <Grid columns={4} rows={4} gapX="1" gapY="1">
          <GridItem variant="title" css={{ alignItems: 'start' }}>
            <Heading size={3}>
              Sethi P.C. is the Law and Consulting Firm of Nick Sethi
            </Heading>
          </GridItem>
          <GridItem
            variant="bioLeft"
            css={{
              px: '$2',
              '@bp2': {
                px: '$6'
              }
            }}
          >
            <Flex
              align="center"
              justify="center"
              css={{
                borderRadius: '$1',
                backgroundColor: '$slate2',
                height: '100%',
                width: '100%',
                color: '$slate6'
              }}
            >
              <PersonIcon height="250" width="250" />
            </Flex>
          </GridItem>
          <GridItem
            variant="bioRight"
            css={{ px: '$2', alignItems: 'start', '@bp2': { px: '$6' } }}
          >
            <BioAccordion />
          </GridItem>
          <GridItem variant="bottom">4</GridItem>
        </Grid>
      </div>
    </Layout>
  )
}
