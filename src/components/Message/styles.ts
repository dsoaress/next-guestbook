import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`p-3 border rounded border-neutral-800`}
`

export const Content = styled.div``

export const Profile = styled.footer`
  ${tw`flex items-center h-6 mt-3 text-xs text-neutral-500`}

  span {
    ${tw`ml-2`}
  }
`
