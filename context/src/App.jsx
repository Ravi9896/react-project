import { useEffect, useState } from 'react'
import './App.css'
import NameProvider from './context/NameProvider'
import Login from './components/login'
import Profile from './components/Profile'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'

function App() {
const [themeMode,setThemeMode]=useState("blue")

const darkMode=()=>{
  setThemeMode("red")
}

const lightMode=()=>{
  setThemeMode("blue")
}


// useEffect(()=>{  
//  document.querySelector('html').classList.remove("light", "dark");
//  document.querySelector('html').classList.add(themeMode);
// },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      <NameProvider>
        <h1 style={{backgroundColor:`${themeMode}`}}>hello ravi sharma</h1>
        <Login />
        <Profile />
      </NameProvider>

      <ThemeBtn/>
    </ThemeProvider>
  );
}

export default App
