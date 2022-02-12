import { ContactForm } from '@/components/ContactForm'
import { Layout } from '@/components/Layout'
import { Flex, Heading, Text } from '@/components/primitives'
import { csrf } from '@/lib/csrf'
import { GetServerSidePropsContext } from 'next'

export default function ContactPage(props: { csrfToken: string }) {
  return (
    <Layout>
      <Heading size="4" css={{ textAlign: 'center', paddingTop: '$6' }}>
        How can we help you?
      </Heading>
      <Flex
        css={{
          py: '$6',
          px: '$6',
          mx: 'auto',
          width: '100%',
          justifyContent: 'center',
          '@bp1': { width: '90%' },
          '@bp2': { width: '80%', py: '$9' },
          '@bp3': { width: '70%' }
        }}
      >
        <ContactForm csrfToken={props.csrfToken} />
      </Flex>
    </Layout>
  )
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  await csrf(req, res)
  return {
    props: {
      csrfToken: (req as any).csrfToken()
    }
  }
}
