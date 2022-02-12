import { Layout } from '@/components/Layout'
import { Box, Heading } from '@/components/primitives'

export default function CodePage() {
  return (
    <Layout>
      <Box css={{ py: '$6', px: '$4', '@bp2': { px: '$9' } }}>
        <Heading size="3" css={{ '@bp1': { textAlign: 'center' } }}>
          Building the Next Generation of Legal Tools
        </Heading>
      </Box>
    </Layout>
  )
}
