import Image from 'next/image'

import { Icon, Wrapper } from './styles'

type AvatarProps = {
  alt: string | null
  src: string | null
}

export function Avatar({ alt, src }: AvatarProps) {
  return (
    <Wrapper>
      {alt && src ? (
        <Image src={src} alt={alt} width={24} height={24} objectFit="cover" />
      ) : (
        <Icon />
      )}
    </Wrapper>
  )
}
