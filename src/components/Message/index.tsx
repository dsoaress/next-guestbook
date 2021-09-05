import { Message as MessageType, User } from '@prisma/client'

import { formatDate } from '@/utils/formatDate'

import { Avatar } from '../Avatar'
import { Content, Profile, Wrapper } from './styles'

type MessageProps = {
  message: MessageType & { user: User }
}

export function Message({ message }: MessageProps) {
  return (
    <Wrapper>
      <Content>{message.message}</Content>

      <Profile>
        <Avatar src={message.user.image} alt={message.user.name} />
        <span>
          {message.user.name} • {formatDate(message.createdAt)}
        </span>
      </Profile>
    </Wrapper>
  )
}
