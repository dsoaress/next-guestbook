import { useMessage } from '@/hooks/useMessage'

import { Message } from '../Message'
import { MessageSkeleton } from '../MessageSkeleton'
import { Wrapper } from './styles'

export function Messages() {
  const { messages } = useMessage()

  if (!messages) {
    return (
      <Wrapper>
        <MessageSkeleton />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {messages?.length ? (
        messages.map(message => <Message key={message.id} message={message} />)
      ) : (
        // todo
        <>No messages</>
      )}
    </Wrapper>
  )
}
