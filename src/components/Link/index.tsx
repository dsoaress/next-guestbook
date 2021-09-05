import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { Anchor } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function Link({ children, href, ...rest }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <Anchor {...rest}>{children}</Anchor>
    </NextLink>
  )
}
