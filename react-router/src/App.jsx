import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from "./Layout/Layout.jsx";
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import About from './components/About/About.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="header" element={<Header/>}/>
      <Route path="footer" element={<Footer/>}/>
    </Route>
  )
)

  return (
   <>
<RouterProvider router={router}/>
   </>
  )
}

export default App
