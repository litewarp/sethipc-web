import { Header } from '@/components/Header'
import { TitleAndMetaTags } from '@/components/TitleAndMetaTags'
import { Footer } from '@/components/Footer'
import { childContainer, pageContainer, footerContainer } from './Layout.css'

interface Props {
  title?: string
  children: React.ReactNode
}

export function Layout(props: Props) {
  const title = props.title
    ? props.title
    : 'Sethi P.C. - Legal, tech, and legaltech consulting'
  return (
    <div className={pageContainer}>
      <TitleAndMetaTags title={title} />
      <Header />
      <div className={childContainer}>{props.children}</div>
      <div className={footerContainer}>
        <Footer />
      </div>
    </div>
  )
}
