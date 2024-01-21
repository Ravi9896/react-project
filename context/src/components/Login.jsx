import React from "react";
import { useContext } from "react";
import Name from "../context/Name";

function Login() {
  const { setMode } = useContext(Name);
  const trigger = () => {
    setMode("ravi sharma");
  };
  return (
    <div>
      <button onClick={trigger}>trigger</button>
    </div>
  );
}

export default Login;
