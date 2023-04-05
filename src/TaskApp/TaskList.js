import React from 'react'

const TaskList = ({tasks}) => {
  console.log(tasks)
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input type="checkbox" id='input-text'/>
          <label htmlFor='input-text'>{task.text}</label>
          <button>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
