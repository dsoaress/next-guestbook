import { useEffect, useState } from 'react'

import { useMessage } from '@/hooks/useMessage'

import { Link } from '../Link'
import { Heading, Text, Wrapper } from './styles'

export function Header() {
  const { messages } = useMessage()
  const [totalMessages, setTotalMessages] = useState(0)

  useEffect(() => {
    if (messages) {
      setTotalMessages(messages.length)
    }
  }, [messages])

  return (
    <Wrapper>
      <Heading>Guestbook</Heading>
      <Text>
        This is a simple guestbook project using{' '}
        <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Next.js
        </Link>{' '}
        and{' '}
        <Link href="https://www.prisma.io" target="_blank" rel="noopener noreferrer">
          Prisma
        </Link>{' '}
        (plus other cool technologies like{' '}
        <Link href="https://react-query.tanstack.com" target="_blank" rel="noopener noreferrer">
          React Query
        </Link>{' '}
        and{' '}
        <Link href="https://styled-components.com" target="_blank" rel="noopener noreferrer">
          Styled Components
        </Link>
        ). So far this page has <strong>{totalMessages} messages</strong>. You can check the{' '}
        <Link
          href="http://github.com/dsoaress/next-guestbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code here
        </Link>
        .
      </Text>
    </Wrapper>
  )
}
