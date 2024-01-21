import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <Todo />
      <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <AddTodo todo={todo} />
        </div>
      ))}
    </>
  );
}

export default App;
