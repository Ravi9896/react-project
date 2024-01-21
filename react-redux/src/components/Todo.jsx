import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function Todo() {
  const dispatch = useDispatch();

  const [input, setInput] = useState(" ");

  const handleOnSubmit = (e) => {
     e.preventDefault();
     dispatch(addTodo(input));
  setInput("")
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default Todo;
