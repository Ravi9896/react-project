import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [disabledSub, setDisabledSub] = useState(false);
  const value = count;

  const Add = () => {
    //codtionally change the value of disabled
    if (count >= 0) {
      setDisabledSub(false);
    }
    //counter logic part
    if (count >= 10) {
      setDisabled(true);
    } else {
      setCount(count + 1);
    }
  };
  const Sub = () => {
    //codtionally change the value of disabled
    if (count <= 10) {
      setDisabled(false);
    }
    //counter logic part
    if (count <= 0) {
      setDisabledSub(true);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter Value = {value}</h1>
      <button onClick={Add} disabled={disabled}>
        Add
      </button>{" "}
      <button onClick={Sub} disabled={disabledSub}>
        Sub
      </button>
    </>
  );
}

export default App;
