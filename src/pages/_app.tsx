import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'

import { Container } from '@/components/Container'
import { MessageProvider } from '@/contexts/MessageContext'
import { GlobalStyles } from '@/styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <MessageProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </MessageProvider>
      </NextAuthProvider>
      <GlobalStyles />
    </>
  )
}
