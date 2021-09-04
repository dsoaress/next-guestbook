import { Message, User } from '@prisma/client'
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

import { api } from '@/services/api'

type Messages = (Message & { user: User })[] | undefined

type MessageContextData = {
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  messages: Messages
  handleNewMessage: () => Promise<void>
}

export const MessageContext = createContext({} as MessageContextData)

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Messages>()

  useEffect(() => {
    api.get('messages').then(response => {
      setMessages(response.data)
    })
  }, [])

  async function handleNewMessage() {
    try {
      const { data } = await api.post('messages', { message })

      // const updatedMessages = [data, ...(messages as Messages)]

      // setMessages(updatedMessages)
      setMessage('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MessageContext.Provider value={{ message, setMessage, messages, handleNewMessage }}>
      {children}
    </MessageContext.Provider>
  )
}
