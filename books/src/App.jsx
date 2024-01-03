import React from 'react'
import Navbar from './Components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
export default function App() {
  return (
    <div id='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}
