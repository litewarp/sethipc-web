import { styled } from '@/stitches.config'
import { ArrowRightIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { HomePageAnchor, HomePageButton } from './HomePageButton'
import { Box, Heading } from './primitives'
import NextLink from 'next/link'
import { ExternalIcon } from './ExternalIcon'
import { sprinkles } from '@/styles'
import * as styles from './Hero.css'

interface HeroProps {
  title: string
  subtitle: string
}

export function Hero(props: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div
        className={sprinkles({
          display: 'block',
          flexShrink: 0,
          marginX: 'auto',
          maxWidth: '1145px',
          paddingX: 5
        })}
      >
        <Heading size={4}>{props.title}</Heading>
        <p
          className={sprinkles({
            fontSize: 2,
            marginBottom: { mobile: 6, tablet: 7 },
            textAlign: { tablet: 'center' }
          })}
        >
          {props.subtitle}
        </p>
        <div
          className={sprinkles({
            display: 'flex',
            justifyContent: { tablet: 'center' },
            marginY: { tablet: 7 },
            gap: { tablet: 5 }
          })}
        >
          <NextLink href="/about" passHref>
            <HomePageAnchor color="indigo">
              Learn More
              <span className={sprinkles({ marginLeft: 1 })}>
                <ArrowRightIcon />
              </span>
            </HomePageAnchor>
          </NextLink>
          <NextLink href="/contact" passHref>
            <HomePageAnchor color="gray">
              Contact
              <span className={sprinkles({ marginLeft: 2 })}>
                <ExternalIcon />
              </span>
            </HomePageAnchor>
          </NextLink>
        </div>
      </div>
    </section>
  )
}
