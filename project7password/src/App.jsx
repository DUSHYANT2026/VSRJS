import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(10);
  const [number , setnumber] = useState(false);
  const [characters , setchar] = useState(false);
  const [password , setpassword] = useState("");
  const [count, setcount] = useState(0);


  const reference = useRef(null);

  const passwordgenerator = useCallback( () => {                                    // use to memoization or save to the chache for optimization
    let str = "abcdefghijklmanopqrustuvwxyzABCDEFGHIJKLAMNOPQRSTUVWXYZ";
    if(number) str += "0123456789";
    if(characters) str+="~!@#$%^&*";

    let pass = "";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);

  },[length,number,characters])

  // const passwordgenerator = () => {                                            //  we can make also the (function also called  call back)
  //   let str = "abcdefghijklmanopqrustuvwxyzABCDEFGHIJKLAMNOPQRSTUVWXYZ";
  //   if(number) str += "0123456789";
  //   if(characters) str+="~!@#$%^&*";

  //   let pass = "";

  //   for(let i=1; i<=length; i++){
  //     let char = Math.floor(Math.random()* str.length + 1);
  //     pass += str.charAt(char);
  //   }
  //   setpassword(pass);
  // }

  const copypassword = useCallback( () => {
    reference.current?.select();
    reference.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  } , [password])


  useEffect( () => {   
    setcount(count+1);                        //  main hook to generate new pass for every change that write in dependancy
    passwordgenerator();
  } , [length , number , characters])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-6 my-8 bg-green-900 text-orange-500">
        <h1 className='text-white text-center my-3'>NEW PASSWORD</h1>

        <div  className="flex shadow rounded-lg overflow-hidden mb-4" >
          <input type="text"
          value={password}
          readOnly
          ref={reference}
          placeholder='Password'
          className='outline-none w-full py-1 px-3'
          />
          <button onClick={copypassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-red-800 hover:shadow-lg duration-800' > COPY </button>
        </div>

        <div>
          <div>
            <input type="range"
            min={3}
            max={100}
            value={length}
             className='cursor-pointer'
            onChange={ (nums) => {setlength(nums.target.value)}}
            />
            <label>Length : {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
                setnumber((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">ADD Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={characters}
            id="CharInput"
            onChange={() => {
                setchar((prev) => !prev);
            }}
            />
            <label htmlFor="CharInput"> ADD Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <label htmlFor="Updatecounter">NUMBER OF TIME PASSWORD GENERTATED : {count}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

