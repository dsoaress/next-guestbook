import { ButtonHTMLAttributes } from 'react'

import { Spinner, Wrapper } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export function Button({ children, isLoading, ...rest }: ButtonProps) {
  return <Wrapper {...rest}>{isLoading ? <Spinner /> : children}</Wrapper>
}
