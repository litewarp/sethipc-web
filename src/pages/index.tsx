import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { logos, LogoCloud } from '@/components/LogoCloud/LogoCloud'
import { sprinkles } from '@/styles'

export default function HomePage() {
  return (
    <Layout>
      <div
        className={sprinkles({
          paddingTop: 'xl'
        })}
      >
        <Hero
          title="Law, Meet Technology"
          subtitle="Sethi P.C. offers strategic counseling and software development services to startups, funds, and law firms."
        />
      </div>

      {/* <div className={flex({ paddingTop: '$8' }}> */}
      {/* <LogoCloud logos={logos} title="Trusted by Pioneers in the LegalTech Space" /> */}
      {/* </div> */}
    </Layout>
  )
}
