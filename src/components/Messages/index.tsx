import { useMessage } from '@/hooks/useMessage'

import { Message } from '../Message'
import { Wrapper } from './styles'

export function Messages() {
  const { messages } = useMessage()

  return (
    <Wrapper>
      {messages?.length && messages.map(message => <Message key={message.id} message={message} />)}
    </Wrapper>
  )
}
