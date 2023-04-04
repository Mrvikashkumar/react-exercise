import React from 'react'

export default function LoginForm() {
  const [data, setData] = React.useState(
    {
      userName: '',
      password: '',
      confirmPassword: '',
      isJoinNewsletter: ''
    }
  )

  function handleSignup(event) {
    const { name, value, checked, type } = event.target
    setData(oldData => (
      {
        ...oldData,
        [name]: type === 'checkbox' ? checked : value,
      }
    ))
  }

  function handleResult(event) {
    event.preventDefault();
    if (data.password === data.confirmPassword) {
      console.log('Signup successfully')
      if (data.isJoinNewsletter) {
        console.log('Thanks for subscribe!')
      }
    } else {
      console.log('Please enter same password')
    }
  }

  return (
    <form
      action=""
      method="post"
      onSubmit={handleResult}
    >
      <label htmlFor="userName">User Name: </label>
      <input
        type="text"
        name="userName"
        id="userName"
        onChange={handleSignup}
        required={true}
        value={data.userName}
      />
      <br />
      <label htmlFor="password">Enter password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleSignup}
        required={true}
        value={data.password}
        autoComplete="true"
      />
      <br />
      <label htmlFor="confirmPassword">Confirm password: </label>
      <input
        type="password"
        name='confirmPassword'
        id='confirmPassword'
        onChange={handleSignup}
        required={true}
        value={data.confirmPassword}
      />
      <br />
      <input
        type="checkbox"
        name='isJoinNewsletter'
        id='isJoinNewsletter'
        onChange={handleSignup}
        checked={data.isJoinNewsletter}
        value={data.isJoinNewsletter}
      />
      <label htmlFor="isJoinNewsletter">I want to join the newsletter</label>
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}