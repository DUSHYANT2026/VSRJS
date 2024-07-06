import { useState } from 'react'
import './App.css'
import Newapp from './components/newapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Newapp username = "ALEX POATAN PEREIRA" imagesrc = "https://i.pinimg.com/736x/f4/2d/a4/f42da48087a69f5671d2422c45200f0a.jpg"/>   
    <Newapp username = "STONE COLD STEVE AUSTIN" imagesrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZTaD-rjR8-Wn9eCVd0GjizZvPkXVsOX6WQ&s"/> 
    </>
  )
}

export default App

