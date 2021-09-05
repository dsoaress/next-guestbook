import { FaUserCircle } from 'react-icons/fa'
import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`relative w-6 h-6 overflow-hidden rounded-full`}
`

export const Icon = styled(FaUserCircle)`
  ${tw`w-6 h-6 text-neutral-500`}
`
