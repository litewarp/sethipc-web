import { Layout } from '@/components/Layout/Layout'
import { Box, Heading } from '@/components/primitives'
import { PersonIcon } from '@radix-ui/react-icons'
import { BioAccordion } from '@/components/SethiBio'
import { sprinkles } from '@/styles'
import * as styles from './about.css'

interface Props {}

export default function AboutPage(props: Props) {
  return (
    <Layout>
      <div className={sprinkles({ padding: 6 })}>
        <div
          className={sprinkles({
            display: 'grid',
            gapY: 1,
            gapX: 1,
            gridRows: 4,
            gridColumns: 4
          })}
        >
          <div className={styles.gridItem['title']}>
            <Heading size={3}>
              Sethi P.C. is the Law and Consulting Firm of Nick Sethi
            </Heading>
          </div>
          <div className={styles.gridItem['bioLeft']}>
            <div className={styles.bioLeftInner}>
              <PersonIcon height="250" width="250" />
            </div>
          </div>
          <div className={styles.gridItem['bioRight']}>
            <BioAccordion />
          </div>
          <div className={styles.gridItem['bottom']}>4</div>
        </div>
      </div>
    </Layout>
  )
}
