import { Layout } from '@/components/Layout/Layout'
import { Box, Heading } from '@/components/primitives'
import { sprinkles } from '@/styles'

export default function CodePage() {
  return (
    <Layout>
      <div
        className={sprinkles({
          display: 'block',
          paddingX: 'sm',
          paddingY: { mobile: 'lg', tablet: 'xl' },
          textAlign: { mobile: 'left', tablet: 'center' }
        })}
      >
        <Heading level="2">Building the Next Generation of Legal Tools</Heading>
      </div>
    </Layout>
  )
}
