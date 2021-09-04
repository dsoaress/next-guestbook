import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import nc from 'next-connect'

import { prisma } from '@/services/prisma'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (_req, res) => {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

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
        message,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })

    res.status(201).json(newMessage)
  })

export default handler
