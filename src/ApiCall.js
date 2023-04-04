import React from 'react'

export default function ApiCall() {
  const [data, setData] = React.useState({})
  const [count, setCount] = React.useState(1)

  console.log('Component rendered')

  //* we should use useEffect hooks for stopping infinite looping behavior when we call api and update state, useEffect with empathy array dependency
  React.useEffect(() => {
    console.log("Effect function ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(data => data.json())
      .then(data => setData(data))
  }, [count])

  return (
    <>
      <p>count {count}</p>
      <button onClick={() => { setCount(oldValue => oldValue + 1) }}>Get next character</button>
      <p>Id: {count} <br />
        Name: {data.name}<br />
        Height: {data.height} m
      </p>
    </>
  )
}