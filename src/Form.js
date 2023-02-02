import React from 'react'

export default function From() {
  const [data, setName] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    isFriendly: false,
    employment: "",
    favColor: ''
  })
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setName(oldData => (
      {
        ...oldData,
        [name]: type === 'checkbox' ? checked : value,
      }
    ))
  }
  function cleanInput(event) {
    event.target.nextSibling.value = ''
    setName(oldData => (
      {
        ...oldData,
        [event.target.nextSibling.name]: '',
      }
    ))
  }
  // onSubmit form
  function handleSubmit(event) {
    event.preventDefault();
    console.log(data)
  }


  return (
    <form
      action=""
      method="post"
      id='my-form'
      onSubmit={handleSubmit}
    >
      <h1>This is dummy form.</h1>
      <label htmlFor="first-name" onClick={cleanInput}>First Name</label>
      <input
        placeholder='first name'
        onChange={handleChange}
        name='firstName'
        value={data.firstName}
        id='first-name'
        className='input'
        type="text"
      />
      <br />
      <label htmlFor="last-name" onClick={cleanInput}>Last name</label>
      <input
        type="text"
        placeholder='last name'
        onChange={handleChange}
        name='lastName'
        value={data.lastName}
        id='last-name'
        className='input'
      />
      <p>{data.firstName && <b>Name : </b>} {data.firstName} {data.lastName}</p>
      <br />
      <label htmlFor="email" onClick={cleanInput}>E-mail</label>
      <input
        type="email"
        placeholder='example@gmail.com'
        onChange={handleChange}
        name='email'
        value={data.email}
        id='email'
        className='input'
      />
      <p>{data.email && <b>Email : </b>} {data.email}</p>
      <br />
      <textarea
        value={data.comment}
        placeholder='write your text here'
        onChange={handleChange}
        name='comment'
        id='comment'
        className='textarea'
      />
      <p>{data.comment && <b>Comment : </b>} {data.comment}</p>
      <br />
      <input
        type="checkbox"
        id='isFriendly'
        checked={data.isFriendly}
        onChange={handleChange}
        name='isFriendly'
        className='input-checkbox'
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <p>{data.isFriendly && <b>yes, I am friendly.</b>}</p>
      {/* radio */}
      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          name="employment"
          id="unemployed"
          value='unemployed'
          checked={data.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="part-time"
          value='part-time'
          checked={data.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          name="employment"
          id="full-time"
          value='full-time'
          checked={data.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <p>{data.employment && <b>employment : </b>} {data.employment}</p>
      </fieldset>
      {/* select element */}
      <fieldset>
        <legend>What is your favorite color?</legend>
        <select
          name="favColor"
          id="favColor"
          onChange={handleChange}
          value={data.favColor}
        >
          <option value="" disabled>Select a color</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br />
        <p>{data.favColor && <b>My favorite color is <i>{data.favColor}</i></b>} </p>
      </fieldset>
      {/* submit button */}
      <button>submit</button>
    </form>
  )
}

