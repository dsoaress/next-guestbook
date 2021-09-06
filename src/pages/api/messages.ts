import { Message, User } from '@prisma/client'
import Filter from 'bad-words'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import nc from 'next-connect'

import { prisma } from '@/services/prisma'
import { invalidadeCache, recoverCache, saveCache } from '@/services/redis'

type Messages = (Message & { user: User })[]

const filter = new Filter()

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (_req, res) => {
    let messages = await recoverCache<Messages>('MESSAGES')

    if (!messages) {
      messages = await prisma.message.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        include: {
          user: true
        }
      })

      await saveCache('MESSAGES', messages)
    }

    res.status(200).json(messages)
  })

  .post(async (req, res) => {
    const session = await getSession({ req })

    if (!session) {
      return res.status(401).json({ error: 'unauthorized' })
    }

    const { userId } = session
    const { message } = req.body

    const newMessage = await prisma.message.create({
      data: {
        message: filter.clean(message),
        user: {
          connect: {
            id: userId
          }
        }
      }
    })

    await invalidadeCache('MESSAGES')

    res.status(201).json(newMessage)
  })

export default handler
