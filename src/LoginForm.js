import React from 'react'

export default function LoginForm() {
  return (
    <form
      action=""
      method="post"
    >
      <label htmlFor="userName">User Name: </label>
      <input
        type="text"
        name="userName"
        id="userName"
      />
      <br />
      <label htmlFor="password">Enter password: </label>
      <input
        type="password"
        name="password"
        id="password"
      />
      <br />
      <label htmlFor="confirm-password">Confirm password: </label>
      <input
        type="password"
        name='confirm-password'
        id='confirm-password'
      />
      <br />
      <input
        type="checkbox"
        name='newsletter'
        id='newsletter'
      />
      <label htmlFor="newsletter">I want to join the newsletter</label>
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}