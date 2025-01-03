// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hompage from './pages/Hompage'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Hompage/>} />
        </Routes>

      </div>
    </>
  )
}

export default App
