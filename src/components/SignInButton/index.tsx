import { signIn, signOut, useSession } from 'next-auth/client'

import { Text } from './styles'

export function SignInButton() {
  const [session] = useSession()

  return !session ? (
    <Text>
      You must be logged in to post a message.{' '}
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>.
    </Text>
  ) : (
    <Text>
      Hello, {session.user?.name}. <button onClick={() => signOut()}>Sign out</button>.
    </Text>
  )
}
