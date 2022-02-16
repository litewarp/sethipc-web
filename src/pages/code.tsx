import { Layout } from '@/components/Layout/Layout'
import { Box, Heading } from '@/components/primitives'
import { sprinkles } from '@/styles'

export default function CodePage() {
  return (
    <Layout>
      <div
        className={sprinkles({
          display: 'block',
          paddingX: 4,
          paddingY: { mobile: 6, tablet: 9 },
          textAlign: { mobile: 'left', tablet: 'center' }
        })}
      >
        <Heading size={3}>Building the Next Generation of Legal Tools</Heading>
      </div>
    </Layout>
  )
}
