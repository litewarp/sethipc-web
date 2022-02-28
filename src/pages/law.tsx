import { Layout } from '@/components/Layout/Layout'
import { Heading } from '@/components/primitives'
import { sprinkles } from '@/styles'

export default function LawPage() {
  return (
    <Layout>
      <div
        className={sprinkles({
          display: 'block',
          paddingX: 'lg',
          paddingY: { mobile: 'lg', tablet: 'xl' },
          textAlign: { mobile: 'left', tablet: 'center' }
        })}
      >
        <Heading>A Decade of Experience in Law and Technology</Heading>
      </div>
    </Layout>
  )
}
