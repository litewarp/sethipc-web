import { ArrowRightIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { HomePageAnchor, HomePageButton } from './HomePageButton'
import { Box, Heading } from './primitives'
import NextLink from 'next/link'
import { ExternalIcon } from './ExternalIcon'
import { atoms } from '@/styles'
import * as styles from './Hero.css'

interface HeroProps {
  title: string
  subtitle: string
}

export function Hero(props: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div
        className={atoms({
          display: 'block',
          flexShrink: 0,
          marginX: 'auto',
          maxWidth: 'large',
          paddingX: 'md'
        })}
      >
        <div className={styles.titleContainer}>
          <Heading level="2">{props.title}</Heading>
        </div>
        <p
          className={atoms({
            fontSize: 'lg',
            marginBottom: { mobile: 'xl', tablet: 'xxl' },
            textAlign: { tablet: 'center' }
          })}
        >
          {props.subtitle}
        </p>
        <div
          className={atoms({
            display: 'flex',
            justifyContent: { tablet: 'center' },
            marginY: { tablet: 'lg' }
          })}
        >
          <NextLink href="/about" passHref>
            <HomePageAnchor color="indigo">
              Learn More
              <span className={atoms({ marginLeft: 'xs' })}>
                <ArrowRightIcon />
              </span>
            </HomePageAnchor>
          </NextLink>
          <NextLink href="/contact" passHref>
            <HomePageAnchor color="gray">
              Contact
              <span className={atoms({ marginLeft: 'sm' })}>
                <ExternalIcon />
              </span>
            </HomePageAnchor>
          </NextLink>
        </div>
      </div>
    </section>
  )
}
