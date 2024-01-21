import React, { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { removeTodo,updateTodo } from "../features/todo/todoSlice";


function AddTodo({todo}) {
    const [input,setInput] =useState(todo.text)
    const [readOnly,setReadOnly] =useState(true)

  const dispatch = useDispatch();
const TodoRef=useRef(null)

const handleEdit=()=>{

setReadOnly(!readOnly)
dispatch(updateTodo(input))
if(readOnly){
  TodoRef.current?.select();
}
}


  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          readOnly={readOnly}
          ref={TodoRef}
          onChange={(e) => setInput(e.target.value)}
          className="border-solid border-2 border-black"
        />
        <button onClick={handleEdit}>{readOnly?'Edit':"save"}</button>
        <button
          onClick={() => {
            dispatch(removeTodo(todo.id));
          }}
        >
          delete
        </button>
      </div>
    </>
  );
}

export default AddTodo;
