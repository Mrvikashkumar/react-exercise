import React from 'react'

const AddTask = ({tasks, onAddTask}) => {
  console.log(onAddTask)

  return (
    <form>
      <input type="text" name="text" id="text" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTask
