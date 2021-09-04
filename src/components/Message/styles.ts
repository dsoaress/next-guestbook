import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`p-3 border rounded border-neutral-800`}
`

export const Content = styled.div``

export const Profile = styled.footer`
  ${tw`flex items-center mt-3 text-xs text-neutral-500`}

  div {
    ${tw`mr-2`}
  }
`
