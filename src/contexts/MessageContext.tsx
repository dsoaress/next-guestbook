import { Message, User } from '@prisma/client'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation, useQuery } from 'react-query'

import { api } from '@/services/api'
import { queryClient } from '@/services/queryClient'

type Messages = (Message & { user: User })[] | undefined

type MessageContextData = {
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  messages: Messages
  handleNewMessage: () => void
  isLoading: boolean
}

export const MessageContext = createContext({} as MessageContextData)

async function getMessages() {
  const { data } = await api.get<Messages>('messages')

  return data
}

export function MessageProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const createMessage = useMutation(
    async () => {
      setIsLoading(true)
      await api.post('messages', {
        message
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['messages'])

        toast.success('Message sent!')

        setIsLoading(false)
        setMessage('')
      },
      onError: () => {
        toast.error('Internal server error')

        setIsLoading(false)
      }
    }
  )

  function handleNewMessage() {
    createMessage.mutate()
  }

  const { data: messages } = useQuery(['messages'], () => getMessages(), {
    refetchInterval: 1000, // 5 seconds
    staleTime: 1000 // 5 seconds
  })

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        messages,
        handleNewMessage,
        isLoading
      }}
    >
      {children}
    </MessageContext.Provider>
  )
}
