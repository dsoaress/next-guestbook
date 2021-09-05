import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Container } from '@/components/Container'
import { MessageProvider } from '@/contexts/MessageContext'
import { queryClient } from '@/services/queryClient'
import { GlobalStyles } from '@/styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <MessageProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </MessageProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </NextAuthProvider>
      <Toaster />
      <GlobalStyles />
    </>
  )
}
