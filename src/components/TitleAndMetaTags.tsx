import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

type TitleAndMetaTagsProps = {
  url?: string
  pathname?: string
  title?: string
  description?: string
  poster?: string
}

export function TitleAndMetaTags({
  url = 'https://sethipc.com',
  pathname,
  title = 'Sethi P.C.',
  description = 'Lawyers Developing Technology. Technologists Advancing Law.',
  poster
}: TitleAndMetaTagsProps) {
  const router = useRouter()

  // TODO: CREATE SOCIAL IMAGE!
  const image = poster ? `${url}/${poster}` : `${url}/social.png`
  const path = pathname || router.pathname

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@litewarp" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
