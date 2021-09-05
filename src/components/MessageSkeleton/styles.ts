import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`p-3 border rounded border-neutral-800`}
`

export const Content = styled.div`
  ${tw`animate-pulse`}
`

export const Message = styled.div`
  ${tw`space-y-2`}
`

export const FullTextLine = styled.div`
  ${tw`h-5 rounded bg-neutral-800`}
`

export const HalfTextTextLine = styled.div`
  ${tw`w-1/2 h-5 rounded bg-neutral-800`}
`

export const Profile = styled.footer`
  ${tw`flex items-center mt-3`}
`

export const Avatar = styled.div`
  ${tw`w-6 h-6 mr-2 rounded-full  bg-neutral-800`}
`
