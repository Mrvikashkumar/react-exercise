import React from 'react'

export default function UnreadMessage() {
  // unread messages
  const [messages, setMessages] = React.useState(['a', 'b'])
  return (
    <div>
      {messages.length >= 1 && <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : 'message'}!</h1>}
    </div>
  )
}