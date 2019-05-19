import React from "react";

function ChatInputBox() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const value = e.target.elements[0].value;
        console.log(value);
      }}
      className="ChatInputBox"
    >
      <input className="ChatInput" placeholder="Message #general" />
    </form>
  );
}

export default ChatInputBox;
