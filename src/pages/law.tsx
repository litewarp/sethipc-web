import { Layout } from '@/components/Layout/Layout'
import { Box, Heading } from '@/components/primitives'

export default function LawPage() {
  return (
    <Layout>
      <Box css={{ py: '$6', px: '$4', '@bp2': { px: '$9' } }}>
        <Heading size="3" css={{ '@bp1': { textAlign: 'center' } }}>
          A Decade of Experience in Law and Technology
        </Heading>
      </Box>
    </Layout>
  )
}
