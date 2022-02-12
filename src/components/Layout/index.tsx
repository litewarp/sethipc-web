import { Header } from '@/components/Header'
import { TitleAndMetaTags } from '@/components/TitleAndMetaTags'
import { Footer } from '@/components/Footer'
import { Box, Flex } from '../primitives'

interface Props {
  title?: string
  children: React.ReactNode
}

export function Layout(props: Props) {
  const title = props.title
    ? props.title
    : 'Sethi P.C. - Legal, tech, and legaltech consulting'
  return (
    <Flex direction="column" css={{ minHeight: '100vh' }}>
      <TitleAndMetaTags title={title} />
      <Header />
      <Box css={{ mx: 'auto', width: '100%', maxWidth: 1280 }}>{props.children}</Box>
      <Box css={{ marginTop: 'auto' }}>
        <Footer />
      </Box>
    </Flex>
  )
}
