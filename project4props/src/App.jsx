
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [ans, setfun] = useState('');

  function bmifun() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (height <= 1 || height === '' || isNaN(height)) {
      setfun("ENTER THE RIGHT HEIGHT");
    }
    else if (weight <= 1 || weight === '' || isNaN(weight)) {
      setfun("ENTER THE RIGHT WEIGHT");
    } 
    else {
      const ans = (weight / ((height / 100) ** 2)).toFixed(2);
      setfun(`Your BMI is ${ans}`);

      if(ans < 18.6){
        setfun(`YOU UNDER WEIGHT TAKE A CALORIES SURPLUS DEIT BECAUSE YOUR BMI IS : ${ans}`)
      }
      else if(ans > 24.9){
        setfun(`YOU OVER WEIGHT TAKE A CALORIES DEFICITE DEIT BECAUSE YOUR BMI IS : ${ans}`)
      }
      else{
      setfun(`YOUR HEIGHT TO WEIGHT RATIO IS PERFECT MAINTAINED BODY BECAUSE YOUR BMI IS : ${ans}`)
      }
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <label >Height in CM: To Calculate BMI   </label>
          <input type="text" id="height" />
        </p>
        <p>
          <label >Weight in KG: To Calculate BMI   </label>
          <input type="text" id="weight" />
        </p>
        <button className = "bmi-button" onClick={bmifun}>CALCULATE THE BMI IS</button>
        <p>{ans}</p>
      </div>
    </>
  );
}

export default App;
