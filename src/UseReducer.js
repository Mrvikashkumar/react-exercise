import React, { useState } from "react";

const UseReducer = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [tgColor, setTgColor] = useState(false);

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
    setTgColor(color);
  };

  return (
    <div style={{ color: `${tgColor}` }}>
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text ? text : "text preview here"}</p>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={handleTgColor}>change color</button>
    </div>
  );
};

export default UseReducer;
