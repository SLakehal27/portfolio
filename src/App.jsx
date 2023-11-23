import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages'
import Header from './components/Header'
import Projets from './pages/Projets'

function App() {
  // bg-sunset bg-cover bg-no-repeat
  return (
    <div className='h-screen bg-sunset dark:bg-moon bg-cover bg-no-repeat
  transition'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Index/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>

  )
}

export default App
