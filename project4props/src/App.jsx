
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
        <a href="https://www.youtube.com/" target="_blank">
        <img alt="File:Logo of YouTube (2015-2017).svg - Wikipedia" id="dimg_11" src="data:image/jpeg;base64,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" data-csiid="dOZ_ZpyDPbTuseMP28uCyAg_3" data-atf="1"></img>
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
