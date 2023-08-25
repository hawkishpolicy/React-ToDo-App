import React from "react";
import { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input
        name="text"
        placeholder="Update Your Item"
        value={input}
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button" onClick={handleSubmit}>Update To-Do</button>
      </>
      ) : ( 
      <>
      <input
        name="text"
        placeholder="Enter To-Do"
        value={input}
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button" onClick={handleSubmit}>Add To-Do</button>
      </>
      )}
    </form>
  );
};

export default TodoForm;
