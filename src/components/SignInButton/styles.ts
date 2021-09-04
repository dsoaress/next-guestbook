import tw, { styled } from 'twin.macro'

export const Text = styled.p`
  ${tw`inline-block text-sm text-neutral-300`}

  button {
    ${tw`font-medium transition-colors duration-200 text-primary-500 hover:text-primary-600`}
  }
`
