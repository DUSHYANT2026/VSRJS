import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [islogedin, setlogedin] = useState(false);
  const [count, setcount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setlogedin(!islogedin)}> TOGGAL BUTTON
        </button>
        <br/>
        <div>
      <button onClick={() => setcount(count + 1)}>Incerase the count value</button>
      <br />
      <button onClick={ () => setcount(count - 10)}>Decrease the count value</button>
      <div> Count is {count} </div>

    </div>
        <br />

        <div>
          {islogedin ? <h1>Welcome to the react project</h1> : <h1>Please loggedin</h1>}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
