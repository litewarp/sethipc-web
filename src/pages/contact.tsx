import { ContactForm } from '@/components/ContactForm/ContactForm'
import { Layout } from '@/components/Layout/Layout'
import { csrf } from '@/lib/csrf'
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { sprinkles } from '@/styles'
import { Heading } from '@/components/primitives'
import * as styles from './contact.css'

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
            paddingTop: { mobile: 'lg', tablet: 'xl' }
          })}
        >
          <Heading>How can we help you?</Heading>
        </span>
      ) : null}
      <div className={styles.container}>
        {success ? (
          <div className={styles.success}>
            <Heading level="1">Thanks!</Heading>
            <Heading level="2">Someone will be in contact with you shortly.</Heading>
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
