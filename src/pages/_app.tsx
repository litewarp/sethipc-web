import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '@/stitches.config'
import globalStyles from '@/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ dark: darkTheme.className, light: 'light' }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
