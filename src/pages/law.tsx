import { Layout } from '@/components/Layout/Layout'
import { Heading } from '@/components/primitives'
import { sprinkles } from '@/styles'

export default function LawPage() {
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
        <Heading size={3}>A Decade of Experience in Law and Technology</Heading>
      </div>
    </Layout>
  )
}
