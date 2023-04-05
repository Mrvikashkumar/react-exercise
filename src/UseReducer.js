import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return {...state, count: state.count + 1}
    case "decrement":
      return {...state, count: state.count - 1}
    case 'userInput':
      return {...state, text: action.payload}
    case 'color':
      return {...state, tgColor: action.tgColor}
    default:
      throw new Error('something wrong')
  }

}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, text: '', tgColor: ''})

  const handleTgColor = () => {
    let colorChar = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let colorCharNum = [3, 6];
    const getRandomNum = (num) => {
      return Math.floor(Math.random() * num);
    };
    let selectedCharNum = colorCharNum[getRandomNum(2)];
    let color = "#";
    while (selectedCharNum > 0) {
      color += colorChar[getRandomNum(colorChar.length)];
      selectedCharNum--;
    }
    dispatch({type: 'color', tgColor: color});
  };

  return (
    <div style={{ color: `${state.tgColor}` }}>
      <input
        type="text"
        name="text"
        id="text"
        value={state.text}
        onChange={(e) => dispatch({type: 'userInput', payload: e.target.value})}
      />
      <p>{state.text ? state.text : "text preview here"}</p>
      <div>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
      <button onClick={handleTgColor}>change color</button>
    </div>
  );
};

export default UseReducer;
