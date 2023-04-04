import React, { useState } from "react";

const Chat = ({ to }) => {
  const [text, setText] = useState("");
  return (
    <form>
      <textarea
        name="chat message"
        id="chat"
        cols="30"
        rows="10"
        placeholder={`chat with ${to.name}`}
        value={text}
        onChange={e => setText(e.target.value)}
      ></textarea>
      <button type="submit">send to {to.email}</button>
    </form>
  );
};

export default Chat;
