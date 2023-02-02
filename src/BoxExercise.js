import React from 'react'
import boxes from './boxes'
import Box from './Box'

export default function Exercise1() {
  let [box, setBox] = React.useState(boxes);

  function toggle(id) {
    setBox(oldValue => oldValue.map(box => box.id === id ? { ...box, on: !box.on } : box))
  }

  let boxElement = box.map(box => (
    <>
      <Box
        key={box.id}
        id={box.id}
        on={box.on}
        handleState={toggle}
      />
    </>
  ))
  return(
    <>
      {boxElement}
    </>
  )
}