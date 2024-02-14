import React from 'react'
import './App.css'
import { Home, Login } from './pages'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
