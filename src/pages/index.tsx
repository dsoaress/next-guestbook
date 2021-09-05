import { Header } from '@/components/Header'
import { Messages } from '@/components/Messages'
import { NewMessage } from '@/components/NewMessage'

export default function Home() {
  return (
    <>
      <Header />
      <NewMessage />
      <Messages />
    </>
  )
}
