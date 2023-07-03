'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col items-center self-center w-full max-w-2xl px-4 pt-5 pb-10 m-2 font-medium border rounded-md text-muted-foreground stretch bg-slate-50">
      <div className="flex-1 w-full">
        {messages.length > 0 ? 
          messages.map(m => (
              <div key={m.id} className="flex mx-2 mb-5 whitespace-pre-wrap border-b">
                <p className="font-bold">
                  {m.role === 'user' ? 'RC: ' : 'AI: '}
                </p>
                {m.content}
              </div>
            ))
          : 
          null
        }

      </div>

      <form onSubmit={handleSubmit} className='w-full'>
        <input
          className="w-full p-2 border border-gray-300 rounded shadow-xl dark:text-white"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
)
}
