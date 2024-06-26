import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCount] = useState(0)                    //  use hook to show the changes in ui,react will change all the couter variable at once


  const addvalue = () => {                                   // ARROW FUNCTION
     if(counter < 100)
    counter = counter + 1
    setCount(counter)
    console.log("VALUE ADDED", counter)                       // ONLY  CHECK PURPOSE ON CONSOLE
  }

   function subvalue(){  
    if(counter >= 1)      // avoid negative                                //  CLASSIC FUNCTION
    setCount(counter - 1)
    console.log("VALUE SUB", counter)
  }

  function addtwo(){ 
    if(counter < 99)                                        // another way to write the function
      setCount((count) => count + 2)
    if(counter == 99)
      setCount((count) => count + 1)
  }

  function subtwo(){ 
    if(counter > 1)                                        // another way to write the function
      setCount((count) => count - 2)
    if(counter == 1)
      setCount((count) => count - 1)
  }


  return (
  <>
    <div>
      <h1>TO INCREASE AND DECREASE THE VALUE BY ONE or TWO BETWEEN THE RANGE OF 0 TO 100 : </h1>
      <h2>value at which you are present : {counter}</h2>
      <button onClick={addvalue}>FOR INCREASE THE NUMBER</button>                    
      <br/>
      <button onClick={subvalue}>FOR DECREASE THE NUMBER</button>
      <br />
      <button onClick={addtwo}>FOR INCREASE THE NUMBER BY TWO</button>
      <br />
      <button onClick={subtwo}>FOR DECREASE THE NUMBER BY TWO</button>
    </div>
    </>
  )
}

export default App
