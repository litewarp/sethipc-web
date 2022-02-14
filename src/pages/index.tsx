import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { Box } from '@/components/primitives'
import { logos, LogoCloud } from '@/components/LogoCloud'

export default function HomePage() {
  return (
    <Layout>
      <Box css={{ py: '$4' }}>
        <Hero
          title="Law, Meet Technology"
          subtitle="Sethi P.C. offers strategic counseling and software development services to startups, funds, and law firms."
        />
      </Box>

      <Box css={{ pt: '$8' }}>
        {/* <LogoCloud logos={logos} title="Trusted by Pioneers in the LegalTech Space" /> */}
      </Box>
    </Layout>
  )
}
