import React, { useState } from 'react'
import ContactList from './ContactList';
import Chat from './Chat';

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

const ChatApp = () => {
  const [to, setTo] = useState(contacts[0])
  return (
    <div>
      <ContactList
        contacts={contacts}
        onSelect={setTo}
      />
      <Chat key={to.email} to={to}/>
    </div>
  )
}

export default ChatApp
