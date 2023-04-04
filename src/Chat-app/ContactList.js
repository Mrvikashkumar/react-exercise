import React from 'react'

const ContactList = ({contacts, onSelect}) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <button onClick={() => onSelect(contact)}>{contact.name}</button>
        </li>
      ))}
    </ul>
  )
}

export default ContactList
