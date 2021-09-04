import { Message as MessageType, User } from '@prisma/client'
import Avatar from 'react-avatar'

import { Content, Profile, Wrapper } from './styles'

type MessageProps = {
  message: MessageType & { user: User }
}

export function Message({ message }: MessageProps) {
  return (
    <Wrapper>
      <Content>{message.message}</Content>

      <Profile>
        <Avatar src={message.user.image ?? undefined} round size="24px" />
        {message.user.name}
      </Profile>
    </Wrapper>
  )
}
