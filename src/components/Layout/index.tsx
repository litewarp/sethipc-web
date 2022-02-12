import { Header } from '@/components/Header'
import { TitleAndMetaTags } from '@/components/TitleAndMetaTags'
import { Footer } from '@/components/Footer'
import { Box, Flex } from '../primitives'

interface Props {
  title: string
  children: React.ReactNode
}

export function Layout(props: Props) {
  return (
    <Flex direction="column" css={{ minHeight: '100vh' }}>
      <TitleAndMetaTags title={props.title} />
      <Header />
      {props.children}
      <Box css={{ marginTop: 'auto' }}>
        <Footer />
      </Box>
    </Flex>
  )
}
