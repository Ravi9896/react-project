import React, { useState } from "react";
import { useTodo } from "../context/Todo";

function InputTodo() {
  const { addTodo } = useTodo();
  const [inputVal, setInputVal] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTodo(inputVal);
    setInputVal(" ");
    // console.log('ok')
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="insert the todo"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="border-2 rounded-md"
      />{" "}
      <button type="submit" className="bg-blue-700 text-white rounded-md px-1">Add</button>
    </form>
  );
}

export default InputTodo;
