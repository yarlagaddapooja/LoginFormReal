import React from 'react'
import Login from './components/Login'
import "./components/app.css"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>

    </div>
  )
}

export default App
