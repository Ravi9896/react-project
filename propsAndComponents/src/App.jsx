import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card
        Article={Math.random() * 10 + 1}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWcl1tPtI5eeuTHxiTx7dGPwoDiYuEn_evw&usqp=CAU"
      />
      <Card
        Article={Math.random() * 10 + 1}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qm8GiANW6Cvlh5en8_05lqB0qGMFza3I5Q&usqp=CAU"
      />
      <Card
        Article={Math.random() * 10 + 1}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgQxHx49P7Rl3peWeYVbAh52xYW2oR0fdMeWaQDLw_KiZyo7rfUS8mQPb836kmjrPt2g&usqp=CAU"
      />
    </>
  );
}

export default App
