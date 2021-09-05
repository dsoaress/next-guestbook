import {
  Avatar,
  Content,
  FullTextLine,
  HalfTextTextLine,
  Message,
  Profile,
  Wrapper
} from './styles'

function Skeleton() {
  return (
    <Wrapper>
      <Content>
        <Message>
          <FullTextLine />
          <FullTextLine />
          <FullTextLine />
          <HalfTextTextLine />
        </Message>

        <Profile>
          <Avatar />
          <HalfTextTextLine />
        </Profile>
      </Content>
    </Wrapper>
  )
}

export function MessageSkeleton() {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  )
}
