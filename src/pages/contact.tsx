import { ContactForm } from '@/components/ContactForm'
import { Layout } from '@/components/Layout'
import { Flex, Text } from '@/components/primitives'
import { csrf } from '@/lib/csrf'
import { GetServerSidePropsContext } from 'next'

export default function ContactPage(props: { csrfToken: string }) {
  return (
    <Layout>
      <Flex
        css={{
          padding: '$9',
          mx: 'auto',
          width: '100%',
          justifyContent: 'center',
          '@bp1': { width: '80%' },
          '@bp2': { width: '60%' }
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
