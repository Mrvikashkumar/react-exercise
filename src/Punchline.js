import React from 'react'

export default function Punchline() {
  // punchline
  const [isShow, setIsShow] = React.useState(false)
  function toggleShown() {
    setIsShow(oldValue => !oldValue);

  }
  return (
    <div className='punchline'>
      <h3>I got my daughter a fridge for her birthday.</h3>
      {isShow && <p>I can't wait to see her face light up when she open it.</p>}
      <button onClick={toggleShown}>{isShow ? 'hide' : 'show'} punchline</button>
    </div>
  )
}