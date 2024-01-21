import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./context/Todo";
import InputTodo from "./Components/InputTodo";
import GetTodo from "./Components/GetTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), todo }, ...prev]);
    console.log(todo);
  };
  const updateTodo = (todo, id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo)=> prevTodo.id !== id))
  };
  


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo }}
    >
      <InputTodo /><br />
      <div>
        {todos.map((todo) => 
          <div key={todo.id} className="w-full p-0.5" >
            <GetTodo todo={todo} />
          </div>
        )}
      </div>
    </TodoProvider>
  );
}

export default App;
