import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session] = useSession()

  function handleAuth() {
    if (session) {
      signOut()
    } else {
      signIn('github')
    }
  }

  return (
    <div>
      <h1>Hello</h1>

      <br />

      <button onClick={handleAuth}>{session ? session.user?.name : 'Sign in with GitHub'}</button>
    </div>
  )
}
