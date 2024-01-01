import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [theme, setTheme] = useState("white");
  const[color ,setColor]= useState("black")

  const darkTheme = ()=>{
    setTheme("black")
    setColor("white")
  }
  const lightTheme = ()=>{
    setTheme("white")
    setColor("black")
  }

  return (
    <div
      className={` text-${color} h-screen w-screen bg-${theme} ease-in-out duration-500 ...`}
    >
      <div className="flex items-center flex-col ">
        <Card
          Article={Math.random() * 10 + 1}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWcl1tPtI5eeuTHxiTx7dGPwoDiYuEn_evw&usqp=CAU"
        />
        <br />
        <Card
          Article={Math.random() * 10 + 1}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qm8GiANW6Cvlh5en8_05lqB0qGMFza3I5Q&usqp=CAU"
        />
        <br />

        <Card
          Article={Math.random() * 10 + 1}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgQxHx49P7Rl3peWeYVbAh52xYW2oR0fdMeWaQDLw_KiZyo7rfUS8mQPb836kmjrPt2g&usqp=CAU"
        />
        <div>
          <button
            className={`border-2 border-${color} rounded-md bg-black text-white px-2`}
            onClick={darkTheme}
          >
            night
          </button>{" "}
          <button
            className={`border-2  border-${color} rounded-md bg-white text-black px-3.5`}
            onClick={lightTheme}
          >
            day
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
