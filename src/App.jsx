import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'

const App = () => {
  return (
    <div className=' h-screen w-full text-white'>
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default App