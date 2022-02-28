import { Layout } from '@/components/Layout/Layout'
import { Box, Heading } from '@/components/primitives'
import { PersonIcon } from '@radix-ui/react-icons'
import { SethiBio } from '@/components/SethiBio'
import { sprinkles } from '@/styles'
import * as styles from './about.css'

interface Props {}

export default function AboutPage(props: Props) {
  return (
    <Layout>
      <Box padding="lg">
        <div className={styles.grid}>
          <div className={styles.gridItem['title']}>
            <Heading level="2">
              Sethi P.C. is the Law and Consulting Firm of Nick Sethi
            </Heading>
          </div>
          <div className={styles.gridItem['bioLeft']}>
            <div className={styles.bioLeftInner}>
              <PersonIcon height="250" width="250" />
            </div>
          </div>
          <div className={styles.gridItem['bioRight']}>
            <SethiBio />
          </div>
          <div className={styles.gridItem['bottom']}>4</div>
        </div>
      </Box>
    </Layout>
  )
}
