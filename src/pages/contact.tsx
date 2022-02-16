import { ContactForm } from '@/components/ContactForm/ContactForm'
import { Layout } from '@/components/Layout'
import { Container, Flex, Heading, Text } from '@/components/primitives'
import { csrf } from '@/lib/csrf'
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
interface Props {
  csrfToken: string
}

export default function ContactPage(props: Props) {
  const { csrfToken } = props

  const [success, setSuccess] = useState<boolean>(false)
  const onSuccess = () => setSuccess((s) => !s)

  return (
    <Layout>
      {!success ? (
        <Heading
          size="3"
          css={{ textAlign: 'center', paddingTop: '$6', '@bp2': { paddingTop: '$8' } }}
        >
          How can we help you?
        </Heading>
      ) : null}
      <Flex
        css={{
          py: '$4',
          px: '$6',
          mx: 'auto',
          width: '100%',
          justifyContent: 'center',
          '@bp1': { width: '90%' },
          '@bp2': { width: '80%', py: '$6' },
          '@bp3': { width: '70%' }
        }}
      >
        {success ? (
          <Container
            size="3"
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '$4'
            }}
          >
            <Heading size="3">Thanks!</Heading>
            <Heading size="2">Someone will be in contact with you shortly.</Heading>
          </Container>
        ) : (
          <ContactForm csrfToken={csrfToken} onSuccess={onSuccess} />
        )}
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
