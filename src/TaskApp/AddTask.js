import React from 'react'

const AddTask = ({tasks, onClickAdd}) => {
  

  return (
    <form>
      <input type="text" name="text" id="text" />
      <button type="submit" onClick={() => onClickAdd(tasks)}>Add</button>
    </form>
  )
}

export default AddTask
