import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const reducer = (state, action) => {
  console.log(state)
  console.log(action)
};

const TaskApp = () => {
  const [state, dispatch] = useReducer(reducer, initialTasks);
  // console.log(state.length);

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: state.length++,
      text,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask tasks={state} onClickAdd={handleAddTask} />
      <TaskList
        tasks={state}
        // onChangeTask={handleChangeTask}
        // onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default TaskApp;
