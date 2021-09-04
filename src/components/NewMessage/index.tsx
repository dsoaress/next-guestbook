import { useSession } from 'next-auth/client'

import { useMessage } from '@/hooks/useMessage'

import { Button } from '../Button'
import { SignInButton } from '../SignInButton'
import { Textarea } from '../Textarea'
import { Footer, Heading, Wrapper } from './styles'

export function NewMessage() {
  const [session] = useSession()
  const { message, setMessage, handleNewMessage } = useMessage()

  return (
    <Wrapper>
      <Heading>Leave a message</Heading>

      <Textarea value={message} onChange={e => setMessage(e.target.value)} />

      <Footer>
        <SignInButton />
        <Button disabled={!session} onClick={handleNewMessage}>
          Send
        </Button>
      </Footer>
    </Wrapper>
  )
}
