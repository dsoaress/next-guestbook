import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased text-neutral-50 bg-neutral-900`}
  }
`

export function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}
