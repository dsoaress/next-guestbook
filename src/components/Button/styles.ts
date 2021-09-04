import tw, { styled } from 'twin.macro'

export const Button = styled.button`
  ${tw`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded bg-primary-500 text-neutral-50

  hover:bg-primary-600

  disabled:(opacity-60 cursor-default hover:bg-primary-500)`}
`
