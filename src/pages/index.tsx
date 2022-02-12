import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Box } from '@/components/primitives'

export default function HomePage() {
  return (
    <Layout title="Sethi P.C. - Legal, tech, and legaltech consulting">
      <Box css={{ py: '$4' }}>
        <Hero
          title="Law, meet Technology"
          subtitle="Sethi P.C. offers strategic counseling and software development services to startups, funds, and law firms."
        />
      </Box>
    </Layout>
  )
}
