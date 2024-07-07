import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("white")

  return (

    <div className='w-full h-full duration-1000' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center middle inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg  px-3 py-2 rounded-3xl' >
        <button onClick={ () => setcolor("red")} className="outline-none px-4 py-4 rounded-full text-white shadow-lg" style={{backgroundColor : 'red'}}> RED
        </button>
        <button onClick={ () => setcolor("blue")} className="outline-none px-4 py-4 rounded-full text-white shadow-lg" style={{backgroundColor : 'blue'}}> BLUE
        </button>
        <button onClick={ () => setcolor("green")} className="outline-none px-4 py-4 rounded-full text-white shadow-lg" style={{backgroundColor : 'green'}}>GREEN
        </button>
        <button onClick={ () => setcolor("pink")} className="outline-none px-4 py-4 rounded-full text-white shadow-lg" style={{backgroundColor : 'pink'}}>PINK
        </button>
        <button onClick={ () => setcolor("yellow")} className="outline-none px-4 py-4 rounded-full text-white shadow-lg" style={{backgroundColor : 'yellow'}}>YELLOW
        </button>
        <button onClick={ () => setcolor("orange")} className="outline-none px-4 py-4 rounded-full text-white shadow-lg" style={{backgroundColor : 'orange'}}>ORANGE
        </button>
        </div>
      </div>
    </div>

  )
}

export default App
