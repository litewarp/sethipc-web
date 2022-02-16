import { ContactForm } from '@/components/ContactForm/ContactForm'
import { Layout } from '@/components/Layout/Layout'
import { csrf } from '@/lib/csrf'
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { sprinkles } from '@/styles'
import { Heading } from '@/components/primitives'

export interface Props {
  csrfToken: string
}

export function ContactPageComponent(props: Props) {
  const { csrfToken } = props

  const [success, setSuccess] = useState<boolean>(false)
  const onSuccess = () => setSuccess((s) => !s)

  return (
    <Layout>
      {!success ? (
        <span
          className={sprinkles({
            textAlign: 'center',
            paddingTop: { mobile: 6, tablet: 8 }
          })}
        >
          <Heading size={3}>How can we help you?</Heading>
        </span>
      ) : null}
      <div
        className={sprinkles({
          marginX: 'auto',
          paddingX: 6,
          paddingY: {
            mobile: 4,
            tablet: 6
          },
          width: {
            mobile: '90%',
            tablet: '80%',
            desktop: '70%'
          }
        })}
      >
        {success ? (
          <div
            className={sprinkles({
              maxWidth: '1145px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              boxSizing: 'border-box',
              flexShrink: 0,
              marginX: 'auto',
              paddingX: 5
            })}
          >
            <Heading size={3}>Thanks!</Heading>
            <Heading size={2}>Someone will be in contact with you shortly.</Heading>
          </div>
        ) : (
          <ContactForm csrfToken={csrfToken} onSuccess={onSuccess} />
        )}
      </div>
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
