import { CgSpinner } from 'react-icons/cg'
import tw, { styled } from 'twin.macro'

import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>(({ isLoading = false }) => [
  tw`flex justify-center items-center w-16 h-8 text-sm font-medium transition-colors duration-200 rounded bg-primary-500 text-neutral-50

  hover:bg-primary-600

  disabled:(cursor-default hover:bg-primary-500)`,

  isLoading && tw`cursor-default hover:bg-primary-500`
])

export const Spinner = styled(CgSpinner)`
  ${tw`animate-spin`}
`
