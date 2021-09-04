import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { prisma } from '@/services/prisma'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async (session, user) => {
      session.userId = user.id as string
      return session
    }
  },
  adapter: PrismaAdapter(prisma)
})
