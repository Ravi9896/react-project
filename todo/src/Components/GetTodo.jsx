import React, { useState } from "react";
import { useTodo } from "../context/Todo";

function GetTodo({ todo }) {
  const [item, setItem] = useState(todo.todo);
  const [itemState, setItemState] = useState(true);
  const { updateTodo, deleteTodo } = useTodo();

  const [checbox, setChecbox] = useState("");
  const [checboxState, setChecboxState] = useState(true);

  const [isEditable, setIsEditable] = useState(false);    
  const [BTN, setBTN] = useState(false);    

  const update = () => {
    setItemState(!itemState);
    setIsEditable(!isEditable);
    
    if (itemState) {
      updateTodo(todo.id, { ...todo, todo: item });
      console.log(todo.id);
      setChecbox("");
    }
  };
  const Delete = () => {
    deleteTodo(todo.id);
  };
  
  const checked = () => {
    setChecboxState(!checboxState);
    setBTN(!BTN)
    console.log(checboxState);
    console.log(BTN);
    if (checboxState) {
      setChecbox("line-through bg-green-200 rounded-md");
    } else {
      setChecbox("");
    }
  };

  return (
    <>
      <input type="checkbox" onClick={checked} className="cursor-pointer" />
      <input
        className={checbox}
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        readOnly={itemState}
      />{" "}
      <button
        onClick={update}
        disabled={BTN ? true : false}
        className={
          BTN
            ?"bg-yellow-100 text-white rounded-md px-1"
            : "bg-yellow-200 text-white rounded-md px-1"
        }
      >
        {isEditable ? "📁" : "✏️"}
      </button>{" "}
      <button
        onClick={Delete}
        className="bg-pink-100 text-white rounded-md px-1"
      >
        ❌
      </button>
    </>
  );
}

export default GetTodo;
